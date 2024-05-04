import { ProductPage } from '@/config/types/config-parts/product-page';

import { MainPage } from './config-parts/main-page';
import {GlobalConfig} from "@/config/types/config-parts/global-config";

export interface Config {
  global: GlobalConfig,
  mainPage: MainPage;
  productPage: ProductPage;
}
