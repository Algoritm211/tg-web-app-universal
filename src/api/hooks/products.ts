import { config } from '@/config/client-main-config';
import { PRODUCTS_KEY } from '@/shared';
import { useQuery } from '@tanstack/react-query';

export const useProducts = () => {
  return useQuery({
    queryKey: [PRODUCTS_KEY],
    queryFn: config.mainPage.fetchProducts,
  });
};
