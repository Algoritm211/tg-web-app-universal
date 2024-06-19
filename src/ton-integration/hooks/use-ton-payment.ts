import { createTransactionToMerchant } from '@/ton-integration';
import { useMutation } from '@tanstack/react-query';
import { useTonAddress, useTonConnectUI } from '@tonconnect/ui-react';
import { useWebApp } from '@vkruglikov/react-telegram-web-app';

export const useTonPayment = () => {
  const WebApp = useWebApp();
  const [tonConnectUI] = useTonConnectUI();
  const address = useTonAddress();
  return useMutation({
    // TODO add checking the transaction on a backend
    mutationFn: async (tonAmount: number) => {
      const { boc } = await tonConnectUI.sendTransaction(createTransactionToMerchant(tonAmount));

      const rawTxHashResponse = await fetch('/api/check-ton-payment', {
        method: 'POST',
        body: JSON.stringify({
          boc: boc || '',
          chatId: WebApp?.initDataUnsafe?.user?.id,
          userFirstName: WebApp?.initDataUnsafe?.user?.first_name,
          tonAmount,
          address: address,
        }),
      });
      const txHashResponse = await rawTxHashResponse.json();
      return txHashResponse.txHash;
    },
    onSuccess: () => {
      WebApp?.showAlert('🎉Your transaction has been completed', () => {
        WebApp?.close();
      });
    },
    onError: (error) => {
      console.log('error', error);
      WebApp?.showAlert(JSON.stringify(error.message));
    },
  });
};
