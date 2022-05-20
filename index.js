const Discord = require('discord.js')
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MEMBERS, Discord.Intents.FLAGS.GUILD_MESSAGES] })
const ayarlar = require('./ayarlar.json')
const db = require('quick.db')
const fs = require('fs')
const http = require('http')
const express = require('express')
const app = express()
const moment = require('moment')
require('moment-duration-format')
moment.locale('tr')
require('./util/eventLoader.js')(client)

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
fs.readdir('./komutlar/', (Error, Files) => {
    if (Error) console.error(Error)
    console.log(`${Files.length} Komut Yüklenecek!`)
    Files.forEach(Pepe => {
        let Props = require(`./komutlar/${Pepe}`)
        console.log(`→ Yüklenen Komut: ${Props.help.name}.`)
        client.commands.set(Props.help.name, Props)
        Props.conf.aliases.forEach(Alias => {
            client.aliases.set(Alias, Props.help.name)
        })
    })
})

client.login(ayarlar.token)