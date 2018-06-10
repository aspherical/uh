const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const snekfetch = require('snekfetch');


const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);

  bot.user.setActivity("Prefix: !", {type: "watching"});


});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = "!";
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}kick`){

    //!kick @daeshan askin for it

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Tiime", message.createdAt)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "incidents");
    if(!kickChannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

    return;
  }
  
  
    
  
 

  
  
    
    
if (cmd === `${prefix}insult`) {
  const { text } = await snekfetch.get('https://evilinsult.com/generate_insult.php?');

    message.channel.send(text);

}
 
                     
                     
        
    
  

  
  

if (cmd === `${prefix}eval`) {
 if(message.author.id !== "136596907291181056") return;
      try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }

  
  
  if (cmd === `${prefix}kill`) {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!kUser) return message.channel.send("Can't find user!")
   message.channel.sendMessage(`:knife: I have successfully killed ${kUser}. :knife:`)
 } 
  
  
 if (cmd === `${prefix}ping`) {
   message.channel.sendMessage(`Pong! \`${bot.pings[0]}ms\``);
 }
  
 if (cmd === `${prefix}8ball`) {
  var ball = ['Yes','No doubt about it','Try again','signs point to yes','I say no','No chance','Dont think so'];
  message.channel.sendMessage(ball[Math.floor(Math.random () * ball.length)]);
 }
  
  
 
        


  if(cmd === `${prefix}report`){

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user.");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#15f153")
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

    return;
  }

  
  
 if (cmd === `${prefix}kms`) {
   message.channel.sendMessage(`:knife: I have successfully killed ${message.author}. :knife:`)
 }
  
  
if (cmd === `${prefix}random`) {
  message.channel.sendMessage(`Here you go a random picture ${message.author}. https://r.sine.com/ `)
}
  
  
  
  
 if (cmd === `${prefix}coconut`) {
   message.author.sendMessage("https://www.youtube.com/watch?v=w0AOGeqOnFY");
   message.reply("Check your DMs.")
 }
  
  
  
  
 if (cmd === `${prefix}setgame`) {
   if (message.author.id == "136596907291181056") {
   var argresult = args.join(' ');
   if (!argresult) argresult = null;
   bot.user.setGame(argresult);
   message.reply("It has been set..");
   } else {
     message.reply("DONT EVEN TRY IT BOI!");
   }
 }

 if (cmd === `${prefix}setstatus`) {
   if (message.author.id == "136596907291181056") {
   var argresult = args.join(' ');
   bot.user.setStatus(argresult);
   message.reply("It has been set..");
   } else {
     message.reply("DONT EVEN TRY IT BOI!");
   }
 }

  



  if(cmd === `${prefix}serverinfo`){

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);

    return message.channel.send(serverembed);
  }
  
  
  
  
  if(cmd === `${prefix}rf`){
    
    let seicon = message.guild.iconURL;
    let rfembed = new Discord.RichEmbed()
    .setTitle("Royal Family")
    .setDescirpion("This is a current list of the Royal Family of Sweden")
    .setThumbnail(seicon)
    .addField("ErikSATStenkilsson",
            "By the Grace of God, His Majesty King Erik Samuel Archbold Terrance Stenkilsson of the Swedes, the Goths and the Wends GMROS LMROS GMROPS LMROV LMROC")
    .addField("ScottHJStenkilsson",
              "His Majesty Prince Consort Scott Harvey James Stenkilsson of Sweden OV LMROC OPS")
    .addField("SamMountbatten",
              "His Royal Highness, Prince Sam Mountbatten of Gothenburg OPS")
    .addField("ThatGuyConsequential",
              "His Royal Highness Prince Theodore Thomas Stenkilsson of Skåne, Lord & Master of the Administration Committee OV ROS")
    .addField("Apollo_Rookie",
              "His Royal Highness Prince Magnus James Stenkilsson of Lappland, OPS");
    
    return message.channel.send(rfembed);
  }
  
  
if (cmd === `${prefix}warn`) {
 if (message.member.hasPermission("ADMINISTRATOR")) {
 let reason = args.slice(1).join(' ');
 let user = message.mentions.users.first();
 let modlog = message.guild.channels.find('name', 'incidents');
 if (!modlog) return message.reply('I cannot find a mod-log channel');
 if (reason.length < 1) return message.reply('You must supply a reason for the warning.');
 if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them.').catch(console.error);
 const embed = new Discord.RichEmbed()
 .setColor(0x32CD32)
 .addField('Action:', 'Warning')
 .addField('User:', `${user.username}#${user.discriminator}`)
 .addField('Modrator:', `${message.author.username}#${message.author.discriminator}`)
 .addField('Reason', reason);
 return bot.channels.get(modlog.id).sendEmbed(embed);

 
 }
}
  


  


  

  
  
  
  if(cmd === `${prefix}botinfo`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt);

    return message.channel.send(botembed);
  }
  
  
  
  if(cmd === `${prefix}ban`){

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do pal!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#bc0000")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "incidents");
    if(!incidentchannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);


    return;
  }
  
  
  

  
  
  

  
  
  
if(cmd === `${prefix}help`){
  
  let helpEmbed = new Discord.RichEmbed()
  .setTitle("Command List")
  .setDescription("This is a List of all the Current commands")
  .setColor("#bc0000")
    .addField("setgame [Game]",
            "[BOT OWNER] Sets the bot's game")
    .addField("setstatus [Game]",
            "[BOT OWNER] Sets the bot's status")
  .addField("Ban [User] [Reason]",
            "[ADMINISTRATOR] Bans the User, A reason must be given otherwise the command will not work.")
    .addField("Kick [User] [Reason]",
            "[ADMINISTARTOR] Kicks the User, A reason must be given otherwise the command will not work.")
    .addField("Warn [User] [Reason]",
            "[MODERATOR] Warns the User, A reason must be given otherwise the command will not work.")
    .addField("Report [User] [Reason]",
            "[PUBLIC USE] Reports the User, A reason must be given otherwise the commamd will not work. Abuse of this command will result in a Ban.")
      .addField("myinfio ",
            "[PUBLIC USE] Shows you a list of your Infomation")
        .addField("botinfo ",
            "[PUBLIC USE] Shows you a list of the bot's Infomation")
        .addField("serverinfo ",
            "[PUBLIC USE] Shows you a list of the Servers Infomation")
        .addField("coconut ",
            "[PUBLIC USE] Shows you a video of the Coconut Song")
        .addField("kms ",
            "[PUBLIC USE] To kill yourself")
        .addField("kill [USER] ",
            "[PUBLIC USE] Kills the user")
        .addField("Insult [USER] ",
            "[PUBLIC USE] Insults the User")     
        .addField("8ball [Question] ",
            "[PUBLIC USE] Ask the magis 8ball a question");
  
    
  
  
  
  message.author.send(helpEmbed)
  
  return;
}
  
  
  
  
  
if (cmd === `${prefix}myinfo`){

 let embed = new Discord.RichEmbed()
 .setAuthor(message.author.username)
 .setDescription("This is **_YOUR_** info!")
 .setColor("0x008B8B")
 .addField("Username", `${message.author.username}#${message.author.discriminator}`)
 .addField("ID", message.author.id)
 .addField("Created on/at", message.author.createdAt);

 message.channel.sendEmbed(embed);

}


 
    
            
            
  
   
});

const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

  
bot.login("NDUzMjIxMTU3MjE1NDA0MDM1.Dfbvtw.ieMvA0D2Xu132gimB3i4zDi2mz0");