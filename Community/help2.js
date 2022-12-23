const { EmbedBuilder, SlashCommandBuilder, SelectMenuBuilder, ActionRowBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("It's a simple menu command"),

    async execute(interaction, client) {

     const embed = new EmbedBuilder()
        .setTitle('Help')
         .setDescription(".setDescription(`Muse Is a **Multi-Purpose Bot** With Many Features!\n**Features:** Moderation, Giveaways, Global Commands & More\n\n<:menu:1054817002918776842>  **Menu** \n\n> <:guide2:1054813512595144735>  **Guide** - Information On Muse Bot Features\n> \n> <:commands:1054818717176971265> **Commands** - Muse Commands & Features\n> \n> <:premium:1054819225111380080> **Muse Premium** - Premium Subscription With Custom Features!\n> \n> <:PINNED:1054818964007563274> **Socials** - [Github](https://github.com/huncholiny), [Discord](https://discord.gg/sPAV3Q9dm5)`)")
       .setThumbnail(interaction.guild.iconURL())
    .setColor("Red")
        .setFooter({text: `Jamal | Development`, iconURL: client.user.displayAvatarURL()})
        
    const embed1 = new EmbedBuilder()
    .setTitle('Community Commands')
     .setColor("Red")
      .setDescription(`/flip /help /dadjoke /botping /bannedwords /buttontest /howgay /invite /invites /membercount /meme /pp /runtoget /serverinfo /test /uptime /donate /rps /pixelate /hack`)
        .setFooter({text: `Jamal | Development`, iconURL: client.user.displayAvatarURL()})
      
    const embed2 = new EmbedBuilder()
      .setTitle('Moderator commands')
      .setDescription(`/annouce /autorole /ban /clear /clearwarn /deletechannel /dm /kick /lockdown /mute /poll /reactionrole /removewelchannel /rolemaker /setwelchannel /ticket /timestamp /unban /unlockdown /unmute /update /userinfo /verify /warn /warns /qotd /setname /nuke /startg /pauseg /unpauseg /rerollg`)
      .setColor("Red")
        .setFooter({text: `Jamal | Development`, iconURL: client.user.displayAvatarURL()})
      
      const embed3 = new EmbedBuilder()
      .setTitle('All Commands')
       .setDescription(`/flip /help /dadjoke /botping /bannedwords /buttontest /howgay /invite /invites /membercount /meme /pp /runtoget /serverinfo /test /uptime /donate /rps /annouce /autorole /ban /clear /clearwarn /deletechannel /dm /kick /lockdown /mute /poll /reactionrole /removewelchannel /rolemaker /setwelchannel /ticket /timestamp /unban /unlockdown /unmute /update /userinfo /verify /warn /warns`)
        .setColor("Red")
        .setFooter({text: `Jamal | Development`, iconURL: client.user.displayAvatarURL()})
      const embed4 = new EmbedBuilder()
        

let rowmenu = new ActionRowBuilder()
         .addComponents(
           new SelectMenuBuilder()
           .setCustomId('menu2')
           .setPlaceholder('Menu list')
           .setMinValues(1)
           .setMaxValues(1)
           .addOptions([
             {
               label: 'Community Commands',
               value: 'option1',
               description: 'Shows a list of community commands',
             },
             {
               label: 'Moderator Commands',
               value: 'option2',
               description: 'Shows a list of all the moderator commands',
             },
             {
              label: 'All Commands',
              value: 'option3',
              description: 'Shows a list of all the commands for this bot',
        
               label: "Home",
               value: 'option',
               description: 'Click this to go back to the home page',
            },
           ])
         )

   
        
  const MESSAGE = await interaction.reply({embeds : [embed], components : [rowmenu], ephemeral: false });
  const filter = ( button ) => button.user.id === interaction.user.id 
  const collector = MESSAGE.createMessageComponentCollector();

    collector.on('collect', async (b) => {

        if(b.values[0] == "option") {
            await b.update({embeds : [embed], components : [rowmenu], ephemeral: true });
            

        }

       if(b.values[0] == "option1") {
            await b.update({embeds : [embed1], components : [rowmenu], ephemeral: true });
            

        }//

       if(b.values[0] == "option2") {
            await b.update({embeds : [embed2], components : [rowmenu], ephemeral: true });
            

        }

        if(b.values[0] == "option3") {
          await b.update({embeds : [embed3], components : [rowmenu], ephemeral: true });
          

        }
    })
  },
};