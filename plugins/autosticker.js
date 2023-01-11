import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {

let stiker = await sticker(null, global.API(`${pickRandom(stikerhuuu)}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
}

handler.customPrefix = /^(ivan|van|halo ivan|hai ivan)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu = [
 "https://telegra.ph/file/93d7ba2989e5dcc730db4.jpg",//patrick huu
 "https://telegra.ph/file/10f1e8b0ac5322767dae8.jpg",//anime yntkts
 "https://telegra.ph/file/c2bee8248ed3798f7f293.jpg",//windah bocil
 "https://telegra.ph/file/41ca2ab35c54bded789c1.jpg",//patrick bawa minum
 "https://telegra.ph/file/59410d72141a46bf8dc5d.jpg",//pak polpisi pap tt
 "https://telegra.ph/file/c807055f8d88abc468536.jpg",//kucing1
 "https://telegra.ph/file/b919a037a4d333bdf61c9.jpg",//kacamata
]
