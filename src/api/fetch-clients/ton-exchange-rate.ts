import { TonExchangeRate } from '@/ton-integration';

export const tonExchangeRate = async (): Promise<TonExchangeRate> => {
  const rawExchangeRate = await fetch('https://tonapi.io/v2/rates?tokens=ton&currencies=usd');
  const exchangeRate = await rawExchangeRate.json();

  return exchangeRate;
};
