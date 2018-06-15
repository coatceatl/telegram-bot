const TelegramBot = require('node-telegram-bot-api');
      token = '619403983:AAHsrS-gViYO9eoBEfpv5ZaTRZ01bd3nBwc';

const bot = new TelegramBot(token, {
  polling: true
});

var CronJob = require('cron').CronJob;
new CronJob('* * * * * *', function() {
  console.log('You will see this message every second');
}, null, true, 'America/Los_Angeles');

bot.on('message', (msg) => {
  const chatId = msg.from.id;
  console.log(msg);
  bot.sendMessage(chatId, msg.text);
});
