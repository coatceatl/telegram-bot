const TelegramBot = require('node-telegram-bot-api');
      token = '619403983:AAHsrS-gViYO9eoBEfpv5ZaTRZ01bd3nBwc';

const bot = new TelegramBot(token, {
  polling: true
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log(msg);
  bot.sendMessage(chatId, 'Received your message');
});
