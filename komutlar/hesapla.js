const Discord = require('discord.js');
const math = require('math-expression-evaluator')
const stripIndents = require('common-tags').stripIndents



exports.run = function(client, message, args) {
    var soru = args.join(' ');

    if(!soru) return message.reply('Bir i�lem belirtin. **Do�ru Kullan�m**: ?hesapla <i�lem>')
    else { let cevap;
        try {
            cevap = math.eval(soru)
        } catch(err) {
            message.channel.send('Hatal� i�lem: **' + err)
        }

        const embed = new Discord.RichEmbed()
        .addField('Soru', soru)
        .addField('Cevap', cevap)

        message.channel.send(embed)
    }


};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hesapla',
  description: 'Belirtilen i�lemi yapar.',
  usage: 'hesapla <i�lem>'
};
