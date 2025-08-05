const { cmd } = require('../command');

cmd({
  pattern: "owner",
  alias: ["kerm"],
  desc: "Get owner number",
  category: "misc",
  filename: __filename
}, async (conn, mek, m, { from }) => {
  try {
    const owners = [
      { number: '+52 81 4555 0855', name: 'ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ', organization: 'ᴘʀɪɴᴄᴇ ᴛᴇᴀᴍ' }
    ];

    for (const owner of owners) {
      await conn.sendMessage(from, {
        contacts: {
          displayName: owner.name,
          contacts: [{
            vcard:
              `BEGIN:VCARD\n` +
              `VERSION:3.0\n` +
              `FN:${owner.name}\n` +
              `ORG:${owner.organization}\n` +
              `TEL;type=CELL;type=VOICE;waid=${owner.number.replace(/\D/g, '')}:${owner.number}\n` +
              `END:VCARD`
          }]
        }
      }, { quoted: mek });
    }
  } catch (error) {
    console.error(error);
    await conn.sendMessage(from, {
      text: 'Sorry, there was an error retrieving owner contacts.'
    }, { quoted: mek });
  }
});
