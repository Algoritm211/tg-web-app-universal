'use client';

import { useCreateInvoice } from '@/api';
import { useAppConfig } from '@/config/config-provider';
import { ProductCartItem } from '@/config/types/entities';
import { PaymentMethod } from '@/config/types/enums';
import { ChoosePaymentMethodModal, currencyFormatter } from '@/shared';
import { MainButton } from '@/telegram-web-app/components';
import React, { useState } from 'react';

interface Props {
  totalSum: number;
  cartItems: ProductCartItem[];
}

export const ProductPaymentProcess: React.FC<Props> = ({ totalSum, cartItems }) => {
  const {
    global: { paymentMethods },
  } = useAppConfig();
  const [isOpenPaymentModal, setIsOpenPaymentModal] = useState(false);
  const { mutate: createInvoice, isPending: isInvoiceCreating } = useCreateInvoice();

  const onChoosePaymentMethod = (paymentMethod: PaymentMethod) => {
    switch (paymentMethod) {
      case PaymentMethod.card:
        if (!cartItems || cartItems?.length === 0) return;
        createInvoice(cartItems);
        break;
      case PaymentMethod.ton:
        alert('Ton was selected');
        break;
    }
  };

  return (
    <React.Fragment>
      <ChoosePaymentMethodModal
        isOpen={isOpenPaymentModal}
        onChoosePaymentMethod={onChoosePaymentMethod}
        onClose={() => setIsOpenPaymentModal(false)}
      />
      <MainButton
        text={`Pay ${currencyFormatter(totalSum, cartItems?.[0]?.price.currency)}`}
        progress={isInvoiceCreating}
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
