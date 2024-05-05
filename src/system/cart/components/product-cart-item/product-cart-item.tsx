import { currencyFormatter, Icon } from '@/shared';
import React from 'react';

export const ProductCartItem = () => {
  const image = '/demo/cars/range-rover/car-photos/1.jpeg';

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
            <h2 className="card-title">2023 Range Rover P530 SV</h2>
            <p className="text-gray-500">
              Price: {currencyFormatter(20)} (2 items x {currencyFormatter(10)})
            </p>
          </div>
        </div>
      </div>
      <div className="card-actions justify-between">
        <div className="bg-base-200">
          <button className="btn btn-sm px-8 text-white opacity-80 hover:bg-[var(--tg-theme-link-color)] hover:opacity-60 bg-[var(--tg-theme-link-color)]">
            -
          </button>
          <span className="px-2">2</span>
          <button className="btn btn-sm px-8 text-white hover:bg-[var(--tg-theme-link-color)] hover:opacity-80 bg-[var(--tg-theme-link-color)]">
            +
          </button>
        </div>
        <div>
          <button className="btn btn-sm btn-error text-white">
            <Icon name="trash" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
