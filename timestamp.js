const { SlashCommandBuilder } = require('@discordjs/builders');
const { PermissionsBitField, EmbedBuilder, ButtonStyle, ActionRowBuilder, ButtonBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('timestamp')
    .setDescription('Convert date to discord timestamp!')
    .addIntegerOption(option => option.setName('year').setDescription('Year').setRequired(true))
    .addIntegerOption(option => option.setName('month').setDescription('Month').setRequired(true))
    .addIntegerOption(option => option.setName('day').setDescription('Day').setRequired(true))
    .addIntegerOption(option => option.setName('hour').setDescription('Hour').setRequired(false))
    .addIntegerOption(option => option.setName('minute').setDescription('Minute').setRequired(false))
    .addIntegerOption(option => option.setName('second').setDescription('Second').setRequired(false)),
    async execute (interaction, client) {
        const embedFAIL = new EmbedBuilder()
        .setColor("Purple")
        .setTitle(`ERROR`)
        .setDescription(`Incorrect values were given!`)

        let year = interaction.options.getInteger(`year`);
        let month = interaction.options.getInteger(`month`);
        let day = interaction.options.getInteger(`day`);

        let hour = 0
        let minute = 0
        let second = 0;
        let unset = 0;
        if (interaction.options.getInteger(`hour`) == null) hour = 0; 
        if (interaction.options.getInteger(`minute`) == null) minute = 0; 
        if (interaction.options.getInteger(`second`) == null) second = 0;

        hour = interaction.options.getInteger(`hour`);
        minute = interaction.options.getInteger(`minute`);
        second = interaction.options.getInteger(`second`);

        if (month < 1 || month > 12) {
            return await interaction.reply({ embeds: [embedFAIL], ephemeral: true});
        }
        const monthSave = month;
        const m1 = [1, 3, 5, 7, 8, 10, 12]; // 31 day
        const m2 = [4, 6, 9, 11]; // 30 day
        const m3 = 2; // day 28/29
        for(let i = 0; i < 8; i++) {
            if (month === m1[i]) {
                if (day < 1 || day > 31) {
                    return await interaction.reply({ embeds: [embedFAIL], ephemeral: true});
                } else {
                    month = month * 2678400;
                    unset = unset + 3600;
                    break;
                }
            }
        }
        if (unset === 0) {
            for (let i = 0; i < 5; i++) {
                if (month === m2[i]) {
                    if (day < 1 || day > 30) {
                        return await interaction.reply({ embeds: [embedFAIL], ephemeral: true});
                    } else {
                        month = month * 2592000;
                        unset = unset + 7200;
                        break;
                    }
                }
            }
        }
        if (unset === 0) {
            if (month === m3) {
                if (day < 1 || day > 29) {
                    return await interaction.reply({ embeds: [embedFAIL], ephemeral: true});
                } else {
                    month = month * 2419200;
                    unset = unset + 0;
                }
            }
        }
        switch(monthSave) {
            case 1: unset = unset + 1641600; break;
            case 2: unset = unset + 1126800; break;
            case 3: unset = unset + 1900800; break;
            case 4: unset = unset + 1555200; break;
            case 5: unset = unset + 1990800; break;
            case 6: unset = unset + 1468800; break;
            case 7: unset = unset + 2073600; break;
            case 8: unset = unset + 2077200; break;
            case 9: unset = unset + 1296000; break;
            case 10: unset = unset + 1296000; break;
            case 11: unset = unset + 1206000; break;
            case 12: unset = unset + 2246400; break;
        }

        year = year - 1970;
        year = year * 31536000;
        day = day * 86400;
        hour = hour * 3600;
        minute = minute * 60;
        
        let asp = year + month + day + hour + minute + second;
        const timestamp = asp - unset;
        const embed = new EmbedBuilder()
        .setColor("#00ff80")
        .setTitle('Timestamp Converter')
        .setDescription(`Your timestamp is: ${timestamp} : <t:${timestamp}>`)

        await interaction.reply({ embeds: [embed], ephemeral: true}).catch(err => {
            return;
        });
    }
}