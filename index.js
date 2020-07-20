const Discord = require('discord.js')
const bot = new Discord.Client
const token = 'NDkzODIzMjEyNTA5OTg2ODI4.XxVrlw.5otokUzPGJLcWodKdM0kE1k9C10'

bot.on('message', function(message) {
    if(message.author.bot) return;
    if(message.content.toLowerCase('Hallo')) {
        message.channel.send("Hallo Zurück")
    }
})
     
bot.on('ready', () => {
    console.log("BOT wurde gestartet")
})

bot.login(token)