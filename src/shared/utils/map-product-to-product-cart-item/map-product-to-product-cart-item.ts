import { Product, ProductCartItemDTO } from '@/config/types/entities';

export const mapProductToProductCartItemDTO = (product: Product): ProductCartItemDTO => {
  return {
    id: product.id,
    name: product.name,
    price: product.price,
  };
};
