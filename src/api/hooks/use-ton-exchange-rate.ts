import { tonExchangeRate } from '@/api/fetch-clients/ton-exchange-rate';
import { TON_EXCHANGE_RATE } from '@/shared';
import { useQuery } from '@tanstack/react-query';

export const useTonExchangeRate = () => {
  return useQuery({
    queryKey: [TON_EXCHANGE_RATE],
    queryFn: tonExchangeRate,
  });
};
