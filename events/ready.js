const Discord = require('discord.js')

module.exports = (client) => {

  /*
    WATCHING  : !ping izliyor
    LISTENING : !ping dinliyor
    PLAYING   : !ping oynuyor 
    STREAMING : !ping yayında
  */

  client.user.setActivity(`${Discord.version} Bot Template`, { type: 'PLAYING', url: 'https://twitch.tv/elraenn' })
  console.log(`${client.user.username} Online! (${client.guilds.cache.size} Server - ${client.channels.cache.size} Channel - ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Users)`)
}