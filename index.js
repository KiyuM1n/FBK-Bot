const express= require("express");
const app = express();

app.listen(300, () => {
  console.log("project is running!");
})

app.get("/", (req, res) => {
  res.send("konkon kitsune!");
})

const Discord  = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on("message", message => {
  if(message.content === "奶茶") {
    message.channel.send("低能兒");
  }
  
  if(message.content === "Kiyu") {
    message.channel.send(":heart:");
  }
})

client.login(process.env.token)