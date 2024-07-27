import { ProductCartItem } from '@/config/types/entities';
import { currencyFormatter, Icon } from '@/shared';
import React from 'react';

interface Props {
  product: ProductCartItem;
  onAddItem: () => void;
  onSubtractItem: () => void;
  onRemoveItem: () => void;
}

export const CartItem: React.FC<Props> = ({ product, onAddItem, onSubtractItem, onRemoveItem }) => {
  const {
    image,
    name,
    price: { currency, amount },
    count,
  } = product;

  return (
    <div
      className="card gap-2 bg-base-100
       shadow-xl rounded-xl overflow-hidden p-2"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={image}
            alt="Product Image"
            className="w-16 aspect-square rounded-sm object-cover mr-4"
          />
          <div>
            <h2 className="card-title">{name}</h2>
            <p className="text-gray-500">
              Price: {currencyFormatter(amount * count, currency)} ({count} items x{' '}
              {currencyFormatter(amount, currency)})
            </p>
          </div>
        </div>
      </div>
      <div className="card-actions justify-between">
        <div className="bg-base-200">
          <button
            onClick={onSubtractItem}
            className="btn btn-sm px-8 text-white opacity-80 hover:bg-telegram-link hover:opacity-60 bg-telegram-link"
          >
            -
          </button>
          <span className="px-2">{count}</span>
          <button
            onClick={onAddItem}
            className="btn btn-sm px-8 text-white hover:bg-telegram-link hover:opacity-80 bg-telegram-link"
          >
            +
          </button>
        </div>
        <div>
          <button onClick={onRemoveItem} className="btn btn-sm btn-error text-white">
            <Icon name="trash" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
