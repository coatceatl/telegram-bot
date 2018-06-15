const TelegramBot = require('node-telegram-bot-api');
      token = '619403983:AAHsrS-gViYO9eoBEfpv5ZaTRZ01bd3nBwc';

const bot = new TelegramBot(token, {
  polling: true
});

const PLACES = [
  {name: 'Netanya', id: '294071'}
];
const url = 'https://api.openweathermap.org/data/2.5/weather?id=294071&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric';

const request = require('request');
request(url, function (error, response, body) {
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
});

const CronJob = require('cron').CronJob;
new CronJob('* * * * * *', function() {
  console.log('You will see this message every second');
}, null, true, 'America/Los_Angeles');

bot.on('message', (msg) => {
  const chatId = msg.from.id;
  console.log(msg);
  bot.sendMessage(chatId, msg.text);
});

