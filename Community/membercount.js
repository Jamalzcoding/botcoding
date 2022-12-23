const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');



module.exports = {
  data: new SlashCommandBuilder()
    .setName('membercount')
    .setDescription('Gets the member count')
    .setDMPermission(false),
  async execute(interaction) {
    const m = interaction.guild.memberCount;
    const b = interaction.guild.members.cache.filter(member => member.user.bot).size;
    const memberEmbed = new EmbedBuilder()
      .setColor("Red")
      .setTitle('Member Count')
      .setDescription(`**Member Count:** ${m - b} \n \n **Bot Count:** ${b} \n \n **Total Members:** ${m}`)
      .setTimestamp()
      .setFooter({ text: 'Bot made by Jamal' });

      await interaction.reply({ embeds: [memberEmbed] })

  }
}