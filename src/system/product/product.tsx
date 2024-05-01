'use client';

import { useProduct } from '@/config/api';
import { BackButton } from '@/telegram-web-app/components';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';

export const Product = () => {
  const router = useRouter();
  const { id: productId } = useParams<{ id: string }>();
  const { data: product } = useProduct(productId);

  return (
    <React.Fragment>
      <pre>Product - {JSON.stringify(product, undefined, 2)}</pre>
      <BackButton onClick={() => router.back()} />
    </React.Fragment>
  );
};
