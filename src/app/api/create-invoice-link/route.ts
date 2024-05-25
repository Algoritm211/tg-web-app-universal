import { Product, ProductCartItem } from '@/config/types/entities';
import { TELEGRAM_STARS_IN_ONE_DOLLAR, truncateString } from '@/shared';
import { Telegram, Types } from 'telegraf';

const bot = new Telegram(process.env.TELEGRAM_BOT_TOKEN!);

const BASE_PROD_URL = 'https://tg-web-app-flower-shop-demo.vercel.app';

export async function POST(request: Request) {
  const products = (await request.json()) as Product[] | ProductCartItem[];

  const TITLE = 'your product';
  const DESCRIPTION = 'Thank you very much for choosing us';

  const totalPrice =
    products.reduce((acc, product) => {
      return acc + product.price.amount * ((product as ProductCartItem)?.count || 1);
    }, 0) * TELEGRAM_STARS_IN_ONE_DOLLAR;

  const invoice: Types.NewInvoiceLinkParameters = {
    title: TITLE,
    description: DESCRIPTION,
    payload: 'payment-from-tg-bot',
    // Telegram stars
    currency: 'XTR',
    prices: [
      {
        amount: totalPrice,
        label: `all products price`,
      },
    ],
    photo_url: `${BASE_PROD_URL || process.env.VERCEL_URL || process.env.NEXT_PUBLIC_TEST_NGROK_URL || 'http://localhost:3000'}/invoice/invoice-stub-image.png`,
    photo_height: 800,
    photo_width: 800,
  } as Types.NewInvoiceLinkParameters;

  const link = await bot.createInvoiceLink(invoice);

  return Response.json(link);
}
