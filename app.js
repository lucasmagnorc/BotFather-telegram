const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => ctx.reply("Hello world"))

bot.command('salve', async (ctx) => {
    await ctx.reply(`Aoooooooba`)
})

bot.launch()