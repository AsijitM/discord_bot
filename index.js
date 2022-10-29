require('dotenv').config();

const {
  Client,
  GatewayIntentBits,
  EmbedBuilder,
  PermissionsBitField,
  Permissions,
} = require(`discord.js`);

const prefix = '>';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on('ready', () => {
  console.log('Bot is online');

  client.user.setActivity(`Hey welcome`, { type: 'WATCHING' });
});

client.on('messageCreate', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  //message array

  const MessageArray = message.content.split(' ');
  const arguement = MessageArray.slice(1);
  const cmd = MessageArray[0];
  //COMMANDS
  //test commands

  if (command === 'test') {
    message.channel.send('Bot is working YAAAY!');
  }
});

client.login(process.env.DISCORD_TOKEN);
