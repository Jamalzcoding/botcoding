const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
  .setName("howgay")
  .setDescription("replies with your gay rate, or the mentioned user gay rate")
  .addUserOption((option) => 
                option.setName("user")
                .setDescription("the mentioned user to view their gayrate")
                .setRequired(false)),
  /**
  *
  * @param {ChatInputCommandInteraction} interaction
  */
  execute(interaction) {
    const user = interaction.options.getMember("user") || interaction.user
    const random = Math.floor(Math.random() * 100) + 1
    const embed = new EmbedBuilder()
    .setTitle("how gay?")
    .setDescription(`${user} is **${random}%** gay!`)
.setThumbnail('https://media.tenor.com/k3P89wRMJ3IAAAAC/spongebob-meme-gay.gif')
    interaction.reply({ embeds: [embed]})
  }
}