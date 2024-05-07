import { createContext, MutableRefObject } from 'react';

export const getWebAppFromGlobal = () =>
  typeof window !== 'undefined' && window?.Telegram?.WebApp ? window.Telegram.WebApp : null;

export const webAppContext =
  createContext<ReturnType<typeof getWebAppFromGlobal>>(getWebAppFromGlobal());

type SystemContext = {
  MainButton: MutableRefObject<null | string>;
  BackButton: MutableRefObject<null | string>;
};

export const createSystemContextValue = () => ({
  MainButton: { current: null },
  BackButton: { current: null },
});

export const systemContext = createContext<SystemContext>(createSystemContextValue());
