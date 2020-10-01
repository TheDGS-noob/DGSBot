const Discord = require('discord.js');

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
	message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: "Davet Menüsü",
              icon_url: "https://cdn.discordapp.com/emojis/760415015483998218.gif?v=1"
            },
			    "thumbnail": {
				 "url": "https://cdn.discordapp.com/emojis/760415015483998218.gif?v=1"
			},
            title: "",
            description: "[Davet Linki](https://discord.com/oauth2/authorize?client_id=760092532041842730&scope=bot&permissions=805314622) \n [Destek Sunucusu](https://discord.gg/gWwTK4y) ",
            fields: [
            ],
            timestamp: new Date(),
            footer: {
              icon_url: "",
              text: "DGS Empire"
            }
          }
        });
	    message.react("📝")
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['d', 'link', 'linkler'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botun Davet Linkini Gösterir',
  usage: 'davet'
};
