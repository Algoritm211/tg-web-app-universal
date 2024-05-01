import { config } from '@/config/client-main-config';
import { PRODUCT_KEY } from '@/config/constants';
import { QueryClient } from '@tanstack/react-query';

import { Product } from '@/system/product';

export default async function ProductPage({ params }: { params: { id: string } }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [PRODUCT_KEY(params.id)],
    queryFn: () => config.productPage.fetchProduct(params.id),
  });

  return <Product />;
}
