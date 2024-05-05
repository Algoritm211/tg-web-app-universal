import { config } from '@/config/client-main-config';
import { PRODUCT_KEY } from '@/shared';
import { useQuery } from '@tanstack/react-query';

export const useProduct = (productId: string) => {
  return useQuery({
    queryKey: [PRODUCT_KEY(productId)],
    queryFn: () => config.productPage.fetchProduct(productId),
  });
};
