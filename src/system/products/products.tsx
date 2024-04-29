'use client';

import { config } from '@/config/client-main-config';
import { useAppConfig } from '@/config/config-provider';
import { PRODUCTS_KEY } from '@/config/constants';
import { ProductCard } from '@/shared';
import { useTgWebApp } from '@/telegram-web-app';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

import { ProductContainer } from '@/system/products/components/product-container/product-container';

export const Products = () => {
  const { data: products } = useQuery({
    queryKey: [PRODUCTS_KEY],
    queryFn: config.mainPage.fetchProducts,
  });
  const { mainPage } = useAppConfig();
  const webApp = useTgWebApp();

  const onGoToProduct = (id: string) => {
    console.log(`Redirecting to ${id}`);
  };

  return (
    <ProductContainer>
      {/*<pre suppressHydrationWarning>*/}
      {/*  Some data:*/}
      {/*  {JSON.stringify(webApp?.initDataUnsafe, undefined, 2)}*/}
      {/*</pre>*/}
      {products?.map((product) => {
        return (
          <ProductCard
            variant={mainPage.cardVariant}
            key={product.id}
            product={product}
            goToProductDetailsClick={() => onGoToProduct(product.id)}
          />
        );
      })}
    </ProductContainer>
  );
};
