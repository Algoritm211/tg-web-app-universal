import { Product } from '@/config/types/entities';
import { currencyFormatter } from '@/shared';
import React from 'react';

interface Props {
  product: Product;
  goToProductDetailsClick?: () => void;
}

export const ProductCardHorizontal: React.FC<Props> = ({ product, goToProductDetailsClick }) => {
  const {
    mainImage,
    name,
    shortDescription,
    price: { amount, currency },
  } = product;

  return (
    <div
      className="grid w-full grid-cols-[100px_1fr] gap-2 bg-base-100
       shadow-xl rounded-xl overflow-hidden cursor-pointer"
      onClick={goToProductDetailsClick}
    >
      <div className="basis-1/3">
        <img src={mainImage} className="w-full h-full object-cover" alt={name} />
      </div>
      <div className="basis-2/3 p-2">
        <h2 className="card-title">{name}</h2>
        {/* Car specs */}
        <p>{shortDescription}</p>
        {/* Address */}
        <p className="text-gray-500">{currencyFormatter(amount, currency)}</p>
      </div>
    </div>
  );
};
