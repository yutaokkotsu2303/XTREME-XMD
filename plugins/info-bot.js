const { cmd } = require('../command');

cmd({
    pattern: "bot",
    alias: ["bots", "prince"],
    desc: "*ɪɴғᴏʀᴍᴀᴛɪᴏɴs sᴜʀ ʟᴇ ʙᴏᴛ ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*",
    react: "🤖",
    category: "info",
    filename: __filename,
}, 
async (conn, mek, m, {
    reply
}) => {
    try {
        const credits = `
> ╭━━〔 𝗫𝗧𝗥𝗘𝗠𝗘-𝗫𝗠𝗗 〕━⬣
> ┃ 📡 Status       : Online ✅
> ┃ 👤 Dev          :  *ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*
> ┃ 🔧 Mode Bot     : ${conn.public ? "🌐 Public" : "🔒 Self"}
> ┃ 📝 Prefix       : [ ${prefix} ]
> ╰━━━━━━━━━━━━━━━━━⬣
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*
        `.trim();

        await conn.sendMessage(m.chat, {
            image: { url: 'https://files.catbox.moe/ee7do3.jpg' },
            gifPlayback: true,
            caption: credits,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: "𝐗𝐓𝐑𝐄𝐌𝐄-𝐗𝐌𝐃",
                    body: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ",
                    thumbnailUrl: 'https://files.catbox.moe/8w3v3b.jpg',
                    sourceUrl: "https://whatsapp.com/channel/0029Vb9qyTY47XeJ7i0wcQ40",
                    mediaType: 1,
                    renderLargerThumbnail: false
                }
            }
        }, { quoted: m });

        await conn.sendMessage(m.chat, {
            audio: { url: 'https://url.bwmxmd.online/Adams.0eltfmev.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: m });

        await conn.sendMessage(m.chat, {
            react: {
                text: "烙",
                key: m.key
            }
        });

    } catch (e) {
        console.error("Erreur dans la commande BOT :", e);
        reply("*⚠️ Erreur lors de l'envoi des informations du bot.*");
    }
});
