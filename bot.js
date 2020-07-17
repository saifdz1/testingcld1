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






client.on('message', message => {
if(!message.channel.guild) return;
if (message.content.startsWith("+ping")) {
    message.channel.sendMessage(`Ping ! \`${Date.now() - message.createdTimestamp} ms\`:watch:`);
    }
});




client.on("message",function(message) {
    if(message.content.startsWith(prefix + 'uptime')) {
        let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }
    
let v1 = new Discord.RichEmbed()
  v1.setTimestamp(new Date())
  v1.setColor("RED")
  v1.setDescription('***__ Collecting Data __***')
  v1.setFooter("# | ALPHA 2020  |") 
let norelden = new Discord.RichEmbed()
.setColor('#9b59b6')
.setTimestamp(new Date())
.setThumbnail(client.user.avatarURL)
.addField("UpTime :",`**[** **Days:** \`${days}\` **Hours:** \`${hours}\` **Minutes:** \`${minutes}\` **Seconds:** \`${seconds}\` **]**`,true)
.setFooter(" ALPHA ");
  message.channel.send({embed:v1}).then(m => m.edit({embed:norelden}),5000);
}
});



client.on('message', message => {
    if (message.content.startsWith("$info")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO ALPHA BOT`` ')
            .addField('``Uptime``', [timeCon(process.uptime())], true)
            .addField('``البنق``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``السيرفرات``', [client.guilds.size], true)
            .addField('``القنوات``' , `[ ${client.channels.size} ]` , true)
            .addField('``المستخدمين``' ,`[ ${client.users.size} ]` , true)
            .addField('``الإسم``' , `[ ${client.user.tag} ]` , true)
            .addField('``الإيدي``' , `[ ${client.user.id} ]` , true)
                  .addField('``Prefix``' , `[ ! ]` , true)
                  .addField('``لغة البرمجة``' , `[ Java Script ]` , true)
                  .addField('``المالك ``' , ` [ ★سہيہفُہ★ⓢⓐⓘⓕ#2042 ] ` , true)
    })
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
