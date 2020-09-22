const { Collection, ReactionUserManager } = require('discord.js');
const Command = require('../../Stuctures/Command');
const ms = require('ms');

module.exports = class extends Command {

    async run(message) {
        message.channel.send(`My uptime is \`${ms(this.client.uptime, { long: true })}\``);
    }
    
}