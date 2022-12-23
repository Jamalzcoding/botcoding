const {
    SlashCommandBuilder,
    EmbedBuilder,
    PermissionFlagsBits,
  } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("say")
      .setDescription("Say something using embeds")
      // .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
      .addStringOption((option) =>
        option
          .setName("title")
          .setDescription("Title for the embed")
          .setRequired(true)
      )
      .addStringOption((option) =>
        option
          .setName("description")
          .setDescription("Text For the Description")
          .setRequired(true)
      ),
  
    async execute(interaction) {
      const {channel, options} = interaction;
      const title = options.getString("title");
      const description = options.getString("description");
      
      const embed = new EmbedBuilder()
        .setTitle(title)
        .setDescription(description)
        .setColor("Red");
  
      const EmbedSend = await channel.send({ embeds: [embed] });
  
      interaction.reply({ content: "Text Was Sent!", ephemeral: true });
    },
  };
  