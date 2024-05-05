'use client';

import { BackButton } from '@/telegram-web-app/components';
import { useHapticFeedback } from '@/telegram-web-app/hooks';
import { useRouter } from 'next-nprogress-bar';
import React from 'react';

import { ProductCartItem } from './components';

export const Cart = () => {
  const router = useRouter();
  const { impactOccurred } = useHapticFeedback();

  const routeBack = () => {
    impactOccurred('medium');
    void router.back();
  };

  return (
    <React.Fragment>
      <div className="flex gap-2 flex-col px-2">
        <ProductCartItem />
      </div>
      <BackButton onClick={routeBack} />
    </React.Fragment>
  );
};
