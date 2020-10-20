const Discord = require("discord.js");
const Client = require("discord.js");
const client = new Discord.Client({ disableMentions: "all" });

const prefix = "a!"
const token = process.env.token;
const MessageEmbed = require("discord.js");
const color = "RED"

client.login(token);

client.on("ready", async message => {
  console.log(`
____________
${client.user.tag} is ready!
${client.users.cache.size} user's!`)
});

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (message.content.startsWith(prefix)) return;
  
  const args = message.content.slice(prefix.length).trim().split(/ +/g); //fine, lol
  const cmd = args.shift().toLowerCase();
  
  if (cmd === "help") {
    const embed = new MessageEmbed()
    .setAuthor(client.user.username + '', client.user.displayAvatarURL())
    .addField("Ping", `${prefix}ping`, true)
    .setColor(color)
  }
  
  if (cmd === "ping") {
    const m = await message.channel.send("Pinging...")
    
    setTimeout(function() {
      message.channel.send({
      embed: { 
        color: color,
        description: `**${message.author.tag}**, __**${client.ws.ping}**__**ms**`
      }
    }).then(() => {m.delete()})
    }, 3000)
  }
});

// on github?? Ok, this code on vins.js or all? ok, lol