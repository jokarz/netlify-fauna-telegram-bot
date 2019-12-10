const Telegraf = require('telegraf');
const startAction = require('./actions/start')

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.start(ctx => {
  return startAction(ctx)
})

exports.handler = async event => {
  await bot.handleUpdate(JSON.parse(event.body));
  return { statusCode: 200, body: '' };
}