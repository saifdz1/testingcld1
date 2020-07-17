const Discord = require("discord.js");
const Client = new Discord.Client();





client.on('ready',  () => {
  console.log('Please wait !');
  console.log('===============');
  console.log('Maya Bot test !');
  console.log('Maya Bot test !');
  console.log('===============');

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
