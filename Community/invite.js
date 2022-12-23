const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('invite')
    .setDescription('Gives you the invite link for Muse'),
    async execute(interaction, message) {

        const embed = new EmbedBuilder()
        .setColor("Red")
        .setDescription("**Invite Muse Bot** https://discord.com/api/oauth2/authorize?client_id=1051869335330770984&permissions=8&scope=bot%20applications.commands")
        

        await interaction.reply({ embeds: [embed] });
    }
}