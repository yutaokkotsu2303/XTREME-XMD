const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "haiko",
    alias: ["thanksto"],
    desc: "thanks to dev for helping",
    category: "main",
    react: "🗯️",
    filename: __filename
},
async (conn, mek, m, { from }) => {
    try {
        const message =`╭━━━⪨RAHEEM-XMD-3⪩━━━╮
┃╭╼━━━━━━━━━━━┈⊷
┃┃👨‍💻 𝗗𝗘𝗩:RAHEEM-CM
┃┃🪀 𝗡𝗨𝗠𝗕𝗘𝗥:+255763111390 
┃┃🛠️ 𝗕𝗡𝗔𝗠𝗘:RAHEEM-XMD-3 
┃┃🙋‍♂️ 𝗛𝗜: @${m.sender.split("@")[0]}
┃╰╼━━━━━━━━━━━┈⊷
╰╼══════════════╾╯
> *𝑃𝑂𝑊𝐸𝑅𝐸𝐷 𝐵𝑌 RAHEEM*`;

        await conn.sendMessage(from, {
            image: { url: 'https://files.catbox.moe/a97zm1.jpg' },
            caption: message,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1000,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363398101781980@newsletter', // remplace avec ton vrai newsletterJid si besoin
                    newsletterName: 'RAHEEM-CM',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (err) {
        console.error("ThanksTo Error:", err);
        await conn.sendMessage(from, { text: `Error: ${err.message}` }, { quoted: mek });
    }
});
