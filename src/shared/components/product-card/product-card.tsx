import { Product } from '@/config/types/entities';
import { CardVariant } from '@/config/types/enums';
import React from 'react';

import { ProductCardHorizontal } from './product-card-horizontal';
import { ProductCardVertical } from './product-card-vertical';

interface Props {
  variant: CardVariant;
  product: Product;
  goToProductDetailsClick?: () => void;
}

const CardVariants = {
  [CardVariant.horizontal]: ProductCardHorizontal,
  [CardVariant.vertical]: ProductCardVertical,
};

export const ProductCard: React.FC<Props> = ({ product, variant, goToProductDetailsClick }) => {
  const ProductCardByType = CardVariants[variant];

  return <ProductCardByType product={product} goToProductDetailsClick={goToProductDetailsClick} />;
};
