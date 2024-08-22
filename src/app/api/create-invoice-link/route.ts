import { Product, ProductCartItem } from '@/config/types/entities';
import { truncateString } from '@/shared';
import { Telegram, Types } from 'telegraf';

const bot = new Telegram(process.env.TELEGRAM_BOT_TOKEN!);

export async function POST(request: Request) {
  const products = (await request.json()) as Product[] | ProductCartItem[];

  const TITLE = 'Your order in SHOP NAME';
  const DESCRIPTION = 'Thank you very much for choosing us';
  /**
   * We can get currency from the first product because all items will be in the same currency
   */
  const currency = products[0].price.currency;

  const invoice: Types.NewInvoiceLinkParameters = {
    title: TITLE,
    description: DESCRIPTION,
    payload: 'payment-from-tg-bot',
    provider_token: process.env.PAYMENTS_PROVIDER_TOKEN!,
    currency,
    prices: products.map((product) => ({
      amount: product.price.amount * ((product as ProductCartItem)?.count || 1) * 100,
      label: `${truncateString(product.name, 25)} ${(product as ProductCartItem).count || 1}x`,
    })),
    photo_url: `https://${process.env.VERCEL_URL || process.env.NEXT_PUBLIC_TEST_NGROK_URL || 'http://localhost:3000'}/invoice/invoice-stub-image.png`,
    need_shipping_address: true,
    photo_height: 800,
    photo_width: 800,
  };

  const link = await bot.createInvoiceLink(invoice);

  return Response.json(link);
}
