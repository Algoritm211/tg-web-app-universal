import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'
import dotenv from 'dotenv';
import path from 'path'

dotenv.config({path: path.resolve(__dirname, '..', '.env.local')});

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN!)

bot.on(message('text'), async (ctx) => {
  // Using context shortcut
  await ctx.reply(`Hello ${ctx.message.from.first_name}`)
})

void bot.launch().then(() => console.log('BOT SUCCESSFULLY STARTED'))

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
