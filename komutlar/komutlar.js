const Discord = require('discord.js');

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
	message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: "Yardım Menüsü"
			},
            title: "komutların başına s! koyunuz :)",
            description: "[Eğlence Komutları](https://tenor.com/view/adal-do%C4%9Fukan-adal-gif-18392011) \n [atam](.) \n [yaz](.) \n [avatar](.) \n [hesapla](.) \n [atla](.) \n [avatarım](.) \n [askolcer](.) \n [balıktut](.) \n [espri](.) \n [havadurumu](.) \n [korkut](.) \n [mesajdöndür](.) \n [sorusor](.) \n [ping](.) \n [winner](.) \n [yetkilerim](.) \n [çeviri](.) \n [top10](.) \n [Moderasyon Komutları](https://tenor.com/view/adal-do%C4%9Fukan-adal-gif-18392011) \n [temizle](.) \n [roller](.) \n [rolinfo](.) \n [duyuru](.) \n [ban](.) \n [kick](.) \n [oylama](.) \n [rastgeleuye](.) \n [reklamtaraması](.) \n [yavaşmod](.) \n [sunucutanıt](.) \n [sustur](.) \n [uyar](.) \n [Botun Komutları](https://tenor.com/view/adal-do%C4%9Fukan-adal-gif-18392011) \n [Davet](.) \n [davetoluştur](.) \n [sunucuresmi](.) \n [sunucutanıt](.) ",
            fields: [
            ],
            timestamp: new Date(),
            footer: {
              icon_url: "",
              text: "DGS Empire"
            }
          }
        });
	    message.react("💎")
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['k', 'komutlar', 'komutlar'],
  permLevel: 0
};

exports.help = {
  name: 'komutlar',
  description: 'Komutları Gösterir',
  usage: 'Komutlar'
  };
