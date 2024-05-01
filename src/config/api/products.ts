import { useQuery } from '@tanstack/react-query';

import { config } from '../client-main-config';
import { PRODUCTS_KEY } from '../constants';

export const useProducts = () => {
  return useQuery({
    queryKey: [PRODUCTS_KEY],
    queryFn: config.mainPage.fetchProducts,
  });
};
