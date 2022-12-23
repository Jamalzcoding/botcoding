const { SlashCommandBuilder } = require('@discordjs/builders');
const {EmbedBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('pp')
    .setDescription('Gets your peener size'),
execute(interaction) {
    const user = interaction.options.getMember("user") || interaction.user
    const length = Math.floor(Math.random()*15) + 1;
        const shaft = '='.repeat(length);
        const pp = `8${shaft}D`
    const embed = new EmbedBuilder()
    .setTitle("Penis size")
    .setDescription(`${user} has **${pp}** oh!`)
    interaction.reply({ embeds: [embed]})
  }
}