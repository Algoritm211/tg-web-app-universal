import { Telegraf } from 'telegraf'
import dotenv from 'dotenv';
import path from 'path'

dotenv.config({path: path.resolve(__dirname, '..', '.env.local')});

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN!)

bot.start(async (ctx) => {
  // Using context shortcut
  await ctx.reply(`Hello <b>${ctx.message.from.first_name}</b>. Welcome to Flower Shop! 🌸🌷

💐We are your personal flower shop on Telegram. Easily browse and order beautiful bouquets for any occasion with fast delivery and exclusive deals. 

<b>Let's make your moments blossom!</b> 🌼✨

💐Open the app below and choose your first bouquet💐
⬇️⬇️⬇️ 
`, {parse_mode: 'HTML'})
})

void bot.launch().then(() => console.log('BOT SUCCESSFULLY STARTED'))

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
