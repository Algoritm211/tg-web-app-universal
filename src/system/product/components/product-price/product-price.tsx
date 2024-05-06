import { currencyFormatter, Icon } from '@/shared';
import React from 'react';

interface Props {
  amount: number | undefined;
  currency: string | undefined;
  actionButtonText: string;
  isCreatingInvoicePending: boolean;
  onActionClick: () => void;
  isProductInCart: boolean;
}

export const ProductPrice: React.FC<Props> = ({
  amount,
  currency,
  isCreatingInvoicePending,
  actionButtonText,
  onActionClick,
  isProductInCart,
}) => {
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

        {isProductInCart ? (
          <div className="flex gap-2 items-center">
            <Icon name="check-circle" className="w-8 h-8 text-success" />
            <span className="font-bold">Added to cart</span>
          </div>
        ) : (
          <button
            onClick={onActionClick}
            className="btn px-12 text-white hover:opacity-60 hover:bg-[var(--tg-theme-link-color)] bg-[var(--tg-theme-link-color)]"
          >
            {isCreatingInvoicePending ? (
              <span className="loading loading-spinner"></span>
            ) : (
              actionButtonText
            )}
          </button>
        )}
      </div>
      <div className="mx-2 my-0 divider"></div>
    </React.Fragment>
  );
};
