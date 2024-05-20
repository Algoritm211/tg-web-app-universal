import { Product } from '@/config/types/entities';

export const fetchProduct = async (productId: string): Promise<Product> => {
  const rawResponse = await fetch(`/api/products/${productId}`);
  const response = await rawResponse.json();

  return response.product;
};
