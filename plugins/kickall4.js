const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "kickallfast",
    alias: ["kickall4", "kickrush"],
    desc: "*⚡ ʀᴇᴍᴏᴠᴇ ᴀʟʟ ɴᴏɴ-ᴀᴅᴍɪɴ ᴍᴇᴍʙᴇʀs ᴍᴏᴍᴇɴᴛᴀɴᴇᴍᴇɴᴛ*",
    react: "⚡",
    category: "group",
    filename: __filename,
}, 
async (conn, mek, m, {
    from, isGroup, senderNumber, groupMetadata, groupAdmins, isBotAdmins, reply
}) => {
    try {
        if (!isGroup) return reply("*📛 ᴄᴏᴍᴍᴀɴᴅᴇ ᴘᴏᴜʀ ʟᴇs ɢʀᴏᴜᴘᴇs sᴇᴜʟᴇᴍᴇɴᴛ*");
        const botOwner = conn.user.id.split(":")[0];
        if (senderNumber !== botOwner) return reply("*⛔ sᴇᴜʟ ʟᴇ ᴘʀᴏᴘʀɪéᴛᴀɪʀᴇ ᴅᴜ ʙᴏᴛ ᴘᴇᴜᴛ ᴜᴛɪʟɪsᴇʀ çᴀ*");
        if (!isBotAdmins) return reply("*🤖 ᴊᴀɪ ʙᴇsᴏɪɴ ᴅᴇ ᴅʀᴏɪᴛs ᴅ'ᴀᴅᴍɪɴ*");

        const allParticipants = groupMetadata.participants;
        const botJid = conn.user.id;
        const nonAdmins = allParticipants
            .filter(p => !groupAdmins.includes(p.id) && p.id !== botJid);

        if (nonAdmins.length === 0) return reply("*ℹ️ Aᴜᴄᴜɴ ᴍᴇᴍʙʀᴇ à ᴇxᴘᴜʟsᴇʀ*");

        const idsToKick = nonAdmins.map(p => p.id);
        await conn.groupParticipantsUpdate(from, idsToKick, "remove");

        reply(`*✅ ${idsToKick.length} ᴍᴇᴍʙʀᴇs ᴇxᴘᴜʟsᴇ́s ᴅᴜ ɢʀᴏᴜᴘᴇ ${groupMetadata.subject} ᴇɴ 1 sᴇᴄᴏɴᴅᴇ*`);
    } catch (err) {
        console.error("Erreur dans kickallfast:", err);
        reply("*⚠️ ᴇʀʀᴇᴜʀ ʟᴏʀs ᴅᴇ ʟ'ᴇxᴘᴜʟsɪᴏɴ ᴅᴇs ᴍᴇᴍʙʀᴇs*");
    }
});
