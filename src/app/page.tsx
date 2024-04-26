import { config } from '@/config/client-main-config';
import { PRODUCTS_KEY } from '@/config/constants';
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
      <h1>Some header</h1>
      <button className="btn btn-primary">Daisy Ui installed!</button>
      <Products />
    </HydrationBoundary>
  );
}
