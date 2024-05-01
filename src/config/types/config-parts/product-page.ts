import { Product } from '@/config/types/entities';

export interface ProductPage {
  fetchProduct: (productId: string) => Promise<Product>;
}
