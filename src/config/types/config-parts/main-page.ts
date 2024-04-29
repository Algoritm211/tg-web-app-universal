import { Product } from '@/config/types/entities';
import { CardVariant } from '@/config/types/enums';

export interface MainPage {
  fetchProducts: () => Promise<Product[]>;
  cardVariant: CardVariant;
}
