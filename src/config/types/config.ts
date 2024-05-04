import { GlobalConfig } from '@/config/types/config-parts/global-config';
import { ProductPage } from '@/config/types/config-parts/product-page';

import { MainPage } from './config-parts/main-page';

export interface Config {
  global: GlobalConfig;
  mainPage: MainPage;
  productPage: ProductPage;
}
