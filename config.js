//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "243858487794";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUljN1Jic3VLdUJDZlgxL1g0NjBQUDg4VG55QnNxNjluZ0lUQ1JtNDdGcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0VLeFVkT21pS2dRQVZ2ZFZIaUlERUNYVGRkakYxbmNEcFRJanNoZWhYQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5Qmw5eUd4RFRSWUVTeXBMejd5N0wyOEczYkhsK1lDdk1oYUFYandKbm00PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTbDIwQVc3Zi9uSGQ3bFdOcUQrMm5Xem0vN0lvbXd0dzlvUG5UVzgzMDNFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNMT3Bod1RnNUM5RnJiKzd3SklFOGFjdjFZeHRsOGdGcUhEc01iOWVWV2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRWY0RUb25rdnJGd2VGdjNaNUxYUy9uN1dGc1lVMVJFeXRmRHA0V2dvUW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU05UVI3eDNBT1JvWG1oeW1VV3ByclBNeWg0bEN6S3ZsdWJZWE1HbW1sND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidFYxUnpUNjBVeUtrd1ZyWjdPTStBSEtJYTQwa3gzUDlwOURIRkhOSllraz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhEOUxmS0tvL0VDaG1OOTY4cXVIUlNCdUN1TU1vejB0eU1id1czREFWeVRoZHVEOHQrdFJzYmlrZTd0NWtsaTRFd2RJdktrcjJxM2kvOWg3elFTekJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM4LCJhZHZTZWNyZXRLZXkiOiJtWUlGSDlWQ1NrV2lBMXp3NXRObUMrQ2FTcGJWRThKeGtzWHpYWEdQWmNzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI0Mzg1ODQ4Nzc5NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJENDY0NjMyMTI0REE1RDI3NTBDN0M4MzE3QTVEM0JFMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMzNjA0MjMzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ6Q190bHM5bFI0eUtObEJTMllCWWpBIiwicGhvbmVJZCI6ImZjOTA3YTI0LWI4ZmItNDdkYi05ODhiLTc4NjFiZjZiYzdkNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6VmNrbXBiOGRJa2p0V3RBRE1TMU9pTW0zL2s9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieTJzd3NxWVV5SHpQVGFPR1E3YjBxSU5VZnlJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlI4UVBQWFNFIiwibWUiOnsiaWQiOiIyNDM4NTg0ODc3OTQ6MTJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQUtBR0hJMjQzIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLdi8xYllHRVBmbTByb0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJVdEY0M3ZKa0luelNjc1FINkhOdUljdzRMZTIzMGZmN2M0ZXhVUTJiVVc4PSIsImFjY291bnRTaWduYXR1cmUiOiJnYThRM1ZrUW16b09ROXdyS0EvSytDM1RDRVNGTWxxWm9nY3FSWldVVmlZV3dZdDVKNElJNTRBeGdoM3VVSU4vaUxWYTZOa3loclN4SklUd3R0K3pCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZTUyWFpmSDVjQW1STmdockZWalhmcXBKTE4xSDhQZ0ptLzNDLzA2bzRPL0pNTGtNY3g0K2xCYWpGeUFoZ2FobHkzbVJBMlo1U3pRNlZkbS9JOHJvQXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNDM4NTg0ODc3OTQ6MTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVkxSZU43eVpDSjgwbkxFQitoemJpSE1PQzN0dDlIMyszT0hzVkVObTFGdiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMzYwNDIyOSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCdTEifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
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
