const config = require('../config');
const moment = require('moment-timezone');
const { cmd, commands } = require('../command');
const axios = require('axios');

const smallCaps = {
  "A": "ᴀ",
  "B": "ʙ",
  "C": "ᴄ",
  "D": "ᴅ",
  "E": "ᴇ",
  "F": "ꜰ",
  "G": "ɢ",
  "H": "ʜ",
  "I": "ɪ",
  "J": "ᴊ",
  "K": "ᴋ",
  "L": "ʟ",
  "M": "ᴍ",
  "N": "ɴ",
  "O": "ᴏ",
  "P": "ᴘ",
  "Q": "ǫ",
  "R": "ʀ",
  "S": "s",
  "T": "ᴛ",
  "U": "ᴜ",
  "V": "ᴠ",
  "W": "ᴡ",
  "X": "x",
  "Y": "ʏ",
  "Z": "ᴢ",
  "1": "𝟷",
  "2": "𝟸",
  "3": "𝟹",
  "4": "𝟺",
  "5": "𝟻",
  "6": "𝟻",
  "7": "𝟽",
  "9": "𝟾",
  "9": "𝟿",
  "0": "𝟶",
};

const toSmallCaps = (text) => {
  return text.split('').map(char => smallCaps[char.toUpperCase()] || char).join('');
};

cmd({
  pattern: "menu",
  alias: ["allmenu", "mini"],
  use: '.menu',
  desc: "Show all bot commands",
  category: "main",
  react: "💫",
  filename: __filename
},
async (conn, mek, m, { from, reply }) => {
  try {
    const totalCommands = commands.length;
    const date = moment().tz("America/Port-au-Prince").format("dddd, DD MMMM YYYY");

    const uptime = () => {
      let sec = process.uptime();
      let h = Math.floor(sec / 3600);
      let m = Math.floor((sec % 3600) / 60);
      let s = Math.floor(sec % 60);
      return `${h}h ${m}m ${s}s`;
    };

    let menuText = `╭─ 「 *\`𝐗𝐓𝐑𝐄𝐌𝐄-𝐗𝐌𝐃\`* 」
*│* ❈ *ᴜsᴇʀ* : @${m.sender.split("@")[0]}
*│* ❈ *ʀᴜɴᴛɪᴍᴇ* : ${uptime()}
*│* ❈ *ᴍᴏᴅᴇ* : ${config.MODE}
*│* ❈ *ᴘʀᴇғɪx* : [${config.PREFIX}]
*│* ❈ *ᴩʟᴜɢɪɴ* : 『${totalCommands}』
*│* ❈ *ᴅᴇᴠ* : *\`ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ\`*
*│* ❈ *ᴠᴇʀsɪᴏɴs* : 1.0.0
*╰────────────────❍*
`;

    let category = {};
    for (let cmd of commands) {
      if (!cmd.category) continue;
      if (!category[cmd.category]) category[cmd.category] = [];
      category[cmd.category].push(cmd);
    }

    const keys = Object.keys(category).sort();
    for (let k of keys) {
      menuText += `\n╭─『 *${k.toUpperCase()} MENU* 』`;
      const cmds = category[k].filter(c => c.pattern).sort((a, b) => a.pattern.localeCompare(b.pattern));
      cmds.forEach((cmd) => {
        const usage = cmd.pattern.split('|')[0];
        menuText += `\n├◉ ${config.PREFIX}${toSmallCaps(usage)}`;
      });
      menuText += `\n╰────────────────◉`;
    }

    const selectedStyle = menuText;

    await conn.sendMessage(from, {
      image: { url: 'https://files.catbox.moe/mry39g.jpg' },
      caption: selectedStyle,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363418161689316@newsletter',
          newsletterName: '𝐗𝐓𝐑𝐄𝐌𝐄-𝐗𝐌𝐃',
          serverMessageId: 143
        }
      }
    }, { quoted: mek });

  } catch (e) {
    console.error(e);
    reply(`❌ Error: ${e.message}`);
  }
});
