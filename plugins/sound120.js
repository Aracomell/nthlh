import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
    let info = fs.readFileSync('./mp3/soundultah.mp3')

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

conn.reply(m.chat, info, m, { quoted: fkontak },{ contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://chat.whatsapp.com/KNkpoT4oX5yFA18GlPttgl",
    mediaType: 2,
    description: "https://www.youtube.com/channel/UCMx4e8anOq_Olt2nMSv0Cow", 
    title: '© ZennX-Botz',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sig  }}})
}
handler.command = ['soundultah']
handler.help = ['soundultah']
handler.tags = ['sounds']
export default handler
