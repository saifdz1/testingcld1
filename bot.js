const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "$"; 





client.on('ready',  () => {
  console.log('Please wait !');
  console.log('Maya Bot test !');
  console.log('Maya Bot test !');
  console.log('Maya Bot test !');
  console.log('Maya Bot test !');
  console.log('Maya Bot test !');
  console.log('Maya Bot test !');
  console.log('Maya Bot test !');
  console.log('Bot is online !');
  console.log('===============');

client.user.setStatus("dnd");


});



client.on('ready',  () => {
Client.user.setGame(` Hi ! | $help . `,'https://www.twitch.tv/ntbquavodegreat');
});


client.on('message', message => {
     if (message.content === "hello") {
              if (!message.guild) return;

       const embed = new Discord.RichEmbed()
       .setColor('RANDOM')
	   .setTitle( ' ALPHA Cloud Testing ')
       .addField("------------------------- ")
	   .setDescription(`
	   
	   ** Hello In Alpha **
	   
	   Our Discord Link : 
	   https://discord.gg/afxBYJn
	   
	   
		`)
	   .setFooter(message.author.username,' ALPHA Bot ')

   message.channel.sendEmbed(embed)
} 
});



client.login(process.env.BOT_TOKEN);