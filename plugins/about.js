const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: "dev",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `> *_ᴛʜᴇ ʙᴇsᴛ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ_*
╭╼━❍ 𝗕𝗜𝗢𝗚𝗥𝗔𝗣𝗛𝗬 ❍
┃│❍ *ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*
┃│❍ *ʀᴇᴀʟ ɴᴀᴍᴇ➭ sɪᴅᴅʜᴀʀᴛʜs*
┃│❍ *ɴɪᴄᴋɴᴀᴍᴇ➮ ᴍʀ ᴊᴀᴍᴇs*
┃│❍ *ᴀɢᴇ➭ ɴᴏᴛ ᴅᴇғɪɴᴇᴅ*
┃│❍ *ᴄɪᴛʏ➭ ɴᴏᴛ ᴅᴇғɪɴᴇᴅ*
┃│❍ *ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ*
┃╰────────────────
╰╼━━━━━━━━━━━━━━━━╾╯
╭╼━❍ 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥 ❍
┃│❍➳ *ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*
┃│❍➳ *ᴏɴʟʏ ᴏɴᴇ ᴅᴇᴠᴇʟᴏᴘᴇʀ*
┃│❍➳ *ʙᴏᴛ➭ xᴛʀᴇᴍᴇ ᴍᴅx*
┃╰────────────────
╰╼━━━━━━━━━━━━━━━━╾╯
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*`
await conn.sendMessage(from, {
    image: { url: 'https://files.catbox.moe/b0vym8.jpg' },
    caption: about,
    contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363398101781980@newsletter', // ou ton JID actuel
            newsletterName: '𝗫𝗧𝗥𝗘𝗠𝗘-𝗫𝗠𝗗',
            serverMessageId: 143
        }
    }
}, { quoted: mek })

}catch(e){
console.log(e)
reply(`${e}`)
}
})
