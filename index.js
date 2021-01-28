require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();


client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("message", message => {
    if(!message.content.startsWith("!")) return
    if(message.author.tag == client.user.tag) return

    //TODO: process the message

    else message.reply("Yo! You called me?")
})


client.login(process.env.CLIENT_ID);