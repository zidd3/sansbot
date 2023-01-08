import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, ` _*Bang/kak kalo make bot tolong donasi untuk beli kouta*_\n\ncari level dengan cara main di bot rekomendasi = tebakkata\nketik .siuu untuk menu simpe`,wm + '\n\n' + botdate, giflogo, [['𝘼𝙇𝙇 𝙈𝙀𝙉𝙐','.? all'],['𝙇𝙄𝙎𝙏 𝙈𝙀𝙉𝙐','.siuuu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'Total Cintaku Padamu',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sgc
                      }}
})
}


handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = /^(menu|help|co)$/i
export default handler
