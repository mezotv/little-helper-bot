const MezoClient = require('./Stuctures/MezoClient');
const config = require('../config.json');

const client = new MezoClient(config);

const discord = require('discord.js')
var user

client.on("guildCreate", guild => {
user = client.users.cache.get("347077478726238228")
    const join = new discord.MessageEmbed()
    .setTitle(`I joined a Guild`)
    .setDescription(`**Name:** \`${guild.name}\` \n**ID:** \`${guild.id}\``)
    .setFooter("Guild Joined at:")
    .setTimestamp()
    .setColor("#7289DA")

    user.send(join)
});

client.on("guildDelete", guild => {
user = client.users.cache.get("347077478726238228")
    const leave = new discord.MessageEmbed()
    .setTitle(`I leaved a Guild`)
    .setDescription(`**Name:** \`${guild.name}\` \n**ID:** \`${guild.id}\``)
    .setFooter("Guild Leaved at:")
    .setTimestamp()
    .setColor("#7289DA")
 
    user.send(leave)
});

client.start();