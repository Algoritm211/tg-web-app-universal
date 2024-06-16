'use client';

import { useCreateInvoice, useTonExchangeRate } from '@/api';
import { useAppConfig } from '@/config/config-provider';
import { ProductCartItem } from '@/config/types/entities';
import { PaymentMethod } from '@/config/types/enums';
import { ChoosePaymentMethodModal, cryptoFormatter, currencyFormatter } from '@/shared';
import { MainButton } from '@/telegram-web-app/components';
import { useTonPayment } from '@/ton-integration';
import { useTonAddress } from '@tonconnect/ui-react';
import React, { useState } from 'react';

interface Props {
  totalSum: number;
  cartItems: ProductCartItem[];
}

export const ProductPaymentProcess: React.FC<Props> = ({ totalSum, cartItems }) => {
  const {
    global: { paymentMethods },
  } = useAppConfig();
  const address = useTonAddress();
  const { data: exchangeRate, isPending: isExchangeRatePending } = useTonExchangeRate();
  const [isOpenPaymentModal, setIsOpenPaymentModal] = useState(false);
  const { mutate: createInvoice, isPending: isInvoiceCreating } = useCreateInvoice();
  const { mutate: sendTonPayment, isPending: isTonPaymentProcessing } = useTonPayment();
  const priceInTon = totalSum / exchangeRate?.rates?.TON?.prices?.USD!;
  const onChoosePaymentMethod = (paymentMethod: PaymentMethod) => {
    switch (paymentMethod) {
      case PaymentMethod.card:
        if (!cartItems || cartItems?.length === 0) return;
        createInvoice(cartItems);
        break;
      case PaymentMethod.ton:
        // TODO add a real price
        sendTonPayment(priceInTon);
        break;
    }
  };

  const getPayButtonText = () => {
    const base = [];
    if (paymentMethods?.includes(PaymentMethod.card)) {
      base.push(currencyFormatter(totalSum, cartItems?.[0]?.price.currency));
    }
    if (paymentMethods?.includes(PaymentMethod.ton) && priceInTon) {
      base.push(`${cryptoFormatter(priceInTon)} TON`);
    }
    return `Pay ${base.join(' / ')}`;
  };

  return (
    <React.Fragment>
      <ChoosePaymentMethodModal
        isOpen={isOpenPaymentModal}
        onChoosePaymentMethod={onChoosePaymentMethod}
        onClose={() => setIsOpenPaymentModal(false)}
        tonAddress={address}
      />
      <MainButton
        text={getPayButtonText()}
        progress={isInvoiceCreating || isTonPaymentProcessing}
        color="#52c41a"
        onClick={
          paymentMethods?.length === 1
            ? () => onChoosePaymentMethod(paymentMethods[0])
            : () => setIsOpenPaymentModal(true)
        }
      />
    </React.Fragment>
  );
};
