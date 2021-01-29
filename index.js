require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();


const COMMAND_CHAR = "!";

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("message", message => {
    if(!message.content.startsWith(COMMAND_CHAR)) return
    if(message.author.tag == client.user.tag) return

    //TODO: process the message and get the command and arguements
    let originalMessage = message.content.split(COMMAND_CHAR)[1];

    originalMessage = originalMessage.split(/\s+/);
    let command = originalMessage[0];
    originalMessage.splice(0,1);
    let args = originalMessage
    message.reply(`Yo! You called me with command ${command} and args ${args}`)
})


client.login(process.env.CLIENT_ID);