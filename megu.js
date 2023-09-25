/*By Snipe 🔱🦈*/
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const fsx = require('fs-extra')
const bochil = require('@bochilteam/scraper')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const jsobfus = require('javascript-obfuscator')
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg } = require('./lib/converter')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/addlist');

//base de mensajes en privado y grupos 
global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) global.db.data = {
    users: {},
    group: {},
    chats: {},
    database: {},
    settings: {},
    donate: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
}

moment.tz.setDefault("America/Santiago").locale("id")

module.exports = conn = async (conn, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await conn.decodeJid(conn.user.id)
        const isCreator = [botNumber, ...global.owner, '6289513081052@s.whatsapp.net'].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)

	    
        const groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false

        //Todos los días 
        const hariini = moment.tz('America/Santiago').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('America/Santiago').format('HH : mm : ss')
        const time2 = moment().tz('America/Santiago').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var noche = 'Buenas noches ✨🌌️'
        }
        if(time2 < "19:00:00"){
        var noche = 'Hora de Mimir ✨🌌'
        }
        if(time2 < "18:00:00"){
        var noche = 'Buenas tardes 🌇'
        }
        if(time2 < "15:00:00"){
        var noche = 'Buenas tardes 🌇️'
        }
        if(time2 < "10:00:00"){
        var noche = 'Buenos dias 🌅'
        }
        if(time2 < "05:00:00"){
        var noche = 'Buenos días 🌆'
        }
        if(time2 < "03:00:00"){
        var noche = 'Bonita madrugada UwU'
        }


        //Lista Fakes 🦈
        const ftroli = {
            key: {
                fromMe: false,
                "participant": "0@s.whatsapp.net",
                "remoteJid": "status@broadcast"
            },
            "message": {
                orderMessage: {
                    itemCount: 2022,
                    status: 200,
                    thumbnail: thumb,
                    surface: 200,
                    message: `${namaowner}`,
                    orderTitle: 'By Snipe 🔱',
                    sellerJid: '0@s.whatsapp.net'
                }
            },
            contextInfo: {
                "forwardingScore": 999,
                "isForwarded": true
            },
            sendEphemeral: true
        }
        
        const fkontak = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                'contactMessage': {
                    'displayName': `${namaowner}`,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;KrizChaan,;;;\nFN:Megu-Bot\nitem1.TEL;waid=5492616532494:5492616532494\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    'jpegThumbnail': thumb,
                    thumbnail: thumb,
                    sendEphemeral: true
                }   
            }
        }
        // Database Tambahan!!

        let prem = JSON.parse(fs.readFileSync('./database/premium.json'))
        let ban = JSON.parse(fs.readFileSync('./database/banned.json'))
        let vnnya = JSON.parse(fs.readFileSync('./database/vnnya.json'))
        let db_error = JSON.parse(fs.readFileSync('./database/error.json'));
        let db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'));
        
        
        // Const Tambahan Sc Gw
        const more = String.fromCharCode(8206)
        const readmore = more.repeat(4001)
        const totalFitur = () =>{
            var mytext = fs.readFileSync("./megu.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
        const sendvn = (teks) => {
            conn.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
        }

        for (let anju of vnnya) {
            if (budy === anju) {
                let buffer = fs.readFileSync(`./database/AUDIO/${anju}.mp3`)
                sendvn(buffer)
            }
        }
        

        //Objetivo en replicar mensaje en anunció 🦈💕
function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
}

(function(_0x391ba4,_0x421240){const _0x331109=_0x13a5,_0x1adcc2=_0x391ba4();while(!![]){try{const _0x40c670=parseInt(_0x331109(0x1be))/0x1+-parseInt(_0x331109(0x1b3))/0x2*(parseInt(_0x331109(0x1bb))/0x3)+-parseInt(_0x331109(0x1b9))/0x4*(-parseInt(_0x331109(0x1c1))/0x5)+parseInt(_0x331109(0x1c0))/0x6*(-parseInt(_0x331109(0x1b8))/0x7)+-parseInt(_0x331109(0x1b7))/0x8+-parseInt(_0x331109(0x1bc))/0x9+-parseInt(_0x331109(0x1c2))/0xa*(-parseInt(_0x331109(0x1b4))/0xb);if(_0x40c670===_0x421240)break;else _0x1adcc2['push'](_0x1adcc2['shift']());}catch(_0x52dca3){_0x1adcc2['push'](_0x1adcc2['shift']());}}}(_0x29e9,0xc89d4));function _0x29e9(){const _0x322969=['1122272AirDVV','isLink','6Opzccm','5EVzgCS','50yGvzzi','getObfuscatedCode','14wGPoDT','4699178fatIuF','obfuscate','sendMessage','4074528rhwIbc','10754611khoYWD','1743604zPhtLl','KrizChaan','6087gVSFPI','7312995uObpvU','chat'];_0x29e9=function(){return _0x322969;};return _0x29e9();}function _0x13a5(_0x5b95a9,_0x39450a){const _0x29e9b1=_0x29e9();return _0x13a5=function(_0x13a53a,_0x4c4258){_0x13a53a=_0x13a53a-0x1b3;let _0x2152f0=_0x29e9b1[_0x13a53a];return _0x2152f0;},_0x13a5(_0x5b95a9,_0x39450a);}async function obfus(_0xfea0bc){return new Promise((_0x4e9071,_0x149431)=>{const _0x1bfb1a=_0x13a5;try{const _0x5bec3f=jsobfus[_0x1bfb1a(0x1b5)](_0xfea0bc,{'compact':![],'controlFlowFlattening':!![],'controlFlowFlatteningThreshold':0x1,'numbersToExpressions':!![],'simplify':!![],'stringArrayShuffle':!![],'splitStrings':!![],'stringArrayThreshold':0x1}),_0x21630c={'status':0xc8,'author':_0x1bfb1a(0x1ba),'result':_0x5bec3f[_0x1bfb1a(0x1c3)]()};_0x4e9071(_0x21630c);}catch(_0x226fe6){_0x149431(_0x226fe6);}});}async function newReply(_0xf99f6){const _0x4b0fdd=_0x13a5,_0x45581c={'text':_0xf99f6,'contextInfo':{'externalAdReply':{'showAdAttribution':!![],'title':noche+'\x20'+pushname,'body':_0x4b0fdd(0x1ba),'thumbnailUrl':''+imageurl,'sourceUrl':''+global[_0x4b0fdd(0x1bf)],'mediaType':0x1,'renderLargerThumbnail':!![]}}};return conn[_0x4b0fdd(0x1b6)](m[_0x4b0fdd(0x1bd)],_0x45581c,{'quoted':m});}

        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
                if (!('antilinkyt' in chats)) chats.antilinkyt = false
                if (!('antilinktt' in chats)) chats.antilinktt = false
                if (!('antivirtex' in chats)) chats.antivirtex = true
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
                antilinkyt: false,
                antilinktt: false,
                antivirtex: true,
            }
            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
                if (!isNumber(setting.status)) setting.status = 0
                if (!('autobio' in setting)) setting.autobio = false
                if (!('autoread' in setting)) setting.autoread = false
            } else global.db.data.settings[botNumber] = {
                status: 0,
                autobio: false,
                autoread: false
            }

        } catch (err) {
            console.error(err)
        }
        // Public & Self
        if (!conn.public) {
            if (!m.key.fromMe && !isPremium && !isCreator) return
        }
        
        
        function _0x177a(){var _0x1c2844=['4281635LnIqDr','134690YtLptT','key','4374228MlnyAa','1418480tRWwDc','message','4523208FsuoKn','1700584sNuylB','7740649CnQRYU','data'];_0x177a=function(){return _0x1c2844;};return _0x177a();}function _0x2290(_0x10c98f,_0x4573d6){var _0x177a4c=_0x177a();return _0x2290=function(_0x229025,_0x159fff){_0x229025=_0x229025-0xa7;var _0x38b2b1=_0x177a4c[_0x229025];return _0x38b2b1;},_0x2290(_0x10c98f,_0x4573d6);}var _0x116958=_0x2290;(function(_0xa46f9d,_0x57c669){var _0x4a088c=_0x2290,_0x32dddf=_0xa46f9d();while(!![]){try{var _0x9935d3=parseInt(_0x4a088c(0xac))/0x1+-parseInt(_0x4a088c(0xa8))/0x2+-parseInt(_0x4a088c(0xa7))/0x3+parseInt(_0x4a088c(0xaf))/0x4+parseInt(_0x4a088c(0xab))/0x5+parseInt(_0x4a088c(0xae))/0x6+parseInt(_0x4a088c(0xa9))/0x7;if(_0x9935d3===_0x57c669)break;else _0x32dddf['push'](_0x32dddf['shift']());}catch(_0x6f8537){_0x32dddf['push'](_0x32dddf['shift']());}}}(_0x177a,0xc8cb6));m[_0x116958(0xb0)]&&(global['db'][_0x116958(0xaa)]['settings'][botNumber]['autoread']&&conn['readMessages']([m[_0x116958(0xad)]]));
        
        //Mensajes en consola
        if (m.message) {
            console.log(chalk.black(chalk.bgWhite('[ MENSAJE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> De'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> En'), chalk.green(m.isGroup ? pushname : 'Chat Privado', m.chat))
        }
        
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limite reseteado')
        }, {
            scheduled: true,
            timezone: "America/Santiago"
        })
        
	    if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let _uptime = process.uptime() * 1000
		let uptime = clockString(_uptime)
		await conn.updateProfileStatus(`*Megu - Bot 🔥*\nBy Snipe 💞`).catch(_ => _)
		setting.status = new Date() * 1
	    }
	    }
	
        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: conn.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, conn.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        conn.ev.emit('messages.upsert', msg)
        }
        
        if (db.data.chats[m.chat].antilink) {
            if (budy.match(`chat.whatsapp.com`)) {
                newReply(`「 ANTI LINK  」\n\nSe le detectó enviando un enlace de grupo, lo sentimos, será expulsado!`)
                if (!isBotAdmins) return newReply(`Ehh no soy admin 7-7`)
                let gclink = (`https://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return newReply(`Ehh Lo siento, no funciona, el enlace es de este grupo 😆`)
                if (isAdmins) return newReply(`Eres admin no funciona contigo 7-7`)
                if (isCreator) return newReply(`eres mi Dios a ti no te puedo eliminar `)
                conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        //Anti Yt
        if (db.data.chats[m.chat].antilinkyt) {
            if (budy.match(`https://youtu.be`)) {
                newReply(`「 ANTI YT 」\n\nSe te detectó enviando un enlace de Youtube, lo sentimos, ¡serás expulsado!`)
                if (!isBotAdmins) return newReply(`No soy admin 7-7`)
                if (isAdmins) return newReply(`Eres admin 😁`)
                if (isCreator) return newReply(`no puedo sacarte porque eres mi creador `)
                conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        //Anti Link Tiktok
        if (db.data.chats[m.chat].antilinktt) {
            if (budy.match(`https://vt.tiktok.com`)) {
                newReply(`「 ANTI TIKTOK 」\n\nSe te detecto enviando enlace de TikTok, lo siento, serás expulsado!`)
                if (!isBotAdmins) return newReply(`no soy admin 7-7`)
                if (isAdmins) return newReply(`Eres admin no puedo sacarte 7-7`)
                if (isCreator) return newReply(`Eres mi creador no puedo sacarte`)
                conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        //AntiVirtex
        if (db.data.chats[m.chat].antivirtex) {
            if (budy.length > 3500) {
                newReply(`¡¡Alguien envió un texto con demasiadas letras sera expulsado ←⁠(⁠>⁠▽⁠<⁠)⁠ﾉ\n`.repeat(300))
                newReply(`「 ANTI TRAVAS 」\n\nSe le detecto enviando Virus, lo sentimos, será expulsado !`)
                if (!isBotAdmins) return newReply(`no soy admin 7-7`)
                if (isAdmins) return newReply(`lo siento eres admin 😁`)
                if (isCreator) return newReply(`Eres mi creador no puedo uwu`)
                conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        //Mutear Chat
        if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
            return
        }
        switch (command) {
        
        //Opciones de Creador
        case 'public': {
                if (!isCreator) return newReply(mess.owner)
                conn.public = true
                newReply('Cambio de exitoso a uso general')
        }
        break
        case 'self': {
                if (!isCreator) return newReply(mess.owner)
                conn.public = false
                newReply('Cambio éxitoso para uso propio')
            }
        break

        case 'addblock':
            if (!isCreator) return newReply(mess.owner)
            if (!args[0]) return newReply(`Ejemplo:\n${prefix+command} 5492616532494`)
            bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
            let bannednya = await conn.onWhatsApp(bnnd + `@s.whatsapp.net`)
            if (bannednya.length == 0) return newReply(`Ingrese un número válido y registrado en WhatsApp!!!`)
            banned.push(bnnd)
            fs.writeFileSync('./database/banned.json', JSON.stringify(banned))
            newReply(`Número ${bnnd} Ya ha sido baneado!!!`)
        break
        
        case 'delblock':
            if (!isCreator) return newReply(mess.owner)
            if (!args[0]) return newReply(`Ejemplo:\n ${prefix+command} 5492616532494`)
            yaki = q.split("|")[0].replace(/[^0-9]/g, '')
            unp = banned.indexOf(yaki)
            banned.splice(unp, 1)
            fs.writeFileSync('./database/banned.json', JSON.stringify(banned))
            newReply(`Numero ${yaki} Ha sido desbloqueado!`)
        break
        
        case 'listblock':
            teksooo = '*Lista de baneados*\n\n'
            for (let i of banned) {
                teksooo += `- ${i}\n`
            }
            teksooo += `\n*Total : ${banned.length}*`
            conn.sendMessage(m.chat, { text: teksooo.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": banned } })
        break
       
        case 'myip': {
        if (!isCreator) return newReply(mess.owner)
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        newReply("🔎 Mi ip publica es: " + ip);
                    })
                })
            }
        break
        case 'listpc':
        case 'listachat': {
                if (!isCreator) return newReply(mess.owner)
                let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                let tekslist = `*CHAT PERSONAL*\n\n`
                tekslist += `*📱 Total Chats :* ${anu.length} Chat\n\n`
                for (let i of anu) {
                    let nama = store.messages[i].array[0].pushName
                    tekslist += `☘️ *Nombre:* ${nama}\n`
                    tekslist += `👤 *Usuario :* @${i.split('@')[0]}\n`
                    tekslist += `🔗 *Link :* https://wa.me/${i.split('@')[0]}\n\n`
                    tekslist += `──────────────────────\n\n`
                }
                newReply(tekslist)
            }
        break
        case 'listgc': 
        case 'listagrupo': {
                if (!isCreator) return newReply(mess.owner)
                let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                let tekslistgc = `*GRUPOS LISTA*\n\n`
                tekslistgc += `📱 Total Grupos: ${anu.length} Grupos\n\n`
                for (let e of anu) {
                    let metadata = await conn.groupMetadata(e)
                    tekslistgc += `☘️ *Nombre :* ${metadata.subject}\n`
                    tekslistgc += `👤 *Creador :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'sin nombre}\n`
                    tekslistgc += `🌱 *ID :* ${metadata.id}\n`
                    tekslistgc += `⏳ *Hecho :* ${moment(metadata.creation * 1000).tz('America/Santiago').format('DD/MM/YYYY HH:mm:ss')}\n`
                    tekslistgc += `👥 *Miembros :* ${metadata.participants.length}\n\n`
                    tekslistgc += `──────────────────────\n\n`
                }
                newReply(tekslistgc)
            }
        break
        
        case 'chat': {
                if (!isCreator) return newReply(mess.owner)
                if (!q) return newReply('Opciones : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete')
                if (args[0] === 'mute') {
                    conn.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    conn.chatModify({ mute: null }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    conn.chatModify({ archive: true }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    conn.chatModify({ archive: false }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    conn.chatModify({ markRead: true }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    conn.chatModify({ markRead: false }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    conn.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                }
            }
        break
        
        case 'reac': {
                if (!isCreator) return newReply(mess.owner)
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                conn.sendMessage(m.chat, reactionMessage)
            }
        break
        case 'join': {
                if (!isCreator) return newReply(mess.owner)
                if (!text) return '¡Ingresa el enlace del grupo'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return 'Link incorrecto!'
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await conn.groupAcceptInvite(result).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
        }
        break
        case 'leave': case 'salir': {
                if (!isCreator) return newReply(mess.owner)
                await conn.groupLeave(m.chat).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
        }
        break
        case 'wm': {
                if (!isCreator) return newReply(mess.owner)
                if (!text) return newReply(`Ejemplo : ${prefix + command} Megu - bot 🔥|by Snipe`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                newReply(`sticker cambió con éxito a\n\n• Paquete : ${global.packname}\n• Autor : ${global.author}`)
        }
        break
        // Testeo de velocidad 
        case 'speedtest': {
                newReply('testeando velocidad...')
                let cp = require('child_process')
                let {
                    promisify
                } = require('util')
                let exec = promisify(cp.exec).bind(cp)
                let o
                try {
                    o = await exec('python speed.py')
                } catch (e) {
                    o = e
                } finally {
                    let {
                        stdout,
                        stderr
                    } = o
                    if (stdout.trim()) newReply(stdout)
                    if (stderr.trim()) newReply(stderr)
                }
            }
        break
        /*case 'owner': 
        case 'creador': { 
                conn.sendContact(m.chat, global.owner, m)
               } bugueado :v
        break*/
       
       //Grupos 
        case 'kick': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
            }
            break
           /* case 'add': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
            } cancelado por motivo de ban
            break*/
            case 'promote': case 'daradmin': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'demote': case 'quitaradmin': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'block': {
                if (!isCreator) return newReply(mess.owner)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.updateBlockStatus(users, 'block').then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'unblock': {
                if (!isCreator) return newReply(mess.owner)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.updateBlockStatus(users, 'unblock').then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'setname': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (!text) return 'y el texto?'
                await conn.groupUpdateSubject(m.chat, text).then((res) => newReply(mess.success)).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'setdesc': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (!text) return 'y el texto?'
                await conn.groupUpdateDescription(m.chat, text).then((res) => newReply(mess.success)).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'tagall': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                let teks = `*TODOS*
 
                 🍒 *mensaje: ${q ? q : 'sin mensaje'}*\n\n`
                for (let mem of participants) {
                    teks += `• @${mem.id.split('@')[0]}\n`
                }
                conn.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            }
            break
            case 'hidetag': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                conn.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            }
            break
            case 'totag': {
               if (!m.isGroup) return newReply(mess.group)
               if (!isBotAdmins) return mess.botAdmin
               if (!isAdmins) return mess.admin
               if (!m.quoted) return `Responder mensaje con subtítulo ${prefix + command}`
               conn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
            case 'antilink': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antilink) return newReply(`Anteriormente activo️`)
                    db.data.chats[m.chat].antilink = true
                    newReply(`Anti links activado️`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antilink) return newReply(`Anteriormente desactivado`)
                    db.data.chats[m.chat].antilink = false
                    newReply(`Antilink desactivado️`)
                } else {
                    newReply(`Modo ${command}\n\n\nTipo: ${prefix + command}on/off`)
                }
            }
            break
            case 'antilinkyt': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antilinkyt) return newReply(`Anteriormente activo `)
                    db.data.chats[m.chat].antilinkyt = true
                    newReply(`Antilink YouTube activado️`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antilinkyt) return newReply(`Anteriormente desactivado`)
                    db.data.chats[m.chat].antilinkyt = false
                    newReply(`Antilink YouTube desactivado`)
                } else {
                    newReply(`Modo ${command}\n\n\nTipo ${prefix + command}on/off`)
                }
            }
            break
            case 'antilinktt': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antilinktt) return newReply(`Anteriormente activo`)
                    db.data.chats[m.chat].antilinktt = true
                    newReply(`Antilink TikTok Activado ️`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antilinktt) return newReply(`Anteriormente desactivado`)
                    db.data.chats[m.chat].antilinktt = false
                    newReply(`Antilink TikTok desactivado️`)
                } else {
                    newReply(`Modo ${command}\n\n\nTipo ${prefix + command}on/off`)
                }
            }
            break
            case 'mutegc': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].mute) return newReply(`Anteriormente activo`)
                    db.data.chats[m.chat].mute = true
                    newReply(`ha sido silenciado en este grupo️`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].mute) return newReply(`Anteriormente inactivo`)
                    db.data.chats[m.chat].mute = false
                    newReply(`Ya no esta silenciado️`)
                } else {
                   newReply(`Modo ${command}\n\n\nTipo ${prefix + command}on/off`)
                }
            }
            break
           
            case 'group':
            case 'grup':
            case 'grupo': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (args[0] === 'close') {
                    await conn.groupSettingUpdate(m.chat, 'announcement').then((res) => newReply(`Cerrado con éxito️`)).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'open') {
                    await conn.groupSettingUpdate(m.chat, 'not_announcement').then((res) => newReply(`Abierto con exito`)).catch((err) => newReply(jsonformat(err)))
                } else {
                  newReply(`Modo ${command}\n\n\nTipo: ${prefix + command}open/close`)
                }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (args[0] === 'open') {
                    await conn.groupSettingUpdate(m.chat, 'unlocked').then((res) => newReply(`La info del grupo esta abierta️`)).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'close') {
                    await conn.groupSettingUpdate(m.chat, 'locked').then((res) => newReply(`La info del grupo esta cerrado️`)).catch((err) => newReply(jsonformat(err)))
                } else {
                    newReply(`Modo ${command}\n\n\ntipo: ${prefix + command}on/off`)
                }
            }
            break
            case 'linkgroup':
            case 'linkgrup':
            case 'linkgc':
            case 'link':  {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                let response = await conn.groupInviteCode(m.chat)
                conn.sendText(m.chat, `*LINK GRUPO*\n💫 *Nombre :* ${groupMetadata.subject}\n💫 *Creador :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'desconocido'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Link:* https://chat.whatsapp.com/${response}\n👥 *Miembros:* ${groupMetadata.participants.length}\n`, m,  {
                    detectLink: true
                })
            }
            break
            case 'revoke': 
            case 'reset': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                await conn.groupRevokeInvite(m.chat)
                    .then(res => {
                        newReply(`Restablecido con éxito, enlace de invitación del grupo: ${groupMetadata.subject}`)
                    }).catch((err) => newReply(jsonformat(err)))
                    }
            break
            case 'listonline':
            case 'liston':
            case 'listaon': {
                if (!m.isGroup) newReply(mess.group)
                let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                let online = [...Object.keys(store.presences[id]), botNumber]
                conn.sendText(m.chat, '🍂 Lista De activos:\n\n' + online.map(v => '❄️ @' + v.replace(/@.+/, '')).join`\n`, m, {
                    mentions: online
                })
            }
            break
        // Porcentaje en juego 
            case 'lesbi':
            case 'kuaker':
            case 'gay':
            case 'puta':
            case 'gordo':
            case 'puto': {
                if (!q) return newReply(`Ingresa un nombre\nEjemplo :\n ${command} Felix`)
                const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
                const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
                newReply(`El porcentaje ${command} de ${q} es de *${sange}%* 🤣😂`)
                }
            break
              
            
			//Comandos de descarga
			case 'git': case 'gitclone': {
                if (!args[0]) return newReply(`Ejemplo:\n${prefix}${command} link del repositorio`)
                if (!isUrl(args[0]) && !args[0].includes('github.com')) return newReply(`Link incorrecto!`)
                let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
                let [, user, repo] = args[0].match(regex1) || []
                repo = repo.replace(/.git$/, '')
                let url = `https://api.github.com/repos/${user}/${repo}/zipball`
                let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
                conn.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
            }       
            break
			case 'play':
			if (args.length == 0) return await newReply(`Ejemplo: ${prefix + command} metamorphosis`
			axios
				.get(`https://api.lolhuman.xyz/api/ytsearch?apikey=${apikey}&query=${full_args}`)
				.then(({ data }) => {
					axios.get(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${apikey}&url=https://www.youtube.com/watch?v=${data.result[0].videoId}`).then(({ data }) => {
var info = `⋆⃟⋆⃟❄ *Nombre* : *${data.result.title}*\n`
info += `⋆⃟⋆⃟❄ *Tamaño* : *${data.result.size}*`
info += `⋆⃟⋆⃟❄ *Duracion* : *${data.result.duration}*`
info += `⋆⃟⋆⃟❄ *Link*: *${data.result.link}`
conn.sendMessage(m.chat, { image: { url: data.result.thumbnail }, info }).then(() => {
							conn.sendMessage(m.chat, { audio: { url: data.result.link }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp3` })
						})
					})
				})
				.catch(console.error)
			break
			case 'ytmp3':
			if (args.length == 0) return newReply(`Ejemplo: ${prefix + command} tu link`)
			axios
				.get(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${apikey}&url=${args[0]}`)
				.then(({ data }) => {
					var info = `⋆⃟⋆⃟❄️ *Nombre* : *${data.result.title}*\n`
					info += `⋆⃟⋆⃟❄️ *Tamaño* : *${data.result.size}*`
					info += `⋆⃟⋆⃟❄ *Duracion* : *${data.result.duration}*`
			        info += `⋆⃟⋆⃟❄ *Link*: *${data.result.link}*`
					conn.sendMessage(m.chat, { image: { url: data.result.thumbnail }, info }).then(() => {
						conn.sendMessage(m.chat, { audio: { url: data.result.link }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp3` })
					})
				})
				.catch(console.error)
			break
			
		    case 'ytmp4':
			if (args.length == 0) return newReply(`Ejemplo: ${prefix + command} tu link`)
			axios
				.get(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${apikey}&url=${args[0]}`)
				.then(({ data }) => {
					var caption = `⋆⃟⋆⃟❄️ *Nombre* : *${data.result.title}*\n`
					caption += `⋆⃟⋆⃟❄️ *Tamaño* : *${data.result.size}*`
					conn.sendMessage(m.chat, { image: { url: data.result.thumbnail }, caption }).then(() => {
						conn.sendMessage(m.chat, { video: { url: data.result.link }, mimetype: 'video/mp4', fileName: `${data.result.title}.mp4` })
					})
				})
				.catch(console.error)
			break
			
			case 'tiktok': {
			if (args.length == 0) return newReply(`Ejemplo: ${prefix + command} tu link`)
			axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				conn.sendMessage(m.chat, { video: { url: data.result.link }, mimetype: 'video/mp4' })
			})
			
			}
			break
			
		   case 'tiktokaudio': {
			if (args.length == 0) return newReply(`Ejemplo: ${prefix + command} tu link`)
			conn.sendMessage(m.chat, { audio: { url: `https://api.lolhuman.xyz/api/tiktokmusic?apikey=${apikey}&url=${args[0]}` }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp3` })
			
			}
			break
			
			case 'igdl': {
			if (args.length == 0) return newReply(`Ejemplo: ${prefix + command} tu link`)
			axios.get(`https://api.lolhuman.xyz/api/instagram?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				var url = data.result[0]
				if (url.includes('.mp4')) {
					conn.sendMessage(m.chat, { video: { url }, mimetype: 'video/mp4' })
				} else {
					conn.sendMessage(m.chat, { image: { url } })
				}
			})
			
            }
			break
			
		    case 'igdl2': {
			if (args.length == 0) return newReply(`Ejemplo: ${prefix + command} tu link`)
			axios.get(`https://api.lolhuman.xyz/api/instagram2?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				for (var x of data.result) {
					if (x.includes('.mp4')) {
						conn.sendMessage(m.chat, { video: { url: x }, mimetype: 'video/mp4' })
					} else {
						conn.sendMessage(m.chat, { image: { url: x } })
					}
				}
			})
			
			}
			break
			
			case 'twtdl': {
			if (args.length == 0) return newReply(`Ejemplo: ${prefix + command} tu link`)
			axios.get(`https://api.lolhuman.xyz/api/twitter?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				conn.sendMessage(m.chat, { video: { url: data.result.link[data.result.link.length - 1].link }, mimetype: 'video/mp4' })
			})
			
			}
			break
			
		    case 'fbdl': {
			if (args.length == 0) return newReply(`Ejemplo: ${prefix + command} tu link`)
			axios.get(`https://api.lolhuman.xyz/api/facebook?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				conn.sendMessage(m.chat, { video: { url: data.result }, mimetype: 'video/mp4' })
			})
			
			}
			break
			
			//Otros
            case 'delete': 
            case 'del': 
            case 'd': {
                if (!m.quoted) return false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return newReply('¡El mensaje no fue enviado por el bot!')
                conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            
            case 'ssweb':
			if (args.length == 0) return newReply(`Ejemplo: ${prefix + command} https://api.lolhuman.xyz`)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/ssweb?apikey=${apikey}&url=${args[0]}`}, caption: `${mess.done}`}, { quoted: m})
			break
			
		    case 'ssweb2':
			if (args.length == 0) return newReply(`Ejemplo: ${prefix + command} https://api.lolhuman.xyz`)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/sswebfull?apikey=${apikey}&url=${args[0]}`}, caption: `${mess.done}`}, { quoted: m})
			break
			
		    case 'shortlink':
			if (args.length == 0) return newReply(`Ejemplo: ${prefix + command} https://api.lolhuman.xyz`)
			axios.get(`https://api.lolhuman.xyz/api/ouoshortlink?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				newReply(data.result)
			})
			break
			
			// AI FITUR
			case 'iaimagen': {
            if (args.length == 0) return newReply(`Ejemplo :\n${prefix+command} gato dibujado`)
            conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/dall-e?apikey=${apikey}&text=${args[0]}` }, caption: `Listo UwU` }, {quoted:m})
            }
            break
            case 'ia':
			if (args.length == 0) return newReply(`Ejemplo: ${prefix + command} crea un juego de cartas en codigo JS`)
			axios.get(`https://api.lolhuman.xyz/api/openai?apikey=${apikey}&text=${encodeURIComponent(full_args)}&user=${senderNumber}`).then(({ data }) => {
				newReply(data.result)
			})
			break
            //Imagenes etc
            case 'pinterest': {
                if (!text) return newReply(`Ejemplo : ${prefix + command} Naruto`)
		        let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]               
               conn.sendMessage(m.chat, { image: { url: result}, caption: mess.done}, { quoted: m })
            }
            break
            
            case 'google': {
                if (!text) return newReply(`Ejemlo : ${prefix + command} <nombre de la búsqueda>`)
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Busqueda Sobre : ${text}\n\n`
                for (let g of res) {
                teks += `• *Nombre* : ${g.title}\n`
                teks += `• *Descripción* : ${g.snippet}\n`
                teks += `• *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                newReply(teks)
                })
                }
            break
            
            case 'imagen': {
                if (!text) return newReply(`Ejemplo : ${prefix + command} waifu`)
                let gis = require('g-i-s')
                gis(text, async (error, result) => {
                    n = result
                    images = n[Math.floor(Math.random() * n.length)].url
                    conn.sendMessage(m.chat, { image: { url: images}, caption: `*Busqueda* : ${text}\n*Enlace* : ${images}`}, { quoted: m })
                })
            }
            break
            
			//Convertidor
            
			case 'sticker':
            case 'stiker':
            case 's':{
                if (!quoted) return newReply(`Balas Video/Image Dengan Caption ${prefix + command}`)

                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await conn.sendImageAsSticker(m.chat, media, m, {
                        packname: global.packname,
                        author: global.author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 20) return newReply('Maximo 20 segundos')
                    let media = await quoted.download()
                    let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, {
                        packname: global.packname,
                        author: global.author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return newReply(`responde a un video o imagen`)
                }
            }
            break
            
            case 'smeme': {
	        let respond = `responde a la imagen y agrega tu texto`
	        if (!/image/.test(mime)) return newReply(respond)
            if (!text) return newReply(respond)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await conn.downloadAndSaveMediaMessage(qmsg)
	        let fatGans = await TelegraPh(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
	        let FaTiH = await conn.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	        break
	             
            case 'swm': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) return newReply(`Ejemplo : ${prefix + command} kriz|:v`)
                if (!teks2) return newReply(`Ejemplo : ${prefix + command} kriz|:v`)
                if (/image/.test(mime)) {
                    let media = await conn.downloadMediaMessage(qmsg)
                    let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 12) return newReply('Maximo 12 segundos')
                    let media = await conn.downloadMediaMessage(qmsg)
                    let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    return newReply(`responde a un video o imagen`)
                }
            }
            break
            
            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return newReply(`Ejemplo : ${prefix + command} 😅+🤔`)
                if (!emoji2) return newReply(`Ejemplo : ${prefix + command} 😅+🤔`)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await conn.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
                
            }
            break
            
            case 'emojimix2': {
                if (!text) return newReply(`Ejemplp : ${prefix + command} 😅+🥺`)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
                for (let res of anu.results) {
                    let encmedia = await conn.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
                
            }
            break
            
            case 'attp':
                try {
                if (args.length == 0) return newReply(`Ejemplo: ${prefix + command} KrizChaan`)
                await conn.sendMessage(m.chat, {sticker: {url:`https://api.lolhuman.xyz/api/attp?apikey=${apikey}&text=${full_args}` }}, { quoted: m })
            } catch (e) {
                newReply(mess.error)
            }
            break
            case 'attp2':
                try {
                    if (args.length == 0) return newReply(`Ejemplo: ${prefix + command} KrizChaan`)
                    await conn.sendMessage(m.chat, {sticker: {url:`https://api.lolhuman.xyz/api/attp2?apikey=${apikey}&text=${full_args}` }}, { quoted: m })
                } catch (e) {
                    newReply(mess.error)
            }
            break
            case 'ttp':
                try {
                    if (args.length == 0) return newReply(`Ejemplo: ${prefix + command} KrizChaan`)
                    await conn.sendMessage(m.chat, {sticker: {url:`https://api.lolhuman.xyz/api/ttp?apikey=${apikey}&text=${full_args}` }}, { quoted: m })
                } catch (e) {
                    newReply(mess.error)
            }
            break
            
            case 'toimage': 
            case 'toimg': {
                if (!/webp/.test(mime)) return newReply(`Responde al sticker`)
                
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    conn.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
                
            }
            break
	        case 'tomp4': 
	        case 'tovideo': {
                if (!/webp/.test(mime)) return newReply(`Responde al sticker`)
                
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Listo' } }, { quoted: m })
                await fs.unlinkSync(media)
                
            }
            break
            
            case 'toaud': 
            case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`responde al video o audio`)
            
            let media = await conn.downloadMediaMessage(qmsg)
            let audio = await toAudio(media, 'mp4')
            conn.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            
            }
            break
            
            case 'tomp3': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`responde al video o audio`)
            
            let media = await conn.downloadMediaMessage(qmsg)
            let audio = await toAudio(media, 'mp4')
            conn.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `By Kriz.mp3`}, { quoted : m })
            
            }
            break
            
            case 'tovn': 
            case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Responde a un audio`)
            
            let media = await conn.downloadMediaMessage(qmsg)
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            conn.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            
            }
            break
            
            case 'togif': {
                if (!/webp/.test(mime)) return newReply(`Responde a un sticker`)
                
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Listo 💞' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
                
            }
            break
            
	        case 'tourl': {
                
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    newReply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    newReply(util.format(anu))
                }
                await fs.unlinkSync(media)
                
            }
            break
            
            //Stalkeadas
            case 'igstalk': {
			if (args.length == 0) return newReply(`Ejemplo: ${prefix + command} LuisitoComunica`)
			
			axios.get(`https://api.lolhuman.xyz/api/stalkig/${args[0]}?apikey=${apikey}`).then(({ data }) => {
				var caption = `Usuario : ${data.result.username}\n`
				caption += `Nombre : ${data.result.fullname}\n`
				caption += `Posts : ${data.result.posts}\n`
				caption += `Seguidores : ${data.result.followers}\n`
				caption += `Siguiendo : ${data.result.following}\n`
				caption += `Bio : ${data.result.bio}`
				conn.sendMessage(m.chat, { image: { url: data.result.photo_profile }, caption })
			})
			
			}
			break

            case 'ttstalk': {
			if (args.length == 0) return newReply(`Ejemplo: ${prefix + command} <nombre del usuario>`)
			
			axios.get(`https://api.lolhuman.xyz/api/stalktiktok/${args[0]}?apikey=${apikey}`).then(({ data }) => {
				var caption = `Usuario : ${data.result.username}\n`
				caption += `Nombre : ${data.result.nickname}\n`
				caption += `Seguidores : ${data.result.followers}\n`
				caption += `Seguidos : ${data.result.followings}\n`
				caption += `Likes : ${data.result.likes}\n`
				caption += `Videos : ${data.result.video}\n`
				caption += `Bio : ${data.result.bio}\n`
				conn.sendMessage(m.chat, { image: { url: data.result.user_picture }, caption })
			})
			
			}
			break
			
			case 'ghstalk': {
			if (args.length == 0) return newReply(`Ejemplo: ${prefix + command} Confusion245`)
			
			axios.get(`https://api.lolhuman.xyz/api/github/${args[0]}?apikey=${apikey}`).then(({ data }) => {
				var caption = `Nombre : ${data.result.name}\n`
				caption += `Link : ${data.result.url}\n`
				caption += `Repositorios : ${data.result.public_repos}\n`
				caption += `Seguidores : ${data.result.followers}\n`
				caption += `Siguiendo : ${data.result.following}\n`
				caption += `Bio : ${data.result.bio}`
				conn.sendMessage(m.chat, { image: { url: data.result.avatar }, caption })
			})
			
			}
			break
			
			// Ramdon Foto
			case 'art':
            case 'bts':
            case 'exo':
            case 'elf':
            case 'loli':
            case 'neko':
            case 'waifu':
            case 'shota':
            case 'husbu':
            case 'sagiri':
            case 'shinobu':
            case 'megumin':
            case 'wallnime': {
				conn.sendMessage(m.chat, { image: { url: `http://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`}, caption: `${command} 💞`})
		    }
	        break
	  
	     
	    // Ephoto1
	    case 'wetglass':
		case 'multicolor3d':
		case 'watercolor':
		case 'luxurygold':
		case 'galaxywallpaper':
		case 'lighttext':
		case 'beautifulflower':
		case 'puppycute':
		case 'royaltext':
		case 'heartshaped':
		case 'birthdaycake':
		case 'galaxystyle':
		case 'hologram3d':
		case 'greenneon':
		case 'glossychrome':
		case 'greenbush':
		case 'metallogo':
		case 'noeltext':
		case 'glittergold':
		case 'textcake':
		case 'starsnight':
		case 'wooden3d':
		case 'textbyname':
		case 'writegalacy':
		case 'galaxybat':
		case 'snow3d':
		case 'birthdayday':
		case 'goldplaybutton':
		case 'silverplaybutton':
		case 'freefire':
			if (args.length == 0) return reply(`Ejemplo: ${prefix + command} KrizChaan`)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${apikey}&text=${args}`}, caption: `Aqui tienes 💞`})
			break

        case 'shadow':
		case 'cup':
		case 'cup1':
		case 'romance':
		case 'smoke':
		case 'burnpaper':
		case 'lovemessage':
		case 'undergrass':
		case 'love':
		case 'coffe':
		case 'woodheart':
		case 'woodenboard':
		case 'summer3d':
		case 'wolfmetal':
		case 'nature3d':
		case 'underwater':
		case 'golderrose':
		case 'summernature':
		case 'letterleaves':
		case 'glowingneon':
		case 'fallleaves':
		case 'flamming':
		case 'harrypotter':
		case 'carvedwood':
			if (args.length == 0) return reply(`Ejemplo: ${prefix + command} KrizChaan`)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${apikey}&text=${args}`}, caption: `Aqui tienes 💞`})
			break

    // Text Prome
        case 'pornhub':
		case 'glitch':
		case 'avenger':
		case 'space':
		case 'ninjalogo':
		case 'marvelstudio':
		case 'lionlogo':
		case 'wolflogo':
		case 'steel3d':
		case 'wallgravity':
			if (args.length == 0) return reply(`Ejemplo: ${prefix + command} KrizChaan`)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${apikey}&text1=${args[0]}&text2=${args[1]}`}, caption: `Aqui tienes 💞`})
			break

        case 'blackpink':
		case 'neon':
		case 'greenneon':
		case 'advanceglow':
		case 'futureneon':
		case 'sandwriting':
		case 'sandsummer':
		case 'sandengraved':
		case 'metaldark':
		case 'neonlight':
		case 'holographic':
		case 'text1917':
		case 'minion':
		case 'deluxesilver':
		case 'newyearcard':
		case 'bloodfrosted':
		case 'halloween':
		case 'jokerlogo':
		case 'fireworksparkle':
		case 'natureleaves':
		case 'bokeh':
		case 'toxic':
		case 'strawberry':
		case 'box3d':
		case 'roadwarning':
		case 'breakwall':
		case 'icecold':
		case 'luxury':
		case 'cloud':
		case 'summersand':
		case 'horrorblood':
		case 'thunder':
			if (args.length == 0) return newReply(`Ejemplo: ${prefix + command} KrizChaan`)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome/${command}?apikey=${apikey}&text=${args}` }, caption: `Aqui tienes 💞`})
			break
	    
	    case 'akira':
            case 'akiyama':
            case 'ana':
            case 'asuna':
            case 'ayuzawa':
            case 'boruto':
            case 'chitoge':
            case 'deidara':
            case 'doraemon':
            case 'elaina':
            case 'emilia':
            case 'erza':
            case 'gremory':
            case 'hestia':
            case 'hinata':
            case 'inori':
            case 'isuzu':
            case 'itachi':
            case 'itori':
            case 'kaga':
            case 'kagura':
            case 'kakasih':
            case 'kaori':
            case 'keneki':
            case 'kotori':
            case 'kurumi':
            case 'loli':
            case 'madara':
            case 'mikasa':
            case 'miku':
            case 'minato':
            case 'naruto':
            case 'nezuko':
            case 'onepiece':
            case 'pokemon':
            case 'rize':
            case 'sagiri':
            case 'sakura':
            case 'sasuke':
            case 'shina':
            case 'shinka':
            case 'shizuka':
            case 'shota':
            case 'toukachan':
            case 'tsunade':
            case 'yuki': {
                
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/${command}.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                conn.sendMessage(m.chat, { image: { url: result}, caption: (mess.done) }, { quoted: m })
        }
        break
        case 'aesthetic':
            case 'anjing':
            case 'blankpink':
            case 'boneka':
            case 'darkjokes':
            case 'hekel':
            case 'justina':
            case 'kpop':
            case 'mobil':
            case 'motor':
            case 'pubg':
            case 'rose':
            case 'ryujin':
            case 'wallhp': {
            
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Image/${command}.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                conn.sendMessage(m.chat, { image: { url: result}, caption: mess.done }, { quoted: m })
            }
        break
			case 'cyberspace':
            case 'mountain':
            case 'programming':
            case 'technology': {
            
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Wallpaper/${command}.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                conn.sendMessage(m.chat, { image: { url: result}, caption: mess.done }, { quoted: m })
            }
            break
         
            case 'match': {
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
              
                let random = anu[Math.floor(Math.random() * anu.length)]
                conn.sendMessage(m.chat, {
                    image: {
                        url: random.male
                    },
                    caption: `Hombre 💞`
                }, {
                    quoted: m
                })
                conn.sendMessage(m.chat, {
                    image: {
                        url: random.female
                    },
                    caption: `Mujer 💞`
                }, {
                    quoted: m
                })
            }
            break
            case 'wallpaper': {
            if (!text) return newReply('ingresa el nombre de tu wallpaper')
                let {
                    wallpaper
                } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                conn.sendMessage(m.chat, { image: { url: result}, caption: mess.done}, { quoted: m })
            }
            break
            
            case 'bass': 
            case 'blown': 
            case 'deep': 
            case 'earrape': 
            case 'fast': 
            case 'fat': 
            case 'nightcore': 
            case 'reverse': 
            case 'robot': 
            case 'slow': 
            case 'smooth': 
            case 'tupai': {
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return newReply(err)
                let buff = fs.readFileSync(ran)
                conn.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else newReply(`responde a un audio con el comando usado`)
                } catch (e) {
                newReply(e)
                }
                }
            break
            case 'creador':
          let owner = `「 *Creador* 」\n Hola ${pushname} 👋🏻 mi numero es : wa.me/5492616532494`
