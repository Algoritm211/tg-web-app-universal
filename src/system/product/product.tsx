'use client';

import { useProduct } from '@/config/api';
import { BackButton } from '@/telegram-web-app/components';
import { useHapticFeedback } from '@/telegram-web-app/hooks';
import { useRouter } from 'next-nprogress-bar';
import { useParams } from 'next/navigation';
import React from 'react';

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
      <pre>Product - {JSON.stringify(product, undefined, 2)}</pre>
      <BackButton onClick={routeBack} />
    </React.Fragment>
  );
};
