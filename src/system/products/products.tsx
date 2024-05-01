'use client';

import { useProducts } from '@/config/api';
import { useAppConfig } from '@/config/config-provider';
import { ProductCard } from '@/shared';
import { useRouter } from 'next-nprogress-bar';
import React from 'react';

import { ProductContainer } from '@/system/products/components/product-container/product-container';

export const Products = () => {
  const { data: products } = useProducts();
  const { mainPage } = useAppConfig();
  const router = useRouter();

  const onGoToProduct = (id: string) => {
    console.log(`Redirecting to ${id}`);
    void router.push(`products/${id}`);
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
