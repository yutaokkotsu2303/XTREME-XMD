
<h1 align="center">🚀ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ</h1>

<p align="center">
  <img src="https://files.catbox.moe/jfbed2.jpg" width="300"/><br>
  <b>Fast, Powerful, and Stylish WhatsApp Bot built for fun and performance.</b>
</p>

<p align="center">
  <a href="https://github.com/PrinceXtremeX/XTREME-XMD"><img src="https://img.shields.io/github/stars/PrinceXtremeX/XTREME-XMD?style=flat-square&color=yellow"></a>
  <a href="https://github.com/PrinceXtremeX/XTREME-XMD/fork"><img src="https://img.shields.io/github/forks/PrinceXtremeX/XTREME-XMD?style=flat-square&color=lightblue"></a>
  <a href="https://whatsapp.com/channel/0029Vb9qyTY47XeJ7i0wcQ40"><img src="https://img.shields.io/badge/WhatsApp-Channel-25D366?style=flat-square&logo=whatsapp"></a>
  <a href="https://github.com/PrinceXtremeX"><img src="https://img.shields.io/badge/Dev-Prince Xtreme-blueviolet?style=flat-square"></a>
</p>

**sᴇssɪᴏɴ ɪᴅ💫**

[![XTREME XMD SESSION](https://img.shields.io/badge/XTREME%20-XMD%20SESSION-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://haiko-mdx-v2-session.onrender.com/pair)
---

🧠 **ғᴇᴀᴛᴜʀᴇs**

- 🔁 ᴀᴜᴛᴏ ʀᴇsᴛᴀʀᴛ & ʙᴀɪʟᴇʏs ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ sᴜᴘᴘᴏʀᴛ  
- 🔌 ᴅʏɴᴀᴍɪᴄ ᴘʟᴜɢɪɴ ʟᴏᴀᴅᴇʀ  
- 🔐 ᴘʀɪᴠᴀᴛᴇ/ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅs  
- 🖥️ ᴄᴏɴsᴏʟᴇ ɪɴᴛᴇʀғᴀᴄᴇ & ʟɪᴠᴇ ʟᴏɢs  
- ☁️ ᴅᴇᴘʟᴏʏᴀʙʟᴇ ᴏɴ ᴍᴜʟᴛɪᴘʟᴇ ᴘʟᴀᴛғᴏʀᴍs  

---

🚀 **ᴏɴᴇ-ᴄʟɪᴄᴋ ᴅᴇᴘʟᴏʏ ᴏᴘᴛɪᴏɴs**

⚡ ᴏᴘᴛɪʟɪɴᴋ
[![Deploy with Optilink](https://img.shields.io/badge/Deploy%20Now-OptiLink-2ecc71?style=for-the-badge)]([https://optiklink.com/home])

🌐 ʀᴇɴᴅᴇʀ

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/PrinceXtremeX/XTREME-XMD.git)

☁️ ᴋᴏʏᴇʙ

[![Koyeb](https://img.shields.io/badge/Deploy-Koyeb-00C2FF?style=for-the-badge&logo=koyeb)](https://www.koyeb.com)

🛰️ ᴛᴀʟᴋᴅʀᴏᴠᴇ

[![Talkdrove](https://img.shields.io/badge/Deploy-Talkdrove-orange?style=for-the-badge)](#)

🔄 ɢɪᴛʜᴜʙ ᴀᴄᴛɪᴏɴs
ᴅᴇᴘʟᴏʏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴀʟʟʏ ᴜsɪɴɢ `.yml` ᴡᴏʀᴋғʟᴏᴡ ɪɴsɪᴅᴇ ɢɪᴛʜᴜʙ ᴀᴄᴛɪᴏɴs.


**ɢɪᴛʜᴜʙ ᴅᴇᴘʟᴏʏᴍᴇɴᴛ** 

```
name: Node.js Auto-Restart CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  schedule:
    - cron: '0 */6 * * *'  # Every 6 hours

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Install FFmpeg
      run: sudo apt-get install -y ffmpeg

    - name: Start application with timeout
      run: |
        timeout 21600s npm start  # 6 hours max

    - name: Auto-commit to trigger restart
      run: |
        git config --global user.email "autorestart@bot.com"
        git config --global user.name "Auto Restart Bot"
        git commit --allow-empty -m "⏱️ Automatic bot restart"
        git push
```

---

🧰 ᴍᴀɴᴜᴀʟ ɪɴsᴛᴀʟʟᴀᴛɪᴏɴ

```ʙᴀsʜ
git https://github.com/PrinceXtremeX/XTREME-XMD
cd XTREME-XMD
npm install
node .
```

---

🔗 ᴜsᴇғᴜʟ ʟɪɴᴋs

[![Join Our WhatsApp Channel](https://img.shields.io/badge/Join%20Channel-WhatsApp-25D366?style=for-the-badge&logo=whatsapp)](https://whatsapp.com/channel/0029Vb9qyTY47XeJ7i0wcQ40)
---

👑 Credits

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*  
> ᴄᴏɴᴛᴀᴄᴛ: `529633982655`

---

*©️ 2025 – xᴛʀᴇᴍᴇ-xᴍᴅ | ᴀʟʟ ʀɪɢʜᴛs ʀᴇsᴇʀᴠᴇᴅ*

