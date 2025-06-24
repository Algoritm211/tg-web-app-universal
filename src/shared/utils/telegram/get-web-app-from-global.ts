export const getWebAppFromGlobal = () =>
  typeof window !== 'undefined' && window?.Telegram?.WebApp ? window.Telegram.WebApp : null;
