const axios = require("axios");
const { cmd } = require("../command");

cmd({
  pattern: "fancy",
  alias: ["font", "style"],
  react: "☑️",
  desc: "Convert text into various fonts.",
  category: "tools",
  filename: __filename
}, async (conn, m, store, { from, quoted, args, q, reply }) => {
  try {
    if (!q) {
      return reply("*_❎ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ ᴛᴏ ᴄᴏɴᴠᴇʀᴛ ɪɴᴛᴏ ғᴀɴᴄʏ ғᴏɴᴛs_*\n\n*ᴇxᴀᴍᴘʟᴇ:* .ғᴀɴᴄʏ xᴛʀᴇᴍᴇ");
    }

    const apiUrl = `https://www.dark-yasiya-api.site/other/font?text=${encodeURIComponent(q)}`;
    const response = await axios.get(apiUrl);
    
    if (!response.data.status) {
      return reply("_*❌ ᴇʀʀᴏʀ ғᴇᴛᴄʜɪɴɢ ғᴏɴᴛs. ᴘʟᴇᴀsᴇ ᴛʀʏ ᴀɢᴀɪɴ ʟᴀᴛᴇʀ*_");
    }

    const fonts = response.data.result.map(item => `*${item.name}:*\n${item.result}`).join("\n\n");
    const resultText = `❄️ *ғᴀɴᴄʏ ғᴏɴᴛs ᴄᴏɴᴠᴇʀᴛᴇʀ* 💫\n\n${fonts}\n\n> *_ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ_*`;

    await conn.sendMessage(from, { text: resultText }, { quoted: m });
  } catch (error) {
    console.error("*❌ ᴇʀʀᴏʀ ɪɴ ғᴀɴᴄʏ ᴄᴏᴍᴍᴀɴᴅ:*", error);
    reply("*⚠️ ᴀɴ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ ᴡʜɪʟᴇ ғᴇᴛᴄʜɪɴɢ ғᴏɴᴛs*");
  }
});
