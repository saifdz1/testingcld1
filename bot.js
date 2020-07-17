const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!"; 





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
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
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
	if (message.content.startsWith("bot")){
    var msg = `${Date.now() - message.createdTimestamp}`;
    var hoursing = (client.readyAt.getHours()+3);
    if (hoursing > 12) {
      var hoursing  = (hoursing-12);
    }
        let embed = new Discord.MessageEmbed()
        
      .setColor('RANDOM')
      .setThumbnail(message.guild.iconURL)
      .setTitle(`:robot: Bot info `)
      .addField(':desktop:  Servers :',client.guilds.size)
      .addField(':busts_in_silhouette:   Users :',client.users.size)
        .addField('📶 Time Taken :', msg)
        .addField(':earth_asia: WebSocket :', client.ws.ping)
        .addField(':date: Uptime :', client.readyAt.getDate()+"/"+(client.readyAt.getMonth()+1)+"/"+client.readyAt.getFullYear()+" - "+(hoursing)+":"+client.readyAt.getMinutes()+":"+client.readyAt.getSeconds()+" (Mecca time)")
        .addField(':crown: Owners :', " ALPHA ")
        message.channel.send(embed);
      }
});







client.on('message', async msg =>{
	if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;
    
    let args = msg.content.split(' ');

	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)

    if(command === `avatar`){
	if(msg.channel.type === 'dm') return msg.channel.send("Nope Nope!! u can't use avatar command in DMs (:")
        let mentions = msg.mentions.members.first()
        if(!mentions) {
          let sicon = msg.author.avatarURL
          let embed = new Discord.RichEmbed()
          .setImage(msg.author.avatarURL)
          .setColor("#5074b3")
          msg.channel.send({embed})
        } else {
          let sicon = mentions.user.avatarURL
          let embed = new Discord.RichEmbed()
          .setColor("#5074b3")
          .setImage(sicon)
          msg.channel.send({embed})
        }
    };
});

client.login(process.env.BOT_TOKEN);
