'use client';

import { useProduct } from '@/config/api';
import { BackButton } from '@/telegram-web-app/components';
import { useHapticFeedback } from '@/telegram-web-app/hooks';
import { useRouter } from 'next-nprogress-bar';
import { useParams } from 'next/navigation';
import React from 'react';

import { ProductDetailHeader, ProductGallery, ProductPrice } from '@/system/product/components';
import { ProductDescription } from '@/system/product/components/product-description/product-description';

export const Product = () => {
  const router = useRouter();
  const { id: productId } = useParams<{ id: string }>();
  const { data: product } = useProduct(productId);
  const { impactOccurred } = useHapticFeedback();

  const routeBack = () => {
    impactOccurred('medium');
    void router.back();
  };

  const onAddToCart = () => {
    console.log(product);
  };

  return (
    <React.Fragment>
      <ProductDetailHeader title={product?.name} subTitle={product?.shortDescription} />
      <ProductGallery photos={product?.images} />
      <ProductPrice
        amount={product?.price.amount}
        currency={product?.price.currency}
        onActionClick={onAddToCart}
      />
      <ProductDescription description={product?.description} />
      <BackButton onClick={routeBack} />
    </React.Fragment>
  );
};
