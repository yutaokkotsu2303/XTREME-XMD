const { cmd } = require('../command');

cmd({
    pattern: "mode",
    alias: ["modestatus", "botmode"],
    desc: "*ᴀғғɪᴄʜᴇ ʟᴇ ᴍᴏᴅᴇ ᴀᴄᴛᴜᴇʟ ᴅᴜ ʙᴏᴛ (ᴘᴜʙʟɪᴄ ᴏᴜ sᴇʟғ)*",
    react: "📶",
    category: "info",
    filename: __filename,
}, 
async (conn, mek, m, {
    reply
}) => {
    try {
        const modeText = `╭━━〔 𝗫𝗧𝗥𝗘𝗠𝗘-𝗫𝗠𝗗 〕━⬣
┃  *Mode Bot 🤖:* *[${config.MODE}]*
┃  *prefix Bot 🤖:* *[${config.PREFIX}]*
╰━━━━━━━━━━━━━━━━━⬣
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*
        `.trim();

        await conn.sendMessage(m.chat, {
            text: modeText,
            contextInfo: {
                externalAdReply: {
                    title: "𝐗𝐓𝐑𝐄𝐌𝐄-𝐗𝐌𝐃",
                    body: "Cliquez ci-dessous pour copier un code",
                    mediaType: 1,
                    showAdAttribution: true,
                    sourceUrl: "https://whatsapp.com/channel/0029Vb9qyTY47XeJ7i0wcQ40",
                    renderLargerThumbnail: false
                },
                // Affiche le bouton de type "copier"
                buttonReply: {
                    buttons: [
                        {
                            name: "cta_copy",
                            buttonParamsJson: JSON.stringify({
                                display_text: "Copy Full Code!",
                                copy_code: "PutraGanteng"
                            }),
                        }
                    ]
                }
            }
        }, { quoted: m });

    } catch (e) {
        console.error("Erreur dans la commande mode :", e);
        reply("*⚠️ Erreur lors de l'affichage du mode du bot.*");
    }
});
