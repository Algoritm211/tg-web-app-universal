'use client';
import React from 'react';
import {useTgWebApp} from "@/telegram-web-app";

export const Products = () => {
  const webApp = useTgWebApp();

  return (
    <pre suppressHydrationWarning>
      Some data:
      {JSON.stringify(webApp?.initDataUnsafe, undefined,2)}
    </pre>
  );
};
