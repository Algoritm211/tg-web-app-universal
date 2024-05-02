'use client';

import { useProduct } from '@/config/api';
import { BackButton } from '@/telegram-web-app/components';
import { useHapticFeedback } from '@/telegram-web-app/hooks';
import { useRouter } from 'next-nprogress-bar';
import { useParams } from 'next/navigation';
import React from 'react';

import {ProductDetailHeader, ProductGallery} from '@/system/product/components';

export const Product = () => {
  const router = useRouter();
  const { id: productId } = useParams<{ id: string }>();
  const { data: product } = useProduct(productId);
  const { impactOccurred } = useHapticFeedback();

  const routeBack = () => {
    impactOccurred('medium');
    void router.back();
  };

  return (
    <React.Fragment>
      <ProductDetailHeader title={product?.name} subTitle={product?.shortDescription} />
      <ProductGallery photos={product?.images} />
      <BackButton onClick={routeBack} />
    </React.Fragment>
  );
};
