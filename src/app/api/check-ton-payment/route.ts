import { getTxByBOC } from '@/ton-integration/utils/get-transaction-by-boc';
import { address, Address, fromNano, TonClient } from '@ton/ton';
import { Telegraf } from 'telegraf';

const client = new TonClient({
  endpoint: 'https://testnet.toncenter.com/api/v2/jsonRPC',
  apiKey: process.env.TONCENTER_API_KEY!, // https://t.me/tonapibot,
});

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN!);
export async function POST(request: Request) {
  const paymentInfo = (await request.json()) as { address: string; boc: string; chatId: string };
  if (!paymentInfo.boc || !paymentInfo.address) {
    await bot.telegram.sendMessage(paymentInfo.chatId, 'Unfortunately, an error as occurred', {
      parse_mode: 'HTML',
    });
    return Response.json({ message: 'Error', code: 400 });
  }

  console.log('INFO -', paymentInfo);

  const tx = await getTxByBOC(client, paymentInfo.boc, paymentInfo.address);

  const tx2 = await client.getTransactions(
    Address.parse(process.env.NEXT_PUBLIC_MERCHANT_TON_ADDRESS!),
    {
      lt: tx.lt.toString(),
      limit: 1,
    }
  );
  console.log('TRANSACTION 2', tx2[0].inMessage, tx2[0].lt);
  console.log('TRANSACTIONS IDENTICAL', tx.hash().toString('hex'), tx2[0].hash().toString('hex'));
  const sender = tx2[0].inMessage?.info.src;
  // @ts-ignore
  const value = fromNano(tx2[0].inMessage?.info.value.coins);
  const recipient = tx2[0].inMessage?.info.dest;
  console.log({ sender, value, recipient });

  await bot.telegram.sendMessage(
    paymentInfo.chatId,
    `<b>🎉Congratulations🎉</b>
 
You've sent ${value} TON to the merchant's wallet ${recipient}

Hash of your transaction - ${tx.hash().toString('hex')}

You can view it here - https://testnet.tonviewer.com/transaction/${tx.hash().toString('hex')}`,
    { parse_mode: 'HTML' }
  );
  return Response.json({ txHash: tx.hash().toString('hex'), code: 200 });
}
