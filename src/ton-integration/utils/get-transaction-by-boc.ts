import { retry } from '@/shared';
import { Cell, Address, beginCell, storeMessage, TonClient, Transaction } from '@ton/ton';

/**
 * Function for getting transaction by BOC.
 * For usage only on server
 */
export async function getTxByBOC(
  client: TonClient,
  exBoc: string,
  address: string
): Promise<Transaction> {
  const myAddress = Address.parse(address); // Address to fetch transactions from
  // const myAddress = Address.parse(process.env.NEXT_PUBLIC_MERCHANT_TON_ADDRESS!); // Address to fetch transactions from

  return retry(
    async () => {
      const transactions = await client.getTransactions(myAddress, {
        limit: 5,
      });

      for (const tx of transactions) {
        const inMsg = tx.inMessage;
        console.log('INMSG', inMsg);
        if (inMsg?.info.type === 'external-in') {
          const inBOC = inMsg?.body;
          if (typeof inBOC === 'undefined') {
            await Promise.reject(new Error('Invalid external'));
            continue;
          }
          const extHash = Cell.fromBase64(exBoc).hash().toString('hex');
          const inHash = beginCell().store(storeMessage(inMsg)).endCell().hash().toString('hex');

          console.log(' hash BOC', extHash);
          console.log('inMsg hash', inHash);
          // console.log('checking the tx', tx, tx.hash().toString('hex'));

          // Assuming `inBOC.hash()` is synchronous and returns a hash object with a `toString` method
          if (extHash === inHash) {
            console.log('Tx match');
            const txHash = tx.hash().toString('hex');
            console.log(`Transaction Hash: ${txHash}`);
            console.log(`Transaction LT: ${tx.lt}`);
            return tx;
          }
        }
      }
      throw new Error('Transaction not found');
    },
    { retries: 30, delay: 1000 }
  );
}
