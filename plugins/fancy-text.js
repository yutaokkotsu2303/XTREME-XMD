const config = require('../config');
const { fancy, fancytext, listall } = require('../models/Style');
const { cmd } = require('../command');


cmd({
  pattern: "fancy",
  desc: "Makes stylish/fancy given text",
  category: "converter",
  use: "56 Asta",
  filename: __filename
}, async (_0x230c03, _0x3b568a) => {
  try {
    let _0x365550 = "╭⭑━━➤ *ғᴀɴᴄʏ sᴛʏʟᴇ*\n " + (_0x3b568a ? "```🔢 ʀᴇᴘʟʏ ᴛʜᴇ ɴᴜᴍʙᴇʀ ʏᴏᴜ ᴡᴀɴᴛs ᴛᴏ sᴇʟᴇᴄᴛ``` \n\n" : "```\t\t" + "fancy XTREME(For all text)\n\t\t" + "fancy 25 XTREME(For specific text)```\n\n");
    let _0x50c7d9 = parseInt(_0x3b568a);
    if (isNaN(_0x50c7d9)) {
      let _0x4ca942 = _0x3b568a ? _0x3b568a : "XTREME-XMD";
      listall(_0x4ca942).forEach((_0x51f58f, _0x2be109) => {
        _0x365550 += "\n" + (_0x2be109 += 1) + " " + _0x51f58f + "\n";
      });
      try {
        return await _0x230c03.send(_0x365550, {
          caption: _0x365550
        }, "", msg);
      } catch {
        return await _0x230c03.reply(_0x365550);
      }
    }
    let _0x564034 = await fancytext("" + _0x3b568a.slice(2), _0x50c7d9);
    return await _0x230c03.send(_0x564034, {}, "", _0x230c03);
  } catch (_0x8dd389) {
    return await _0x230c03.error(_0x8dd389 + "\n\ncmdName: fancy", _0x8dd389);
  }
});
