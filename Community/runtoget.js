const { SlashCommandBuilder } = require('@discordjs/builders')
const { EmbedBuilder, PermissionsBitField, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const { QuickDB } = require('quick.db')
db = new QuickDB()
const currency = new QuickDB()
module.exports = {
    data: new SlashCommandBuilder()
    .setName('runtoget')
    .setDescription('run the command repetitively to get one Mdy Coin, do it till you have enough!'),
    async execute(interaction, client) {
        const user = client.users.cache.get(interaction.member.user.id);
        const currencymessage = new EmbedBuilder()
        
        .setDescription("5 dollars added to your wallet. Once you get 120 send the owner a picture of proof to get a custom role")
        .setColor('Purple')
        
        db.add(`currency_${user}`, 5)
        await interaction.reply({embeds: [currencymessage]})
        
        
        
        
    }
}