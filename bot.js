const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$"; 





client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` ALPHA 2020 `,"https://discord.gg/afxBYJn")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.cache.size} " ]`);
  console.log(`Users! [ " ${client.users.cache.size} " ]`);
  console.log(`channels! [ " ${client.channels.cache.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});






client.on('message',message => {
  var args = message.content.split(" ");
	if (message.content.startsWith(prefix + "bot")){
    var msg = `${Date.now() - message.createdTimestamp}`;
    var hoursing = (client.readyAt.getHours()+3);
    if (hoursing > 12) {
      var hoursing  = (hoursing-12);
    }
        let embed = new Discord.MessageEmbed()
        
      .setColor('RANDOM')
      .setThumbnail(message.guild.iconURL)
      .setTitle(`:robot: Bot info `)
      .addField(':desktop:  Server:',client.guilds.cache.size)
      .addField(':busts_in_silhouette:   Users :',client.users.cache.size)
        .addField('📶 Time Taken :', msg)
        .addField(':earth_asia: WebSocket :', client.ws.ping)
        .addField(':date: Uptime :', client.readyAt.getDate()+"/"+(client.readyAt.getMonth()+1)+"/"+client.readyAt.getFullYear()+" - "+(hoursing)+":"+client.readyAt.getMinutes()+":"+client.readyAt.getSeconds()+" (Mecca time)")
        .addField(':crown: Owners :', " ALPHA Team 2020 ")
        message.channel.send(embed);
      }
});



client.on('message', function(message) {
    if(message.content.startsWith(prefix+'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
			let embed = new Discord.MessageEmbed()
			.setTitle(` Command : ${prefix}roll `)
			.setColor("RANDOM")
			.setDescription(`
			** Description: ** You can roll by number it support you in giveaways...etc
			** Usage: **
		${prefix}roll [number]
			** Example: **
			${prefix}roll 5
			${prefix}roll 15
			`)
			message.channel.send({embed})
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});






client.login(process.env.BOT_TOKEN);
