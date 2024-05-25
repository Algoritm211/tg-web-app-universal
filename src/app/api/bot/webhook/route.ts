import {Telegraf} from "telegraf";

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN!);

bot.start(async (ctx) => {
  // Using context shortcut
  await ctx.reply(`Hello <b>${ctx.message.from.first_name}</b>. Welcome to Flower Shop! 🌸🌷

💐We are your personal flower shop on Telegram. Easily browse and order beautiful bouquets for any occasion with fast delivery and exclusive deals. 

<b>Let's make your moments blossom!</b> 🌼✨

💐Open the app below and choose your first bouquet💐
⬇️⬇️⬇️ 
`, {parse_mode: 'HTML'})
})

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { searchParams } = new URL(request.url)
    console.log(searchParams, body)

    if (searchParams.get('setWebhook') === 'true') {
      const webhookUrl = `${process.env.VERCEL_URL}/api/bot/webhook`;

      const isSet = await bot.telegram.setWebhook(webhookUrl);
      console.log(`Set webhook to ${webhookUrl}: ${isSet}`);
      return Response.json('OK');
    }

    await bot.handleUpdate(body);

    return Response.json('OK');
  } catch (error) {
    console.error('Error sending message');
    console.log((error as Error).toString());
    return Response.json('ERROR');
  }
}
