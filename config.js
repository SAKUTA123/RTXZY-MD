global.owner = ['6287760550924']  
global.mods = ['6287760550924'] 
global.prems = ['6287760550924']
global.nameowner = 'Leon'
global.numberowner = '6287760550924' 
global.mail = 'my.id' 
global.gc = 'https://chat.whatsapp.com/C13wRZu0iJXJ4c5sTF3jql'
global.instagram = 'https://instagram.com/gada'
global.wm = '© Leon'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Bot WhatsApp'

//INI WAJIB DI ISI!//
global.btc = 'YOUR_APIKEY_HERE' 
//Daftar terlebih dahulu https://api.botcahx.live

global.lann = 'YOUR_APIKEY_HERE'
//Daftar terlebih dahulu https://api.betabotz.org 

global.APIs = {   
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'Apikey' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
