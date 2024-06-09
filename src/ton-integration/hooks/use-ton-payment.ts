import { useTgWebApp } from '@/telegram-web-app';
import { createTransactionToMerchant } from '@/ton-integration';
import { useMutation } from '@tanstack/react-query';
import { useTonConnectUI } from '@tonconnect/ui-react';

export const useTonPayment = () => {
  const WebApp = useTgWebApp();
  const [tonConnectUI] = useTonConnectUI();
  return useMutation({
    // TODO add checking the transaction on a backend
    mutationFn: (tonAmount: number) =>
      tonConnectUI.sendTransaction(createTransactionToMerchant(tonAmount)),
    onSuccess: ({ boc }) => {
      console.log(boc);
      WebApp?.showAlert('Transaction was sent to the blockchain', () => {
        WebApp?.close();
      });
    },
    onError: (error) => {
      console.log('error', error);
      WebApp?.showAlert(JSON.stringify(error.message));
    },
  });
};
