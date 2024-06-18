const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="sudhanshusrivastav25@gmail.com"
global.location="NCR-FARIDABAD."


global.mongodb= process.env.MONGODB_URI || "mongodb://atlas-sql-6661dad75a51a628fef4d216-p2ief.a.query.mongodb.net/myVirtualDatabase?ssl=true&authSource=admin"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
// global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/KYueiQqbAuFJAq4fjhyVGX";
global.website=process.env.GURL || "https://chat.whatsapp.com/KYueiQqbAuFJAq4fjhyVGX" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/5eb38579b0027e9eca2d3.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ - The Bachelor's Squad " 


global.devs = "918766381024" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "918766381024";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || "3"  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || "3",  // Warn count for users to kick/block when warn limit exceed!
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/aa8ec6cb708f96c46d15e.jpg,https://telegra.ph/file/771685c3fbf2b001ae4ff.jpg,https://telegra.ph/file/d1dcf11923be50a1d3647.jpg," // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_09_06_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDc4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI3LFxuICAgICAgICA0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTYzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDExMixcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA2MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNixcbiAgICAgICAgOTcsXG4gICAgICAgIDE4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDUsXG4gICAgICAgIDgzLFxuICAgICAgICA5MixcbiAgICAgICAgMTgwLFxuICAgICAgICA1NixcbiAgICAgICAgNzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDksXG4gICAgICAgIDE2LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTEyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjksXG4gICAgICAgIDk0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDExOSxcbiAgICAgICAgODMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTMzLFxuICAgICAgICA5MCxcbiAgICAgICAgNTksXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDYzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMixcbiAgICAgICAgNTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTksXG4gICAgICAgIDM5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjMyLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjMzLFxuICAgICAgICA3OSxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjcsXG4gICAgICAgIDcwLFxuICAgICAgICAxODAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA5LFxuICAgICAgICA2OSxcbiAgICAgICAgODMsXG4gICAgICAgIDEwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDU2LFxuICAgICAgICAzMCxcbiAgICAgICAgODIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDksXG4gICAgICAgIDMzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNSxcbiAgICAgICAgODcsXG4gICAgICAgIDcyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTU2LFxuICAgICAgICA0OSxcbiAgICAgICAgNzksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjU0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMixcbiAgICAgICAgODUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDc5LFxuICAgICAgICAzNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTMzLFxuICAgICAgICA4LFxuICAgICAgICAyMixcbiAgICAgICAgOTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJoTDBlOTBlZjBJL0c2Nit1MDFDUTQ5SVZ3ZG96Wm16djlwbnVRS21WL2pBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTMxMTM3NzkyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMEE3RUNGQkMzMTE3RjVEOUIwQUQ5MzgxRUFFQjFCNDFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4NDUzMzQzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5MzExMzc3OTI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1NzI0NTBDQkMzMjgwNUQzOTEyQkQ1QjdBRjlGODVFM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg0NTMzNDRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQWxjTTNkZFhSWFc1Y0pBeGpkWXBCUVwiLFxuICBcInBob25lSWRcIjogXCI4ZWFiMTRjNy02MmNjLTRmYWUtYmMwZC1mN2RhOGNlNDZhZjBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA5LFxuICAgICAgMjYsXG4gICAgICAyMTQsXG4gICAgICA5NCxcbiAgICAgIDc5LFxuICAgICAgNjIsXG4gICAgICAyMTMsXG4gICAgICAyMTQsXG4gICAgICAxODAsXG4gICAgICA2NixcbiAgICAgIDIyLFxuICAgICAgMTU4LFxuICAgICAgOTcsXG4gICAgICA4OSxcbiAgICAgIDcxLFxuICAgICAgMTg5LFxuICAgICAgMTIwLFxuICAgICAgMzksXG4gICAgICAxOCxcbiAgICAgIDg1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDUsXG4gICAgICA3NCxcbiAgICAgIDY4LFxuICAgICAgNDAsXG4gICAgICAxMTAsXG4gICAgICAyNDEsXG4gICAgICAyNDQsXG4gICAgICAzLFxuICAgICAgMTkxLFxuICAgICAgMTYwLFxuICAgICAgMTc5LFxuICAgICAgMjUsXG4gICAgICAyNTUsXG4gICAgICAyNyxcbiAgICAgIDM5LFxuICAgICAgMTQwLFxuICAgICAgMTIwLFxuICAgICAgMTExLFxuICAgICAgNDcsXG4gICAgICA4NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ012U3IvSUVFTm1JdHJNR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicVhBbE5zV2ZkaHRYNlBlRThtWUc2djVZcGQrNXlaL29wb0hrQW03Rm1SND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxSmNXWUp3NDZTNVhITjdLZnR1NFFmTlc5clpyY1k5cGtBQUdoR1NUTzV4dFE4eVk5QUM5QXhxNU1rTDJWUnp1cWxSRHRFbzlOcXlQZU4wUGJwVWpDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4VDBlYTI2LzRvbTZ5bG9oYWk0ZjFZcG9Jd0Z3OE80Z3kza0JtakdMYmZQZXlNUktxNHNmSnJjVmNpK2pPVi90SStMMUo1Qi9PVnVVSktYMkgwd1BpZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxOTMxMTM3NzkyOToxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlN1ZGhhbnNodSBJVCDjhaRcXG7jhaRcXG7jhaRcXG7jhaRcXG7jhaRcXG7jhaRcXG7jhaRcXG7jhaRcXG7jhaRcXG7jhaRcXG7jhaRcXG7jhaRcXG7jhaRcXG7jhaRcXG7jhaRcXG7jhaRcXG7jhaRcXG7jhaRcXG7jhaRcXG7jhaRcXG7jhaRcXG7jhaRcXG7jhaRcXG7jhaRcXG7jhaRcXG7jhaRcXG7jhaRcXG7jhaRcXG7jhaRcXG7jhaRcXG7jhaRcIixcbiAgICBcImxpZFwiOiBcIjIyNzIyOTUzOTgxNTU5ODoxOUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxOTMxMTM3NzkyOToxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NDUzMzQyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQW1MXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBbUwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYcVErLzdaL25YK3loRnJLRWRrbXp5djZVK2RwMjFGRzBtQ0grS1N2RmZZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzMTM1OTc3NzAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgwOTg1NTg0MDBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBbU0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJUVzh3VDZJaEV6d2V6Wk9TK3NXZ0RnRFU4RTVySklsNXdHYnd6TUQ3c1RRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzMTM1OTc3NzEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODA5OTI2NDk3OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "1", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Owner 'The Bachelor's Squad' " , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "insta/srivastava034",
  packname: process.env.PACK_NAME || "DailyUsableSticker",
  botname : process.env.BOT_NAME  || "【 T H A N O S 】BOT ",
  ownername:process.env.OWNER_NAME|| "Sudhanshu Srivastava",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "DEFAULT"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "https://replit.com/@hackerkon034/Suhail-Md#Thanos%20Menu.jpg",// SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
