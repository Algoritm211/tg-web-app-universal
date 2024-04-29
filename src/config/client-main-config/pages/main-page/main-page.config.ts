import { MainPage } from '@/config/types/config-parts/main-page';
import { CardVariant } from '@/config/types/enums';

import { fetchProducts } from './fetch-products';

export const mainPageConfig: MainPage = {
  fetchProducts,
  cardVariant: CardVariant.vertical,
};
