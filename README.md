# Serverless Telegram Bot

Create serverless Telegram Bot with DB to keep track of users using Netlify Functions and FaunaDB

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jokarz/netlify-fauna-telegram-bot)

# Getting Started

* Getting Telegram Bot token and FaunaDB key
* Deploy to Netlify
* Hooking up the Bot

## Getting Telegram Bot token and FaunaDB key
On Telegram, create a new Telegram bot by talking to [@botfather](https://telegram.me/botfather) and thereafter getting the token for the Telegram Bot.

On FaunaDb site, create a collection with the name ```user``` (optionally, generate an index for the collection and specifying the term for the **userId** to be unique). Head to the security section and generate a FaunaDB key for the collection.

## Deploy to Netlify

Deploy to Netlify either by linking to this repository manually or by clicking the Deploy to netlify.

Thereafter, fill in the environment variables ```TELEGRAM_BOT_TOKEN```, ```FAUNA_SECRET_KEY``` with the token and the secret key obtained respectively

## Hooking up the Bot

Once the above are done, you need to specify and tell telegram where your bot should direct the messages it received to. Do so by simply visiting this url
```
https://api.telegram.org/bot{your_bot_token}/setWebhook?url={url_of_the_Netlify_Function}
```
Afterwhich, YOU ARE DONE!🎉🎉

Try typing ```/start``` to your bot and watch as the user ID of the Telegram user is stored inside your FaunaDB

# Extending Telegram Bot Functionality

This bot uses telegraf.js for its Telegram Bot functionality. Head to its [website](https://telegraf.js.org/#/) to find out how to extend the functionality of the bot you have created :)

