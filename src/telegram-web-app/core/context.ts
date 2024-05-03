import { createContext } from 'react';

export const getWebAppFromGlobal = () =>
  typeof window !== 'undefined' && window?.Telegram?.WebApp ? window.Telegram.WebApp : null;

export const webAppContext =
  createContext<ReturnType<typeof getWebAppFromGlobal>>(getWebAppFromGlobal());
