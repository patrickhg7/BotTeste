const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    const ms = await message.channel.send("Carregando...");
    const clientms = ms.createdTimestamp - message.createdTimestamp;
    ms.delete();
    let botembed = new Discord.MessageEmbed()
    .setTitle("**🏓 Pong da Latencia 📡 **")
    .setColor("RANDOM")
    .setDescription("\n **📡 Seu Ping:** "+clientms+"ms.\n **📡 Ping do BOT:** "+bot.ws.ping+"ms.\n ")
    message.channel.send(botembed);
}