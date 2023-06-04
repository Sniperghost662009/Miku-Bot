/*By KrizChaan 🍒*/
const fs = require('fs')
const chalk = require('chalk')

//Apikeys
global.apikey = '' //Apikey consigue en api.lolhuman.xyz
global.rosekey = '1959c5deed0becdba64eb1d1'

//—————「 Bot - Creador 」—————//
global.namabot = '𝑴𝑬𝑮𝑼 - 𝑩𝑶𝑻 🔥'
global.namaowner = 'KrizChaan 🔱🦈'

//—————「 Numero de Creador 」—————//
global.owner = '5492616532494'
global.nomerowner = ["5492616532494"]
global.premium = ['5492616532494']

//—————「 Packname y Autor 」—————//
global.packname = '𝑴𝑬𝑮𝑼 - 𝑩𝑶𝑻 🔥'
global.author = 'By KrizChaan 🔱🦈'
global.isLink = 'https://chat.whatsapp.com/Lk8Ej2XQ8KvHej41vwp9qc'
global.prefa = ['', '.', '/', '!', '?', '#'] //Sin prefix + prefijo
global.sp = '•'

//—————「 Editor de Mensajes 」—————//
global.mess = {
    success: 'Listo',
    admin: 'Solo admin pueden utilizar!',
    botAdmin: 'Necesito ser admin para utilizar!',
    owner: 'Solo mi creador puede utilizar!',
    group: 'Este comando se utiliza en grupos!',
    private: 'Solo en mi chat privado!',
    bot: 'Solo yo puedo utilizar!',
    wait: 'espera un momento',
    endLimit: 'no tienes limite para usar el bot',
    error: 'error intenta de nuevo',
}

//—————「 Limite infinito」—————//
global.limitawal = {
    premium: "Infinity",
    free: 10,
}

//—————「 Imagen 」—————//
global.imageurl = 'https://i.ibb.co/S37DL7B/images-1-1.jpg'
global.thumb = fs.readFileSync('./media/thumb.jpg')

//—————「 Notificacion 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Actualizo ${__filename}'`))
    delete require.cache[file]
    require(file)
})
