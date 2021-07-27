const discord = require("discord.js");
const bot = new discord.Client();
const prefix = "?"
require(`dotenv`).config();
bot.on("ready", () => {
console.log(`Online!`)})


bot.on("message", async message => {
    if (message.author.bot) return;
  
    if (message.content.indexOf(prefix) !== 0) return;
  
    const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/g);
    const command = args.shift().toLowerCase();


    if (command === "s") {
        message.delete();
        if (!message.member.hasPermission("ADMINISTRATOR"))
          return message
            .reply(
              "**Sorry, you don't have permissions to use this! Need:``ADMINISTRATOR`` For Useing This Kindly Contact To Admin For Role**"
            )
            .then(r => r.delete(3200));
    
        const sayMessage = args.join(" ");
        message.channel.send(sayMessage)
      }

})


bot.login(process.env.BOT_TOKEN)