const { cmd } = require('../command');

cmd({
    pattern: "getpp",
    alias: ["g-pp", "ppuser", "photopp"],
    desc: "*ʀéᴄᴜᴘèʀᴇ ʟᴀ ᴘʜᴏᴛᴏ ᴅᴇ ᴘʀᴏғɪʟ ᴅ'ᴜɴ ᴜᴛɪʟɪsᴀᴛᴇᴜʀ*",
    react: "📷",
    category: "owner",
    filename: __filename,
}, 
async (conn, mek, m, {
    args, isOwner, reply
}) => {
    try {
        if (!isOwner) return reply("*❌ ᴄᴏᴍᴍᴀɴᴅᴇ ʀésᴇʀᴠéᴇ ᴀᴜ ᴘʀᴏᴘʀɪéᴛᴀɪʀᴇ ᴅᴜ ʙᴏᴛ.*");

        let target;

        // Mention
        if (m.mentionedJid && m.mentionedJid.length > 0) {
            target = m.mentionedJid[0];
        }
        // Si reply
        else if (m.quoted && m.quoted.sender) {
            target = m.quoted.sender;
        }
        // Si numéro texte
        else if (args[0]) {
            const num = args[0].replace(/[^0-9]/g, '');
            target = `${num}@s.whatsapp.net`;
        } 
        // Sinon, pas de cible
        else {
            return reply(`*❓ Exemple :*\n• \`.getpp 52xxxxxx`\n• \`.getpp @tag`ou reply à un message`);
        }

        const pp = await conn.profilePictureUrl(target, 'image').catch(() => null);
        if (!pp) return reply("*🙈 Photo de profil masquée ou privée.*");

        await conn.sendMessage(m.chat, {
            image: { url: pp },
            caption: `╭⭑━━➤ 𝐗𝐓𝐑𝐄𝐌𝐄 𝐗𝐌𝐃\n> ✅ *𝗽𝗽 𝗿𝗲́𝗰𝘂𝗽𝗲́𝗿𝗲́𝗲 𝗱𝗲 :* ${target.split('@')[0]}\n╰⭑━━━━━━━━⭑━➤\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*`
        }, { quoted: m });

    } catch (err) {
        console.error("Erreur dans getpp:", err);
        reply("*⚠️ Une erreur est survenue lors de la récupération de la photo.*");
    }
});
