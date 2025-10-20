const { makeid } = require('./gen-id');
const express = require('express');
const fs = require('fs');
let router = express.Router();
const pino = require("pino");
const { default: makeWASocket, useMultiFileAuthState, delay, Browsers, makeCacheableSignalKeyStore, getAggregateVotesInPollMessage, DisconnectReason, WA_DEFAULT_EPHEMERAL, jidNormalizedUser, proto, getDevice, generateWAMessageFromContent, fetchLatestBaileysVersion, makeInMemoryStore, getContentType, generateForwardMessageContent, downloadContentFromMessage, jidDecode } = require('@whiskeysockets/baileys')

const { upload } = require('./mega');
function removeFile(FilePath) {
    if (!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true });
}
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
    async function GIFTED_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/' + id);
        try {
var items = ["Safari"];
function selectRandomItem(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
var randomItem = selectRandomItem(items);
            
            let sock = makeWASocket({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
                },
                printQRInTerminal: false,
                generateHighQualityLinkPreview: true,
                logger: pino({ level: "fatal" }).child({ level: "fatal" }),
                syncFullHistory: false,
                browser: Browsers.macOS(randomItem)
            });
            if (!sock.authState.creds.registered) {
                await delay(1500);
                num = num.replace(/[^0-9]/g, '');
                const code = await sock.requestPairingCode(num);
                if (!res.headersSent) {
                    await res.send({ code });
                }
            }
            sock.ev.on('creds.update', saveCreds);
            sock.ev.on("connection.update", async (s) => {

    const {
                    connection,
                    lastDisconnect
                } = s;
                
                if (connection == "open") {
                    await delay(5000);
                    let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                    let rf = __dirname + `/temp/${id}/creds.json`;
                    function generateRandomText() {
                        const prefix = "3EB";
                        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                        let randomText = prefix;
                        for (let i = prefix.length; i < 22; i++) {
                            const randomIndex = Math.floor(Math.random() * characters.length);
                            randomText += characters.charAt(randomIndex);
                        }
                        return randomText;
                    }
                    const randomText = generateRandomText();
                    try {


                        
                        const { upload } = require('./mega');
                        const mega_url = await upload(fs.createReadStream(rf), `${sock.user.id}.json`);
                        const string_session = mega_url.replace('https://mega.nz/file/', '');
                        let md = "MINI-JESUS-CRASH~" + string_session;
                        let code = await sock.sendMessage(sock.user.id, { text: md });
                        let desc = `*> ▬▬ι══════════════ι▬▬
    𓊈 𝐌𝐈𝐍𝐈 𝐉𝐄𝐒𝐔𝐒 𝐂𝐑𝐀𝐒𝐇.1.00 𓊉
> ▬▬ι══════════════ι▬▬

> █▒▒▒▒▒▒▒██▒▒▒▒▒▒▒█
> ▒ 𝐂𝐑𝐄𝐀𝐓𝐄 𝐁𝐘 𝐃𝐀𝐖𝐄𝐍𝐒 𝐁𝐎𝐘
> ▒ 𝐒𝐂𝐑𝐈𝐏𝐓 𝐁𝐎𝐓 𝐖𝐄𝐁 
> ▒ 𝐅𝐑𝐄𝐄 𝐁𝐔𝐆 𝐁𝐎𝐓
> ▒ 𝐁𝐀𝐘 𝐒𝐂𝐑𝐈𝐏𝐓 𝐎𝐍 𝐏𝐀𝐘𝐏𝐀𝐋 *5$*
> █▒▒▒▒▒▒▒██▒▒▒▒▒▒▒█

> 𝐒𝐞𝐮𝐥𝐞 50 𝐏𝐞𝐫𝐬𝐨𝐧𝐧𝐞 𝐏𝐞𝐮𝐯𝐞𝐧𝐭 𝐂𝐨𝐧𝐧𝐞𝐜𝐭𝐞 𝐋𝐞 𝐁𝐨𝐭
> 𝐏𝐨𝐮𝐫 𝐀𝐯𝐨𝐢𝐫 𝐋𝐞 𝐁𝐨𝐭 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝐂𝐨𝐧𝐭𝐚𝐜𝐭𝐞 𝐋𝐞 𝐃𝐞𝐯
> 𝐎𝐮 𝐑𝐞𝐠𝐚𝐫𝐝𝐞 20 𝐏𝐮𝐛𝐥𝐢𝐜𝐢𝐭𝐞 𝐃𝐞 5𝐬 ..!!

【 𝐂𝐎𝐍𝐓𝐀𝐂𝐓 】— *Contacte Le Développeur.*
> *+50942241547*
> 𝐃𝐄𝐕 𝐃𝐀𝐖𝐄𝐍𝐒 𝐁𝐎𝐘 🙃🙈
> 𝐌𝐑 𝐏𝐑𝐎𝐁𝐋𝐄𝐌𝐀𝐓𝐈𝐐𝐔𝐄 𝐃𝐄𝐕 🙈*`; 
                        await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: "dawens",
thumbnailUrl: "https://files.catbox.moe/x16nfd.png",
sourceUrl: "https://whatsapp.com/channel/0029VbCHd5V1dAw132PB7M1B",
mediaType: 1,
renderLargerThumbnail: true
}  
}
},
{quoted:code })
                    } catch (e) {
                            let ddd = sock.sendMessage(sock.user.id, { text: e });
                            let desc = `*Don't Share with anyone this code use for deploy KANGO-XMD*\n\n ◦ *Github:* https://github.com/your github name/your bot name`;
                            await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: "dawens",
thumbnailUrl: "https://files.catbox.moe/jot00s.png",
sourceUrl: "https://whatsapp.com/channel/0029VbCHd5V1dAw132PB7M1B",
mediaType: 2,
renderLargerThumbnail: true,
showAdAttribution: true
}  
}
},
{quoted:ddd })
                    }
                    await delay(10);
                    await sock.ws.close();
                    await removeFile('./temp/' + id);
                    console.log(`👤 ${sock.user.id} 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 ✅ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...`);
                    await delay(10);
                    process.exit();
                } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10);
                    GIFTED_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/' + id);
            if (!res.headersSent) {
                await res.send({ code: "❗ Service Unavailable" });
            }
        }
    }
   return await GIFTED_MD_PAIR_CODE();
});/*
setInterval(() => {
    console.log("☘️ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...");
    process.exit();
}, 180000); //30min*/
module.exports = router;
