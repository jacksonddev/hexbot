const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const client = new Discord.Client();
const { TOKEN, PREFIX } = require("./config.json");
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("ready", () => console.log("Je suis pret masta"))
client.on("error", () => console.error);
client.on("warn", () => console.warn);
client.on("debug", console.log);
client.login(TOKEN);

client.on("message", async msg => {

    if (msg.author.bot) return;
    if (msg.content.indexOf(PREFIX) !== 0) return;
    const args = msg.content.slice(PREFIX.length).trim().split(' ');
    const cmd = args.shift().toLowerCase();

    if (cmd === 'hex') {
        snekfetch.get(`https://staysecured.xyz/hexconverter/index.php?dec=${args}`).then(r => {
            let hexsend = new Discord.MessageEmbed()
                .setTimestamp()
 .setDescription(`**Hex:** ${r.body}
	

      `)
                .setFooter('Requested By: ' + msg.author.tag);

            msg.channel.send({ embed: hexsend });
        })
    };
});
