import { Config } from '@/config/types';

import { mainPageConfig } from './pages/main-page/main-page.config';
import { productPageConfig } from './pages/product-page/product-page.config';
import {globalConfig} from "@/config/client-main-config/global-config";

export const config: Config = {
  global: globalConfig,
  mainPage: mainPageConfig,
  productPage: productPageConfig,
};
