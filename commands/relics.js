// Dependencies
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('relics')
        .setDescription('Get lost relics guide in NIKKE to locate all lost relics'),
    async execute(msg) {
        msg.reply('Commander, if you need help finding Lost Relics this can help you ➜ https://nikke-map.onrender.com/')
    }
}