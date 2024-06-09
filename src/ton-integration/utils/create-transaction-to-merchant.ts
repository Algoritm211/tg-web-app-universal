import { toNano } from '@ton/ton';
import { SendTransactionRequest } from '@tonconnect/sdk';

export const createTransactionToMerchant = (tonAmount: number): SendTransactionRequest => {
  return {
    validUntil: Math.floor(Date.now() / 1000) + 360,
    messages: [
      {
        address: process.env.NEXT_PUBLIC_MERCHANT_TON_ADDRESS!,
        amount: toNano(tonAmount).toString(), //Toncoin in nanotons
      },
    ],
  };
};
