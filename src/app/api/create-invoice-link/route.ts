import { Product } from '@/config/types/entities';
import { Telegram } from 'telegraf';

const bot = new Telegram(process.env.TELEGRAM_BOT_TOKEN!);

export async function POST(request: Request) {
  const product = (await request.json()) as Product;

  const invoice: Parameters<typeof bot.createInvoiceLink>[0] = {
    title: product.name,
    description: product.shortDescription || '',
    payload: 'payment-from-tg-bot',
    provider_token: process.env.PAYMENTS_PROVIDER_TOKEN!,
    currency: product.price.currency,
    prices: [
      {
        amount: product.price.amount,
        label: product.name,
      },
    ],
    photo_url: `${process.env.VERCEL_URL || process.env.TEST_NGROK_URL || 'http://localhost:3000'}/invoice/invoice-stub-image.png`,
  };

  const link = await bot.createInvoiceLink(invoice);

  return Response.json(link);
}
