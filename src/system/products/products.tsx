'use client';

import { useProducts } from '@/api';
import { useAppConfig } from '@/config/config-provider';
import { ProductCard } from '@/shared';
import { useHapticFeedback } from '@/telegram-web-app/hooks';
import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react';
import { useRouter } from 'next-nprogress-bar';
import React from 'react';

import { ProductContainer } from '@/system/products/components/product-container/product-container';

export const Products = () => {
  const router = useRouter();
  const { data: products } = useProducts();
  const { impactOccurred } = useHapticFeedback();
  const { mainPage } = useAppConfig();
  const wallet = useTonWallet();

  const onGoToProduct = (id: string) => {
    console.log(`Redirecting to ${id}`);
    impactOccurred('medium');
    void router.push(`products/${id}`);
  };

  return (
    <ProductContainer>
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