conn.sendMessage(m.chat, {
    text: owner,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `Megu - Bot 🔥`,
        body: "Mi Canal de YT 🕊️",
        thumbnailUrl: "https://i.ibb.co/S37DL7B/images-1-1.jpg",
        sourceUrl: "http://youtube.com/@Kriz_Chaan",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
break
           
case 'menu': {
    let anu =`Hola 👋🏻 ${pushname} Mi Nombre es ${namabot} Bienvenid@ a mi menu
  
╭──────────────────╮
*➼✰︙ 𝑻𝑼 𝑰𝑵𝑭𝑶* 
╰──────────────────╯
┋✧⃝👤͙ *Nombre:* ${pushname}
┋✧⃝👤͙ *Numero:* ${m.sender.split('@')[0]}
┋✧⃝👤 *Tipo:* ${isCreator ? "Creador" : "Usuario"}
╭──────────────────╮
*➼✰︙𝑪𝑹𝑬𝑨𝑫𝑶𝑹 - 𝑶𝑾𝑵𝑬𝑹*
╰──────────────────╯
┋ ⋆⃟⋆⃟🍒 ${prefix}listachat
┋ ⋆⃟⋆⃟🍒 ${prefix}listagrupo
┋ ⋆⃟⋆⃟🍒 ${prefix}public
┋ ⋆⃟⋆⃟🍒 ${prefix}self
┋ ⋆⃟⋆⃟🍒 ${prefix}myip
┋ ⋆⃟⋆⃟🍒 ${prefix}chat
┋ ⋆⃟⋆⃟🍒 ${prefix}reac
┋ ⋆⃟⋆⃟🍒 ${prefix}join
┋ ⋆⃟⋆⃟🍒 ${prefix}salir
┋ ⋆⃟⋆⃟🍒 ${prefix}wm
┋ ⋆⃟⋆⃟🍒 ${prefix}block
┋ ⋆⃟⋆⃟🍒 ${prefix}unblock
╭──────────────────╮
*➼✰︙𝑷𝑶𝑹𝑪𝑬𝑵𝑻𝑨𝑱𝑬𝑺*
╰──────────────────╯
┋ ⋆⃟⋆⃟❄️ ${prefix}lesbi
┋ ⋆⃟⋆⃟❄️ ${prefix}kuaker
┋ ⋆⃟⋆⃟❄️ ${prefix}gordo
┋ ⋆⃟⋆⃟❄️ ${prefix}puto
┋ ⋆⃟⋆⃟❄️ ${prefix}puta
┋ ⋆⃟⋆⃟❄️ ${prefix}gay
╭──────────────────╮
*➼✰︙𝑰𝑵𝑭𝑶 𝑫𝑬 𝑬𝑳 𝑩𝑶𝑻*
╰──────────────────╯
┋ ⋆⃟⋆⃟✨️ ${prefix}creador
┋ ⋆⃟⋆⃟✨️ ${prefix}ping
┋ ⋆⃟⋆⃟✨️ ${prefix}speedtest
╭──────────────────╮
*➼✰︙𝑨𝑵𝑰𝑴𝑬 - 𝑹𝑨𝑴𝑫𝑶𝑵*
╰──────────────────╯
┋ ⋆⃟⋆⃟🍁 ${prefix}ktpmaker
┋ ⋆⃟⋆⃟🍁 ${prefix}remini
┋ ⋆⃟⋆⃟🍁 ${prefix}art
┋ ⋆⃟⋆⃟🍁 ${prefix}bts
┋ ⋆⃟⋆⃟🍁 ${prefix}exo
┋ ⋆⃟⋆⃟🍁 ${prefix}elf
┋ ⋆⃟⋆⃟🍁 ${prefix}loli
┋ ⋆⃟⋆⃟🍁 ${prefix}neko
┋ ⋆⃟⋆⃟🍁 ${prefix}waifu
┋ ⋆⃟⋆⃟🍁 ${prefix}shota
┋ ⋆⃟⋆⃟🍁 ${prefix}husbu
┋ ⋆⃟⋆⃟🍁 ${prefix}sagiri
┋ ⋆⃟⋆⃟🍁 ${prefix}shinobu
┋ ⋆⃟⋆⃟🍁 ${prefix}megumin
┋ ⋆⃟⋆⃟🍁 ${prefix}wallnime
╭──────────────────╮
*➼✰︙𝑴𝑬𝑵𝑼 - 𝑮𝑹𝑼𝑷𝑶*
╰──────────────────╯ 
┋ ⋆⃟⋆⃟🎉 ${prefix}kick
┋ ⋆⃟⋆⃟🎉 ${prefix}delete
┋ ⋆⃟⋆⃟🎉 ${prefix}promote
┋ ⋆⃟⋆⃟🎉 ${prefix}demote
┋ ⋆⃟⋆⃟🎉 ${prefix}setname
┋ ⋆⃟⋆⃟🎉 ${prefix}setdesc
┋ ⋆⃟⋆⃟🎉 ${prefix}setppgc
┋ ⋆⃟⋆⃟🎉 ${prefix}tagall
┋ ⋆⃟⋆⃟🎉 ${prefix}hidetag
┋ ⋆⃟⋆⃟🎉 ${prefix}totag
┋ ⋆⃟⋆⃟🎉 ${prefix}antilink
┋ ⋆⃟⋆⃟🎉 ${prefix}antilinkyt
┋ ⋆⃟⋆⃟🎉 ${prefix}antilinktt
┋ ⋆⃟⋆⃟🎉 ${prefix}mutegc
┋ ⋆⃟⋆⃟🎉 ${prefix}grupo
┋ ⋆⃟⋆⃟🎉 ${prefix}editinfo
┋ ⋆⃟⋆⃟🎉 ${prefix}link
┋ ⋆⃟⋆⃟🎉 ${prefix}reset
┋ ⋆⃟⋆⃟🎉 ${prefix}listaon
╭──────────────────╮
*➼✰︙𝑴𝑬𝑵𝑼 - 𝑨𝑵𝑰𝑴𝑬*
╰──────────────────╯
┋ ⋆⃟⋆⃟💐 ${prefix}pokemon
┋ ⋆⃟⋆⃟💐 ${prefix}rize
┋ ⋆⃟⋆⃟💐 ${prefix}sagiri
┋ ⋆⃟⋆⃟💐 ${prefix}aesthetic
┋ ⋆⃟⋆⃟💐 ${prefix}anjing
┋ ⋆⃟⋆⃟💐 ${prefix}blankpink
┋ ⋆⃟⋆⃟💐 ${prefix}boneka
┋ ⋆⃟⋆⃟💐 ${prefix}hekel
┋ ⋆⃟⋆⃟💐 ${prefix}justina
┋ ⋆⃟⋆⃟💐 ${prefix}kpop
┋ ⋆⃟⋆⃟💐 ${prefix}mobil
┋ ⋆⃟⋆⃟💐 ${prefix}motor
┋ ⋆⃟⋆⃟💐 ${prefix}pubg
┋ ⋆⃟⋆⃟💐 ${prefix}rose
┋ ⋆⃟⋆⃟💐 ${prefix}ryujin
┋ ⋆⃟⋆⃟💐 ${prefix}wallhp
┋ ⋆⃟⋆⃟💐 ${prefix}cyberspace
┋ ⋆⃟⋆⃟💐 ${prefix}mountain
┋ ⋆⃟⋆⃟💐 ${prefix}programming
┋ ⋆⃟⋆⃟💐 ${prefix}technology 
┋ ⋆⃟⋆⃟💐 ${prefix}match
┋ ⋆⃟⋆⃟💐 ${prefix}wallpaper
╭──────────────────╮
*➼✰︙𝑬𝑭𝑬𝑪𝑻𝑶𝑺 𝑫𝑬 𝑨𝑼𝑫𝑰𝑶*
╰──────────────────╯
┋ ⋆⃟⋆⃟🎤 ${prefix}bass
┋ ⋆⃟⋆⃟🎤 ${prefix}blown
┋ ⋆⃟⋆⃟🎤 ${prefix}deep
┋ ⋆⃟⋆⃟🎤 ${prefix}earrape
┋ ⋆⃟⋆⃟🎤 ${prefix}fast
┋ ⋆⃟⋆⃟🎤 ${prefix}fat
┋ ⋆⃟⋆⃟🎤 ${prefix}nightcore
┋ ⋆⃟⋆⃟🎤 ${prefix}reverse
┋ ⋆⃟⋆⃟🎤 ${prefix}robot
┋ ⋆⃟⋆⃟🎤 ${prefix}slow
┋ ⋆⃟⋆⃟🎤 ${prefix}tupai
╭──────────────────╮
*➼✰︙𝑪𝑶𝑵𝑽𝑬𝑹𝑻𝑰𝑫𝑶𝑹𝑬𝑺*
╰──────────────────╯
┋ ⋆⃟⋆⃟💫 ${prefix}ttp
┋ ⋆⃟⋆⃟💫 ${prefix}attp
┋ ⋆⃟⋆⃟💫 ${prefix}attp2
┋ ⋆⃟⋆⃟💫 ${prefix}stiker
┋ ⋆⃟⋆⃟💫 ${prefix}swm
┋ ⋆⃟⋆⃟💫 ${prefix}smeme
┋ ⋆⃟⋆⃟💫 ${prefix}emojimix
┋ ⋆⃟⋆⃟💫 ${prefix}emojimix2
┋ ⋆⃟⋆⃟💫 ${prefix}toimage
┋ ⋆⃟⋆⃟💫 ${prefix}tomp4
┋ ⋆⃟⋆⃟💫 ${prefix}toaudio
┋ ⋆⃟⋆⃟💫 ${prefix}tomp3
┋ ⋆⃟⋆⃟💫 ${prefix}tovn
┋ ⋆⃟⋆⃟💫 ${prefix}togif
┋ ⋆⃟⋆⃟💫 ${prefix}tourl
╭──────────────────╮
*➼✰︙𝑫𝑬𝑺𝑪𝑨𝑹𝑮𝑨𝑺*
╰──────────────────╯
┋ ⋆⃟⋆⃟🍂 ${prefix}ytplay
┋ ⋆⃟⋆⃟🍂 ${prefix}ytmp3
┋ ⋆⃟⋆⃟🍂 ${prefix}ytmp4
┋ ⋆⃟⋆⃟🍂 ${prefix}tiktok
┋ ⋆⃟⋆⃟🍂 ${prefix}tiktokaudio
┋ ⋆⃟⋆⃟🍂 ${prefix}igdl
┋ ⋆⃟⋆⃟🍂 ${prefix}igdl2
┋ ⋆⃟⋆⃟🍂 ${prefix}twtdl
┋ ⋆⃟⋆⃟🍂 ${prefix}fbdl
┋ ⋆⃟⋆⃟🍂 ${prefix}gitclone
┋ ⋆⃟⋆⃟🍂 ${prefix}ia
┋ ⋆⃟⋆⃟🍂 ${prefix}iaimage
┋ ⋆⃟⋆⃟🍂 ${prefix}imagen
┋ ⋆⃟⋆⃟🍂 ${prefix}traductor
┋ ⋆⃟⋆⃟🍂 ${prefix}pinterest
┋ ⋆⃟⋆⃟🍂 ${prefix}google
┋ ⋆⃟⋆⃟🍂 ${prefix}igstalk
┋ ⋆⃟⋆⃟🍂 ${prefix}ttstalk
┋ ⋆⃟⋆⃟🍂 ${prefix}ghstalk
╭──────────────────╮
*➼✰︙𝑬𝑭𝑬𝑪𝑻𝑶𝑺 𝑰𝑴𝑨𝑮𝑬𝑵*
╰──────────────────╯
┋ ⋆⃟⋆⃟📷 ${prefix}wetglass
┋ ⋆⃟⋆⃟📷 ${prefix}multicolor3d
┋ ⋆⃟⋆⃟📷 ${prefix}watercolor
┋ ⋆⃟⋆⃟📷 ${prefix}luxurygold
┋ ⋆⃟⋆⃟📷 ${prefix}galaxywallpaper
┋ ⋆⃟⋆⃟📷 ${prefix}lighttext
┋ ⋆⃟⋆⃟📷 ${prefix}beautifulflower
┋ ⋆⃟⋆⃟📷 ${prefix}puppycute
┋ ⋆⃟⋆⃟📷 ${prefix}royaltext
┋ ⋆⃟⋆⃟📷 ${prefix}heartshaped
┋ ⋆⃟⋆⃟📷 ${prefix}birthdaycake
┋ ⋆⃟⋆⃟📷 ${prefix}galaxystyle
┋ ⋆⃟⋆⃟📷 ${prefix}hologram3d
┋ ⋆⃟⋆⃟📷 ${prefix}greenneon
┋ ⋆⃟⋆⃟📷 ${prefix}glossychrome
┋ ⋆⃟⋆⃟📷 ${prefix}greenbush
┋ ⋆⃟⋆⃟📷 ${prefix}metallogo
┋ ⋆⃟⋆⃟📷 ${prefix}noeltext
┋ ⋆⃟⋆⃟📷 ${prefix}glittergold
┋ ⋆⃟⋆⃟📷 ${prefix}textcake
┋ ⋆⃟⋆⃟📷 ${prefix}starsnight
┋ ⋆⃟⋆⃟📷 ${prefix}wooden3d
┋ ⋆⃟⋆⃟📷 ${prefix}textbyname
┋ ⋆⃟⋆⃟📷 ${prefix}writegalacy
┋ ⋆⃟⋆⃟📷 ${prefix}galaxybat
┋ ⋆⃟⋆⃟📷 ${prefix}snow3d
┋ ⋆⃟⋆⃟📷 ${prefix}birthdayday
┋ ⋆⃟⋆⃟📷 ${prefix}goldplaybutton
┋ ⋆⃟⋆⃟📷 ${prefix}silverplaybutton
┋ ⋆⃟⋆⃟📷 ${prefix}freefire
┋ ⋆⃟⋆⃟📷 ${prefix}shadow
┋ ⋆⃟⋆⃟📷 ${prefix}cup
┋ ⋆⃟⋆⃟📷 ${prefix}cup1
┋ ⋆⃟⋆⃟📷 ${prefix}romance
┋ ⋆⃟⋆⃟📷 ${prefix}smoke
┋ ⋆⃟⋆⃟📷 ${prefix}burnpaper
┋ ⋆⃟⋆⃟📷 ${prefix}lovemessage
┋ ⋆⃟⋆⃟📷 ${prefix}undergrass
┋ ⋆⃟⋆⃟📷 ${prefix}love
┋ ⋆⃟⋆⃟📷 ${prefix}coffe
┋ ⋆⃟⋆⃟📷 ${prefix}woodheart
┋ ⋆⃟⋆⃟📷 ${prefix}woodenboard
┋ ⋆⃟⋆⃟📷 ${prefix}summer3d
┋ ⋆⃟⋆⃟📷 ${prefix}wolfmetal
┋ ⋆⃟⋆⃟📷 ${prefix}nature3d
┋ ⋆⃟⋆⃟📷 ${prefix}underwater
┋ ⋆⃟⋆⃟📷 ${prefix}golderrose
┋ ⋆⃟⋆⃟📷 ${prefix}summernature
┋ ⋆⃟⋆⃟📷 ${prefix}letterleaves
┋ ⋆⃟⋆⃟📷 ${prefix}glowingneon
┋ ⋆⃟⋆⃟📷 ${prefix}fallleaves
┋ ⋆⃟⋆⃟📷 ${prefix}flamming
┋ ⋆⃟⋆⃟📷 ${prefix}harrypotter
┋ ⋆⃟⋆⃟📷 ${prefix}carvedwood
╭──────────────────╮
*➼✰︙𝑴𝑬𝑵𝑼 - 𝑳𝑶𝑮𝑶𝑺*
╰──────────────────╯
┋ ⋆⃟⋆⃟✍️  ${prefix}blackpink
┋ ⋆⃟⋆⃟✍️  ${prefix}neon
┋ ⋆⃟⋆⃟✍️  ${prefix}greenneon
┋ ⋆⃟⋆⃟✍️  ${prefix}advanceglow
┋ ⋆⃟⋆⃟✍️  ${prefix}futureneon
┋ ⋆⃟⋆⃟✍️  ${prefix}sandwriting
┋ ⋆⃟⋆⃟✍️  ${prefix}sandsummer
┋ ⋆⃟⋆⃟✍️  ${prefix}sandengraved
┋ ⋆⃟⋆⃟✍️  ${prefix}metaldark
┋ ⋆⃟⋆⃟✍️  ${prefix}neonlight
┋ ⋆⃟⋆⃟✍️  ${prefix}holographic
┋ ⋆⃟⋆⃟✍️  ${prefix}text1917
┋ ⋆⃟⋆⃟✍️  ${prefix}minion
┋ ⋆⃟⋆⃟✍️  ${prefix}deluxesilver
┋ ⋆⃟⋆⃟✍️  ${prefix}newyearcard
┋ ⋆⃟⋆⃟✍️  ${prefix}bloodfrosted
┋ ⋆⃟⋆⃟✍️  ${prefix}halloween
┋ ⋆⃟⋆⃟✍️  ${prefix}jokerlogo
┋ ⋆⃟⋆⃟✍️  ${prefix}fireworksparkle
┋ ⋆⃟⋆⃟✍️  ${prefix}natureleaves
┋ ⋆⃟⋆⃟✍️  ${prefix}bokeh
┋ ⋆⃟⋆⃟✍️  ${prefix}toxic
┋ ⋆⃟⋆⃟✍️  ${prefix}strawberry
┋ ⋆⃟⋆⃟✍️  ${prefix}box3d
┋ ⋆⃟⋆⃟✍️  ${prefix}roadwarning
┋ ⋆⃟⋆⃟✍️  ${prefix}breakwall
┋ ⋆⃟⋆⃟✍️  ${prefix}icecold
┋ ⋆⃟⋆⃟✍️  ${prefix}luxury
┋ ⋆⃟⋆⃟✍️  ${prefix}cloud
┋ ⋆⃟⋆⃟✍️  ${prefix}summersand
┋ ⋆⃟⋆⃟✍️  ${prefix}horrorblood
┋ ⋆⃟⋆⃟✍️  ${prefix}thunder
┋ ⋆⃟⋆⃟✍️  ${prefix}pornhub
┋ ⋆⃟⋆⃟✍️  ${prefix}glitch
┋ ⋆⃟⋆⃟✍️  ${prefix}avenger
┋ ⋆⃟⋆⃟✍️  ${prefix}space
┋ ⋆⃟⋆⃟✍️  ${prefix}ninjalogo
┋ ⋆⃟⋆⃟✍️  ${prefix}marvelstudio
┋ ⋆⃟⋆⃟✍️  ${prefix}lionlogo
┋ ⋆⃟⋆⃟✍️  ${prefix}wolflogo
┋ ⋆⃟⋆⃟✍️  ${prefix}steel3d
┋ ⋆⃟⋆⃟✍️  ${prefix}wallgravity
╭──────────────────╮
*➼✰︙𝑴𝑬𝑵𝑼 - 𝑨𝑵𝑰𝑴𝑬*
╰──────────────────╯
┋ ⋆⃟⋆⃟🌠 ${prefix}akira
┋ ⋆⃟⋆⃟🌠 ${prefix}akiyama
┋ ⋆⃟⋆⃟🌠 ${prefix}ana
┋ ⋆⃟⋆⃟🌠 ${prefix}asuna
┋ ⋆⃟⋆⃟🌠 ${prefix}ayuzawa
┋ ⋆⃟⋆⃟🌠 ${prefix}boruto
┋ ⋆⃟⋆⃟🌠 ${prefix}chitoge
┋ ⋆⃟⋆⃟🌠 ${prefix}deidara
┋ ⋆⃟⋆⃟🌠 ${prefix}doraemon
┋ ⋆⃟⋆⃟🌠 ${prefix}elaina
┋ ⋆⃟⋆⃟🌠 ${prefix}emilia
┋ ⋆⃟⋆⃟🌠 ${prefix}erza
┋ ⋆⃟⋆⃟🌠 ${prefix}gremory
┋ ⋆⃟⋆⃟🌠 ${prefix}hestia
┋ ⋆⃟⋆⃟🌠 ${prefix}hinata
┋ ⋆⃟⋆⃟🌠 ${prefix}inori
┋ ⋆⃟⋆⃟🌠 ${prefix}isuzu
┋ ⋆⃟⋆⃟🌠 ${prefix}itachi
┋ ⋆⃟⋆⃟🌠 ${prefix}itori
┋ ⋆⃟⋆⃟🌠 ${prefix}kaga
┋ ⋆⃟⋆⃟🌠 ${prefix}kagura
┋ ⋆⃟⋆⃟🌠 ${prefix}kakasih
┋ ⋆⃟⋆⃟🌠 ${prefix}kaori
┋ ⋆⃟⋆⃟🌠 ${prefix}keneki
┋ ⋆⃟⋆⃟🌠 ${prefix}kotori
┋ ⋆⃟⋆⃟🌠 ${prefix}kurumi
┋ ⋆⃟⋆⃟🌠 ${prefix}loli
┋ ⋆⃟⋆⃟🌠 ${prefix}madara
┋ ⋆⃟⋆⃟🌠 ${prefix}mikasa
┋ ⋆⃟⋆⃟🌠 ${prefix}miku
┋ ⋆⃟⋆⃟🌠 ${prefix}minato
┋ ⋆⃟⋆⃟🌠 ${prefix}naruto
┋ ⋆⃟⋆⃟🌠 ${prefix}nezuko
┋ ⋆⃟⋆⃟🌠 ${prefix}onepiece
┋ ⋆⃟⋆⃟🌠 ${prefix}sakura
┋ ⋆⃟⋆⃟🌠 ${prefix}sasuke
┋ ⋆⃟⋆⃟🌠 ${prefix}shina
┋ ⋆⃟⋆⃟🌠 ${prefix}shinka
┋ ⋆⃟⋆⃟🌠 ${prefix}shizuka
┋ ⋆⃟⋆⃟🌠 ${prefix}shota
┋ ⋆⃟⋆⃟🌠 ${prefix}toukachan
┋ ⋆⃟⋆⃟🌠 ${prefix}tsunade
┋ ⋆⃟⋆⃟🌠 ${prefix}yuki
■██■▰▱▰▱▰▱■██■
*┏ೋ━ೋ✧ೋ━ೋ┓*
     *🌠 𝑲𝑹𝑰𝒁𝑪𝑯𝑨𝑨𝑵 🌠*
*┗ೋ━ೋ✧ೋ━ೋ┛*
*■██■▰▱▰▱▰▱■██■`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${pushname}`,
        body: "Suscribete ami canal Papu",
        thumbnailUrl: "https://i.ibb.co/S37DL7B/images-1-1.jpg",
        sourceUrl: "http://youtube.com/@Kriz_Chaan",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
break


            default:
                if (!isCmd) {
                    if (command)
                    newReply("Por favor no hagas spam!!!!")
                sleep(5000)
                }
                
                if (budy.startsWith('=>')) {
                    if (!isCreator) return newReply(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return newReply(bang)
                    }
                    try {
                        newReply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        newReply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return newReply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await newReply(evaled)
                    } catch (err) {
                        await newReply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return newReply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return newReply(err)
                        if (stdout) return newReply(stdout)
                    })
                }
                
                if (isCmd && budy.toLowerCase() != undefined) {
                    if (m.chat.endsWith('broadcast')) return
                    if (m.isBaileys) return
                    let msgs = global.db.data.database
                    if (!(budy.toLowerCase() in msgs)) return
                    conn.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
                }
        }


    } catch (err) {
        console.log("Error en"+util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
