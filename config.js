//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUpwUjNER3BIdWdyVHpxZTFRSnRIMEtYd04rNzJhMGFtS3YybVNQZTdYOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNisrdUcxQmNadlgzQk9NNDYwTG5oY1VXRGlFNUQ2OWJuaEp6UzR4a25YST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZQ3RvaG5QZG1XeDhRYzJKNFZSZERKY3JzM3E3NHh0bDZiSVJ2OTM4TjBBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNMFY5L1FZcCs5dkdkMW9ObDFJNE8xd2QwallwWGpHM05LeFpRTDcwaGhrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllGN0dZQ01lTGUvQ1o5S0tGbUEwWGJXc3J5L0RGSjRDd2hFZEdkWktRa289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBuQ05yMXJBZEFmQncwbU8wRHhZWEM0T1haWGtmWG11UGFBMFMydHhjMXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0VaQkEvMytBN1Q3dElQM1U5K0V0S0FOUFcza0xJNG9WRGg3Zjg4OCtIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibzlRZDk4a0t3YnlMcVU2dUNLaUljdFJXVWFjbm5hNWdjNUs5UU9wRURXUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVRU2VwV2lRUXY5THBxWlZuZWUwMnNWaTJlYVozci85czllUDJqcDNjUVFySWkzYVRKdDNzNFhUc2xlRzRCYlNYS1VaM0R0TFhzcnpLQ3lmQk1nakRnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQsImFkdlNlY3JldEtleSI6IjVuS0E0NDZ5VW96QTF6aTJBRFpPSGt6NWx5S0FESSthdXlBaVFQRkU4UG89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjc2NDgzOTUwODRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNEE2M0FCQUI5RjVCODU1OUU0QzVERjlBNzM1NTM5ODMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczOTIwMTQwNH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjc2NDgzOTUwODRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzJGMTM4MDdENTU3QjA1OTFCMDM3MjUzNDdEMURBOUQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczOTIwMTQwNH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoibXlzenN5T2VSaGFKMzdyd01FMnhIdyIsInBob25lSWQiOiJjYzZkYzU1Yi05NWZmLTQ0MGMtYWRiYS0xMzIzYTFkOGE4MzciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUktMRkhQdE1wTjJheTUwYzNLT21XelNoMFRvPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjkvQXZkUUpRb3dHM1crYTlHNjdhQjFNUThRTT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI0UEVIMjk5RSIsIm1lIjp7ImlkIjoiMjc2NDgzOTUwODQ6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJaYWhpZXIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xLSHFMTUhFT3EycUwwR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlZTNTRuOHFCRTM2MTJOOVFUUTdLRyt4MjhVUm1IcDZwNTU2aCtTcDBmMGM9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImxZUVh3enMvZmh2MFpZNHV4NW1ZRElCcGowNG95SWtQMkR2QmJnMWZKWUJsRFJ4Q2ZDZ004OWd5a2RtUCtiTENQWnptcXA1VC8xb1UyT1JSUFVjMERnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ4Y2Q4SjU4ek8zR0pVUGl2cDNLSmJFaVhYcXZ4NkNJeDhjUUtvWElXOXlWRFplTzdTdVphMUkyS2U0TUE1M0ZBeHVXMzlVVlFUc3JoVWtnNEp5b2xDQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3NjQ4Mzk1MDg0OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVlV1ZUovS2dSTit0ZGpmVUUwT3lodnNkdkZFWmg2ZXFlZWVvZmtxZEg5SCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczOTIwMTQwMCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQbmEifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
