const Discord = require('discord.js');
const client = new Discord.Client();
const token = '';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '!카카오톡 가입') {
    message.reply('카카오톡 주소 : https://open.kakao.com/o/gk1et6Cc');
  }
});

client.login(token);