//Give Me Credit If Using This File Give Me Credit On Your Channel ✅ 
// Credits Dev Raheem-cm - RAHEEM-XMD-3💜 

const { isJidGroup } = require('@whiskeysockets/baileys');
const config = require('../config');

const getContextInfo = (m) => {
    return {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363398101781980@newsletter',
            newsletterName: '𝗫𝗧𝗥𝗘𝗠𝗘-𝗫𝗠𝗗',
            serverMessageId: 143,
        },
    };
};

const ppUrls = [
    'https://i.ibb.co/KhYC4FY/1221bc0bdd2354b42b293317ff2adbcf-icon.png',
    'https://i.ibb.co/KhYC4FY/1221bc0bdd2354b42b293317ff2adbcf-icon.png',
    'https://i.ibb.co/KhYC4FY/1221bc0bdd2354b42b293317ff2adbcf-icon.png',
];

const GroupEvents = async (conn, update) => {
    try {
        const isGroup = isJidGroup(update.id);
        if (!isGroup) return;

        const metadata = await conn.groupMetadata(update.id);
        const participants = update.participants;
        const desc = metadata.desc || "No Description";
        const groupMembersCount = metadata.participants.length;

        let ppUrl;
        try {
            ppUrl = await conn.profilePictureUrl(update.id, 'image');
        } catch {
            ppUrl = ppUrls[Math.floor(Math.random() * ppUrls.length)];
        }

        for (const num of participants) {
            const userName = num.split("@")[0];
            const timestamp = new Date().toLocaleString();

            if (update.action === "add" && config.WELCOME === "true") {
                const WelcomeText = `╭━━≫ 𝐖𝐄𝐋𝐂𝐎𝐌𝐄🎉 ≪━━➤
┃ ⥤ *ʜɪ ᴅᴇᴀʀ* : @${userName}
┃⥤ *ᴀᴜᴛʜᴏʀ* : *ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*
┃⥤ *ɴᴜᴍʙᴇʀ* : *#${groupMembersCount}*
┃⥤ *ᴛɪᴍᴇ* : *${timestamp}*
┃⥤ *ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ*
┃☞ *ʀᴇɢʟᴇᴍᴇɴᴛs*
┃ ┗ *ᴘᴀs ᴅᴇ ʟɪɴᴋs🚯*
┃ ┗ *ᴘᴀs ᴅᴇ ᴄᴏɴᴛᴇɴᴜ xxx🔞*
┃ ┗ *ᴘᴀs ᴅᴇ sᴘᴀᴍ📵*
╰━━━━━━━━━━━━━━━━━━➤
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*`;

                await conn.sendMessage(update.id, {
                    image: { url: ppUrl },
                    caption: WelcomeText,
                    mentions: [num],
                    contextInfo: getContextInfo({ sender: num }),
                });

            } else if (update.action === "remove" && config.WELCOME === "true") {
                const GoodbyeText = `╭━━≫ 𝐆𝐎𝐎𝐃𝐁𝐘𝐄🥺 ≪━━➤
┃ ⥤ *ʙʏᴇ ᴅᴇᴀʀ* : @${userName}
┃⥤ *ᴀᴜᴛʜᴏʀ* : *ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*
┃⥤ *ɴᴜᴍʙᴇʀ* : *#${groupMembersCount}*
┃⥤ *ᴛɪᴍᴇ* : *${timestamp}*
┃⥤ *ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ*
╰━━━━━━━━━━━━━━━━━━➤
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*`;

                await conn.sendMessage(update.id, {
                    image: { url: ppUrl },
                    caption: GoodbyeText,
                    mentions: [num],
                    contextInfo: getContextInfo({ sender: num }),
                });

            } else if (update.action === "demote" && config.ADMIN_EVENTS === "true") {
                const demoter = update.author.split("@")[0];
                await conn.sendMessage(update.id, {
                    text: `╭╼⪨ 𝚇𝚃𝚁𝙴𝙼𝙴-𝙲𝙰𝙻𝙻𝙴𝙳 ⪩╾╮
┃@${𝚍𝚎𝚖𝚘𝚝𝚎𝚛} 𝙷𝙰𝚂 𝙳𝙴𝙼𝙾𝚃𝙴𝙳 @${𝚞𝚜𝚎𝚛𝙽𝚊𝚖𝚎} 𝙵𝚁𝙾𝙼 𝙰𝙳𝙼𝙸𝙽.
┃⏰ 𝚃𝙸𝙼𝙴: ${𝚝𝚒𝚖𝚎𝚜𝚝𝚊𝚖𝚙}
┃👥 𝙶𝚁𝙾𝚄𝙿: ${𝚖𝚎𝚝𝚊𝚍𝚊𝚝𝚊.𝚜𝚞𝚋𝚓𝚎𝚌𝚝}
╰─────────────────╯
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇᴠ ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*`,
                    mentions: [update.author, num],
                    contextInfo: getContextInfo({ sender: update.author }),
                });

            } else if (update.action === "promote" && config.ADMIN_EVENTS === "true") {
                const promoter = update.author.split("@")[0];
                await conn.sendMessage(update.id, {
                    text: `╭╼⪨ 𝚇𝚃𝚁𝙴𝙼𝙴-𝙰𝙿𝙿𝙾𝙸𝙽𝚃 ⪩╾╮
┃@${promoter} 𝙷𝙰𝚂 𝙿𝚁𝙾𝙼𝙾𝚃𝙴𝙳 @${userName} 𝚃𝙾 𝙰𝙳𝙼𝙸𝙽.
┃⏰ 𝚃𝙸𝙼𝙴: ${timestamp}*
┃👥 𝙶𝚁𝙾𝚄𝙿: ${metadata.subject}
╰─────────────────╯
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*`,
                    mentions: [update.author, num],
                    contextInfo: getContextInfo({ sender: update.author }),
                });
            }
        }
    } catch (err) {
        console.error('Group event error:', err);
    }
};

module.exports = GroupEvents;
