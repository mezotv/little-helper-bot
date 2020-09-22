const Command = require('../../Stuctures/Command');
const ms = require('ms');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: ['Check the bot respond time.']
        });
    }
    async run(message) {
        const msg = await message.channel.send('Pinging...');

        const latency = msg.createdTimestamp - message.createdTimestamp;
        const choices = ['Wow, thats my ping?', 'Is this okay? I can\'t look!', 'I hope it isn\'t that bad!', 'Can someone tell me if my ping is ok?']
        const response = choices[Math.floor(Math.random() * choices.length)];

        msg.edit(`${response} - Bot Latency: \`${latency}ms\`, API Latency: \`${Math.round(this.client.ws.ping)}ms\``);
    }

};
