const path = require('path');
const { promisify } = require('util');
const glob = promisify (require('glob'));
const Command = require('./Command.js');

module.exports = class Util {

    constructor(client) {
        this.client = client;
    }
    
    isClass(input) {
        return typeof input === 'function' &&
        typeof input.prototype === 'object' &&
        input.toString().substring(0, 5) === 'class';

    }

    get directory() {
        return `${path.dirname(require.main.filename)}${path.sep}`;
    }


    async loadcommand() {
        return glob(`${this.directory}command/**/*.js`).then(command => {
            for (const commandFile of command) {
                const { name } = path.parse(commandFile);
                const File = require(commandFile);
                if (!this.isClass(File)) throw new TypeError(`Command ${name} doesn't export a class.`);
                const command = new File(this.client, name.toLowerCase());
                if (!(command instanceof Command)) throw new TypeError(`Command ${name} doesnt belong in command.`);
                this.client.command.set(command.name, command);
                if(command.aliases.length) {
                    for (const alias of command.aliases) {
                        this.client.aliases.set(alias, command.name);
                    }
                }
            }
        })
    }

}