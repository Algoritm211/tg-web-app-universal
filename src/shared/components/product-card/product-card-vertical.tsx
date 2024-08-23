import { Product } from '@/config/types/entities';
import { currencyFormatter } from '@/shared';
import React from 'react';

interface Props {
  product: Product;
  goToProductDetailsClick?: () => void;
}

export const ProductCardVertical: React.FC<Props> = ({ product, goToProductDetailsClick }) => {
  const {
    mainImage,
    name,
    shortDescription,
    price: { amount, currency },
  } = product;

  return (
    <div
      className="card card-compact w-full bg-base-100
       shadow-xl cursor-pointer overflow-hidden"
      onClick={goToProductDetailsClick}
    >
      <figure>
        <img src={mainImage} className="w-full h-96 object-cover" alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        {/* Car specs */}
        {shortDescription && <p>{shortDescription}</p>}
        {/* Address */}
        <p className="text-gray-500">Price: {currencyFormatter(amount, currency)}</p>
      </div>
    </div>
  );
};
