const Discord = require('discord.js');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Korkut')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== '..') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('Al adalı korkuttun :D?')
    .setColor('RANDOM')
    .setTimestamp()
		.setImage(`https://media.tenor.com/images/184a93722f555e17b2cb212433bb6737/tenor.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: 'korkut',
  description: 'Bot Sizi Korkutmaya Çalışır.',
  usage: 'korkut'
};
