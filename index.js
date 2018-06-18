const TelegramBot = require('node-telegram-bot-api');
      request = require('request');
      CronJob = require('cron').CronJob;
      token = '619403983:AAHsrS-gViYO9eoBEfpv5ZaTRZ01bd3nBwc';

const bot = new TelegramBot(token, {
  polling: true
});

const PLACES = [
  {name: 'Netanya', id: '294071'}
];
const url = 'https://api.openweathermap.org/data/2.5/weather?id=294071&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric';


request(url, function (error, response, body) {
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
});
/*
const job = new CronJob({
  cronTime: '* 15 10 * * 1-5',
  onTick: function() {
    console.log('You will see this message every second');
  },
  start: true,
  timeZone: 'Asia/Jerusalem'
});

//job.start();
*/

/*
bot.on('message', (msg) => {
  const id = msg.from.id;
  console.log(msg);
  bot.sendMessage(id, msg.text);
});*/

/*
bot.onCommand = (chat, from, message_id, text, command, commandData) => {
  if (command === 'test')  {
    var keyboard = {
      'inline_keyboard': [
        [
          {'text': 'Yes', 'url': 'http://www.google.com/'}
        ]
      ]
    };

    var data = {
     "reply_to_message_id": message_id,
     "reply_markup": JSON.stringify(keyboard)
    }

    bot.sendText(chat.id, 'test', data, function (isSuccess) {
      console.log(isSuccess);
    });
  }
};


*/


bot.on('message', (msg) => {
  const id = msg.from.id;
  console.log(msg);


  let option = {
    'parse_mode': 'Markdown',
    'reply_markup': {
        'keyboard': [
          ['Button 1'],
          ['Button 2']
        ]
      }
    };

  bot.sendMessage(msg.chat.id, '*Some* message here', option);
});

