const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "ping",
    alias: ["speed","pong"],use: '.ping',
    desc: "Check bot's response time.",
    category: "main",
    react: "📌",
    filename: __filename
},
async (conn, mek, m, { from, quoted, sender, reply }) => {
    try {
        const start = new Date().getTime();

        const reactionEmojis = ['❄️'];
        const textEmojis = ['🚀'];

        const reactionEmoji = reactionEmojis[Math.floor(Math.random() * reactionEmojis.length)];
        let textEmoji = textEmojis[Math.floor(Math.random() * textEmojis.length)];

        // Ensure reaction and text emojis are different
        while (textEmoji === reactionEmoji) {
            textEmoji = textEmojis[Math.floor(Math.random() * textEmojis.length)];
        }

        // Send reaction using conn.sendMessage()
        await conn.sendMessage(from, {
            react: { text: textEmoji, key: mek.key }
        });

        const end = new Date().getTime();
        const responseTime = (end - start) / 1000;

        const text = `╭━━ 「 *\`𝗣𝗜𝗡𝗚 𝗧𝗘𝗦𝗧\`* 」 
┃• 🤖 *BOT* : *XTREME-XMD*
┃• ⏳ *PING* : *${responseTime.toFixed(2)}MS ${reactionEmoji}*
┃• 💫 *STATUTS* : ONLINE
╰━━━━━━━━━━━━━━━❍
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*`;

        await conn.sendMessage(from, {
            text,
            contextInfo: {
                mentionedJid: [sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363418161689316@newsletter',
                    newsletterName: "𝗫𝗧𝗥𝗘𝗠𝗘-𝗫𝗠𝗗",
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in ping command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});

// ping2 

cmd({
    pattern: "ping2",
    desc: "Check bot's response time.",
    category: "🍥 main",
    react: "📡",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '*PINGING...⏳*' })
        const endTime = Date.now()
        const ping = endTime - startTime
        await conn.sendMessage(from, { text: `╭━━━⪨𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧⪩━━━╮
┃│❈ 𝗣𝗜𝗡𝗚𝟮: *${ping}MS*
┃╰───────────┈⊷
╰⭑━━━━━━━━━━━━⭑━➤` }, { quoted: message })
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
