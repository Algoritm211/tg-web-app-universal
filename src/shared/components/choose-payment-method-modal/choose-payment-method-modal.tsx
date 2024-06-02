import { PaymentMethod } from '@/config/types/enums';
import { Modal } from '@/shared';
import React from 'react';

interface Props {
  isOpen: boolean;
  onChoosePaymentMethod: (method: PaymentMethod) => void;
  onClose: () => void;
}

export const ChoosePaymentMethodModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onChoosePaymentMethod,
}) => {
  const choosePaymentMethod = (paymentMethod: PaymentMethod) => {
    onChoosePaymentMethod(paymentMethod);
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h3 className="font-bold text-lg text-center">Choose payment method</h3>
      <p className="text-center text-gray-600 mb-4">Please choose your payment provider</p>
      <button
        onClick={() => choosePaymentMethod(PaymentMethod.card)}
        className="border rounded w-9/12 mx-auto mb-2 flex items-center justify-center p-3 hover:bg-gray-100 transition-all"
      >
        <img className="w-12 h-8 mr-4" src="/payments/card-payments.webp" alt="Pay using card" />
        <span>Pay using card</span>
      </button>
      <button
        onClick={() => choosePaymentMethod(PaymentMethod.ton)}
        className="border rounded w-9/12 mx-auto flex items-center justify-center p-3 hover:bg-gray-100 transition-all"
      >
        <img className="w-8 h-8 mr-4" src="/payments/ton-payments.webp" alt="Pay using TON" />
        <span>Pay using TON</span>
      </button>
    </Modal>
  );
};
