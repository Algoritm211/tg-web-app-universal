import { Product } from '@/config/types/entities';

export const fetchProducts = async (): Promise<Product[]> => {
  const rawResponse = await fetch('/api/products');
  const response = await rawResponse.json();

  return response.results;
};
