import { currencyFormatter } from '@/shared';
import React from 'react';

interface Props {
  amount: number | undefined;
  currency: string | undefined;
  actionButtonText: string;
  isCreatingInvoicePending: boolean,
  onActionClick: () => void;
}

export const ProductPrice: React.FC<Props> = ({ amount, currency, isCreatingInvoicePending, actionButtonText, onActionClick }) => {
  return (
    <React.Fragment>
      <div className="mx-2 my-0 divider"></div>
      <div className="flex mx-4 justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xl font-bold text-success">
            {currencyFormatter(amount || 0, currency)}
          </span>
          <span className="text-sm font-bold">By card, ton wallet</span>
        </div>

        <button
          onClick={onActionClick}
          className="btn px-12 text-white bg-[var(--tg-theme-link-color)]"
        >
          {isCreatingInvoicePending ? (
            <span className="loading loading-spinner"></span>
          ) : actionButtonText}
        </button>
      </div>
      <div className="mx-2 my-0 divider"></div>
    </React.Fragment>
  );
};
