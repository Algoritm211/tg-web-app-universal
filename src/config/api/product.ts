import { useQuery } from '@tanstack/react-query';

import { config } from '../client-main-config';
import { PRODUCT_KEY } from '../constants';

export const useProduct = (productId: string) => {
  return useQuery({
    queryKey: [PRODUCT_KEY],
    queryFn: () => config.productPage.fetchProduct(productId),
  });
};
