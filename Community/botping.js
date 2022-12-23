const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
    .setName("botping")
    .setDescription("This returns the latency of the bot"),
    async execute(interaction, client) {
        
        const embed = new EmbedBuilder()
        .setDescription(`The bot's ping is ${client.ws.ping} ms.`)
        .setColor('DarkRed')

        await interaction.reply({ embeds: [embed] });
    }
}