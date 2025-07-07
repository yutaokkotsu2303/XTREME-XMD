const fs = require('fs');
const path = require('path');
const config = require('../config');
const { cmd } = require('../command');

function updateEnvVariable(key, value) {
    const envPath = path.join(__dirname, "../.env");
    let env = fs.existsSync(envPath) ? fs.readFileSync(envPath, 'utf8') : '';
    const regex = new RegExp(`^${key}=.*`, "m");

    if (regex.test(env)) {
        env = env.replace(regex, `${key}=${value}`);
    } else {
        env += `\n${key}=${value}`;
    }

    fs.writeFileSync(envPath, env);

    // ری‌لود کردن dotenv و config
    require('dotenv').config({ path: envPath });

    // پاک‌سازی کش config
    delete require.cache[require.resolve('../config')];
    Object.assign(config, require('../config'));  // ری‌لود
}

function isEnabled(value) {
    return value && value.toString().toLowerCase() === "true";
}

cmd({
    pattern: "env",
    alias: ["config", "settings"],
    desc: "Bot config control panel via reply menu (ENV based)",
    category: "system",
    react: "⚙️",
    filename: __filename
}, 
async (conn, mek, m, { from, reply, isCreator }) => {
    if (!isCreator) return reply("*ᴄᴏᴍᴍᴀɴᴅ ʀᴇsᴇʀᴠᴇᴅ ғᴏʀ ᴏᴡɴᴇʀ ᴀɴᴅ ᴍʏ ᴄʀᴇᴀᴛᴏʀ ᴀʟᴏɴᴇ*");

    const menu = `*╭⭑━━➤* *1. ᴀᴜᴛᴏ ғᴇᴀᴛᴜʀᴇs*
*│➭* 1.1 - *ᴀᴜᴛᴏ ʀᴇᴘʟʏ* (${isEnabled(config.AUTO_REPLY) ? "✅" : "❌"})
*│➭* 1.2 - *ᴀᴜᴛᴏ ʀᴇᴀᴄᴛ* (${isEnabled(config.AUTO_REACT) ? "✅" : "❌"})
*│➭* 1.3 - *ᴀᴜᴛᴏ sᴛɪᴄᴋᴇʀ* (${isEnabled(config.AUTO_STICKER) ? "✅" : "❌"})
*│➭* 1.4 - *ᴀᴜᴛᴏ ᴠᴏɪᴄᴇ* (${isEnabled(config.AUTO_VOICE) ? "✅" : "❌"})
*╰─┬────❍*
*╭─┴❍ 2. sᴇᴄᴜʀɪᴛʏ ❍*
*│➭* 2.1 - *ᴀɴᴛɪ ʟɪɴᴋ* (${isEnabled(config.ANTI_LINK) ? "✅" : "❌"})
*│➭* 2.2 - *ᴀɴᴛɪ ʙᴀᴅ* (${isEnabled(config.ANTI_BAD) ? "✅" : "❌"})
*│➭* 2.3 - *ᴅᴇʟᴇᴛᴇ ʟɪɴᴋs* (${isEnabled(config.DELETE_LINKS) ? "✅" : "❌"})
*╰─┬────❍*
*╭─┴❍ 3. sᴛᴀᴛᴜs sʏsᴛᴇᴍ ❍*
*│➭* 3.1 - *ᴀᴜᴛᴏ sᴛᴀᴛᴜs sᴇᴇɴ* (${isEnabled(config.AUTO_STATUS_SEEN) ? "✅" : "❌"})
*│➭* 3.2 - *ᴀᴜᴛᴏ sᴛᴀᴛᴜs ʀᴇᴘʟʏ* (${isEnabled(config.AUTO_STATUS_REPLY) ? "✅" : "❌"})
*│➭* 3.3 - *ᴀᴜᴛᴏ sᴛᴀᴛᴜs ʀᴇᴀᴄᴛ* (${isEnabled(config.AUTO_STATUS_REACT) ? "✅" : "❌"})
*╰─┬────❍*
*╭─┴❍ 4. ᴄᴏʀᴇ ❍*
*│➭* 4.1 - *ᴀʟᴡᴀʏs ᴏɴʟɪɴᴇ* (${isEnabled(config.ALWAYS_ONLINE) ? "✅" : "❌"})
*│➭* 4.2 - *ʀᴇᴀᴅ ᴍᴇssᴀɢᴇ* (${isEnabled(config.READ_MESSAGE) ? "✅" : "❌"})
*│➭* 4.3 - *ʀᴇᴀᴅ ᴄᴍᴅ* (${isEnabled(config.READ_CMD) ? "✅" : "❌"})
*│➭* 4.4 - *ᴘᴜʙʟɪᴄ ᴍᴏᴅᴇ* (${isEnabled(config.PUBLIC_MODE) ? "✅" : "❌"})
*╰─┬────❍*
*╭─┴❍ 5. ᴛʏᴘɪɴɢ/ʀᴇᴄᴏʀᴅɪɴɢ ❍*
*│➭* 5.1 - *ᴀᴜᴛᴏ ᴛʏᴘɪɴɢ* (${isEnabled(config.AUTO_TYPING) ? "✅" : "❌"})
*│➭* 5.2 - *ᴀᴜᴛᴏ ʀᴇᴄᴏʀᴅɪɴɢ* (${isEnabled(config.AUTO_RECORDING) ? "✅" : "❌"})
*╰⭑━━━━━━━━━━⭑━➤*

_ʀᴇᴘʟʏ ᴡɪᴛʜ: 1.1, 2.2, ᴇᴛᴄ ᴛᴏ ᴛᴏɢɢʟᴇ ᴏɴ/ᴏғғ_
`;

    const sent = await conn.sendMessage(from, {
    caption: menu,
    image: { url: "https://files.catbox.moe/iopat1.jpg" }  // عکس تستی
}, { quoted: mek });

    const messageID = sent.key.id;

    const toggleSetting = (key) => {
        const current = isEnabled(config[key]);
        updateEnvVariable(key, current ? "false" : "true");
        return `*✅ *${key}* ɪs ɴᴏᴡ sᴇᴛ ᴛᴏ: *${!current ? "ᴏɴ" : "ᴏғғ"}*`;
    };

    const handler = async (msgData) => {
        const msg = msgData.messages[0];
        const quotedId = msg?.message?.extendedTextMessage?.contextInfo?.stanzaId;

        if (quotedId !== messageID) return;

        const text = msg.message?.conversation || msg.message?.extendedTextMessage?.text || "";

        const map = {
            "1.1": "AUTO_REPLY", "1.2": "AUTO_REACT", "1.3": "AUTO_STICKER", "1.4": "AUTO_VOICE",
            "2.1": "ANTI_LINK", "2.2": "ANTI_BAD", "2.3": "DELETE_LINKS",
            "3.1": "AUTO_STATUS_SEEN", "3.2": "AUTO_STATUS_REPLY", "3.3": "AUTO_STATUS_REACT",
            "4.1": "ALWAYS_ONLINE", "4.2": "READ_MESSAGE", "4.3": "READ_CMD", "4.4": "PUBLIC_MODE",
            "5.1": "AUTO_TYPING", "5.2": "AUTO_RECORDING"
        };

        const key = map[text];

        if (!key) return conn.sendMessage(from, { text: "*ʀᴇᴘʟʏ ᴡɪᴛʜ ᴀɴ ᴀᴠᴀɪʟᴀʙʟᴇ ɴᴜᴍʙᴇʀ*" }, { quoted: msg });

        const res = toggleSetting(key);
        await conn.sendMessage(from, { text: res }, { quoted: msg });
        conn.ev.off("messages.upsert", handler);
    };

    conn.ev.on("messages.upsert", handler);
    setTimeout(() => conn.ev.off("messages.upsert", handler), 60_000);
});
