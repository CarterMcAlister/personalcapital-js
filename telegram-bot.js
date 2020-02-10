const TelegramBot = require('node-telegram-bot-api')

class PcTelegramBot {
  constructor(token, chatId) {
    this.chatId = chatId
    this.bot = new TelegramBot(token, { polling: true })
  }

  listenFor2FaCode() {
    return new Promise(resolve => {
      this.bot.on('message', msg => {
        resolve(msg.text)
      })
    })
  }

  send2FaPrompt() {
    this.bot.sendMessage(this.hatId, 'Enter Personal Capital 2FA code:')
  }
}

module.exports = PcTelegramBot
