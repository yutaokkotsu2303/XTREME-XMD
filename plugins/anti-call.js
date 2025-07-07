const { cmd } = require('../command');
const config = require('../config');
let called = false;
let antiCallEnabled = config.ANTI_CALL === "true"; // Initial value from config

// Activation / désactivation via commande
cmd({
  pattern: "anticall",
  alias: ["callblock", "rejectcall"],
  desc: "Enable or disable auto call reject feature.",
  category: "settings",
  filename: __filename
}, async (conn, m, msg, { text }) => {
  if (!text) return m.reply("*Use:* .anticall on | off");

  if (text.toLowerCase() === "on") {
    antiCallEnabled = true;
    m.reply("*✅ Anti-Call enabled.*");
  } else if (text.toLowerCase() === "off") {
    antiCallEnabled = false;
    m.reply("*❌ Anti-Call disabled.*");
  } else {
    m.reply("*Use:* .anticall on | off");
  }
});

// Événement sur les appels
cmd({ on: "body" }, async (conn, m, msg, { from }) => {
  try {
    if (!called) {
      conn.ev.on('call', async (calls) => {
        if (!antiCallEnabled) return;

        for (const call of calls) {
          if (call.status !== "offer") continue;

          await conn.rejectCall(call.id, call.from);

          if (!call.isGroup) {
            await conn.sendMessage(call.from, {
              text: "*📵 Call automatically rejected. The owner is currently busy.*",
              mentions: [call.from]
            });
          }
        }
      });

      called = true;
    }
  } catch (err) {
    console.error(err);
    m.reply("❌ Error:\n" + err.toString());
  }
});
