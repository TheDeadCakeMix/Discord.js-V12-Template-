//Discord.js v12 template by DeadCakeMix#7252

.//express for keeping the bot online
const app = require("express")()

app.get(`/`, (req, res) => {
  res.send("Hello World")
})

app.listen(3000, () => {
})
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "-" //prefix for the bot 



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`)
})







//Message Event
client.on("message", async message => {


  //ping command
  if (message.content.toLowerCase().startsWith(prefix + "ping")) {
    message.channel.send("Pong")
  }


}) //end of message event



//make a secret called "token" and past your bot token in it
client.login(process.env.token)
