'use client';

import { config } from '@/config/client-main-config';
import { PRODUCTS_KEY } from '@/config/constants';
import { useTgWebApp } from '@/telegram-web-app';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

export const Products = () => {
  const { data } = useQuery({ queryKey: [PRODUCTS_KEY], queryFn: config.mainPage.fetchProducts });
  const webApp = useTgWebApp();

  return (
    <React.Fragment>
      <pre suppressHydrationWarning>
        Some data:
        {JSON.stringify(webApp?.initDataUnsafe, undefined, 2)}
      </pre>
      <pre>Data: {JSON.stringify(data, undefined, 2)}</pre>
    </React.Fragment>
  );
};
