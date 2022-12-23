const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('scary')
    .setDescription('This command will scare you be careful.'),
    async execute (interaction, client) {


        await interaction.reply({ content: `**!!!WARNING!!!** If you click on this link it will scare you click at your own **RISK** https://pnrtscr.com/n7umrk`})
        
    }
}



    