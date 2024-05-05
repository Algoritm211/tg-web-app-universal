import { config } from '@/config/client-main-config';
import { PRODUCTS_KEY } from '@/shared';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { Products } from '@/system/products';

export default async function MainPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [PRODUCTS_KEY],
    queryFn: config.mainPage.fetchProducts,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Products />
    </HydrationBoundary>
  );
}
