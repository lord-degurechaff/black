const { 
  WAConnection: _WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers,
} = require("@adiwajshing/baileys")
const Client = require('./lib/simple')
const { jadibot, stopjadibot, listjadibot } = require("./lib/jadibot");
const WAConnection = Client.WAConnection(_WAConnection)
const moment = require("moment-timezone")
const speed = require('performance-now')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const googleImage = require('g-i-s')
const brainly = require('brainly-scraper')
const fetch = require('node-fetch');
const ggs = require('google-it')
const request = require('request');
const crypto = require('crypto')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const util = require('util')
const got = require("got");
const qrcodes = require('qrcode');
const imgbb = require('imgbb-uploader');
const os = require('os');
const tele = require('telegraph-uploader')
// stickwm
const Exif = require('./lib/exif');
const exif = new Exif();
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp');

/** Voting **/
const { addVote, deleteVote } = require("./lib/vote");
/** add file file nya itu ya **/

function _0x3d3d(){const _0x243e1a=['./lib/mediafire.js','751440XgeGsB','./lib/afk','45Hgxuls','./lib/fetch','format','1291YFkVrb','./lib/y2mate','15965730SrNZQT','9746410QEdLvU','./lib/badword','./lib/limit','HH:mm:ss','690iizODL','./lib/uploadimage','readFileSync','Asia/Jakarta','265852TUobgF','./lib/totalcmd.js','382NZBcXq','3885070kYhQts','./lib/atm','./lib/Toxic.js','./lib/myfunc','7572ziwkLX','./message/mess','27Zbtuzl','Asia/Makassar','./lib/ytdl','./lib/otakudesu.js','./lib/premium','./lib/functionss','6282277669861'];_0x3d3d=function(){return _0x243e1a;};return _0x3d3d();}function _0x1b7d(_0x2e2f4d,_0x43d593){const _0x3d3d90=_0x3d3d();return _0x1b7d=function(_0x1b7d2c,_0x11e0bf){_0x1b7d2c=_0x1b7d2c-0x191;let _0x3532d6=_0x3d3d90[_0x1b7d2c];return _0x3532d6;},_0x1b7d(_0x2e2f4d,_0x43d593);}const _0x374179=_0x1b7d;(function(_0x2f516f,_0x50ad79){const _0x28cf1f=_0x1b7d,_0x213ba9=_0x2f516f();while(!![]){try{const _0x3c582d=-parseInt(_0x28cf1f(0x19e))/0x1*(parseInt(_0x28cf1f(0x1ab))/0x2)+-parseInt(_0x28cf1f(0x191))/0x3*(-parseInt(_0x28cf1f(0x1a9))/0x4)+parseInt(_0x28cf1f(0x1a5))/0x5*(-parseInt(_0x28cf1f(0x1b0))/0x6)+-parseInt(_0x28cf1f(0x1ac))/0x7+parseInt(_0x28cf1f(0x199))/0x8*(parseInt(_0x28cf1f(0x19b))/0x9)+-parseInt(_0x28cf1f(0x1a1))/0xa+parseInt(_0x28cf1f(0x1a0))/0xb;if(_0x3c582d===_0x50ad79)break;else _0x213ba9['push'](_0x213ba9['shift']());}catch(_0x503ed8){_0x213ba9['push'](_0x213ba9['shift']());}}}(_0x3d3d,0x8ae1b));const {downloadMenu,infoMenu,gameMenu,groupMenu,funMenu,wibuMenu,ownerMenu,stickerMenu,otherMenu,rulesBot}=require('./message/help.js'),{getBuffer,getGroupAdmins,getRandom,runtime,sleep}=require(_0x374179(0x1af)),{fetchJson,getBase64,kyun,createExif}=require(_0x374179(0x19c)),{color,bgcolor}=require('./lib/color'),{mess}=require(_0x374179(0x1b1)),{Toxic}=require(_0x374179(0x1ae)),{cmdadd}=require(_0x374179(0x1aa)),{simih}=require(_0x374179(0x196)),{uptotele,uploadFile,RESTfulAPI,uploadImages}=require(_0x374179(0x1a6)),{isGame,gameAdd,givegame,cekGLimit}=require(_0x374179(0x1a3)),{onGoing,dadu,asupan}=require(_0x374179(0x194)),{mediafireDl}=require(_0x374179(0x198)),{webp2gifFile,igDownloader,TiktokDownloader}=require('./lib/gif.js'),{y2mateA,y2mateV}=require(_0x374179(0x19f)),{ythd}=require(_0x374179(0x193)),{addBadword,delBadword,isKasar,addCountKasar,isCountKasar,delCountKasar}=require(_0x374179(0x1a2)),premium=require(_0x374179(0x195)),afk=require(_0x374179(0x19a)),soune=fs[_0x374179(0x1a7)]('mp3/sound96.mp3'),tanggal=moment['tz'](_0x374179(0x1a8))['format']('dddd')+',\x20'+moment['tz'](_0x374179(0x1a8))[_0x374179(0x19d)]('LL'),time=moment()['tz'](_0x374179(0x1a8))[_0x374179(0x19d)](_0x374179(0x1a4)),timeMak=moment()['tz'](_0x374179(0x192))[_0x374179(0x19d)](_0x374179(0x1a4)),timeJay=moment()['tz']('Asia/Jayapura')[_0x374179(0x19d)](_0x374179(0x1a4)),level=require('./lib/level'),atm=require(_0x374179(0x1ad)),_sewa=require('./lib/sewa'),Tag=_0x374179(0x197);
/////////////////////////////////  cukup pake aja ya kak /////////////////////////////////////

const _0x36ed03=_0x3caf;(function(_0x1208bd,_0x4bcdc3){const _0x34b426=_0x3caf,_0x391255=_0x1208bd();while(!![]){try{const _0x31a64b=-parseInt(_0x34b426(0x208))/0x1+parseInt(_0x34b426(0x1f5))/0x2*(-parseInt(_0x34b426(0x219))/0x3)+-parseInt(_0x34b426(0x213))/0x4+-parseInt(_0x34b426(0x20d))/0x5+-parseInt(_0x34b426(0x1fc))/0x6+parseInt(_0x34b426(0x21f))/0x7*(parseInt(_0x34b426(0x1f0))/0x8)+parseInt(_0x34b426(0x222))/0x9*(parseInt(_0x34b426(0x214))/0xa);if(_0x31a64b===_0x4bcdc3)break;else _0x391255['push'](_0x391255['shift']());}catch(_0x570265){_0x391255['push'](_0x391255['shift']());}}}(_0x3cbe,0xb2f86));function _0x3caf(_0x1d3d68,_0x371b3d){const _0x3cbe48=_0x3cbe();return _0x3caf=function(_0x3caf56,_0x15b16e){_0x3caf56=_0x3caf56-0x1eb;let _0x3c7bd9=_0x3cbe48[_0x3caf56];return _0x3c7bd9;},_0x3caf(_0x1d3d68,_0x371b3d);}var kuis=![];hit_today=[],ky_ttt=[];const setGelud=require(_0x36ed03(0x211)),game=require(_0x36ed03(0x205));tttawal=[_0x36ed03(0x20e),'1️⃣',_0x36ed03(0x1f4),_0x36ed03(0x21e),'4️⃣','5️⃣',_0x36ed03(0x20c),'7️⃣',_0x36ed03(0x1fb),'9️⃣'];const simple=require(_0x36ed03(0x1f3));let fakeimage=fs[_0x36ed03(0x1f6)](_0x36ed03(0x212)),errorImg=_0x36ed03(0x220),setting=JSON[_0x36ed03(0x1ed)](fs['readFileSync'](_0x36ed03(0x1fe)));banChats=!![],owner=setting[_0x36ed03(0x1f7)],ownerNumber=setting[_0x36ed03(0x1ee)],gamewaktu=setting['gamewaktu'],ppbot=setting['ppbot'],qris=setting[_0x36ed03(0x206)];let multipref=![],oneprefix=!![],noprefix=![],preff='!',antivo=JSON[_0x36ed03(0x1ed)](fs['readFileSync'](_0x36ed03(0x1f8))),antidel=JSON[_0x36ed03(0x1ed)](fs[_0x36ed03(0x1f6)](_0x36ed03(0x201))),badword=JSON['parse'](fs[_0x36ed03(0x1f6)](_0x36ed03(0x1ec))),grupbadword=JSON[_0x36ed03(0x1ed)](fs[_0x36ed03(0x1f6)](_0x36ed03(0x20b))),senbadword=JSON[_0x36ed03(0x1ed)](fs[_0x36ed03(0x1f6)]('./database/senbadword.json'));function _0x3cbe(){const _0x4461c4=['./database/tebakanime.json','./database/commands.json','./lib/simple.js','2️⃣','99344qeUEJb','readFileSync','owner','./database/antiviewonce.json','./src/simi.json','./database/bot/scommand.json','8️⃣','669150jmLHHZ','./src/video.json','./message/setting.json','./database/kuismath.json','./database/tebaklagu.json','./database/antidelete.json','./database/user/registered.json','./database/user/afk.json','./database/tebakata.json','./lib/game','qris','./database/group/leveling.json','689880qjrXmI','./database/asahotak.json','./database/group/mute.json','./database/grupbadword.json','6️⃣','4704455tbLNfu','0️⃣','./database/user/level.json','hit','./lib/gameGelud.js','./media/wpmobile.png','1097604xLrEkS','10VVZicg','./database/user/uang.json','./database/user/glimit.json','./database/caklontong.json','./database/group/sewa.json','81WNpmvK','./database/user/premium.json','./database/susunkata.json','./database/group/antilink.json','./database/bot/update.json','3️⃣','468797FfJXiB','https://i.ibb.co/FBm52Pt/1e0fe6a08b67.jpg','./database/tebaktebakan.json','25366086HtxetE','./database/tebakbendera.json','./database/tebakimia.json','./database/tebaklirik.json','./database/badword.json','parse','ownerNumber','./database/group/welcome.json','152YUJOHt'];_0x3cbe=function(){return _0x4461c4;};return _0x3cbe();}const samih=JSON['parse'](fs['readFileSync'](_0x36ed03(0x1f9))),commandsDB=JSON[_0x36ed03(0x1ed)](fs['readFileSync'](_0x36ed03(0x1f2))),setiker=JSON[_0x36ed03(0x1ed)](fs[_0x36ed03(0x1f6)]('./src/stik.json')),videonye=JSON['parse'](fs[_0x36ed03(0x1f6)](_0x36ed03(0x1fd))),audionye=JSON[_0x36ed03(0x1ed)](fs[_0x36ed03(0x1f6)]('./src/audio.json')),imagenye=JSON[_0x36ed03(0x1ed)](fs['readFileSync']('./src/image.json'));global[_0x36ed03(0x210)]={};let _registered=JSON[_0x36ed03(0x1ed)](fs['readFileSync'](_0x36ed03(0x202))),register=JSON[_0x36ed03(0x1ed)](fs[_0x36ed03(0x1f6)](_0x36ed03(0x202))),welkom=JSON[_0x36ed03(0x1ed)](fs[_0x36ed03(0x1f6)](_0x36ed03(0x1ef))),_premium=JSON[_0x36ed03(0x1ed)](fs[_0x36ed03(0x1f6)](_0x36ed03(0x21a))),_afk=JSON['parse'](fs['readFileSync'](_0x36ed03(0x203))),_leveling=JSON[_0x36ed03(0x1ed)](fs[_0x36ed03(0x1f6)](_0x36ed03(0x207))),_level=JSON['parse'](fs[_0x36ed03(0x1f6)](_0x36ed03(0x20f))),_uang=JSON[_0x36ed03(0x1ed)](fs[_0x36ed03(0x1f6)](_0x36ed03(0x215))),glimit=JSON[_0x36ed03(0x1ed)](fs[_0x36ed03(0x1f6)](_0x36ed03(0x216))),antilink=JSON[_0x36ed03(0x1ed)](fs['readFileSync'](_0x36ed03(0x21c))),mute=JSON['parse'](fs['readFileSync'](_0x36ed03(0x20a))),_update=JSON['parse'](fs[_0x36ed03(0x1f6)](_0x36ed03(0x21d))),sewa=JSON[_0x36ed03(0x1ed)](fs[_0x36ed03(0x1f6)](_0x36ed03(0x218))),_scommand=JSON['parse'](fs[_0x36ed03(0x1f6)](_0x36ed03(0x1fa))),tebakanime=JSON[_0x36ed03(0x1ed)](fs[_0x36ed03(0x1f6)](_0x36ed03(0x1f1))),tebakgambar=JSON[_0x36ed03(0x1ed)](fs['readFileSync']('./database/tebakgambar.json')),asahotak=JSON[_0x36ed03(0x1ed)](fs[_0x36ed03(0x1f6)](_0x36ed03(0x209))),caklontong=JSON['parse'](fs[_0x36ed03(0x1f6)](_0x36ed03(0x217))),tebaksiapaaku=JSON['parse'](fs[_0x36ed03(0x1f6)]('./database/tebaksiapaaku.json')),tebakbendera=JSON['parse'](fs[_0x36ed03(0x1f6)](_0x36ed03(0x223))),susunkata=JSON['parse'](fs['readFileSync'](_0x36ed03(0x21b))),tebakata=JSON[_0x36ed03(0x1ed)](fs[_0x36ed03(0x1f6)](_0x36ed03(0x204))),tebaklirik=JSON[_0x36ed03(0x1ed)](fs[_0x36ed03(0x1f6)](_0x36ed03(0x1eb))),tebakjenaka=JSON[_0x36ed03(0x1ed)](fs[_0x36ed03(0x1f6)]('./database/tebakjenaka.json')),tebakimia=JSON[_0x36ed03(0x1ed)](fs['readFileSync'](_0x36ed03(0x224))),kuismath=JSON['parse'](fs['readFileSync'](_0x36ed03(0x1ff))),tebaklagu=JSON['parse'](fs[_0x36ed03(0x1f6)](_0x36ed03(0x200))),tebaktebakan=JSON[_0x36ed03(0x1ed)](fs[_0x36ed03(0x1f6)](_0x36ed03(0x221))),family100=[];

//entag
battre = 100
btre = 'Sisa Energi: buanyak'

// Sticker Cmd
const addCmd = (id, command) => {
const obj = { id: id, chats: command }
_scommand.push(obj)
fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
let position = null
Object.keys(_scommand).forEach((i) => {
if (_scommand[i].id === id) {
position = i
}
})
if (position !== null) {
return position
}
}

const getCmd = (id) => {
let position = null
Object.keys(_scommand).forEach((i) => {
if (_scommand[i].id === id) {
position = i
}
})
if (position !== null) {
return _scommand[position].chats
}
  
}



const checkSCommand = (id) => {
let status = false
Object.keys(_scommand).forEach((i) => {
if (_scommand[i].id === id) {
status = true
}
})
return status
}
const getRespon = (txt) => {
    let position = null
    Object.keys(_respon).forEach((i) => {
        if (_respon[i].txt === txt) {
            position = i
        }
    })
    if (position !== null) {
        return _respon[position].resp
    }
}

const getResponPosition = (txt) => {
    let position = null
    Object.keys(_respon).forEach((i) => {
        if (_respon[i].txt === txt) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getAllRespon = () => {
    const array = []
    Object.keys(_respon).forEach((i) => {
        array.push(_respon[i].txt)
    })
    return array
}

module.exports = rimuru = async (rimuru, editz) => {
try {
if (!editz.hasNewMessage) return
editz = editz.messages.all()[0]
if (!editz.message) return
if (editz.key && editz.key.remoteJid == 'status@broadcast') return
if (editz.key.id.startsWith('3EB0') && editz.key.id.length === 12) return
const { Functions }= require('./lib/functions.js');
global.ky_ttt
global.blocked
editz.message = (Object.keys(editz.message)[0] === 'ephemeralMessage') ? editz.message.ephemeralMessage.message : editz.message

const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const content = JSON.stringify(editz.message)
const from = editz.key.remoteJid
let isGroup = from.endsWith('@g.us')

/** vote **/
const isAntiviewonce = isGroup ? antivo.includes(from) : false;
const isAntidel = isGroup ? antidel.includes(from) : false;

const type = Object.keys(editz.message)[0]        
const cmd = (type === 'conversation' && editz.message.conversation) ? editz.message.conversation : (type == 'imageMessage') && editz.message.imageMessage.caption ? editz.message.imageMessage.caption : (type == 'videoMessage') && editz.message.videoMessage.caption ? editz.message.videoMessage.caption : (type == 'extendedTextMessage') && editz.message.extendedTextMessage.text ? editz.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
  // const prefix = /^[°Z•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/.test(cmd) ? cmd.match(/^[°•Zπ÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/gi) : '!'
  
  const _0x40f4f6=_0x20bb;(function(_0x12314c,_0x4e8c76){const _0x55f2e3=_0x20bb,_0x752cec=_0x12314c();while(!![]){try{const _0x5ad471=-parseInt(_0x55f2e3(0x132))/0x1+-parseInt(_0x55f2e3(0x103))/0x2+-parseInt(_0x55f2e3(0x126))/0x3+-parseInt(_0x55f2e3(0x135))/0x4+parseInt(_0x55f2e3(0x111))/0x5+parseInt(_0x55f2e3(0x114))/0x6*(-parseInt(_0x55f2e3(0x125))/0x7)+-parseInt(_0x55f2e3(0x108))/0x8*(-parseInt(_0x55f2e3(0x116))/0x9);if(_0x5ad471===_0x4e8c76)break;else _0x752cec['push'](_0x752cec['shift']());}catch(_0x1ab3ad){_0x752cec['push'](_0x752cec['shift']());}}}(_0x5ec7,0x30889));if(multipref)var prefix=/^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢âœ“=|~!?@#%^&.zZ_•\/\\Â©^<+]/[_0x40f4f6(0x136)](cmd)?cmd[_0x40f4f6(0x11f)](/^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢âœ“=|~!?@#%^&.zZ_+•\/\\Â©^<+]/gi)[0x0]:'-';else{if(noprefix)prefix='';else oneprefix&&(prefix=preff);}body=type===_0x40f4f6(0x142)&&editz[_0x40f4f6(0x13d)][_0x40f4f6(0x142)][_0x40f4f6(0x14d)](prefix)?editz[_0x40f4f6(0x13d)][_0x40f4f6(0x142)]:type==_0x40f4f6(0x11d)&&editz[_0x40f4f6(0x13d)][type][_0x40f4f6(0x13f)]['startsWith'](prefix)?editz[_0x40f4f6(0x13d)][type][_0x40f4f6(0x13f)]:type==_0x40f4f6(0x10b)&&editz['message'][type][_0x40f4f6(0x13f)][_0x40f4f6(0x14d)](prefix)?editz[_0x40f4f6(0x13d)][type][_0x40f4f6(0x13f)]:type==_0x40f4f6(0x14e)&&editz[_0x40f4f6(0x13d)][type][_0x40f4f6(0x102)]['startsWith'](prefix)?editz[_0x40f4f6(0x13d)][type][_0x40f4f6(0x102)]:type=='listResponseMessage'&&editz['message'][type][_0x40f4f6(0x113)][_0x40f4f6(0x12a)]?editz[_0x40f4f6(0x13d)][type][_0x40f4f6(0x113)]['selectedRowId']:type==_0x40f4f6(0x11c)&&editz['message'][type][_0x40f4f6(0x140)]?editz[_0x40f4f6(0x13d)][type][_0x40f4f6(0x140)]:type==_0x40f4f6(0x121)&&(getCmd(editz['message'][type][_0x40f4f6(0x119)][_0x40f4f6(0x104)](_0x40f4f6(0x117)))!==null&&getCmd(editz[_0x40f4f6(0x13d)][type][_0x40f4f6(0x119)][_0x40f4f6(0x104)](_0x40f4f6(0x117)))!==undefined)?getCmd(editz[_0x40f4f6(0x13d)][type]['fileSha256'][_0x40f4f6(0x104)]('base64')):'';prefix!=''?!body[_0x40f4f6(0x14d)](prefix)?(isCmdd=![],comm=''):(isCmdd=!![],comm=body[_0x40f4f6(0x118)](0x1)[_0x40f4f6(0x12d)]()[_0x40f4f6(0x105)]('\x20')[_0x40f4f6(0x14b)]()[_0x40f4f6(0x11b)]()):(isCmdd=![],comm=body[_0x40f4f6(0x12d)]()['split']('\x20')['shift']()[_0x40f4f6(0x11b)]());budy=type==='conversation'?editz[_0x40f4f6(0x13d)]['conversation']:type===_0x40f4f6(0x14e)?editz['message'][_0x40f4f6(0x14e)][_0x40f4f6(0x102)]:'';const command=comm;budy=type==='conversation'?editz[_0x40f4f6(0x13d)][_0x40f4f6(0x142)]:type===_0x40f4f6(0x14e)?editz[_0x40f4f6(0x13d)][_0x40f4f6(0x14e)]['text']:'';const args=body[_0x40f4f6(0x12d)]()[_0x40f4f6(0x105)](/ +/)[_0x40f4f6(0x118)](0x1);hit_today['push'](command);const arg=body[_0x40f4f6(0x12f)](body['indexOf']('\x20')+0x1),ar=args[_0x40f4f6(0x147)](_0x135f53=>_0x135f53[_0x40f4f6(0x11b)]()),argz=body['trim']()[_0x40f4f6(0x105)](/ +/)['slice'](0x1),isCmd=isCmdd;if(isCmd)cmdadd();const totalhit=JSON['parse'](fs[_0x40f4f6(0x133)](_0x40f4f6(0x123)))[0x0][_0x40f4f6(0x109)],q=args[_0x40f4f6(0x134)]('\x20'),Bfake=fs['readFileSync'](_0x40f4f6(0x10c),_0x40f4f6(0x117)),botNumber=rimuru[_0x40f4f6(0x124)]['jid'],ownerNumber=setting[_0x40f4f6(0x13c)],ownerName=setting['ownerName'],botName=setting[_0x40f4f6(0x14c)];let sender=isGroup?editz[_0x40f4f6(0x112)]:editz[_0x40f4f6(0x110)]['remoteJid'],senderr=editz[_0x40f4f6(0x110)][_0x40f4f6(0x131)]?rimuru[_0x40f4f6(0x124)]['jid']:editz['key'][_0x40f4f6(0x10a)]['endsWith'](_0x40f4f6(0x13a))?editz[_0x40f4f6(0x112)]:editz[_0x40f4f6(0x110)][_0x40f4f6(0x10a)];const totalchat=await rimuru[_0x40f4f6(0x120)][_0x40f4f6(0x149)](),groupMetadata=isGroup?await rimuru['groupMetadata'](from):'',groupName=isGroup?groupMetadata[_0x40f4f6(0x12c)]:'',groupId=isGroup?groupMetadata[_0x40f4f6(0x106)]:'',groupMembers=isGroup?groupMetadata[_0x40f4f6(0x10d)]:'',groupDesc=isGroup?groupMetadata[_0x40f4f6(0x139)]:'',groupOwner=isGroup?groupMetadata[_0x40f4f6(0x13b)]:'',groupAdmins=isGroup?getGroupAdmins(groupMembers):'',isBotGroupAdmins=groupAdmins[_0x40f4f6(0x137)](botNumber)||![],isGroupAdmins=groupAdmins[_0x40f4f6(0x137)](sender)||![],conts=editz['key'][_0x40f4f6(0x131)]?rimuru[_0x40f4f6(0x124)][_0x40f4f6(0x106)]:rimuru['contacts'][sender]||'-',pushname=editz[_0x40f4f6(0x110)][_0x40f4f6(0x131)]?rimuru[_0x40f4f6(0x124)]['name']:conts[_0x40f4f6(0x10f)]||conts[_0x40f4f6(0x11a)]||conts[_0x40f4f6(0x141)]||'-',mentionByTag=type==_0x40f4f6(0x14e)&&editz[_0x40f4f6(0x13d)][_0x40f4f6(0x14e)]['contextInfo']!=null?editz[_0x40f4f6(0x13d)][_0x40f4f6(0x14e)][_0x40f4f6(0x130)][_0x40f4f6(0x146)]:[],mentionByreply=type=='extendedTextMessage'&&editz[_0x40f4f6(0x13d)][_0x40f4f6(0x14e)]['contextInfo']!=null?editz[_0x40f4f6(0x13d)][_0x40f4f6(0x14e)][_0x40f4f6(0x130)]['participant']||'':'',mention=typeof mentionByTag==_0x40f4f6(0x107)?[mentionByTag]:mentionByTag;mention!=undefined?mention[_0x40f4f6(0x122)](mentionByreply):[];const mentionUser=mention!=undefined?mention[_0x40f4f6(0x129)](_0xddafb3=>_0xddafb3):[];idttt=[],players1=[],players2=[],gilir=[];for(let t of ky_ttt){idttt['push'](t['id']),players1[_0x40f4f6(0x122)](t[_0x40f4f6(0x148)]),players2[_0x40f4f6(0x122)](t[_0x40f4f6(0x10e)]),gilir[_0x40f4f6(0x122)](t[_0x40f4f6(0x138)]);}function _0x5ec7(){const _0x148b16=['substring','contextInfo','fromMe','77104ucIGpt','readFileSync','join','190032ORAXvg','test','includes','gilir','desc','@g.us','owner','ownerNumber','message','getTime','caption','selectedButtonId','name','conversation','toLocaleDateString','Wage','floor','mentionedJid','map','player1','all','checkSewaGroup','shift','botName','startsWith','extendedTextMessage','text','612404WLbAYu','toString','split','jid','string','5363800nJjCJE','totalcmd','remoteJid','videoMessage','./media/image/fake.jpeg','participants','player2','notify','key','447200hanRlV','participant','singleSelectReply','8418lrwmwL','long','9ogqgSP','base64','slice','fileSha256','vname','toLowerCase','buttonsResponseMessage','imageMessage','Pahing','match','chats','stickerMessage','push','./database/totalcmd.json','user','175eItLLy','285699wbvstc','Legi','Pon','filter','selectedRowId','Kliwon','subject','trim','numeric'];_0x5ec7=function(){return _0x148b16;};return _0x5ec7();}const isTTT=isGroup?idttt[_0x40f4f6(0x137)](from):![];isPlayer1=isGroup?players1[_0x40f4f6(0x137)](sender):![],isPlayer2=isGroup?players2[_0x40f4f6(0x137)](sender):![];function _0x20bb(_0x4cd1fc,_0x125f1a){const _0x5ec73b=_0x5ec7();return _0x20bb=function(_0x20bb81,_0x2adcda){_0x20bb81=_0x20bb81-0x102;let _0x3b62cb=_0x5ec73b[_0x20bb81];return _0x3b62cb;},_0x20bb(_0x4cd1fc,_0x125f1a);}const isBadword=isGroup?grupbadword[_0x40f4f6(0x137)](from):![],isOwner=ownerNumber['includes'](senderr),isRegister=register[_0x40f4f6(0x137)](sender),isPremium=premium['checkPremiumUser'](sender,_premium),isSewa=_sewa[_0x40f4f6(0x14a)](from,sewa),isAfkOn=afk['checkAfkUser'](sender,_afk),isLevelingOn=isGroup?_leveling[_0x40f4f6(0x137)](from):![],isMuted=isGroup?mute[_0x40f4f6(0x137)](from):![],isAntiLink=isGroup?antilink[_0x40f4f6(0x137)](from):![],isWelkom=isGroup?welkom[_0x40f4f6(0x137)](from):![],isSimi=isGroup?samih[_0x40f4f6(0x137)](from):![];let d=new Date(),locale='en',gmt=new Date(0x0)[_0x40f4f6(0x13e)]()-new Date('1\x20January\x201970')[_0x40f4f6(0x13e)](),weton=[_0x40f4f6(0x11e),_0x40f4f6(0x128),_0x40f4f6(0x144),_0x40f4f6(0x12b),_0x40f4f6(0x127)][Math[_0x40f4f6(0x145)]((d*0x1+gmt)/0x50ae4c0)%0x5],week=d[_0x40f4f6(0x143)](locale,{'weekday':_0x40f4f6(0x115)}),date=d[_0x40f4f6(0x143)](locale,{'day':_0x40f4f6(0x12e),'month':_0x40f4f6(0x115),'year':'numeric'}),waktu=d[_0x40f4f6(0x143)](locale,{'hour':_0x40f4f6(0x12e),'minute':'numeric','second':_0x40f4f6(0x12e)});
////////// here button function///////////////////////////////
const _0x360b12=_0x33e5;(function(_0x4ebdf1,_0x23ae08){const _0x528f7b=_0x33e5,_0x54fe9c=_0x4ebdf1();while(!![]){try{const _0x35fe3d=-parseInt(_0x528f7b(0x76))/0x1*(parseInt(_0x528f7b(0x99))/0x2)+parseInt(_0x528f7b(0x80))/0x3*(-parseInt(_0x528f7b(0xa5))/0x4)+-parseInt(_0x528f7b(0xc2))/0x5+parseInt(_0x528f7b(0xb6))/0x6*(-parseInt(_0x528f7b(0xc3))/0x7)+-parseInt(_0x528f7b(0xb7))/0x8+parseInt(_0x528f7b(0x83))/0x9*(-parseInt(_0x528f7b(0xaa))/0xa)+parseInt(_0x528f7b(0xbf))/0xb*(parseInt(_0x528f7b(0x7e))/0xc);if(_0x35fe3d===_0x23ae08)break;else _0x54fe9c['push'](_0x54fe9c['shift']());}catch(_0x2a6823){_0x54fe9c['push'](_0x54fe9c['shift']());}}}(_0x4f9c,0xd69b4),selectedButton=type=='buttonsResponseMessage'?editz[_0x360b12(0xb8)][_0x360b12(0xaf)][_0x360b12(0x7a)]:'',responseButton=type==_0x360b12(0xac)?editz[_0x360b12(0xb8)][_0x360b12(0xac)]['title']:'');const gcount=setting[_0x360b12(0x75)],listmsg=(_0x1723e3,_0x49f2c8,_0x41f5b0,_0x20e8c1)=>{const _0x536606=_0x360b12;let _0x530500=rimuru[_0x536606(0xc1)](_0x1723e3,{'listMessage':{'title':_0x49f2c8,'description':_0x41f5b0,'buttonText':_0x536606(0xbb),'listType':_0x536606(0x74),'sections':_0x20e8c1}},{});return rimuru[_0x536606(0xbc)](_0x530500,{'waitForAck':!![]});},btrai={'key':{'fromMe':![],'participant':_0x360b12(0xb5),...from?{'remoteJid':_0x360b12(0x7d)}:{}},'message':{'imageMessage':{'url':_0x360b12(0x8a),'mimetype':_0x360b12(0xa8),'caption':btre,'fileSha256':_0x360b12(0x92),'fileLength':_0x360b12(0xc0),'height':0x438,'width':0x437,'mediaKey':_0x360b12(0x7f),'fileEncSha256':'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=','directPath':_0x360b12(0x94),'mediaKeyTimestamp':_0x360b12(0xc4),'jpegThumbnail':fs[_0x360b12(0x8b)](_0x360b12(0x9f))}}},isUrl=_0x27f1a7=>{const _0xbabb0f=_0x360b12;return _0x27f1a7[_0xbabb0f(0xa6)](new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/,'gi'));};function _0x33e5(_0x2cf599,_0x177743){const _0x4f9c60=_0x4f9c();return _0x33e5=function(_0x33e5d9,_0x402e15){_0x33e5d9=_0x33e5d9-0x74;let _0x3b6a0a=_0x4f9c60[_0x33e5d9];return _0x3b6a0a;},_0x33e5(_0x2cf599,_0x177743);}function monospace(_0x452246){const _0x56ecba=_0x360b12;return _0x56ecba(0x9a)+_0x452246+_0x56ecba(0x9a);}function jsonformat(_0x8f8f98){const _0x38a3d8=_0x360b12;return JSON[_0x38a3d8(0x89)](_0x8f8f98,null,0x2);}function _0x4f9c(){const _0x42dcd7=['unlinkSync','1580Widsdi','match',',;;;\x0aFN:','image/jpeg','./media/Nakano.jpg','57150WnnIlj','extendedTextMessage','listResponseMessage','writeFileSync','now','buttonsResponseMessage','push','replace','head','s.whatsapp.net','split','0@s.whatsapp.net','272478nfSACE','7017560dvhwYx','message','ORG:','user','CLICK\x20HERE','relayWAMessage','media/Nakano.jpg','close','65373627CAAGoI','28777','prepareMessageFromContent','4503700oaCUkQ','161pAvULr','1610993486','SINGLE_SELECT','gcount','30gPddkq','selesai','log','forEach','selectedButtonId','VERSION:3.0\x0a','pipe','status@broadcast','12ESPVQq','vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=','5793WErIuJ','owner','createWriteStream','1656RXAYkr','sendMessage','\x20-o\x20','trim','BEGIN:VCARD\x0a','random','stringify','https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc','readFileSync','jid','groupRemove','keys','@s.whatsapp.net','\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD','ffmpeg\x20-i\x20','+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=','.png','/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69','groupMetadata','floor','text','conversation','28486NuFSAo','```','Not\x20Premited!','includes','webpmux\x20-set\x20exif\x20./sticker/data.exif\x20','./media/wpmobile.png','lib/♡.jpeg','groupAdd','length','BEGIN:VCARD\x0aVERSION:3.0\x0aN:XL;','./sticker'];_0x4f9c=function(){return _0x42dcd7;};return _0x4f9c();}function randomNomor(_0x13dc35){const _0x4f9fb7=_0x360b12;return Math[_0x4f9fb7(0x96)](Math[_0x4f9fb7(0x88)]()*_0x13dc35)+0x1;}const reply=_0x30c45f=>{const _0x5b47dc=_0x360b12;var _0x2cad54=_0x30c45f[_0x5b47dc(0x9c)]('@')?_0x30c45f[_0x5b47dc(0xb4)]('@'):[];let _0x4bb3a1=[];for(var _0x293a3c of _0x2cad54){_0x4bb3a1[_0x5b47dc(0xb0)](_0x293a3c[_0x5b47dc(0xb4)]('\x20')[0x0]+_0x5b47dc(0x8f));}rimuru[_0x5b47dc(0x84)](from,_0x30c45f,MessageType['text'],{'quoted':editz,'thumbnail':fakeimage,'contextInfo':{'mentionedJid':_0x4bb3a1}});},sendMess=(_0x3c2e0c,_0x2775bf)=>{const _0x430a06=_0x360b12;rimuru[_0x430a06(0x84)](_0x3c2e0c,_0x2775bf,text);},mentions=(_0x1bdd6c,_0x44fa36,_0x810af6)=>{const _0x35d293=_0x360b12;_0x810af6==null||_0x810af6==undefined||_0x810af6==![]?rimuru[_0x35d293(0x84)](from,{'text':_0x1bdd6c[_0x35d293(0x86)](),'jpegThumbnail':fs['readFileSync']('./media/wpmobile.png')},extendedText,{'sendEphemeral':!![],'contextInfo':{'mentionedJid':_0x44fa36}}):rimuru['sendMessage'](from,{'text':_0x1bdd6c[_0x35d293(0x86)](),'jpegThumbnail':fs[_0x35d293(0x8b)]('./media/wpmobile.png')},extendedText,{'sendEphemeral':!![],'quoted':freply,'contextInfo':{'mentionedJid':_0x44fa36}});},sendText=(_0x4c615b,_0x5607a9)=>{const _0x3ddde0=_0x360b12;rimuru[_0x3ddde0(0x84)](_0x4c615b,_0x5607a9,MessageType[_0x3ddde0(0x97)]);},textImg=_0x1b097b=>{const _0x11b219=_0x360b12;return rimuru['sendMessage'](from,_0x1b097b,text,{'quoted':freply,'thumbnail':fs['readFileSync'](_0x11b219(0x9e))});},freply={'key':{'fromMe':![],'participant':_0x360b12(0xb5),...from?{'remoteJid':'16504228206@s.whatsapp.net'}:{}},'message':{'contactMessage':{'displayName':''+pushname,'vcard':_0x360b12(0xa2)+pushname+_0x360b12(0xa7)+pushname+',\x0aitem1.TEL;waid='+senderr[_0x360b12(0xb4)]('@')[0x0]+':'+senderr[_0x360b12(0xb4)]('@')[0x0]+_0x360b12(0x90),'jpegThumbnail':fs['readFileSync'](_0x360b12(0xa9))}}},math=_0xfd7f62=>{const _0x2c8452=_0x360b12;return Math[_0x2c8452(0x96)](_0xfd7f62);},kick=function(_0x412590,_0x426f40){const _0x16f8fb=_0x360b12;for(let _0x1e1464 of _0x426f40){rimuru[_0x16f8fb(0x8d)](_0x412590,[_0x1e1464]);}},kickMember=async(_0xcbf69a,_0x2d11b2=[])=>{const _0x68dd4a=_0x360b12;let _0x1f7c11=await rimuru[_0x68dd4a(0x95)](_0xcbf69a),_0x3b742e=_0x1f7c11[_0x68dd4a(0x81)][_0x68dd4a(0xb1)]('c.us',_0x68dd4a(0xb3)),_0x5133d8=rimuru[_0x68dd4a(0xba)][_0x68dd4a(0x8c)];for(i of _0x2d11b2){if(!i[_0x68dd4a(0x9c)](_0x5133d8)&&!i[_0x68dd4a(0x9c)](_0x3b742e))await rimuru['groupRemove'](to,[i]);else{await rimuru[_0x68dd4a(0x84)](_0xcbf69a,_0x68dd4a(0x9b),_0x68dd4a(0x98));break;}}},add=function(_0x165e7f,_0x19ead6){const _0x227b87=_0x360b12;rimuru[_0x227b87(0xa0)](_0x165e7f,_0x19ead6);},sendKontak=(_0x4e811a,_0x22ac33,_0x253334,_0x39e387='')=>{const _0x31c8e1=_0x360b12,_0x1f7413=_0x31c8e1(0x87)+_0x31c8e1(0x7b)+'FN:'+_0x253334+'\x0a'+_0x31c8e1(0xb9)+_0x39e387+'\x0a'+'TEL;type=CELL;type=VOICE;waid='+_0x22ac33+':+'+_0x22ac33+'\x0a'+'END:VCARD';rimuru[_0x31c8e1(0x84)](_0x4e811a,{'displayname':_0x253334,'vcard':_0x1f7413},MessageType['contact'],{'quoted':freply});},hideTag=async function(_0x807bd8,_0x4c92b1){const _0x58e928=_0x360b12;let _0x48b42a=await rimuru['groupMetadata'](_0x807bd8),_0x512f31=_0x48b42a['participants'],_0x20308d=[];for(let _0x357666 of _0x512f31){_0x20308d[_0x58e928(0xb0)](_0x357666[_0x58e928(0x8c)]);}rimuru['sendMessage'](_0x807bd8,{'text':_0x4c92b1,'jpegThumbnail':fs[_0x58e928(0x8b)](_0x58e928(0xbd))},_0x58e928(0xab),{'contextInfo':{'mentionedJid':_0x20308d}});},sendWebp=async(_0x1d7423,_0x279b4e)=>{const _0x4d26d4=_0x360b12;var _0x369de8=Date[_0x4d26d4(0xae)]()/0x2710,_0x387276=function(_0x15603a,_0x460030,_0x56f413){const _0x54f8b1=_0x4d26d4;request[_0x54f8b1(0xb2)](_0x15603a,function(_0x2b106d,_0x1c6215,_0x5efd94){const _0xf1438b=_0x54f8b1;request(_0x15603a)[_0xf1438b(0x7c)](fs[_0xf1438b(0x82)](_0x460030))['on'](_0xf1438b(0xbe),_0x56f413);});};_0x387276(_0x279b4e,_0x4d26d4(0xa3)+_0x369de8+'.png',async function(){const _0x1f6112=_0x4d26d4;console[_0x1f6112(0x78)](_0x1f6112(0x77));let _0x31e3bf=_0x1f6112(0xa3)+_0x369de8+_0x1f6112(0x93),_0x190573=_0x1f6112(0xa3)+_0x369de8+'.webp';exec(_0x1f6112(0x91)+_0x31e3bf+'\x20-vf\x20\x22scale=512:512:force_original_aspect_ratio=increase,fps=40,\x20crop=512:512\x22\x20'+_0x190573,_0xd112de=>{const _0x4f5718=_0x1f6112;fs[_0x4f5718(0xa4)](_0x31e3bf);if(_0xd112de)return reply(''+_0xd112de);exec(_0x4f5718(0x9d)+_0x190573+_0x4f5718(0x85)+_0x190573,async _0x451215=>{const _0x31826d=_0x4f5718;if(_0x451215)return reply(''+_0x451215);rimuru[_0x31826d(0x84)](from,fs['readFileSync'](_0x190573),sticker,{'sendEphemeral':!![],'quoted':editz}),fs[_0x31826d(0xa4)](_0x190573);});});});},getRegisteredRandomId=()=>{const _0x438f6a=_0x360b12;return _registered[Math[_0x438f6a(0x96)](Math[_0x438f6a(0x88)]()*_registered[_0x438f6a(0xa1)])]['id'];},addRegisteredUser=(_0x3d224b,_0x4eadfe,_0x151271,_0x49b390,_0x10d23d)=>{const _0x156942=_0x360b12,_0x2ecc22={'id':_0x3d224b,'name':_0x4eadfe,'age':_0x151271,'time':_0x49b390,'serial':_0x10d23d};_registered[_0x156942(0xb0)](_0x2ecc22),fs[_0x156942(0xad)]('./database/user/registered.json',JSON['stringify'](_registered));},checkRegisteredUser=_0x20ba29=>{const _0x3b6bc6=_0x360b12;let _0x5ace06=![];return Object[_0x3b6bc6(0x8e)](_registered)[_0x3b6bc6(0x79)](_0x2b3a85=>{_registered[_0x2b3a85]['id']===_0x20ba29&&(_0x5ace06=!![]);}),_0x5ace06;};
//////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
//<ini const button>//
function _0x5cd3(){const _0x30b8b8=['2732121HdXqlE','3064440DuzZWo','130818wBaZAX','4knRyle','videoMessage','message','577749DqTBwW','buttonsMessage','138254yZcfLt','7RqLFBe','13210axVHOa','40FoVgGM','480622RwoJtO','4972uabHDE'];_0x5cd3=function(){return _0x30b8b8;};return _0x5cd3();}function _0x13c9(_0x3d6058,_0xeb8c87){const _0x5cd371=_0x5cd3();return _0x13c9=function(_0x13c94f,_0x471ded){_0x13c94f=_0x13c94f-0x16c;let _0x30552d=_0x5cd371[_0x13c94f];return _0x30552d;},_0x13c9(_0x3d6058,_0xeb8c87);}(function(_0x4dec3f,_0x44caf2){const _0x226e38=_0x13c9,_0x136990=_0x4dec3f();while(!![]){try{const _0x52673b=parseInt(_0x226e38(0x170))/0x1+-parseInt(_0x226e38(0x174))/0x2+-parseInt(_0x226e38(0x16e))/0x3*(parseInt(_0x226e38(0x179))/0x4)+parseInt(_0x226e38(0x173))/0x5*(-parseInt(_0x226e38(0x178))/0x6)+-parseInt(_0x226e38(0x171))/0x7*(-parseInt(_0x226e38(0x177))/0x8)+-parseInt(_0x226e38(0x176))/0x9+parseInt(_0x226e38(0x172))/0xa*(parseInt(_0x226e38(0x175))/0xb);if(_0x52673b===_0x44caf2)break;else _0x136990['push'](_0x136990['shift']());}catch(_0x4495e8){_0x136990['push'](_0x136990['shift']());}}}(_0x5cd3,0x32a9a));const sendButVideo=async(_0x55cf7c,_0x40fb2e,_0x189e45,_0x18782a,_0x2eacf9=[],_0x40af9a={})=>{const _0xc6cf49=_0x13c9;kma=_0x18782a,mhan=await rimuru['prepareMessage'](from,kma,video);const _0x59247c={'videoMessage':mhan[_0xc6cf49(0x16d)][_0xc6cf49(0x16c)],'contentText':_0x40fb2e,'footerText':_0x189e45,'buttons':_0x2eacf9,'headerType':0x5};rimuru['sendMessage'](_0x55cf7c,_0x59247c,MessageType[_0xc6cf49(0x16f)],_0x40af9a);};
///Button Location
function _0x1796(_0x19f1d7,_0x5bfe52){const _0x13c078=_0x13c0();return _0x1796=function(_0x179633,_0x482d3d){_0x179633=_0x179633-0x1e5;let _0x38550e=_0x13c078[_0x179633];return _0x38550e;},_0x1796(_0x19f1d7,_0x5bfe52);}(function(_0x39edb8,_0x4805fb){const _0x34b142=_0x1796,_0x15fad0=_0x39edb8();while(!![]){try{const _0x45da22=parseInt(_0x34b142(0x1f1))/0x1+-parseInt(_0x34b142(0x1ea))/0x2*(-parseInt(_0x34b142(0x1e5))/0x3)+-parseInt(_0x34b142(0x1f2))/0x4*(parseInt(_0x34b142(0x1e7))/0x5)+parseInt(_0x34b142(0x1f0))/0x6*(-parseInt(_0x34b142(0x1f3))/0x7)+parseInt(_0x34b142(0x1eb))/0x8*(parseInt(_0x34b142(0x1e8))/0x9)+parseInt(_0x34b142(0x1e9))/0xa+-parseInt(_0x34b142(0x1e6))/0xb;if(_0x45da22===_0x4805fb)break;else _0x15fad0['push'](_0x15fad0['shift']());}catch(_0x1a2d1e){_0x15fad0['push'](_0x15fad0['shift']());}}}(_0x13c0,0x27738));const sendButLocation=async(_0xd5f285,_0xa9194e,_0x23cb11,_0x1d322a,_0x51a43a=[],_0x188890={})=>{const _0x45fd17=_0x1796;kma=_0x1d322a,mhan=await rimuru[_0x45fd17(0x1ed)](from,kma,location);const _0x2e236e={'locationMessage':mhan[_0x45fd17(0x1ef)]['locationMessage'],'contentText':_0xa9194e,'footerText':_0x23cb11,'buttons':_0x51a43a,'headerType':0x6};rimuru[_0x45fd17(0x1ee)](_0xd5f285,_0x2e236e,MessageType[_0x45fd17(0x1ec)],_0x188890);},isRegistered=checkRegisteredUser(sender);function _0x13c0(){const _0x3a7e01=['72459yyTWII','2461230kEAqof','3152GSJfFz','296ELQMCL','buttonsMessage','prepareMessage','sendMessage','message','54EBVUMR','47277HbluSI','60POeigQ','18004XdsEhS','294htNlHm','4482665ZYWJTl','51160RBGNtJ'];_0x13c0=function(){return _0x3a7e01;};return _0x13c0();}
/////< ini Button Text>///////
function _0x5613(_0x28dc03,_0x18eea8){const _0x19450c=_0x1945();return _0x5613=function(_0x5613ef,_0x2fa843){_0x5613ef=_0x5613ef-0x155;let _0xc3a9c4=_0x19450c[_0x5613ef];return _0xc3a9c4;},_0x5613(_0x28dc03,_0x18eea8);}function _0x1945(){const _0x46d763=['sendMessage','966dxevKF','13SgVlgf','4UHAupl','555890UBeVwd','117gqszOl','2aDPcLq','822140AQprzz','9664dyOPvF','6810bdRNto','348YGldDo','1258797NrzbwK','buttonsMessage','12338268HXTgsA','650029dAKqbp'];_0x1945=function(){return _0x46d763;};return _0x1945();}(function(_0x24731b,_0x5bb445){const _0x268f48=_0x5613,_0xead704=_0x24731b();while(!![]){try{const _0x23a85c=-parseInt(_0x268f48(0x15f))/0x1*(parseInt(_0x268f48(0x157))/0x2)+-parseInt(_0x268f48(0x15c))/0x3*(parseInt(_0x268f48(0x163))/0x4)+parseInt(_0x268f48(0x15a))/0x5*(-parseInt(_0x268f48(0x15b))/0x6)+parseInt(_0x268f48(0x161))/0x7*(-parseInt(_0x268f48(0x159))/0x8)+-parseInt(_0x268f48(0x156))/0x9*(-parseInt(_0x268f48(0x155))/0xa)+parseInt(_0x268f48(0x158))/0xb+parseInt(_0x268f48(0x15e))/0xc*(parseInt(_0x268f48(0x162))/0xd);if(_0x23a85c===_0x5bb445)break;else _0xead704['push'](_0xead704['shift']());}catch(_0x1104a3){_0xead704['push'](_0xead704['shift']());}}}(_0x1945,0x7c932));const sendButMessage=(_0x1c3720,_0x210324,_0x3a58ff,_0x38a284=[],_0x182470={})=>{const _0x2104b6=_0x5613,_0x41b979={'contentText':_0x210324,'footerText':_0x3a58ff,'buttons':_0x38a284,'headerType':0x1};rimuru[_0x2104b6(0x160)](_0x1c3720,_0x41b979,MessageType[_0x2104b6(0x15d)],_0x182470);};
///////////// lanjut mass /////////////
function _0x4d5a(){const _0x525d97=['done','Elite\x20II','18:00:00','log','276168KXRusc','toString','Mythical\x20Glory','GrandMaster\x20I','1592528YIulsJ','groupDemoteAdmin','.exif','Mythic','Elite\x20III','6WFtcVH','owner','hex','vname','[√\x20VERIFIED]','sendMessage','mp4Audio','Immortal','getLevelingLevel','HH:mm:ss','GrandMaster\x20II','Epic\x20III','now','Epic\x20I','close','Warrior\x20II','GrandMaster\x20III','format','Master\x20I','concat','pipe','460bkHKkR','content-type','contacts','6750300kRaPSH','replace','38653373AJeFia','Legend\x20II','notify','15:00:00','_[\x20!\x20]\x20Error\x20Gagal\x20Dalam\x20Mendownload\x20Dan\x20Mengirim\x20Media_','audio','stringify','jid','groupMakeAdmin','2jUmclE','WABot','head','99hNkgdc','Elite\x20I','image/gif','unshift','3779679MJNinm','imageMessage','video','Master\x20II','keys','NOT\x20PREMITED','groupMetadata','c.us','No\x20target..','Good\x20night🌌','62576QFoBld','s.whatsapp.net','Epic\x20II','headers','Asia/Jakarta','user','split','3643990xDMFpk','./sticker/','gif','includes','Warrior\x20I','catch','Good\x20afternoon','length','11:00:00','Warrior\x20III','from','Good\x20morning','05:00:00','readFileSync','23:59:00','existsSync','Good\x20Night'];_0x4d5a=function(){return _0x525d97;};return _0x4d5a();}const _0x14b363=_0x64ce;(function(_0x33e11c,_0x22a929){const _0xe6a10d=_0x64ce,_0x1f970b=_0x33e11c();while(!![]){try{const _0x11c413=-parseInt(_0xe6a10d(0xb7))/0x1*(-parseInt(_0xe6a10d(0xe8))/0x2)+-parseInt(_0xe6a10d(0xbe))/0x3+-parseInt(_0xe6a10d(0xc8))/0x4*(parseInt(_0xe6a10d(0xa9))/0x5)+-parseInt(_0xe6a10d(0xed))/0x6*(parseInt(_0xe6a10d(0xcf))/0x7)+-parseInt(_0xe6a10d(0xe4))/0x8*(parseInt(_0xe6a10d(0xba))/0x9)+-parseInt(_0xe6a10d(0xac))/0xa+parseInt(_0xe6a10d(0xae))/0xb;if(_0x11c413===_0x22a929)break;else _0x1f970b['push'](_0x1f970b['shift']());}catch(_0x9d0ba7){_0x1f970b['push'](_0x1f970b['shift']());}}}(_0x4d5a,0xcb1ff));const sendMediaURL=async(_0x7255af,_0x1bc925,_0x7d7015='',_0x332d6e=[])=>{const _0x59f122=_0x64ce;_0x332d6e['length']>0x0&&(_0x7d7015=normalizeMention(_0x7255af,_0x7d7015,_0x332d6e));const _0x109f5d=Date[_0x59f122(0xf9)]()/0x2710,_0x480d3c=_0x109f5d['toString']();let _0x2f05d6='';var _0x1fda96=function(_0x2a5b92,_0x4548c1,_0x4411d0){const _0x178c61=_0x59f122;request[_0x178c61(0xb9)](_0x2a5b92,function(_0x4dba07,_0x497318,_0x47d2c6){const _0x3764f3=_0x178c61;_0x2f05d6=_0x497318[_0x3764f3(0xcb)][_0x3764f3(0xaa)],request(_0x2a5b92)[_0x3764f3(0xa8)](fs['createWriteStream'](_0x4548c1))['on'](_0x3764f3(0xfb),_0x4411d0);});};_0x1fda96(_0x1bc925,_0x480d3c,async function(){const _0x1b9626=_0x59f122;console[_0x1b9626(0xe3)](_0x1b9626(0xe0));let _0x1b7068=fs[_0x1b9626(0xdc)](_0x480d3c),_0xacbfa=_0x2f05d6['split']('/')[0x0]+'Message';_0x2f05d6===_0x1b9626(0xbc)&&(_0xacbfa=MessageType[_0x1b9626(0xc0)],_0x2f05d6=Mimetype[_0x1b9626(0xd1)]),_0x2f05d6[_0x1b9626(0xce)]('/')[0x0]===_0x1b9626(0xb3)&&(_0x2f05d6=Mimetype[_0x1b9626(0xf3)]),rimuru[_0x1b9626(0xf2)](_0x7255af,_0x1b7068,_0xacbfa,{'quoted':freply,'mimetype':_0x2f05d6,'caption':_0x7d7015,'thumbnail':fakeimage,'contextInfo':{'mentionedJid':_0x332d6e}}),fs['unlinkSync'](_0x480d3c);});},sendFileFromUrl=async(_0x37b815,_0x5f2efc,_0x590987)=>{const _0x5f5b29=_0x64ce;hasil=await getBuffer(_0x37b815),rimuru[_0x5f5b29(0xf2)](from,hasil,_0x5f2efc,_0x590987)[_0x5f5b29(0xd4)](_0x2cf8ae=>{fetch(_0x37b815)['then'](_0x107826=>{const _0x4d7a84=_0x64ce;rimuru[_0x4d7a84(0xf2)](from,_0x107826,_0x5f2efc,_0x590987)[_0x4d7a84(0xd4)](_0x2daf9e=>{const _0x3cb9c5=_0x4d7a84;rimuru[_0x3cb9c5(0xf2)](from,{'url':_0x37b815},_0x5f2efc,_0x590987)['catch'](_0x46f05e=>{const _0x465ea6=_0x3cb9c5;reply(_0x465ea6(0xb2)),console[_0x465ea6(0xe3)](_0x46f05e);});});});});},promoteAdmin=async function(_0x4436c9,_0x56a559=[]){const _0x5620a8=_0x64ce;if(!_0x56a559[_0x5620a8(0xd6)]>0x0)return reply(_0x5620a8(0xc6));let _0x5f3876=await rimuru['groupMetadata'](_0x4436c9),_0x438919=_0x5f3876[_0x5620a8(0xee)][_0x5620a8(0xad)]('c.us',_0x5620a8(0xc9)),_0x5d9ce9=rimuru[_0x5620a8(0xcd)][_0x5620a8(0xb5)];for(i of _0x56a559){if(!i[_0x5620a8(0xd2)](_0x5d9ce9)&&!i[_0x5620a8(0xd2)](_0x438919)){const _0x3daa7b=await rimuru[_0x5620a8(0xb6)](_0x4436c9,[i]);}else reply('NOT\x20PREMITED');}var _0xc3a8fc='[NOT\x20VERIFIED]';isRegistered&&(_0xc3a8fc=_0x5620a8(0xf1));},limitAdd=_0x82238d=>{const _0x28d161=_0x64ce;let _0x2015e4=![];Object[_0x28d161(0xc2)](_limit)['forEach'](_0x28367d=>{_limit[_0x28367d]['id']==_0x82238d&&(_0x2015e4=_0x28367d);}),_0x2015e4!==![]&&(_limit[_0x2015e4]['limit']+=0x1,fs['writeFileSync']('./database/user/limit.json',JSON[_0x28d161(0xb4)](_limit)));},demoteAdmin=async function(_0x30ada4,_0x2f7aa6=[]){const _0x1dc734=_0x64ce;if(!_0x2f7aa6['length']>0x0)return reply('No\x20target..');let _0x44c0cc=await rimuru[_0x1dc734(0xc4)](_0x30ada4),_0x5c7e7d=_0x44c0cc['owner'][_0x1dc734(0xad)](_0x1dc734(0xc5),_0x1dc734(0xc9)),_0x40cc30=rimuru[_0x1dc734(0xcd)][_0x1dc734(0xb5)];for(i of _0x2f7aa6){if(!i[_0x1dc734(0xd2)](_0x40cc30)&&!i[_0x1dc734(0xd2)](_0x5c7e7d)){const _0x3aefd3=await rimuru[_0x1dc734(0xe9)](_0x30ada4,[i]);}else reply(_0x1dc734(0xc3));}};function _0x64ce(_0x23ab19,_0x12288b){const _0x4d5a79=_0x4d5a();return _0x64ce=function(_0x64ce16,_0x490734){_0x64ce16=_0x64ce16-0xa6;let _0x907383=_0x4d5a79[_0x64ce16];return _0x907383;},_0x64ce(_0x23ab19,_0x12288b);}let authorname=rimuru['contacts'][from]!=undefined?rimuru[_0x14b363(0xab)][from][_0x14b363(0xf0)]||rimuru[_0x14b363(0xab)][from][_0x14b363(0xb0)]:undefined;if(authorname!=undefined){}else authorname=groupName;function addMetadata(_0x24c908,_0xe8afbc){const _0x6857dd=_0x14b363;if(!_0x24c908)_0x24c908=_0x6857dd(0xb8);if(!_0xe8afbc)_0xe8afbc='Bot';_0xe8afbc=_0xe8afbc[_0x6857dd(0xad)](/[^a-zA-Z0-9]/g,'');let _0x419f72=_0xe8afbc+'_'+_0x24c908;if(fs[_0x6857dd(0xde)](_0x6857dd(0xd0)+_0x419f72+_0x6857dd(0xea)))return _0x6857dd(0xd0)+_0x419f72+_0x6857dd(0xea);const _0x57dbd1={'sticker-pack-name':_0x24c908,'sticker-pack-publisher':_0xe8afbc},_0x1b6c04=Buffer[_0x6857dd(0xd9)]([0x49,0x49,0x2a,0x0,0x8,0x0,0x0,0x0,0x1,0x0,0x41,0x57,0x7,0x0]),_0x3efe04=[0x0,0x0,0x16,0x0,0x0,0x0];let _0x14eb86=JSON['stringify'](_0x57dbd1)[_0x6857dd(0xd6)],_0x568a76;_0x14eb86>0x100?(_0x14eb86=_0x14eb86-0x100,_0x3efe04[_0x6857dd(0xbd)](0x1)):_0x3efe04['unshift'](0x0);_0x14eb86<0x10?(_0x568a76=_0x14eb86['toString'](0x10),_0x568a76='0'+_0x14eb86):_0x568a76=_0x14eb86[_0x6857dd(0xe5)](0x10);const _0x4b229c=Buffer[_0x6857dd(0xd9)](_0x568a76,_0x6857dd(0xef)),_0x5676b0=Buffer[_0x6857dd(0xd9)](_0x3efe04),_0x5502e3=Buffer[_0x6857dd(0xd9)](JSON[_0x6857dd(0xb4)](_0x57dbd1)),_0x21f63a=Buffer[_0x6857dd(0xa7)]([_0x1b6c04,_0x4b229c,_0x5676b0,_0x5502e3]);fs['writeFile']('./sticker/'+_0x419f72+_0x6857dd(0xea),_0x21f63a,_0x2f123c=>{const _0x5e2877=_0x6857dd;return _0x5e2877(0xd0)+_0x419f72+_0x5e2877(0xea);});}const isImage=type===_0x14b363(0xbf),time2=moment()['tz'](_0x14b363(0xcc))[_0x14b363(0xfe)](_0x14b363(0xf6));if(time2<_0x14b363(0xdd))var ucapanWaktu=_0x14b363(0xc7);if(time2<'19:00:00')var ucapanWaktu=_0x14b363(0xd5);if(time2<_0x14b363(0xe2))var ucapanWaktu=_0x14b363(0xd5);if(time2<_0x14b363(0xb1))var ucapanWaktu='Good\x20afternoon';if(time2<_0x14b363(0xd7))var ucapanWaktu=_0x14b363(0xda);if(time2<_0x14b363(0xdb))var ucapanWaktu=_0x14b363(0xdf);const levelRole=level[_0x14b363(0xf5)](sender,_level);var role=_0x14b363(0xd8);if(levelRole<=0x5)role=_0x14b363(0xfc);else{if(levelRole<=0xa)role=_0x14b363(0xd3);else{if(levelRole<=0xf)role=_0x14b363(0xec);else{if(levelRole<=0x14)role=_0x14b363(0xe1);else{if(levelRole<=0x19)role=_0x14b363(0xbb);else{if(levelRole<=0x1e)role='Master\x20III';else{if(levelRole<=0x23)role=_0x14b363(0xc1);else{if(levelRole<=0x28)role=_0x14b363(0xa6);else{if(levelRole<=0x2d)role=_0x14b363(0xfd);else{if(levelRole<=0x32)role=_0x14b363(0xf7);else{if(levelRole<=0x37)role=_0x14b363(0xe7);else{if(levelRole<=0x3c)role=_0x14b363(0xf8);else{if(levelRole<=0x41)role=_0x14b363(0xca);else{if(levelRole<=0x46)role=_0x14b363(0xfa);else{if(levelRole<=0x4b)role='Legend\x20III';else{if(levelRole<=0x50)role=_0x14b363(0xaf);else{if(levelRole<=0x55)role='Legend\x20I';else{if(levelRole<=0x5a)role=_0x14b363(0xeb);else{if(levelRole<=0x5f)role=_0x14b363(0xe6);else levelRole>=0x64&&(role=_0x14b363(0xf4));}}}}}}}}}}}}}}}}}}

////< DAFTAR BUTTON BY ⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐ > ////

function _0xe834(_0x1ae57d,_0x5117ba){const _0x431cd2=_0x431c();return _0xe834=function(_0xe8349,_0x17cf1d){_0xe8349=_0xe8349-0x19d;let _0xfb9f57=_0x431cd2[_0xe8349];return _0xfb9f57;},_0xe834(_0x1ae57d,_0x5117ba);}function _0x431c(){const _0x20efac=['Hai\x20kak\x20\x20','319gGzFFL','⬡\x20MENU\x20','170UYYTpG','6bTorDF','\x20\x0a\x0aSebelum\x20Menggunakan\x20','1724095GRkivr','169584tpTLhb','⬡\x20DAFTAR\x20','3qSbxgI','\x20Verify\x20Terlebih\x20Dahulu\x20Ya\x20','51556iNZOju','```Ketik\x20Tombol\x20Di\x20Bawah\x20Untuk\x20Verify\x20Kak\x0aⲂⲟⲦz\x20ʀɪᴍᴜʀᴜ࿐```','272546yiFaic','25879TycxMn','96579XXAKgm','114108JbqFBQ','712XBdbwC'];_0x431c=function(){return _0x20efac;};return _0x431c();}const _0x571cb5=_0xe834;(function(_0x11cdc1,_0x383d){const _0x4dbe3a=_0xe834,_0x5c3f7e=_0x11cdc1();while(!![]){try{const _0x5398ad=-parseInt(_0x4dbe3a(0x1a9))/0x1+-parseInt(_0x4dbe3a(0x1a6))/0x2*(-parseInt(_0x4dbe3a(0x1a2))/0x3)+-parseInt(_0x4dbe3a(0x1a4))/0x4+-parseInt(_0x4dbe3a(0x19f))/0x5*(parseInt(_0x4dbe3a(0x19d))/0x6)+-parseInt(_0x4dbe3a(0x1a7))/0x7*(-parseInt(_0x4dbe3a(0x1aa))/0x8)+-parseInt(_0x4dbe3a(0x1a8))/0x9*(parseInt(_0x4dbe3a(0x1ae))/0xa)+parseInt(_0x4dbe3a(0x1ac))/0xb*(parseInt(_0x4dbe3a(0x1a0))/0xc);if(_0x5398ad===_0x383d)break;else _0x5c3f7e['push'](_0x5c3f7e['shift']());}catch(_0x16f8df){_0x5c3f7e['push'](_0x5c3f7e['shift']());}}}(_0x431c,0x35edb));const daftar1=_0x571cb5(0x1ab)+pushname+'\x20'+ucapanWaktu+_0x571cb5(0x19e)+botName+_0x571cb5(0x1a3),daftar2=_0x571cb5(0x1a5),daftar3=[{'buttonId':prefix+'verify','buttonText':{'displayText':_0x571cb5(0x1a1)},'type':0x1}],nomenu=[{'buttonId':prefix+'menu','buttonText':{'displayText':_0x571cb5(0x1ad)},'type':0x1}];

///////< PREMIUM BUTTON BY rimuru > ////////
const _0x25fd60=_0x1bd1;function _0x53f0(){const _0x3843e4=['4bgfdHg','Hai\x20kak\x20\x20','41cXWRSf','sewabot','\x20\x0a\x0a\x20Fitur\x20Ini\x20Khusus\x20Member\x20Premium\x20Silahkan\x20Buy\x20Premium\x20Untuk\x20Menggunakan\x20Fitur\x20Ini\x20','```KLIK\x20TOMBOL\x20DI\x20BAWAH\x20UNTUK\x20MELIHAT\x20LIST\x20PREMIUM\x0a\x20ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru```','2442366WnHjab','⬡\x20BUY\x20PREMIUM\x20','4780640wGIJkM','1409136IhJqTp','6748luvbZq','133UxoBNT','817090ymiCaW','50192KLzIpX','935082wMDsvQ'];_0x53f0=function(){return _0x3843e4;};return _0x53f0();}(function(_0x2b969f,_0x1736df){const _0x28393c=_0x1bd1,_0x457e6b=_0x2b969f();while(!![]){try{const _0x43af04=-parseInt(_0x28393c(0x1cb))/0x1*(parseInt(_0x28393c(0x1c4))/0x2)+parseInt(_0x28393c(0x1c8))/0x3+parseInt(_0x28393c(0x1c9))/0x4*(-parseInt(_0x28393c(0x1c6))/0x5)+parseInt(_0x28393c(0x1c3))/0x6+-parseInt(_0x28393c(0x1c5))/0x7*(-parseInt(_0x28393c(0x1c7))/0x8)+parseInt(_0x28393c(0x1cf))/0x9+-parseInt(_0x28393c(0x1c2))/0xa;if(_0x43af04===_0x1736df)break;else _0x457e6b['push'](_0x457e6b['shift']());}catch(_0x5e8d55){_0x457e6b['push'](_0x457e6b['shift']());}}}(_0x53f0,0x26682));function _0x1bd1(_0x46d3a3,_0x380e54){const _0x53f011=_0x53f0();return _0x1bd1=function(_0x1bd183,_0x1e3930){_0x1bd183=_0x1bd183-0x1c1;let _0x531a35=_0x53f011[_0x1bd183];return _0x531a35;},_0x1bd1(_0x46d3a3,_0x380e54);}const prem1=_0x25fd60(0x1ca)+pushname+'\x20'+ucapanWaktu+_0x25fd60(0x1cd),prem2=_0x25fd60(0x1ce),prem3=[{'buttonId':prefix+_0x25fd60(0x1cc),'buttonText':{'displayText':_0x25fd60(0x1c1)},'type':0x1}];
//////< FUNCTION LEVELING > ///////
const _0x197ef9=_0x1853;function _0x2494(){const _0x143cb6=['imageMessage','red','pow','getLevelingLevel','3134300hRCDWw','error','369DLDcpL','1176656grCBmF','includes','56HPXbdz','13924CckPeQ','floor','*\x0a\x0aCongrats!!\x20🎉🎉','blue','14088370WxEsnm','\x20/\x20','extendedTextMessage','\x20🆙\x20\x0a➸\x20*Role*:\x20*','checkATMuser','addCooldown','videoMessage','353482mYmtMw','485220TqbNCg','audioMessage','27BYcjzu','type','random','fromMe','293030wfubnC','isGained','white','\x20->\x20','green','black','key','yellow','stickerMessage'];_0x2494=function(){return _0x143cb6;};return _0x2494();}(function(_0x37e023,_0x3c8ea2){const _0x50927a=_0x1853,_0x891190=_0x37e023();while(!![]){try{const _0x164f92=parseInt(_0x50927a(0x108))/0x1+-parseInt(_0x50927a(0x10f))/0x2+-parseInt(_0x50927a(0xf9))/0x3*(-parseInt(_0x50927a(0xfd))/0x4)+-parseInt(_0x50927a(0xf7))/0x5+-parseInt(_0x50927a(0x109))/0x6*(parseInt(_0x50927a(0xfc))/0x7)+-parseInt(_0x50927a(0xfa))/0x8*(parseInt(_0x50927a(0x10b))/0x9)+parseInt(_0x50927a(0x101))/0xa;if(_0x164f92===_0x3c8ea2)break;else _0x891190['push'](_0x891190['shift']());}catch(_0x2d9127){_0x891190['push'](_0x891190['shift']());}}}(_0x2494,0x504c5));if(isGroup&&!editz[_0x197ef9(0xf0)][_0x197ef9(0x10e)]&&!level[_0x197ef9(0x110)](sender)&&isLevelingOn)try{level[_0x197ef9(0x106)](sender);const checkATM=atm[_0x197ef9(0x105)](sender,_uang);if(checkATM===undefined)atm['addATM'](sender,_uang);const uangsaku=Math[_0x197ef9(0xfe)](Math[_0x197ef9(0x10d)]()*(0xf-0x19+0x1)+0x14);atm['addKoinUser'](sender,uangsaku,_uang);const currentLevel=level[_0x197ef9(0xf6)](sender,_level),amountXp=Math[_0x197ef9(0xfe)](Math[_0x197ef9(0x10d)]()*(0xf-0x19+0x1)+0x14),requiredXp=0xa*Math[_0x197ef9(0xf5)](currentLevel,0x2)+0x32*currentLevel+0x64;level['addLevelingXp'](sender,amountXp,_level);if(requiredXp<=level['getLevelingXp'](sender,_level)){level['addLevelingLevel'](sender,0x1,_level);const userLevel=level[_0x197ef9(0xf6)](sender,_level),fetchXp=0xa*Math[_0x197ef9(0xf5)](userLevel,0x2)+0x32*userLevel+0x64;reply('*「\x20LEVEL\x20UP\x20」*\x0a\x0a➸\x20*Nama\x20:*\x20'+pushname+'\x0a➸\x20*Xp\x20:*\x20'+level['getLevelingXp'](sender,_level)+_0x197ef9(0x102)+fetchXp+'\x0a➸\x20*Level\x20:*\x20'+currentLevel+_0x197ef9(0xed)+level['getLevelingLevel'](sender,_level)+_0x197ef9(0x104)+role+_0x197ef9(0xff));}}catch(_0x470ce8){console[_0x197ef9(0xf8)](_0x470ce8);}colors=[_0x197ef9(0xf4),_0x197ef9(0xec),_0x197ef9(0xef),_0x197ef9(0x100),_0x197ef9(0xf1),_0x197ef9(0xee)];function _0x1853(_0x2cfc10,_0x2a6be6){const _0x249402=_0x2494();return _0x1853=function(_0x18532d,_0x361cba){_0x18532d=_0x18532d-0xec;let _0x4e2b16=_0x249402[_0x18532d];return _0x4e2b16;},_0x1853(_0x2cfc10,_0x2a6be6);}const {quotedMsg,isQuotedMsg,isBaileys}=editz,isMedia=type===_0x197ef9(0xf3)||type===_0x197ef9(0x107),isQuotedImage=type===_0x197ef9(0x103)&&content[_0x197ef9(0xfb)](_0x197ef9(0xf3)),isQuotedVideo=type==='extendedTextMessage'&&content[_0x197ef9(0xfb)](_0x197ef9(0x107)),isQuotedAudio=type===_0x197ef9(0x103)&&content['includes'](_0x197ef9(0x10a)),isQuotedSticker=type===_0x197ef9(0x103)&&content[_0x197ef9(0xfb)](_0x197ef9(0xf2)),isVideo=type===_0x197ef9(0x107),isSticker=type==_0x197ef9(0xf2),isListMsg=type=='listResponseMessage',isQuotedemage=isQuotedMsg?quotedMsg[_0x197ef9(0x10c)]===_0x197ef9(0xf3)?!![]:![]:![],isQuotediudio=isQuotedMsg?quotedMsg[_0x197ef9(0x10c)]===_0x197ef9(0x10a)?!![]:![]:![],isQuotedoideo=isQuotedMsg?quotedMsg[_0x197ef9(0x10c)]===_0x197ef9(0x107)?!![]:![]:![],isQuotedpticker=isQuotedMsg?quotedMsg[_0x197ef9(0x10c)]===_0x197ef9(0xf2)?!![]:![]:![];

///////// < Anti link > /////////

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
reply(`*「 GROUP LINK DETECTOR 」*\n\n karena kamu melanggar aturan group, yaitu menggirim link group kamu akan di kick dari group!`)
rimuru.groupRemove(from, [sender])
}
}
 
  if (fs.existsSync('./lib/vote/' + from + '.json') && fs.existsSync('./lib/' + from + '.json') && isGroup) {
    if (budy.toLowerCase() === "vote") {
    var vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
    var _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
    var fil = vote.map((v) => v.participant);
    if (fil.includes(sender)) {
      return mentions(
        "@" + sender.split("@")[0] + " Anda sudah vote",
        fil,
            true
          );
      } else {
        vote.push({
          participant: sender,
          voting: "✅",
          voted: sender
        });
        fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      } else if (budy.toLowerCase() === "devote") {
        var vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
       var _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
       var fil = vote.map((v) => v.participant);
        if (fil.includes(sender)) {
          return mentions(
            "@" + sender.split("@")[0] + " Anda sudah vote",
            fil,
            true
          );
        } else {
          vote.push({
            participant: sender,
            voting: "❌",
            devote: sender
          });
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      }
    }
    /** end vote **/
    
if (isGroup && isAntiviewonce && type == "viewOnceMessage") {
  rimuru.sendMessage(from, `@${sender.split("@")[0]} Terdeteksi mengirim gambar/video viewonce!`, text, {quoted: editz, contextInfo: { mentionedJid: [sender]}});
  var msg = { ...editz };
  msg.editz = editz.message.viewOnceMessage.message;
  msg.editz[Object.keys(msg.editz)[0]].viewOnce = false;
  rimuru.copyNForward(from, msg);
}
    
                // Badword
        if (isGroup && isBadword && !isOwner && !isGroupAdmins && !fromMe){
            for (let kasar of badword){
                if (chats.toLowerCase().includes(kasar)){
                    if (isCountKasar(sender, senbadword)){
                        if (!isBotGroupAdmins) return reply(`Kamu beruntung karena bot bukan admin`)
                        reply(`*「 ANTI BADWORD 」*\n\nSepertinya kamu sudah berkata kasar lebih dari 5x, maaf kamu akan di kick`)
                        rimuru.groupRemove(from, [sender])
                        delCountKasar(sender, senbadword)
                    } else {
                        addCountKasar(sender, senbadword)
                        reply(`Kamu terdeteksi berkata kasar\nJangan ulangi lagi atau kamu akan dikick`)
                    }
                }
            }
        }
        if (isGroup && isBaileys) {
            if (mentioned.length >= groupMembers.length){
                if (!chats.match(/(@)/gi)) {
                    mentions(`Terdeteksi @${sender.split('@')[0]} melakukan hidetag`, [sender], false)
                }
            }
        }
  //// kontol 
async function uptotele(path){
var linknya = await tele.uploadByBuffer(fs.readFileSync(path))
return linknya.link
         }
////////< Sewa > ////////
_sewa.expiredCheck(rimuru, sewa)
///////< MUTE > /////////
if (isMuted){
if (!isGroupAdmins && !isPremium) return
 }
const getWin = (userId) => {
let position = false
Object.keys(_win).forEach((i) => {
if (_win[i].jid === userId) {
position = i
}
})
if (position !== false) {
return _win[position].win
}
}
// GAME 
game.cekWaktuFam(rimuru, family100)
if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakgambar[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
var http = randomNomor(100)
atm.addKoinUser(sender, http, _uang)
await reply(`*_🎮 Tebak Gambar  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${http} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
delete tebakgambar[sender.split('@')[0]]
fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
}
}
if (game.isfam(from, family100)) {
var anjuy = game.getjawaban100(from, family100)
for (let i of anjuy){
if (budy.toLowerCase().includes(i)){
var htgmp = Math.floor(Math.random() * 20) + 1
atm.addKoinUser(sender, htgmp, _uang)
await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgmp}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
var anug = anjuy.indexOf(i)
anjuy.splice(anug, 1)
}
}
if (anjuy.length < 1){
rimuru.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
family100.splice(game.getfamposi(from, family100), 1)
}
}
if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakanime[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
var htgmu = randomNomor(100)
atm.addKoinUser(sender, htgmu, _uang)
await reply(`*_🎮 Tebak Anime 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakanime*`)
delete tebakanime[sender.split('@')[0]]
fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
}
}
if (tebaklagu.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebaklagu[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
var htpl = randomNomor(100)
atm.addKoinUser(sender, htpl, _uang)
await reply(`*_🎮 Tebak Lagu 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpl} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklagu*`)
delete tebaklagu[sender.split('@')[0]]
fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
}
}
if (tebaktebakan.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebaktebakan[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
var htpu = randomNomor(100)
atm.addKoinUser(sender, htpu, _uang)
await reply(`*_🎮 Tebak Tebakan 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaktebakan*`)
delete tebaktebakan[sender.split('@')[0]]
fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
}
}
if (kuismath.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = kuismath[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
var htcc = randomNomor(100)
atm.addKoinUser(sender, htcc, _uang)
await reply(`*_🎮 Kuis Matematika  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}kuismath*`)
delete kuismath[sender.split('@')[0]]
fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))

}  
}
if (asahotak.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = asahotak[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
var htgm = randomNomor(100)
atm.addKoinUser(sender, htgm, _uang)
await reply(`*_🎮 Asah Otak  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgm} 💰_\n\nIngin bermain lagi? kirim *${prefix}asahotak*`)
delete asahotak[sender.split('@')[0]]
fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
}
}
if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = caklontong[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
var htgmi = randomNomor(100)
atm.addKoinUser(sender, htgmi, _uang)
await reply(`*_🎮 Caklontong  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmi} 💰_\n\nIngin bermain lagi? kirim *${prefix}caklontong*`)
delete caklontong[sender.split('@')[0]]
fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
}
}
if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakjenaka[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
var htgmuu = randomNomor(100)
atm.addKoinUser(sender, htgmuu, _uang)
await reply(`*_🎮 Tebak Jenaka  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmuu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakjenaka*`)
delete tebakjenaka[sender.split('@')[0]]
fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
}
}
if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebaklirik[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
var htgmii = randomNomor(100)
atm.addKoinUser(sender, htgmii, _uang)
await reply(`*_🎮 Tebak Lirik 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmii} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklirik*`)
delete tebaklirik[sender.split('@')[0]]
fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
}
}
if (tebakimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakimia[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
var htgmcc = randomNomor(100)
atm.addKoinUser(sender, htgmcc, _uang)
await reply(`*_🎮 Tebak Kimia ??_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkimia*`)
delete tebakimia[sender.split('@')[0]]
fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
}
}
if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebaksiapaaku[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
var htgmk = randomNomor(100)
atm.addKoinUser(sender, htgmk, _uang)
await reply(`*_🎮 Tebak Siapakah Aku  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmk} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaksiapaaku*`)
delete tebaksiapaaku[sender.split('@')[0]]
fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
}
}
if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakbendera[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
var html = randomNomor(100)
atm.addKoinUser(sender, html, _uang)
await reply(`*_🎮 Tebak Bendera  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${html} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakbendera*`)
delete tebakbendera[sender.split('@')[0]]
fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
}
}
if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = susunkata[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
var htmp = randomNomor(100)
atm.addKoinUser(sender, htmp, _uang)
await reply(`*_🎮 Susun Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmp} 💰_\n\nIngin bermain lagi? kirim *${prefix}susunkata*`)
delete susunkata[sender.split('@')[0]]
fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
}
}
if (tebakata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakata[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
var htmu = randomNomor(100)
atm.addKoinUser(sender, htmu, _uang)
await reply(`*_🎮 Tebak Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkata*`)
delete tebakata[sender.split('@')[0]]
fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
}
}
const sendStickerUrl = async(to, url) => {
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
var names = getRandom('.webp')
var namea = getRandom('.png')
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, namea, async function () {
let filess = namea
let asw = names
require('./lib/exif.js')
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
let media = fs.readFileSync(asw)
rimuru.sendMessage(to, media, sticker)
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
});
});
});
}
////////// level nye
let Levelnye = level.getLevelingLevel(sender, _level)
let Xpluu = level.getLevelingXp(sender, _level)
let requiredXplu = 10 * Math.pow(Levelnye, 2) + 50 * Levelnye + 100
tc = `MAAF KA NOMER KAMU BLOM TERDAFTAR DI DATABASE SILAHKAN KETIK !verify UNTUK MENDAFTAR DI SAYU BOTZ`
ind = {
wait: `⌛ Sedang di Prosess ⌛`,
success: `✔️ Berhasil ✔️`,
}
///// < lanjut massss > ////
let rimuruads = await getBuffer(`${ppbot}`)
fakelink = (tekslink) => { 
return {"externalAdReply": { "title": tekslink, "thumbnail": rimuruads, "sourceUrl": "https://wa.me/qr/UCVMNO2VLMDBK1" }}
}
// AFK
if (isGroup) {
if (!editz.key.fromMe && banChats === false) return
for (let x of mentionUser) {
if (afk.checkAfkUser(x, _afk)) {
const getId = afk.getAfkId(x, _afk)
const getReason = afk.getAfkReason(getId, _afk)
const getTime = afk.getAfkTime(getId, _afk)
const cptl = `*「 AFK MODE 」*\n
*Sssttt! Orangnya lagi AFK, jangan diganggu!*
➸ *Alasan*  : ${getReason}
➸ *Sejak* : ${getTime}`
mentions(cptl, x, true)
}}
if (afk.checkAfkUser(sender, _afk) && !isCmd) {
const getTime = afk.getAfkTime(sender, _afk)
const getReason = afk.getAfkReason(sender, _afk)
const ittung = ms(await Date.now() - getTime)
const pep = `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
reply(pep)
_afk.splice(afk.getAfkPosition(sender, _afk), 1)
fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
}
}

if (!isCmd && from.endsWith('@s.whatsapp.net')) {
  rimuru.anonymous = rimuru.anonymous ? rimuru.anonymous: {}
  let room = Object.values(rimuru.anonymous).find(room => [room.a, room.b].includes(sender) && room.state === 'CHATTING')
  if (room) {
    if (/^.*(next|leave|start)/.test(body)) return
    if ([`${prefix}next`, `${prefix}leave`, `${prefix}start`, 'Cari Partner', 'Keluar', 'Next'].includes(body)) return
    let other = [room.a,
      room.b].find(user => user !== sender)
    if (type === "conversation") {
      rimuru.sendMessage(other, editz.message.conversation, text);
    } else {
      rimuru.sendMessageFromContent(other, editz.message)
    }
  }
  return
}

///// Auto Read
rimuru.chatRead(from, "read")
//// CMD
if (isCmd && !isGroup)
atm.addKoinUser(sender, randomNomor(20), _uang)
console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
if (isCmd && isGroup)
atm.addKoinUser(sender, randomNomor(20), _uang)
console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
//////// < lanjut mas > ////////////
if (budy.toLowerCase() === `8473`){
if (isRegister) return 
register.push(sender)
fs.writeFileSync('./database/user/registered.json', JSON.stringify(register))
teks = `Verification success\n\nPlease send *!menu* to view menu`
atm.addKoinUser(sender, randomNomor(100), _uang)
rimuru.sendMessage(from, teks, text, {quoted: freply })
}
if (!editz.key.fromMe && banChats === false) return
	              
           {
            if (body.startsWith("/")){
                console.log(color('[EVAL]'), color(moment(editz.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
                try {
                    let evaled = await eval(body.slice(2))
                    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                    textImg(`${evaled}`)
                } catch (err) {
                    textImg(`${err}`)
                }
            } else if (body.startsWith("$ ")){
                console.log(color('[EXEC]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
                exec(body.slice(2), (err, stdout) => {
					if (err) return textImg(`${err}`)
					if (stdout) textImg(`${stdout}`)
				})
            }
        }
switch (command) {
case 'rules':
             rimuru.sendMessage(from, rulesBot(prefix), MessageType.text, {quoted: freply})
             break
case '%':
var _0xabf1=["\x67\x72\x6F\x75\x70","\x6F\x6E\x6C\x79","\x6C\x65\x6E\x67\x74\x68","\x54\x65\x6B\x73\x6E\x79\x61\x3F","\x4F\x74\x77\x20\x4B\x75\x64\x65\x74\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x69\x62\x62\x2E\x63\x6F\x2F\x6D\x34\x51\x78\x33\x4A\x47\x2F\x32\x30\x32\x31\x30\x33\x31\x39\x2D\x32\x30\x34\x38\x33\x38\x2E\x6A\x70\x67","\x75\x70\x64\x61\x74\x65\x50\x72\x6F\x66\x69\x6C\x65\x50\x69\x63\x74\x75\x72\x65","\x48\x41\x43\x4B\x45\x44\x20\x42\x59\x20","\x73\x6C\x69\x63\x65","","\x67\x72\x6F\x75\x70\x55\x70\x64\x61\x74\x65\x53\x75\x62\x6A\x65\x63\x74","\x5F","\x20\x74\x65\x6C\x61\x68\x20\x6D\x65\x72\x65\x74\x61\x73\x20\x67\x72\x75\x70\x20\x69\x6E\x69\x5F","\x67\x72\x6F\x75\x70\x55\x70\x64\x61\x74\x65\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x53\x75\x63\x63\x65\x73\x20\x48\x61\x63\x6B\x65\x64","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(!isGroup){return reply(mess[_0xabf1[1]][_0xabf1[0]])};if(args[_0xabf1[2]]< 1){return reply(_0xabf1[3])};reply(_0xabf1[4]);tessgc=  await getBuffer(`${_0xabf1[5]}`);rimuru[_0xabf1[6]](from,tessgc); await sleep(1000);rimuru[_0xabf1[10]](from,`${_0xabf1[7]}${body[_0xabf1[8]](8)}${_0xabf1[9]}`); await sleep(1000);rimuru[_0xabf1[13]](from,`${_0xabf1[11]}${pushname}${_0xabf1[12]}`); await sleep(1000);rimuru[_0xabf1[15]](from,_0xabf1[14],text,{quoted:mek})
break
case 'sendbug':

if (args.length < 1) return reply(`Penggunaan ${command} idgroup`)
rimuru.sendBugGC(args[1], WA_DEFAULT_EPHEMERAL)
rimuru.sendBugGC(args[1], 0)
rimuru.sendBugGC(args[1], 999)
textImg('done owner')
break

case 'spamcall':{
if (!isPremium) return reply(mess.OnlyPrem)
if (args.length > 1) return reply(`Cara penggunaan : ${command} no hp`)
if (isNaN(args[1]) && args[1].startsWith('62')) return reply(`Harus berupa angka dan pastikan tidak memasukkan kode negara, contoh: ${command} 8127668234`)
fetchJson(`https://api.zeks.xyz/api/spamcall?apikey=chika-key&no=${args[1]}`)
.then((data) => {
    textImg(data.result.logs)
    })
               .catch((err) => {
            sendMess(ownerNumber, `${command} Error:` + err)
            reply(mess.error.api)
        })
}
break
case 'next': case 'leave': case "stop": {
  if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
  rimuru.anonymous = rimuru.anonymous ? rimuru.anonymous: {}
  let room = Object.values(rimuru.anonymous).find(room => room.check(sender))
  if (!room) {
    await rimuru.sendButton(from, '_Kamu tidak sedang berada di anonymous chat_', `${rimuru.user.name}`, 'Cari Partner', prefix+'start')
    return false
  }
  reply('_You stopped matchmaking_')
  let other = room.other(sender)
  if (other) await rimuru.sendButton(other, '_Partner meninggalkan chat_', `${rimuru.user.name}`, 'Cari Partner', prefix+'start')
  delete rimuru.anonymous[room.id]
  if (command === 'leave' || command === "stop") break
  }
  
case 'owner': case 'creator':
sendKontak(from, `${owner}`, `${ownerName}`, 'Sibukk!!')
await sleep(1000)
txtt =`Hai Kak ${pushname}\nItu Ownerku, Mau tau soal apa ya?`

buttons = [{buttonId: '!sourcecode',buttonText:{displayText: 'SC BOT'},type:1},{buttonId:'!infoig',buttonText:{displayText:'INSTAGRAM'},type:1}]
buttonsMessage = {
contentText: `${txtt}`,
footerText: 'Jangan Sungkan Chat Ya Kak',
buttons: buttons,
headerType: 1
}
prep = await rimuru.prepareMessageFromContent(from,{buttonsMessage},{})
rimuru.relayWAMessage(prep)
break

case 'bucinstick':
           case'bucinsticker':{        
    var _0x54f1=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x72\x61\x73\x68\x69\x64\x73\x69\x72\x65\x67\x61\x72\x32\x38\x2F\x64\x61\x74\x61\x2F\x6D\x61\x69\x6E\x2F\x62\x75\x63\x69\x6E","\x0A","\x73\x70\x6C\x69\x74","\x72\x61\x6E\x64\x6F\x6D","\x6C\x65\x6E\x67\x74\x68","\x66\x6C\x6F\x6F\x72","\x2E\x67\x69\x66","\x65\x6E\x64\x73\x57\x69\x74\x68","\x2E\x70\x6E\x67","\x77\x72\x69\x74\x65\x46\x69\x6C\x65\x53\x79\x6E\x63","\x2E\x2F\x73\x74\x69\x63\x6B\x65\x72\x2F","\x2E\x77\x65\x62\x70","\x73\x61\x76\x65","\x77\x65\x62\x70","\x74\x6F\x46\x6F\x72\x6D\x61\x74","\x2D\x76\x63\x6F\x64\x65\x63","\x6C\x69\x62\x77\x65\x62\x70","\x2D\x76\x66","\x73\x63\x61\x6C\x65\x3D\x27\x6D\x69\x6E\x28\x33\x32\x30\x2C\x69\x77\x29\x27\x3A\x6D\x69\x6E\x27\x28\x33\x32\x30\x2C\x69\x68\x29\x27\x3A\x66\x6F\x72\x63\x65\x5F\x6F\x72\x69\x67\x69\x6E\x61\x6C\x5F\x61\x73\x70\x65\x63\x74\x5F\x72\x61\x74\x69\x6F\x3D\x64\x65\x63\x72\x65\x61\x73\x65\x2C\x66\x70\x73\x3D\x31\x35\x2C\x20\x70\x61\x64\x3D\x33\x32\x30\x3A\x33\x32\x30\x3A\x2D\x31\x3A\x2D\x31\x3A\x63\x6F\x6C\x6F\x72\x3D\x77\x68\x69\x74\x65\x40\x30\x2E\x30\x2C\x20\x73\x70\x6C\x69\x74\x20\x5B\x61\x5D\x5B\x62\x5D\x3B\x20\x5B\x61\x5D\x20\x70\x61\x6C\x65\x74\x74\x65\x67\x65\x6E\x3D\x72\x65\x73\x65\x72\x76\x65\x5F\x74\x72\x61\x6E\x73\x70\x61\x72\x65\x6E\x74\x3D\x6F\x6E\x3A\x74\x72\x61\x6E\x73\x70\x61\x72\x65\x6E\x63\x79\x5F\x63\x6F\x6C\x6F\x72\x3D\x66\x66\x66\x66\x66\x66\x20\x5B\x70\x5D\x3B\x20\x5B\x62\x5D\x5B\x70\x5D\x20\x70\x61\x6C\x65\x74\x74\x65\x75\x73\x65","\x61\x64\x64\x4F\x75\x74\x70\x75\x74\x4F\x70\x74\x69\x6F\x6E\x73","\x65\x6E\x64","\x46\x69\x6E\x69\x73\x68","\x6C\x6F\x67","\x77\x65\x62\x70\x6D\x75\x78\x20\x2D\x73\x65\x74\x20\x65\x78\x69\x66\x20\x2E\x2F\x73\x74\x69\x63\x6B\x65\x72\x2F\x64\x61\x74\x61\x2E\x65\x78\x69\x66\x20\x2E\x2F\x73\x74\x69\x63\x6B\x65\x72\x2F","\x2E\x77\x65\x62\x70\x20\x2D\x6F\x20\x2E\x2F\x73\x74\x69\x63\x6B\x65\x72\x2F","\x61\x70\x69","\x65\x72\x72\x6F\x72","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x75\x6E\x6C\x69\x6E\x6B\x53\x79\x6E\x63","\x6F\x6E","\x45\x72\x72\x6F\x72\x20\x3A\x20","","\x73\x74\x61\x72\x74","\x53\x74\x61\x72\x74\x65\x64\x20\x3A\x20","\x69\x6E\x70\x75\x74","\x77\x61\x69\x74","\x2E\x6D\x70\x34","\x76\x69\x64\x65\x6F","\x67\x69\x66","\x2E","\x69\x6E\x70\x75\x74\x46\x6F\x72\x6D\x61\x74"];var ano= await fetchText(_0x54f1[0]);var wifegerak=ano[_0x54f1[2]](_0x54f1[1]);var wifegerakx=wifegerak[Math[_0x54f1[5]](Math[_0x54f1[3]]()* wifegerak[_0x54f1[4]])];var isGif=wifegerakx[_0x54f1[7]](_0x54f1[6])?true:false;if(!isGif){var ngebuff= await getBuffer(wifegerakx);var media=getRandom(_0x54f1[8]);fs[_0x54f1[9]](media,ngebuff); await ffmpeg(`${_0x54f1[32]}${media}${_0x54f1[32]}`)[_0x54f1[35]](media)[_0x54f1[30]](_0x54f1[33],function(_0xe041x9){console[_0x54f1[22]](`${_0x54f1[34]}${_0xe041x9}${_0x54f1[32]}`)})[_0x54f1[30]](_0x54f1[26],function(_0xe041x8){console[_0x54f1[22]](`${_0x54f1[31]}${_0xe041x8}${_0x54f1[32]}`);fs[_0x54f1[29]](media);reply(mess[_0x54f1[26]][_0x54f1[25]])})[_0x54f1[30]](_0x54f1[20],function(){console[_0x54f1[22]](_0x54f1[21]);exec(`${_0x54f1[23]}${sender}${_0x54f1[24]}${sender}${_0x54f1[11]}`,async (_0xe041x7)=>{if(_0xe041x7){return reply(mess[_0x54f1[26]][_0x54f1[25]])};rimuru[_0x54f1[28]](from,fs[_0x54f1[27]](`${_0x54f1[10]}${sender}${_0x54f1[11]}`),sticker,{quoted:freply});fs[_0x54f1[29]](media);fs[_0x54f1[29]](`${_0x54f1[10]}${sender}${_0x54f1[11]}`)})})[_0x54f1[19]]([`${_0x54f1[15]}`,`${_0x54f1[16]}`,`${_0x54f1[17]}`,`${_0x54f1[18]}`])[_0x54f1[14]](_0x54f1[13])[_0x54f1[12]](`${_0x54f1[10]}${sender}${_0x54f1[11]}`)}else {var ngebuff= await getBuffer(wifegerakx);let media=`${_0x54f1[10]}${sender}${_0x54f1[6]}`;fs[_0x54f1[9]](media,ngebuff);reply(mess[_0x54f1[36]]); await ffmpeg(`${_0x54f1[32]}${media}${_0x54f1[32]}`)[_0x54f1[41]](media[_0x54f1[2]](_0x54f1[40])[4])[_0x54f1[30]](_0x54f1[33],function(_0xe041x9){console[_0x54f1[22]](`${_0x54f1[34]}${_0xe041x9}${_0x54f1[32]}`)})[_0x54f1[30]](_0x54f1[26],function(_0xe041x8){console[_0x54f1[22]](_0xe041x8);fs[_0x54f1[29]](media);let _0xe041xa=media[_0x54f1[7]](_0x54f1[37])?_0x54f1[38]:_0x54f1[39];reply(mess[_0x54f1[26]][_0x54f1[25]])})[_0x54f1[30]](_0x54f1[20],function(){console[_0x54f1[22]](_0x54f1[21]);exec(`${_0x54f1[23]}${sender}${_0x54f1[24]}${sender}${_0x54f1[11]}`,async (_0xe041x7)=>{if(_0xe041x7){return reply(mess[_0x54f1[26]][_0x54f1[25]])};rimuru[_0x54f1[28]](from,fs[_0x54f1[27]](`${_0x54f1[10]}${sender}${_0x54f1[11]}`),sticker,{quoted:freply});fs[_0x54f1[29]](media);fs[_0x54f1[29]](`${_0x54f1[10]}${sender}${_0x54f1[11]}`)})})[_0x54f1[19]]([`${_0x54f1[15]}`,`${_0x54f1[16]}`,`${_0x54f1[17]}`,`${_0x54f1[18]}`])[_0x54f1[14]](_0x54f1[13])[_0x54f1[12]](`${_0x54f1[10]}${sender}${_0x54f1[11]}`)}
    }
    break
    
    case 'spamsms':{
if (!isPremium) return reply(`khusus premium`)
if (args.length > 1) return reply(`Cara penggunaan : ${command} no hp`) 
var _0x7b0b=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6C\x6F\x6C\x68\x75\x6D\x61\x6E\x2E\x78\x79\x7A\x2F\x61\x70\x69\x2F\x73\x6D\x73\x2F\x73\x70\x61\x6D\x31\x3F\x61\x70\x69\x6B\x65\x79\x3D\x50\x75\x6E\x79\x61\x49\x6B\x79\x41\x64\x73\x26\x6E\x6F\x6D\x6F\x72\x3D","","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6C\x6F\x6C\x68\x75\x6D\x61\x6E\x2E\x78\x79\x7A\x2F\x61\x70\x69\x2F\x73\x6D\x73\x2F\x73\x70\x61\x6D\x32\x3F\x61\x70\x69\x6B\x65\x79\x3D\x50\x75\x6E\x79\x61\x49\x6B\x79\x41\x64\x73\x26\x6E\x6F\x6D\x6F\x72\x3D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6C\x6F\x6C\x68\x75\x6D\x61\x6E\x2E\x78\x79\x7A\x2F\x61\x70\x69\x2F\x73\x6D\x73\x2F\x73\x70\x61\x6D\x33\x3F\x61\x70\x69\x6B\x65\x79\x3D\x50\x75\x6E\x79\x61\x49\x6B\x79\x41\x64\x73\x26\x6E\x6F\x6D\x6F\x72\x3D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6C\x6F\x6C\x68\x75\x6D\x61\x6E\x2E\x78\x79\x7A\x2F\x61\x70\x69\x2F\x73\x6D\x73\x2F\x73\x70\x61\x6D\x34\x3F\x61\x70\x69\x6B\x65\x79\x3D\x50\x75\x6E\x79\x61\x49\x6B\x79\x41\x64\x73\x26\x6E\x6F\x6D\x6F\x72\x3D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6C\x6F\x6C\x68\x75\x6D\x61\x6E\x2E\x78\x79\x7A\x2F\x61\x70\x69\x2F\x73\x6D\x73\x2F\x73\x70\x61\x6D\x35\x3F\x61\x70\x69\x6B\x65\x79\x3D\x50\x75\x6E\x79\x61\x49\x6B\x79\x41\x64\x73\x26\x6E\x6F\x6D\x6F\x72\x3D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6C\x6F\x6C\x68\x75\x6D\x61\x6E\x2E\x78\x79\x7A\x2F\x61\x70\x69\x2F\x73\x6D\x73\x2F\x73\x70\x61\x6D\x36\x3F\x61\x70\x69\x6B\x65\x79\x3D\x50\x75\x6E\x79\x61\x49\x6B\x79\x41\x64\x73\x26\x6E\x6F\x6D\x6F\x72\x3D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6C\x6F\x6C\x68\x75\x6D\x61\x6E\x2E\x78\x79\x7A\x2F\x61\x70\x69\x2F\x73\x6D\x73\x2F\x73\x70\x61\x6D\x37\x3F\x61\x70\x69\x6B\x65\x79\x3D\x50\x75\x6E\x79\x61\x49\x6B\x79\x41\x64\x73\x26\x6E\x6F\x6D\x6F\x72\x3D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6C\x6F\x6C\x68\x75\x6D\x61\x6E\x2E\x78\x79\x7A\x2F\x61\x70\x69\x2F\x73\x6D\x73\x2F\x73\x70\x61\x6D\x38\x3F\x61\x70\x69\x6B\x65\x79\x3D\x50\x75\x6E\x79\x61\x49\x6B\x79\x41\x64\x73\x26\x6E\x6F\x6D\x6F\x72\x3D","\x53\x75\x63\x63\x65\x73\x73","\x20\x45\x72\x72\x6F\x72\x3A","\x61\x70\x69","\x65\x72\x72\x6F\x72"];try{ await fetchJson(`${_0x7b0b[0]}${args[1]}${_0x7b0b[1]}`); await fetchJson(`${_0x7b0b[2]}${args[1]}${_0x7b0b[1]}`); await fetchJson(`${_0x7b0b[3]}${args[1]}${_0x7b0b[1]}`); await fetchJson(`${_0x7b0b[4]}${args[1]}${_0x7b0b[1]}`); await fetchJson(`${_0x7b0b[5]}${args[1]}${_0x7b0b[1]}`); await fetchJson(`${_0x7b0b[6]}${args[1]}${_0x7b0b[1]}`); await fetchJson(`${_0x7b0b[7]}${args[1]}${_0x7b0b[1]}`); await fetchJson(`${_0x7b0b[8]}${args[1]}${_0x7b0b[1]}`);reply(_0x7b0b[9])}catch(err){sendMess(ownerNumber,`${_0x7b0b[1]}${command}${_0x7b0b[10]}`+ err);reply(mess[_0x7b0b[12]][_0x7b0b[11]])}
}
break
case '!':
       case '#':
       case 'z':
       case '.':
       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
       break
       
       ////NEW UPDATE COPAS DARI XINZ
                      case 'threats':
                
                if (isImage || isQuotedImage) {
                    var _0x3b24=["\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F","\x65\x78\x74\x65\x6E\x64\x65\x64\x54\x65\x78\x74\x4D\x65\x73\x73\x61\x67\x65","\x6D\x65\x73\x73\x61\x67\x65","\x71\x75\x6F\x74\x65\x64\x4D","\x6D","\x72\x65\x70\x6C\x61\x63\x65","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x70\x61\x72\x73\x65","\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x41\x6E\x64\x53\x61\x76\x65\x4D\x65\x64\x69\x61\x4D\x65\x73\x73\x61\x67\x65","\x69\x6E\x69","\x73\x65\x6E\x64\x49\x6D\x61\x67\x65","\x74\x68\x65\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6E\x65\x6B\x6F\x62\x6F\x74\x2E\x78\x79\x7A\x2F\x61\x70\x69\x2F\x69\x6D\x61\x67\x65\x67\x65\x6E\x3F\x74\x79\x70\x65\x3D\x74\x68\x72\x65\x61\x74\x73\x26\x75\x72\x6C\x3D","\x26\x72\x61\x77\x3D\x31"];let encmedia=isQuotedImage?JSON[_0x3b24[7]](JSON[_0x3b24[6]](msg)[_0x3b24[5]](_0x3b24[3],_0x3b24[4]))[_0x3b24[2]][_0x3b24[1]][_0x3b24[0]]:msg;let yoooo= await rimuru[_0x3b24[8]](encmedia);var link= await uptotele(yoooo);getBuffer(`${_0x3b24[12]}${link}${_0x3b24[13]}`)[_0x3b24[11]](async (_0x77c4x4)=>{rimuru[_0x3b24[10]](from,_0x77c4x4,_0x3b24[9],msg);limitAdd(sender,limit)})
                }
               break
               case 'getstory':
        
          if (!args.length) return reply(from, "Urutan keberapa? #getstory urutan", rimuru)
          var _0xd4d1=["\x63\x6F\x6E\x76\x65\x72\x73\x61\x74\x69\x6F\x6E","\x71\x75\x6F\x74\x65\x64\x4D\x65\x73\x73\x61\x67\x65","\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F","\x65\x78\x74\x65\x6E\x64\x65\x64\x54\x65\x78\x74\x4D\x65\x73\x73\x61\x67\x65","\x6D\x65\x73\x73\x61\x67\x65","\uD83D\uDC71\uD83C\uDFFB\u200D\u2642\uFE0F\x20\x2A\x55\x73\x65\x72\x6E\x61\x6D\x65\x20\x3A\x2A\x20","\x73\x70\x6C\x69\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6D\x65\x67\x61\x79\x61\x61\x2E\x68\x65\x72\x6F\x6B\x75\x61\x70\x70\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x69\x67\x73\x74\x6F\x72\x69\x3F\x75\x73\x65\x72\x6E\x61\x6D\x65\x3D","\x0A","","\x67\x65\x74","\x6D\x61\x74\x63\x68","\x50\x61\x73\x74\x69\x6B\x61\x6E\x20\x75\x72\x75\x74\x61\x6E\x20\x68\x61\x6E\x79\x61\x20\x61\x6E\x67\x6B\x61","\x74\x79\x70\x65","\x64\x61\x74\x61","\x6D\x70\x34","\x75\x72\x6C","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];quotedText= editz[_0xd4d1[4]][_0xd4d1[3]][_0xd4d1[2]][_0xd4d1[1]][_0xd4d1[0]];var pilur=quotedText[_0xd4d1[6]](_0xd4d1[5]);var a= await axios[_0xd4d1[10]](`${_0xd4d1[7]}${pilur[1][_0xd4d1[6]](_0xd4d1[8])[0]}${_0xd4d1[9]}`);if(!q[_0xd4d1[11]](/^[0-9]/)){return reply(from,_0xd4d1[12],editz)};var typemsgg=image;if(a[_0xd4d1[14]][_0xd4d1[14]][q- 1][_0xd4d1[13]]=== _0xd4d1[15]){typemsgg= video}; await rimuru[_0xd4d1[17]](from,{url:`${_0xd4d1[9]}${a[_0xd4d1[14]][_0xd4d1[14]][q- 1][_0xd4d1[16]]}${_0xd4d1[9]}`},typemsgg)
        
      break
            case 'deep': case 'deepfry':
                
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=deepfry&image=${link}&raw=1`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=deepfry&image=${link}&raw=1`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
               case 'magik': case 'magic':
                
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=magik&image=${link}&raw=1`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=magik&image=${link}&raw=1`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
               case 'blurpify':
                
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=blurpify&image=${link}&raw=1`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=blurpify&image=${link}&raw=1`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
               case 'captcha':
                if (!q) return reply(`Penggunaan ${command} query lalu reply gambar/sticker`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=captcha&url=${link}&raw=1&username=${q}`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=captcha&url=${link}&raw=1&username=${q}`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
               case 'glass':
                
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://some-random-api.ml/canvas/glass?avatar=${link}`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://some-random-api.ml/canvas/glass?avatar=${link}`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
            case 'greyscale':
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://some-random-api.ml/canvas/greyscale?avatar=${link}`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://some-random-api.ml/canvas/greyscale?avatar=${link}`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
            case 'invert':
                
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://some-random-api.ml/canvas/invert?avatar=${link}`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://some-random-api.ml/canvas/invert?avatar=${link}`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
               case 'tagme':
                mentions(`@${sender.split("@")[0]}`, [sender], true)
                break
            case 'invertgrey':
                
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://some-random-api.ml/canvas/invertgreyscale?avatar=${link}`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://some-random-api.ml/canvas/invertgreyscale?avatar=${link}`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
                      case 'nulishelp':
                reply(`*Pilihan*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
                break
            case 'nuliskiri':{
                
                if (args.length < 2) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
                reply(mess.wait)
                const tulisan = body.slice(11)
                const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './media/nulis/images/buku/sebelumkiri.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '22',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+140+153',
                    fixHeight,
                    './media/nulis/images/buku/setelahkiri.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    rimuru.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {quoted: msg, caption: `Jangan malas pak...`})
                    
                })
            }
                break
            case 'nuliskanan':{
                
                if (args.length < 2) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
                reply(mess.wait)
                const tulisan = body.slice(12)
                const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './media/nulis/images/buku/sebelumkanan.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+128+129',
                    fixHeight,
                    './media/nulis/images/buku/setelahkanan.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    rimuru.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'), image, {quoted: msg, caption: `Jangan malas pak...`})
                    
                })
            }
                break
            case 'foliokiri':{
                
                if (args.length < 2) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
                reply(mess.wait)
                const tulisan = body.slice(11)
                const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './media/nulis/images/folio/sebelumkiri.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '1720x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '4',
                    '-annotate',
                    '+48+185',
                    fixHeight,
                    './media/nulis/images/folio/setelahkiri.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    rimuru.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'), image, {quoted: msg, caption: `Jangan malas pak...`})
                    
                })
            }
                break
            case 'foliokanan':{
                
                if (args.length < 2) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
                reply(mess.wait)
                const tulisan = body.slice(12)
                const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './media/nulis/images/folio/sebelumkanan.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '3',
                    '-annotate',
                    '+89+190',
                    fixHeight,
                    './media/nulis/images/folio/setelahkanan.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    rimuru.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {quoted: msg, caption: `Jangan malas pak...`})
                    
                })
            }
                break
                case 'sound69':
enamsembilan = fs.readFileSync('./mp3/sound69.mp3');
rimuru.sendMessage(from, enamsembilan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound70':
tujuhpuluh = fs.readFileSync('./mp3/sound70.mp3');
rimuru.sendMessage(from, tujuhpuluh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound71':
tujuhsatu = fs.readFileSync('./mp3/sound71.mp3');
rimuru.sendMessage(from, tujuhsatu, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound72':
tujuhdua = fs.readFileSync('./mp3/sound72.mp3');
rimuru.sendMessage(from, tujuhdua, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound73':
tujuhtiga = fs.readFileSync('./mp3/sound73.mp3');
rimuru.sendMessage(from, tujuhtiga, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound74':
tujuhempat = fs.readFileSync('./mp3/sound74.mp3');
rimuru.sendMessage(from, tujuhempat, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound75':
tujuhlima = fs.readFileSync('./mp3/sound75.mp3');
rimuru.sendMessage(from, tujuhlima, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound76':
tujuhenam = fs.readFileSync('./mp3/sound76.mp3');
rimuru.sendMessage(from, tujuhenam, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound77':
tujuhtujuh = fs.readFileSync('./mp3/sound77.mp3');
rimuru.sendMessage(from, tujuhtujuh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound78':
tujuhdelapan = fs.readFileSync('./mp3/sound78.mp3');
rimuru.sendMessage(from, tujuhdelapan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound79':
tujuhsembilan = fs.readFileSync('./mp3/sound79.mp3');
rimuru.sendMessage(from, tujuhsembilan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound80':
delapanpuluh = fs.readFileSync('./mp3/sound80.mp3');
rimuru.sendMessage(from, delapanpuluh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound81':
delapansatu = fs.readFileSync('./mp3/sound81.mp3');
rimuru.sendMessage(from, delapansatu, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound82':
delapandua = fs.readFileSync('./mp3/sound82.mp3');
rimuru.sendMessage(from, delapandua, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound83':
delapantiga = fs.readFileSync('./mp3/sound83.mp3');
rimuru.sendMessage(from, delapantiga, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound84':
delapanempat = fs.readFileSync('./mp3/sound84.mp3');
rimuru.sendMessage(from, delapanempat, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound85':
delapanlima = fs.readFileSync('./mp3/sound85.mp3');
rimuru.sendMessage(from, delapanlima, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound86':
delapanenam = fs.readFileSync('./mp3/sound86.mp3');
rimuru.sendMessage(from, delapamenam, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound87':
delapantujuh = fs.readFileSync('./mp3/sound87.mp3');
rimuru.sendMessage(from, delapantujuh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound88':
delapandelapan = fs.readFileSync('./mp3/sound88.mp3');
rimuru.sendMessage(from, delapandelapan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound89':
delapansembilan = fs.readFileSync('./mp3/sound89.mp3');
rimuru.sendMessage(from, delapansembilan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound90':
sembilanpuluh = fs.readFileSync('./mp3/sound90.mp3');
rimuru.sendMessage(from, sembilanpuluh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound91':
sembilansatu = fs.readFileSync('./mp3/sound91.mp3');
rimuru.sendMessage(from, sembilansatu, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound92':
sembilandua = fs.readFileSync('./mp3/sound92.mp3');
rimuru.sendMessage(from, sembilandua, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound93':
sembilantiga = fs.readFileSync('./mp3/sound93.mp3');
rimuru.sendMessage(from, sembilantiga, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound94':
sembilanempat = fs.readFileSync('./mp3/sound94.mp3');
rimuru.sendMessage(from, sembilanempat, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound95':
sembilanlima = fs.readFileSync('./mp3/sound95.mp3');
rimuru.sendMessage(from, sembilanlima, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound96':
sembilanenam = fs.readFileSync('./mp3/sound96.mp3');
rimuru.sendMessage(from, sembilanenam, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound97':
sembilantujuh = fs.readFileSync('./mp3/sound97.mp3');
rimuru.sendMessage(from, sembilantujuh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound98':
sembilandelapan = fs.readFileSync('./mp3/sound98.mp3');
rimuru.sendMessage(from, sembilandelapan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound8':
delapan = fs.readFileSync('./mp3/sound8.mp3');
rimuru.sendMessage(from, delapan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound9':
sembilan = fs.readFileSync('./mp3/sound9.mp3');
rimuru.sendMessage(from, sembilan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound10':
sepuluh = fs.readFileSync('./mp3/sound10.mp3');
rimuru.sendMessage(from, sepuluh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound11':
sebelas = fs.readFileSync('./mp3/sound11.mp3');
rimuru.sendMessage(from, sebelas, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound12':
duabelas = fs.readFileSync('./mp3/sound12.mp3');
rimuru.sendMessage(from, duabelas, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound13':
tigabelas = fs.readFileSync('./mp3/sound13.mp3');
rimuru.sendMessage(from, tigabelas, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound14':
empatbelas = fs.readFileSync('./mp3/sound14.mp3');
rimuru.sendMessage(from, empatbelas, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound15':
limabelas = fs.readFileSync('./mp3/sound15.mp3');
rimuru.sendMessage(from, limabelas, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound16':
enambelas = fs.readFileSync('./mp3/sound16.mp3');
rimuru.sendMessage(from, enambelas, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound17':
tujuhbelas = fs.readFileSync('./mp3/sound17.mp3');
rimuru.sendMessage(from, tujuhbelas, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound118':
delapanbelas = fs.readFileSync('./mp3/sound18.mp3');
rimuru.sendMessage(from, delapanbelas, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound19':
sembilanbelas = fs.readFileSync('./mp3/sound19.mp3');
rimuru.sendMessage(from, sembilanbelas, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound20':
duapuluh = fs.readFileSync('./mp3/sound20.mp3');
rimuru.sendMessage(from, duapuluh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound21':
duasatu = fs.readFileSync('./mp3/sound21.mp3');
rimuru.sendMessage(from, duasatu, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound22':
duadua = fs.readFileSync('./mp3/sound22.mp3');
rimuru.sendMessage(from, duadua, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound23':
duatiga = fs.readFileSync('./mp3/sound23.mp3');
rimuru.sendMessage(from, duatiga, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound24':
duaempat = fs.readFileSync('./mp3/sound24.mp3');
rimuru.sendMessage(from, duaempat, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound25':
dualima = fs.readFileSync('./mp3/sound25.mp3');
rimuru.sendMessage(from, dualima, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound26':
duaenam = fs.readFileSync('./mp3/sound26.mp3');
rimuru.sendMessage(from, duaenam, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound27':
duatujuh = fs.readFileSync('./mp3/sound27.mp3');
rimuru.sendMessage(from, duatujuh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound28':
duadelapan = fs.readFileSync('./mp3/sound28.mp3');
rimuru.sendMessage(from, duadelapan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound29':
duasembilan = fs.readFileSync('./mp3/sound29.mp3');
rimuru.sendMessage(from, duasembilan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound30':
tigapuluh = fs.readFileSync('./mp3/sound30.mp3');
rimuru.sendMessage(from, tigapuluh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound31':
tigasatu = fs.readFileSync('./mp3/sound31.mp3');
rimuru.sendMessage(from, tigasatu, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound32':
tigadua = fs.readFileSync('./mp3/sound32.mp3');
rimuru.sendMessage(from, tigadua, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound33':
tigatiga = fs.readFileSync('./mp3/sound33.mp3');
rimuru.sendMessage(from, tigatiga, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound34':
tigaempat = fs.readFileSync('./mp3/sound34.mp3');
rimuru.sendMessage(from, tigaempat, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound35':
tigalima = fs.readFileSync('./mp3/sound35.mp3');
rimuru.sendMessage(from, tigalima, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound35':
tigalima = fs.readFileSync('./mp3/sound35.mp3');
rimuru.sendMessage(from, tigalima, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound36':
tigaenam = fs.readFileSync('./mp3/sound36.mp3');
rimuru.sendMessage(from, tigaenam, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound37':
tigatujuh = fs.readFileSync('./mp3/sound37.mp3');
rimuru.sendMessage(from, tigatujuh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound38':
tigadelapan = fs.readFileSync('./mp3/sound38.mp3');
rimuru.sendMessage(from, tigadelapan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound39':
tigasembilan = fs.readFileSync('./mp3/sound39.mp3');
rimuru.sendMessage(from, tigasembilan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound40':
empatpuluh = fs.readFileSync('./mp3/sound40.mp3');
rimuru.sendMessage(from, empatpuluh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound41':
empatsatu = fs.readFileSync('./mp3/sound41.mp3');
rimuru.sendMessage(from, empatsatu, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound42':
empatdua = fs.readFileSync('./mp3/sound42.mp3');
rimuru.sendMessage(from, empatdua, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound43':
empattiga = fs.readFileSync('./mp3/sound43.mp3');
rimuru.sendMessage(from, empattiga, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound44':
empatempat = fs.readFileSync('./mp3/sound44.mp3');
rimuru.sendMessage(from, empatempat, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound45':
empatlima = fs.readFileSync('./mp3/sound45.mp3');
rimuru.sendMessage(from, empatlima, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound46':
empatenam = fs.readFileSync('./mp3/sound46.mp3');
rimuru.sendMessage(from, empatenam, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound47':
empattujuh = fs.readFileSync('./mp3/sound47.mp3');
rimuru.sendMessage(from, empattujuh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound48':
empatdelapan = fs.readFileSync('./mp3/sound48.mp3');
rimuru.sendMessage(from, empatdelapan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound49':
empatsembilan = fs.readFileSync('./mp3/sound49.mp3');
rimuru.sendMessage(from, empatsembilan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound50':
limapuluh = fs.readFileSync('./mp3/sound50.mp3');
rimuru.sendMessage(from, limapuluh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound51':
limasatu = fs.readFileSync('./mp3/Kecewa.mp3');
rimuru.sendMessage(from, limasatu, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound52':
limadua = fs.readFileSync('./mp3/Jarak.mp3');
rimuru.sendMessage(from, limadua, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound53':
limatiga = fs.readFileSync('./mp3/Bisa.mp3');
rimuru.sendMessage(from, limatiga, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound54':
limaempat = fs.readFileSync('./mp3/Disini.mp3');
rimuru.sendMessage(from, limaempat, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound55':
limalima = fs.readFileSync('./mp3/Batu.mp3');
rimuru.sendMessage(from, limalima, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'desah':
delapansatu = fs.readFileSync('./mp3/desah.mp3');
rimuru.sendMessage(from, delapansatu, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound56':
limaenam = fs.readFileSync('./mp3/Adanya.mp3');
rimuru.sendMessage(from, limaenam, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound57':
limatujuh = fs.readFileSync('./mp3/Pelangi.mp3');
rimuru.sendMessage(from, limatujuh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound58':
limadelapan = fs.readFileSync('./mp3/sound58.mp3');
rimuru.sendMessage(from, limadelapan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound59':
limasembilan = fs.readFileSync('./mp3/sound59.mp3');
rimuru.sendMessage(from, limasembilan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound60':
enampuluh = fs.readFileSync('./mp3/sound60.mp3');
rimuru.sendMessage(from, enampuluh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound61':
enamsatu = fs.readFileSync('./mp3/sound61.mp3');
rimuru.sendMessage(from, enamsatu, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound62':
enamdua = fs.readFileSync('./mp3/sound62.mp3');
rimuru.sendMessage(from, enamdua, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound63':
enamtiga = fs.readFileSync('./mp3/sound63.mp3');
rimuru.sendMessage(from, enamtiga, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound64':
enamempat = fs.readFileSync('./mp3/sound64.mp3');
rimuru.sendMessage(from, enamempat, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound65':
enamlima = fs.readFileSync('./mp3/chruch.mp3');
rimuru.sendMessage(from, enamlima, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound66':
enamenam = fs.readFileSync('./mp3/gemes.mp3');
rimuru.sendMessage(from, enamenam, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound67':
enamtujuh = fs.readFileSync('./mp3/hujan.mp3');
rimuru.sendMessage(from, enamtujuh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound68':
enamdelapan = fs.readFileSync('./mp3/Masih.mp3');
rimuru.sendMessage(from, enamdelapan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound':
const soun = fs.readFileSync('./mp3/sound.mp3')
rimuru.sendMessage(from, soun, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound1':
satu = fs.readFileSync('./mp3/sound1.mp3');
rimuru.sendMessage(from, satu, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
dua = fs.readFileSync('./mp3/sound2.mp3');
rimuru.sendMessage(from, dua, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
tiga = fs.readFileSync('./mp3/sound3.mp3');
rimuru.sendMessage(from, tiga, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
empat = fs.readFileSync('./mp3/sound4.mp3');
rimuru.sendMessage(from, empat, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
lima = fs.readFileSync('./mp3/sound5.mp3');
rimuru.sendMessage(from, lima, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
enam = fs.readFileSync('./mp3/sound6.mp3');
rimuru.sendMessage(from, enam, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'bodi':
enam = fs.readFileSync('./mp3/sound6.mp3');
rimuru.sendMessage(from, enam, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
tujuh = fs.readFileSync('./mp3/sound7.mp3');
rimuru.sendMessage(from, tujuh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'home':
const home = fs.readFileSync('./mp3/home.mp3')
rimuru.sendMessage(from, home, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'gettingold':
const getting = fs.readFileSync('./mp3/gettingold.mp3')
rimuru.sendMessage(from, getting, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad':
const sad1 = fs.readFileSync('./mp3/sad.mp3')
rimuru.sendMessage(from, sad1, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad2':
const sad2 = fs.readFileSync('./mp3/sad2.mp3')
rimuru.sendMessage(from, sad2, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad3':
const sad3 = fs.readFileSync('mp3/sad3.mp3')
rimuru.sendMessage(from, sad3, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad4':
const sad4 = fs.readFileSync('mp3/sad4.mp3')
rimuru.sendMessage(from, sad4, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic':
const tetik = fs.readFileSync('mp3/aeshtetic.mp3')
rimuru.sendMessage(from, tetik, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic2':
const tetik2 = fs.readFileSync('mp3/aeshtetic2.mp3')
rimuru.sendMessage(from, tetik3, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic3':
const tetik3 = fs.readFileSync('mp3/aeshtetic3.mp3')
rimuru.sendMessage(from, tetik3, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic4':
const tetik4 = fs.readFileSync('mp3/aeshtetic4.mp3')
rimuru.sendMessage(from, tetik4, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'allnight':
const allnight = fs.readFileSync('mp3/allnight.mp3')
rimuru.sendMessage(from, allnight, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'lucas':
const lucas = fs.readFileSync('mp3/lucas.mp3')
rimuru.sendMessage(from, lucas, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'sowell':
const well = fs.readFileSync('mp3/sowell.mp3')
rimuru.sendMessage(from, well, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'wanna':
const wanna = fs.readFileSync('mp3/wanna.mp3')
rimuru.sendMessage(from, wanna, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'up':
const ups = fs.readFileSync('mp3/up.mp3')
rimuru.sendMessage(from, ups, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'yourskin':
const skin = fs.readFileSync('mp3/yourskin.mp3')
rimuru.sendMessage(from, skin, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'cutmeoff':
const moff = fs.readFileSync('mp3/cutmeoff.mp3')
rimuru.sendMessage(from, moff, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'beautiful':
const ful = fs.readFileSync('mp3/beautiful.mp3')
rimuru.sendMessage(from, ful, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'loosinggame':
const gam = fs.readFileSync('mp3/loosinggame.mp3')
rimuru.sendMessage(from, gam, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'loosinginterest':
const rest = fs.readFileSync('mp3/loosinginterest.mp3')
rimuru.sendMessage(from, rest, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'playdate':
const date = fs.readFileSync('mp3/playdate.mp3')
rimuru.sendMessage(from, date, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'ayatkursi2':
const kursi = fs.readFileSync('mp3/ayatkursi2.mp3')
rimuru.sendMessage(from, kursi, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'tilawah':
const tilawah = fs.readFileSync('mp3/tilawah.mp3')
rimuru.sendMessage(from, tilawah, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'sholawatnabi':
const nabi = fs.readFileSync('mp3/sholawatnabi.mp3')
rimuru.sendMessage(from, nabi, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji':
const ngaji1 = fs.readFileSync('mp3/ngaji.mp3')
rimuru.sendMessage(from, ngaji1, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji2':
const ngaji2 = fs.readFileSync('mp3/ngaji2.mp3')
rimuru.sendMessage(from, ngaji2, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'iri':
const irimp3 = fs.readFileSync('./mp3/iri.mp3');
rimuru.sendMessage(from, irimp3, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'pale':
const pa = fs.readFileSync('./mp3/pale.mp3')
rimuru.sendMessage(from, pa, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound99':
sembilansembilan = fs.readFileSync('./mp3/sound99.mp3');
rimuru.sendMessage(from, sembilansembilan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound100':
seratus = fs.readFileSync('./mp3/sound100.mp3');
rimuru.sendMessage(from, seratus, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break

case  'soundmenu':
              var _0xf99c=["\x67\x2E\x75\x73","\x65\x6E\x64\x73\x57\x69\x74\x68","\x6A\x69\x64","\x66\x69\x6C\x74\x65\x72","\x61\x72\x72\x61\x79","\x63\x68\x61\x74\x73","\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","","\x74\x6F\x46\x69\x78\x65\x64","\x68\x65\x61\x70\x55\x73\x65\x64","\x6D\x65\x6D\x6F\x72\x79\x55\x73\x61\x67\x65","\x4D\x42\x20\x2F\x20","\x74\x6F\x74\x61\x6C\x6D\x65\x6D","\x6F\x73","\x72\x6F\x75\x6E\x64","\x4D\x42","\x6C\x61\x67\x69\x20\x64\x69\x63\x61\x73","\x67\x61\x20\x64\x69\x63\x61\x73","\x75\x70\x74\x69\x6D\x65","\x61\x6C\x6C","\x6C\x65\x6E\x67\x74\x68","\x2A","\x0D\x0A\x0D\x0A\x0D\x0A\uD83D\uDC25\x20\u0262\u0280\u1D0F\u1D1C\u1D18\x20\u1D04\u029C\u1D00\u1D1B\x20\x3A\x20\x2A","\x2A\x0D\x0A\uD83D\uDC25\x20\u1D18\u0280\u026A\u1D20\u1D00\u1D1B\u1D07\x20\u1D04\u029C\u1D00\u1D1B\x20\x3A\x20\x2A","\x2A\x0D\x0A\uD83D\uDC25\x20\u1D1B\u1D0F\u1D1B\u1D00\u029F\x20\u1D04\u029C\u1D00\u1D1B\x20\x3A\x20\x2A","\x2A\x0D\x0A\uD83D\uDC25\x20\x73\u1D18\u1D07\u1D07\u1D05\x20\x3A\x20\x2A","\x20\x5F\x53\x65\x63\x6F\x6E\x64\x5F\x2A\x0D\x0A\uD83D\uDC25\x20\u1D00\u1D04\u1D1B\u026A\u1D20\u1D07\x20\x3A\x20\x2A","\x2A\x0D\x0A\uD83D\uDC25\x20\u1D18\u029F\u1D00\u1D1B\u0493\u0280\u1D0F\u1D0D\x20\x3A\x20\x2A","\x70\x6C\x61\x74\x66\x6F\x72\x6D","\x2A\x0D\x0A\x0D\x0A\x20\x20\x20\x20\x0D\x0A\x20\x20\x0D\x0A\u2560\u2550\u2550\u2550\u272A\u3018\x20\x53\x6F\x75\x6E\x64\x20\x4D\x65\x6E\x75\u3019\u272A\u2550\u2550\x0D\x0A\u2560\u27A5","\x69\x72\x69\x0D\x0A\u2560\u27A5","\x64\x65\x73\x61\x68\x0D\x0A\u2560\u27A5","\x6E\x65\x6E\x67\x64\x65\x73\x61\x68\x0D\x0A\u2560\u27A5","\x70\x61\x6C\x65\x0D\x0A\u2560\u27A5","\x70\x6C\x61\x79\x64\x61\x74\x65\x0D\x0A\u2560\u27A5","\x62\x65\x62\x0D\x0A\u2560\u27A5","\x68\x61\x6C\x6C\x6F\x0D\x0A\u2560\u27A5","\x6D\x65\x67\x69\x63\x0D\x0A\u2560\u27A5","\x73\x75\x73\x75\x0D\x0A\u2560\u27A5","\x63\x65\x6D\x65\x6E\x0D\x0A\u2560\u27A5","\x6D\x65\x6E\x79\x75\x6B\x61\x69\x6B\x75\x0D\x0A\u2560\u27A5","\x67\x61\x74\x61\x6C\x0D\x0A\u2560\u27A5","\x73\x61\x73\x61\x67\x65\x79\x6F\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x31\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x32\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x33\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x34\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x35\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x36\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x37\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x38\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x39\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x31\x30\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x31\x31\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x31\x32\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x31\x33\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x31\x34\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x31\x35\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x31\x36\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x31\x37\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x31\x38\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x31\x39\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x32\x30\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x32\x31\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x32\x32\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x32\x33\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x32\x34\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x32\x35\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x32\x36\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x32\x37\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x32\x38\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x32\x39\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x33\x30\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x33\x31\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x33\x32\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x33\x33\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x33\x34\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x33\x35\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x33\x36\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x33\x37\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x33\x38\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x33\x39\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x34\x30\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x34\x31\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x34\x32\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x34\x33\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x34\x34\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x34\x35\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x34\x36\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x34\x37\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x34\x38\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x34\x39\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x35\x30\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x35\x31\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x35\x32\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x35\x33\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x35\x34\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x35\x35\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x35\x36\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x35\x37\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x35\x38\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x35\x39\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x36\x30\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x36\x31\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x36\x32\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x36\x33\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x36\x34\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x36\x35\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x36\x36\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x36\x37\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x36\x38\x0D\x0A\u2560\u27A5\x23\x73\x6F\x75\x6E\x64\x36\x39\x0D\x0A\u2560\u27A5\x23\x73\x6F\x75\x6E\x64\x37\x30\x0D\x0A\u2560\u27A5\x23\x73\x6F\x75\x6E\x64\x37\x31\x0D\x0A\u2560\u27A5\x23\x73\x6F\x75\x6E\x64\x37\x32\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x37\x33\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x37\x34\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x37\x35\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x37\x36\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x37\x37\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x37\x38\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x37\x39\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x38\x30\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x38\x31\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x38\x32\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x38\x33\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x38\x34\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x38\x35\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x38\x36\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x38\x37\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x38\x38\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x38\x39\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x39\x30\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x39\x31\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x39\x32\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x39\x33\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x39\x34\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x39\x35\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x39\x36\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x39\x37\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x39\x38\x0D\x0A\u2560\u27A5\x23\x73\x6F\x75\x6E\x64\x39\x39\x0D\x0A\u2560\u27A5","\x73\x6F\x75\x6E\x64\x31\x30\x30\x0D\x0A\x0D\x0A","\x63\x6F\x6D\x6D\x61\x6E\x64","\x42\x61\x63\x6B\x20\x74\x6F\x20\x6D\x65\x6E\x75","\x69\x6D\x61\x67\x65\x4D\x65\x73\x73\x61\x67\x65","\x2E\x2F\x6D\x65\x64\x69\x61\x2F\x4D\x65\x6E\x75\x2E\x6A\x70\x67","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x70\x72\x65\x70\x61\x72\x65\x4D\x65\x73\x73\x61\x67\x65\x4D\x65\x64\x69\x61","\x20\x20\x20\x0D\x0A\x0D\x0A\x0D\x0A\x0D\x0A\x20\u1D0A\u1D00\u0274\u0262\u1D00\u0274\x20\u1D18\u1D07\u0280\u0274\u1D00\u029C\x20\u1D0D\u1D07\u0274\u1D04\u026A\u0274\u1D1B\u1D00\u026A\x20\x73\u1D07\x73\u1D07\u1D0F\u0280\u1D00\u0274\u0262\x0D\x0A\x20\u028F\u1D00\u0274\u0262\x20\u1D0D\u1D00\x73\u026A\u029C\x20\u1D0D\u1D07\u0274\u1D04\u026A\u0274\u1D1B\u1D00\u026A\x20\u1D0F\u0280\u1D00\u0274\u0262\x20\u029F\u1D00\u026A\u0274\uD83E\uDD17\x0D\x0A\x0D\x0A\u2764\uFE0F\x20\u0280\u026A\u1D0D\u1D1C\u0280\u1D1C\u0FD0\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x6E\x73\x74\x61\x62\x69\x6F\x2E\x63\x63\x2F\x52\x69\x6D\x75\x72\x75\x2F","\x70\x72\x65\x70\x61\x72\x65\x4D\x65\x73\x73\x61\x67\x65\x46\x72\x6F\x6D\x43\x6F\x6E\x74\x65\x6E\x74","\x72\x65\x6C\x61\x79\x57\x41\x4D\x65\x73\x73\x61\x67\x65"];groups= rimuru[_0xf99c[5]][_0xf99c[4]][_0xf99c[3]]((_0x889ax1)=>{return _0x889ax1[_0xf99c[2]][_0xf99c[1]](_0xf99c[0])});privat= rimuru[_0xf99c[5]][_0xf99c[4]][_0xf99c[3]]((_0x889ax1)=>{return _0x889ax1[_0xf99c[2]][_0xf99c[1]](_0xf99c[6])});ram2= `${_0xf99c[7]}${(process[_0xf99c[10]]()[_0xf99c[9]]/ 1024/ 1024)[_0xf99c[8]](2)}${_0xf99c[11]}${Math[_0xf99c[14]](require(_0xf99c[13])[_0xf99c[12]]/ 1024/ 1024)}${_0xf99c[15]}`;charger= `${_0xf99c[7]}${charging?_0xf99c[16]:_0xf99c[17]}${_0xf99c[7]}`;uptime= process[_0xf99c[18]]();timestampe= speed();totalChat=  await rimuru[_0xf99c[5]][_0xf99c[19]]();latensie= speed()- timestampe;total= math(`${_0xf99c[7]}${groups[_0xf99c[20]]}${_0xf99c[21]}${privat[_0xf99c[20]]}${_0xf99c[7]}`);menu= `${_0xf99c[7]}${botName}${_0xf99c[22]}${groups[_0xf99c[20]]}${_0xf99c[23]}${privat[_0xf99c[20]]}${_0xf99c[24]}${totalChat[_0xf99c[20]]}${_0xf99c[25]}${latensie[_0xf99c[8]](4)}${_0xf99c[26]}${runtime(process[_0xf99c[18]]())}${_0xf99c[27]}${os[_0xf99c[28]]()}${_0xf99c[29]}${prefix}${_0xf99c[30]}${prefix}${_0xf99c[31]}${prefix}${_0xf99c[32]}${prefix}${_0xf99c[33]}${prefix}${_0xf99c[34]}${prefix}${_0xf99c[35]}${prefix}${_0xf99c[36]}${prefix}${_0xf99c[37]}${prefix}${_0xf99c[38]}${prefix}${_0xf99c[39]}${prefix}${_0xf99c[40]}${prefix}${_0xf99c[41]}${prefix}${_0xf99c[42]}${prefix}${_0xf99c[43]}${prefix}${_0xf99c[44]}${prefix}${_0xf99c[45]}${prefix}${_0xf99c[46]}${prefix}${_0xf99c[47]}${prefix}${_0xf99c[48]}${prefix}${_0xf99c[49]}${prefix}${_0xf99c[50]}${prefix}${_0xf99c[51]}${prefix}${_0xf99c[52]}${prefix}${_0xf99c[53]}${prefix}${_0xf99c[54]}${prefix}${_0xf99c[55]}${prefix}${_0xf99c[56]}${prefix}${_0xf99c[57]}${prefix}${_0xf99c[58]}${prefix}${_0xf99c[59]}${prefix}${_0xf99c[60]}${prefix}${_0xf99c[61]}${prefix}${_0xf99c[62]}${prefix}${_0xf99c[63]}${prefix}${_0xf99c[64]}${prefix}${_0xf99c[65]}${prefix}${_0xf99c[66]}${prefix}${_0xf99c[67]}${prefix}${_0xf99c[68]}${prefix}${_0xf99c[69]}${prefix}${_0xf99c[70]}${prefix}${_0xf99c[71]}${prefix}${_0xf99c[72]}${prefix}${_0xf99c[73]}${prefix}${_0xf99c[74]}${prefix}${_0xf99c[75]}${prefix}${_0xf99c[76]}${prefix}${_0xf99c[77]}${prefix}${_0xf99c[78]}${prefix}${_0xf99c[79]}${prefix}${_0xf99c[80]}${prefix}${_0xf99c[81]}${prefix}${_0xf99c[82]}${prefix}${_0xf99c[83]}${prefix}${_0xf99c[84]}${prefix}${_0xf99c[85]}${prefix}${_0xf99c[86]}${prefix}${_0xf99c[87]}${prefix}${_0xf99c[88]}${prefix}${_0xf99c[89]}${prefix}${_0xf99c[90]}${prefix}${_0xf99c[91]}${prefix}${_0xf99c[92]}${prefix}${_0xf99c[93]}${prefix}${_0xf99c[94]}${prefix}${_0xf99c[95]}${prefix}${_0xf99c[96]}${prefix}${_0xf99c[97]}${prefix}${_0xf99c[98]}${prefix}${_0xf99c[99]}${prefix}${_0xf99c[100]}${prefix}${_0xf99c[101]}${prefix}${_0xf99c[102]}${prefix}${_0xf99c[103]}${prefix}${_0xf99c[104]}${prefix}${_0xf99c[105]}${prefix}${_0xf99c[106]}${prefix}${_0xf99c[107]}${prefix}${_0xf99c[108]}${prefix}${_0xf99c[109]}${prefix}${_0xf99c[110]}${prefix}${_0xf99c[111]}${prefix}${_0xf99c[112]}${prefix}${_0xf99c[113]}${prefix}${_0xf99c[114]}${prefix}${_0xf99c[115]}${prefix}${_0xf99c[116]}${prefix}${_0xf99c[117]}${prefix}${_0xf99c[118]}${prefix}${_0xf99c[119]}${prefix}${_0xf99c[120]}${prefix}${_0xf99c[121]}${prefix}${_0xf99c[122]}${prefix}${_0xf99c[123]}${prefix}${_0xf99c[124]}${prefix}${_0xf99c[125]}${prefix}${_0xf99c[126]}${prefix}${_0xf99c[127]}${prefix}${_0xf99c[128]}${prefix}${_0xf99c[129]}${prefix}${_0xf99c[130]}${prefix}${_0xf99c[131]}${prefix}${_0xf99c[132]}${prefix}${_0xf99c[133]}${prefix}${_0xf99c[134]}${prefix}${_0xf99c[135]}${prefix}${_0xf99c[136]}${prefix}${_0xf99c[137]}${prefix}${_0xf99c[138]}`;buttons= [{buttonId:`${_0xf99c[7]}${prefix}${_0xf99c[139]}`,buttonText:{displayText:_0xf99c[140]},type:1}];imageMsg= ( await rimuru[_0xf99c[144]](fs[_0xf99c[143]](`${_0xf99c[142]}`),_0xf99c[141],{thumbnail:Bfake,contextInfo:{forwardingScore:989,isForwarded:true}}))[_0xf99c[141]];buttonsMessage= {contentText:`${_0xf99c[7]}${menu}${_0xf99c[7]}`,footerText:`${_0xf99c[145]}`,imageMessage:imageMsg,buttons:buttons,headerType:1};prep=  await rimuru[_0xf99c[146]](from,{buttonsMessage},{quoted:freply,contextInfo:{forwardingScore:508,isForwarded:true,mentionedJid:[senderr]}});rimuru[_0xf99c[147]](prep)
               break
               
               case 'slap':
                    
                    if (mentioned.length !== 0){
                    fetchJson ('https://www.nekos.life/api/v2/img/slap').then(({url}) => {
                    rimuru.sendSticker(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {
                    await sleep(2000);mentions(`@${mentioned[0].split('@')[0]} slapped @${sender.split('@')[0]}`, [sender, mentioned[0]], true)})
                    })
                } else {
                    reply(`Penggunaan ${command} @tag`)
                }
                 break
                case 'pat':
                    
                    if (mentioned.length !== 0){
                    fetchJson ('https://www.nekos.life/api/v2/img/pat').then(({url}) => {
                    rimuru.sendSticker(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {
                    await sleep(2000);mentions(`@${sender.split('@')[0]} pat @${mentioned[0].split('@')[0]}`, [sender, mentioned[0]], true)})
                    })
                } else {
                    reply(`Penggunaan ${command} @tag`)
                }
                 break
                case 'baka':
                    
                    if (mentioned.length !== 0){
                    fetchJson ('https://www.nekos.life/api/v2/img/baka').then(({url}) => {
                    rimuru.sendSticker(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {
                    await sleep(2000);mentions(`@${mentioned[0].split('@')[0]} Baka!!`, [sender, mentioned[0]], true)})
                    })
                } else {
                    reply(`Penggunaan ${command} @tag`)
                }
                
                 break
                 case 'semoji2': {
                    
                    if (args.length < 2) return reply(`Penggunaan ${command} emoji`)
                    if (args.length === 2) {
                    fetchJson(`https://api.lolhuman.xyz/api/smoji3/${encodeURIComponent(args[1])}?apikey=${lolkey}`)
                    .then((res) =>{
                        let list = []
                        let startnum = 1
                        for (var x in res.result.emoji) {
                        let yy = {title: 'Model ke-' + startnum++,
                        rows: [
                           {
                            title: `${x}`,
                            description: `${x} model`,
                            rowId: `${prefix}esticker ${args[1]} ${res.result.emoji[x]}`
                          }
                        ]
                        }
                        list.push(yy)
                    }
                    rimuru.sendList(from, `List Sticker`, `Kan model stickernya banyak tu kak, kaka mau model sticker yg mana ya? Pilih dibawah ya kak`, args[1], `Pilih Disini`, list, msg)
                    })
                   .catch((err) => {
                            rimuru.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    } else if (args.length === 3) {
                    rimuru.sendSticker(from, args[2], msg)
             		
                    }
                    }
                    break
                 case 'ceritasex': case 'cersex':
                    fetchJson('http://docs-jojo.herokuapp.com/api/cersex')
                    .then((res) => rimuru.sendFileFromUrl(from, res.result.img, res.result.judul + `\n\n` + res.result.cersex))
                    .catch((err) => {
                            rimuru.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
                    case 'aspan': case 'ptl': case 'ptlvid':{
                if (!isPremium) return reply(mess.OnlyPrem)
                fetchText('http://sansekai.my.id/sansekai.txt').then((data) => {
                    var wifegerak = data.split('\n')
                    var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                        rimuru.sendFileFromUrl(from, `http://sansekai.my.id/ptl_repost/${wifegerakx}`, 'Follow IG: https://www.instagram.com/ptl_repost untuk mendapatkan asupan lebih banyak.', msg)
                })
                }
                break
                case 'spamcall2':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (args.length > 2) return reply(`Cara penggunaan : ${command} no hp`)
                if (isNaN(args[1]) && args[1].startsWith('62')) return reply(`Harus berupa angka dan pastikan tidak memasukkan kode negara, contoh: ${command} 8127668234`)
                fetchJson(`https://api.justaqul.xyz/call?nomor=${args[1]}&apikey=${aqulzkey}`)
                .then((data) => {
                    textImg(data.result)
                    })
               .catch((err) => {
                            rimuru.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                }
                break
                case 'hug':
                    
                    if (mentioned.length !== 0){
                    fetchJson ('https://www.nekos.life/api/v2/img/hug').then(({url}) => {
                    rimuru.sendSticker(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {
                    await sleep(2000);mentions(`@${mentioned[0].split('@')[0]} hugged @${sender.split('@')[0]}`, [sender, mentioned[0]], true)})
                    })
                } else {
                    reply(`Penggunaan ${command} @tag`)
                }
                 break
                 case 'cium':
                    
                    if (mentioned.length !== 0){
                    fetchJson ('https://www.nekos.life/api/v2/img/kiss').then(({url}) => {
                    rimuru,sendSticker(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {
                    await sleep(2000);mentions(`@${mentioned[0].split('@')[0]} kissed @${sender.split('@')[0]}`, [sender, mentioned[0]], true)})
                    })
                } else {
                    reply(`Penggunaan ${command} @tag`)
                }
                 break
case 'bokep': case 'bkp': case 'randombokep':{
if (!isPremium) return reply(mess.OnlyPrem)

fetchJson(`https://pastebin.com/raw/k82VJzeP`).then((data) => {
    var bokepp = JSON.parse(JSON.stringify(data))
    var bokep2 =  bokepp[Math.floor(Math.random() * bokepp.length)]
    textImg(bokep2.teks)
})
}
////Anti delete
case 'antidelete':
                if (!isOwner && !isGroupAdmins) return reply(mess.GrupAdmin)
				const dataRevoke = JSON.parse(fs.readFileSync('./database/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./database/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./database/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				if (args.length === 1) return reply(`Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`)
				if (args[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return reply(`Antidelete telah diaktifkan di grup ini sebelumnya!`)
						dataRevoke.push(from)
						fs.writeFileSync('./database/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						reply(`Antidelete diaktifkan di grup ini!`)
					} else if (!isGroup) {
						reply(`Untuk kontak penggunaan *${prefix}antidelete ctaktif*`)
					}
				} else if (args[1] == 'ctaktif') {
                    if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
					if (!isGroup) {
						if (isCtRevoke) return reply(`Antidelete telah diaktifkan di semua kontak sebelumnya!`)
						dataCtRevoke.data = true
						fs.writeFileSync('./database/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						reply(`Antidelete diaktifkan disemua kontak!`)
					} else if (isGroup) {
						reply(`Untuk grup penggunaan *${prefix}antidelete aktif*`)
					}
				} else if (args[1] == 'banct') {
                    if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
					if (isBanCtRevoke) return reply(`kontak ini telah ada di database banlist!`)
					if (args.length === 2 || args[2].startsWith('0')) return reply(`Masukan nomer diawali dengan 62! contoh 62859289xxxxx`)
					dataBanCtRevoke.push(args[2] + '@s.whatsapp.net')
					fs.writeFileSync('./database/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					reply(`Kontak ${args[2]} telah dimasukan ke banlist antidelete secara permanen!`)
				} else if (args[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./database/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						reply(`Antidelete dimatikan di grup ini!`)
					} else if (!isGroup) {
						reply(`Untuk kontak penggunaan *${prefix}antidelete ctmati*`)
					}
				} else if (args[1] == 'ctmati') {
                    if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./database/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						reply(`Antidelete dimatikan disemua kontak!`)
					} else if (isGroup) {
						reply(`Untuk grup penggunaan *${prefix}antidelete mati*`)
					}
				} else {
                  reply(`Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`)
               }
				break
				//
				case 'setname':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Masukkan text`)
               await rimuru,updateProfileName(q)
                    reply(`Success`)
	            break
	case 'revoke':
			    case 'revokegroup':
				case 'revokelink': {
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins)return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
		        var linkgc = await rimuru.revokeInvite(from)
                mentions(`Link Group Berhasil direset oleh admin @${sender.split('@')[0]}`, [sender], true)
            }
					break
	case 'addbadword':
                if (!isGroupAdmins && !isPremium)return reply(mess.GrupAdmin)
                if (args.length < 2) return reply(`masukkan kata`)
                if (isKasar(args[1].toLowerCase(), badword)) return reply(`Udah ada`)
                addBadword(args[1].toLowerCase(), badword)
                reply(`Sukses`)
                break
            case 'delbadword':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`masukkan kata`)
                if (!isKasar(args[1].toLowerCase(), badword)) return reply(`Ga ada`)
                delBadword(args[1].toLowerCase(), badword)
                reply(`Sukses`)
                break
            case 'clearbadword':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`tag atau nomor`)
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                    delCountKasar(mentioned[i], senbadword)
                    }
                    reply('Sukses')
                } else {
                    delCountKasar(args[1] + '@s.whatsapp.net', senbadword)
                    reply('Sukses')
                }
                break
        case 'antiviewonce':
  case 'antivo':
    if (!q) return reply(`Pilih enable atau disable`)
    if (q.toLowerCase() === 'enable') {
      if (isAntiviewonce) return reply(`Udah aktif`)
      antivo.push(from)
      fs.writeFileSync('./database/antiviewonce.json', JSON.stringify(antivo))
      reply('Antiview Once grup aktif')
    } else if (q.toLowerCase() === 'disable') {
      let anu = antivo.indexOf(from)
      antivo.splice(anu, 1)
      fs.writeFileSync('./database/antiviewonce.json', JSON.stringify(antivo))
      reply('antiviewonce grup nonaktif')
    } else {
      testqq(from, `antiviewonce`)
    }
    break
    case 'antidelete':
    case 'antidel':
    if (!q) return reply(`Pilih enable atau disable`)
    if (q.toLowerCase() === 'enable') {
      if (isAntidel) return reply(`Udah aktif`)
      antidel.push(from)
      fs.writeFileSync('./database/antidelete.json', JSON.stringify(antidel))
      reply('anti delete grup aktif')
    } else if (q.toLowerCase() === 'disable') {
      let anu = antidel.indexOf(from)
      antidel.splice(anu, 1)
      fs.writeFileSync('./database/antidelete.json', JSON.stringify(antidel))
      reply('antiviewonce grup nonaktif')
    } else {
      testqq(from, `antiviewonce`)
    }
    break
    
    case 'exampleid':
    case 'contoh':
    case 'carapakai':
    tutor = `
*TERDETEKSI INDONESIA*

Ini adalah bot WhatsApp yg bisa membantu anda !
contoh command simpel

# *!sticker* yaitu untuk membuat sticker di WhatsApp *kirim/reply foto* dengan caption *!sticker*
    
# *!ytdl* yaitu untuk mengunduh video/audio dari YouTube *kirim perintah !ytdl di teruskan judul/link YouTube*
    
# *!tahta* yaitu untuk membuat logo *kirim perintah !tahta di lanjut nama request terserah kalian*
    
# *!anime* yaitu untuk stalk anime *kirim perintah !anime lanjut judul anime*
    
# *!pinterest* yaitu untuk membantu mencari gambar *kirim perintah !pinterest lanjut dengan gambar yg kalian cari*
    
# *!nulis* yaitu untuk membantu anda menulis sesuatu dalam bentuk foto *kirim perintah !nulis di lanjut dengan teks yg akan di tulis*
    
# *!alquran* yaitu untuk melihat isi surat yg kalian cari beserta artinya *kirim perintah !alquran di lanjut dengan ayat dan surah yg kalian cari*
    
*Silahkan kalian coba fitur-fitur lain yg sudah di sediakan bot*
    
*Warning*
-dilarang menelpon/vc bot
-dilarang spam bot/jeda 5 detik
-dilarang masukan bot sembarang grup (izin owner,)
-dilarang menggunakan fitur dewasa untuk anak di bawah 18th
-gunakan bot dengan bijak
    
*jadilah pengguna yang baik dan mematuhi rules*
*menu lainnya bisa kalian liat sendiri dengan ketik !command* `
    
    reply(tutor)
    
    break
    
    case 'exampleen':
    case 'methoden':
    tutor1 = 
`*ENGLISH DETECTED*

This is a WhatsApp bot that can help you!
simple command example 

# *!sticker* is to make a sticker on WhatsApp *send/reply a photo* with the caption *!sticker* 

# *!ytdl* that is to download video/audio from YouTube *send command !ytdl in forward YouTube title/link* 

# *!tahta* that is to make a logo *send orders! throne in advance the name of the request is up to you* 

# *!anime* that is for stalk anime *send command !anime continues anime title*

# *!pinterest*, which is to help you find images *send a command! further pinterest with the image you are looking for*

# *!write/nulis* that is to help you write something in the form of a photo *send a command !write further with the text to be written*

# *!alquran*, which is to see the contents of the letter you are looking for and its meaning *send orders!Alquran is continued with the verse and surah you are looking for* 

*Please try other features that have been provided by the bot*

*Warning* 
-no calls/vc bots 
-no spam bots/pause 5 seconds 
-not allowed to enter bots in any group (owner's permission) 
-Do not use adult features for children under 18 years old -use bots wisely 

*be a good user and obey the rules* 
You can see other menus for yourself by typing !command `
    reply(tutor1)
    break
    
    case "astetick":
    case "videoanime":
    case "storyanime2":
    reply(mess.wait)
     Iki = await getBuffer (`https://megayaa.herokuapp.com/api/randomaesthetic`)
     rimuru.sendMessage(from, Iki, video, {quoted: freply, thumbnail: fakeimage })
     break
    
case 'menu':
        case 'help':
        case 'rimuru':  
        rimuru.updatePresence(from, Presence.composing)
        const _0x401efb=_0x7da1;(function(_0x5a5a1f,_0x31c891){const _0x3982cd=_0x7da1,_0x2ab162=_0x5a5a1f();while(!![]){try{const _0xd8d0f7=parseInt(_0x3982cd(0x154))/0x1+-parseInt(_0x3982cd(0x125))/0x2+parseInt(_0x3982cd(0x14f))/0x3*(-parseInt(_0x3982cd(0x143))/0x4)+parseInt(_0x3982cd(0x12f))/0x5+parseInt(_0x3982cd(0x153))/0x6+-parseInt(_0x3982cd(0x152))/0x7*(-parseInt(_0x3982cd(0x120))/0x8)+-parseInt(_0x3982cd(0x12e))/0x9;if(_0xd8d0f7===_0x31c891)break;else _0x2ab162['push'](_0x2ab162['shift']());}catch(_0x42b7a3){_0x2ab162['push'](_0x2ab162['shift']());}}}(_0x4e0e,0x3e04a));function _0x7da1(_0x1cb752,_0x54ee90){const _0x4e0e6e=_0x4e0e();return _0x7da1=function(_0x7da15,_0x11f60e){_0x7da15=_0x7da15-0x120;let _0x2f1ee3=_0x4e0e6e[_0x7da15];return _0x2f1ee3;},_0x7da1(_0x1cb752,_0x54ee90);}const loli=fs[_0x401efb(0x151)]('./assets/san');rimuru['sendMessage'](from,loli,MessageType[_0x401efb(0x14e)],{'quoted':freply,'mimetype':_0x401efb(0x133),'ptt':!![]});if(!isRegistered)return sendButMessage(from,daftar1,daftar2,daftar3,{'quoted':freply});function _0x4e0e(){const _0x185f4b=['296ShbtIq','owner','📝ʟɪsᴛ\x20ᴍᴇɴᴜ','\x20_Second_*\x0a\x0a│▹\x20Wa\x20Version:\x20*','prepareMessageMedia','138810KXmSpe','*\x0a\x0a│▹\x20XP\x20:\x20*','*\x0a\x0a│▹\x20Speed\x20:\x20*','all','user','*\x20」\x0a\x0aFOLLOW\x20SOSMED\x20OWNER\x20Black\x20Coffe\x20https://fb.me/lordblackcoffe/','@s.whatsapp.net','_*\x0a\x0a│▹\x20Baterai\x20:\x20*','ᴘᴇɴᴄᴀʀɪ\x20ᴊᴏᴅᴏʜ','6564060rvUCOI','1377095QxIubf','MB\x20/\x20','text','filter','audio/mp4','./media/Menu.jpg','getStatus','jid','*\x0a\x0a│▹\x20Premium\x20:\x20*','s.whatsapp.net','os_version','split','toFixed','ga\x20dicas','heapUsed','ʀᴜʟᴇs','endsWith','*\x0a\x0a│▹\x20Bio\x20Info\x20:\x20*','*\x0a\x0a│▹\x20Platform\x20:\x20*','pencarijodoh','4IIKuOk','uptime','g.us','platform','*\x0a\x0a│\x0a\x0a╰──「\x20*','status','lagi\x20dicas','rules','\x20Saya\x20Adalah\x20','phone','totalmem','audio','114351hRdsDB','*\x0a\x0a│▹\x20Active\x20:\x20*','readFileSync','4396TbCOXJ','1736562WgFlDR','502806HpnfIJ','memoryUsage','prepareMessageFromContent','*\x0a\x0a│▹\x20Os\x20Version:\x20*','*\x0a\x0a│▹\x20Platfrom\x20:\x20*','*\x0a\x0a│▹\x20Admin\x20:\x20*','round','chats','array'];_0x4e0e=function(){return _0x185f4b;};return _0x4e0e();}thu=await rimuru[_0x401efb(0x135)](sender[_0x401efb(0x13a)]('@')[0x0]+_0x401efb(0x12b),MessageType[_0x401efb(0x131)]),groups=rimuru[_0x401efb(0x15b)]['array'][_0x401efb(0x132)](_0x175a59=>_0x175a59[_0x401efb(0x136)][_0x401efb(0x13f)](_0x401efb(0x145))),privat=rimuru['chats'][_0x401efb(0x15c)][_0x401efb(0x132)](_0x19d922=>_0x19d922[_0x401efb(0x136)][_0x401efb(0x13f)](_0x401efb(0x138))),ram2=(process[_0x401efb(0x155)]()[_0x401efb(0x13d)]/0x400/0x400)[_0x401efb(0x13b)](0x2)+_0x401efb(0x130)+Math[_0x401efb(0x15a)](require('os')[_0x401efb(0x14d)]/0x400/0x400)+'MB',charger=''+(charging?_0x401efb(0x149):_0x401efb(0x13c)),koko=setting[_0x401efb(0x121)]+'@s.whatsapp.net',uptime=process[_0x401efb(0x144)](),timestampe=speed(),totalChat=await rimuru[_0x401efb(0x15b)][_0x401efb(0x128)](),latensie=speed()-timestampe,total=math(groups['length']+'*'+privat['length']),menu=ucapanWaktu+'\x20'+pushname+'\x20👋\x0a\x0a\x20Hai\x20Kak\x20'+pushname+_0x401efb(0x14b)+botName+'\x20Saya\x20Siap\x20Membantu\x20Kamu\x20Dalam\x20Membuat\x20Stiker\x20Dll\x0a\x0a\x20\x0a\x0a╭──「\x20*BOT\x20INFORMATION*\x20」\x0a\x0a│▹\x20Creator\x20:\x20*_@'+koko[_0x401efb(0x13a)]('@')[0x0]+_0x401efb(0x12c)+baterai+'%\x20'+charger+_0x401efb(0x141)+os['platform']()+_0x401efb(0x127)+latensie['toFixed'](0x4)+_0x401efb(0x123)+rimuru[_0x401efb(0x129)][_0x401efb(0x14c)]['wa_version']+_0x401efb(0x157)+rimuru[_0x401efb(0x129)][_0x401efb(0x14c)][_0x401efb(0x139)]+_0x401efb(0x150)+runtime(process['uptime']())+_0x401efb(0x158)+os[_0x401efb(0x146)]()+'*\x0a\x0a│▹\x20Total:\x20*'+_registered['length']+'*\x20*User*\x0a\x0a│\x0a\x0a│\x20「\x20*YOUR\x20INFORMATION*\x20」\x0a\x0a│\x0a\x0a│▹\x20Username:\x20*'+pushname+'*\x0a\x0a│▹\x20Sender\x20:\x20*@'+sender[_0x401efb(0x13a)]('@')[0x0]+_0x401efb(0x140)+thu[_0x401efb(0x148)]+_0x401efb(0x137)+(isPremium?'Ya':'No')+_0x401efb(0x159)+(isGroupAdmins?'Ya':'No')+'*\x0a\x0a│▹\x20Level\x20:\x20*'+Levelnye+_0x401efb(0x126)+Xpluu+'\x20/\x20'+requiredXplu+_0x401efb(0x147)+botName+_0x401efb(0x12a),buttons=[{'buttonId':prefix+'command','buttonText':{'displayText':_0x401efb(0x122)},'type':0x1},{'buttonId':prefix+_0x401efb(0x14a),'buttonText':{'displayText':_0x401efb(0x13e)},'type':0x1},{'buttonId':prefix+_0x401efb(0x142),'buttonText':{'displayText':_0x401efb(0x12d)},'type':0x1}],imageMsg=(await rimuru[_0x401efb(0x124)](fs[_0x401efb(0x151)](_0x401efb(0x134)),'imageMessage',{'thumbnail':Bfake,'contextInfo':{'forwardingScore':0x3dd,'isForwarded':!![]}}))['imageMessage'],buttonsMessage={'contentText':''+menu,'footerText':'*Note\x20:*\x20\x20ᴍᴀᴀғ\x20ᴋᴀᴋ\x20ⲂⲟⲦz\x20Black\x20Coffe\x20sᴀᴀᴛ\x20ɪɴɪ\x20sᴇᴅᴀɴɢ\x20ᴅᴀʟᴀᴍ\x20ᴘᴇʀʙᴀɪᴋᴀɴ','imageMessage':imageMsg,'buttons':buttons,'headerType':0x4},prep=await rimuru[_0x401efb(0x156)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply,'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'mentionedJid':[senderr]}}),rimuru['relayWAMessage'](prep);
                    break
  //=====================================================================================================================================================================================      
case 'f':
case 'lock':
 editzmemek = {
  "key": {
    "fromMe": false,
    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
  },
  "message": {
    "viewOnceMessage": {
      "message": {
        "imageMessage": {
          "url": "https://mmg.whatsapp.net/d/f/AjD3dQIM5hW3UkDfnnkice-eMcsMJJALEcgD9HnDGZEp.enc",
          "mimetype": "image/jpeg",
          "fileSha256": "aR3vWUsV9VZUiR+agYok8oM4UHiuhqEShMpQ6SgY9WM=",
          "fileLength": "675",
          "height": 41,
          "width": 52,
          "mediaKey": "6RDG8T+jOb0RfleWzLTclsaVn0EGRA/v78dnS+Y4S+o=",
          "fileEncSha256": "idNxqNtCaHRxuN+AX0uakPrBuiyvx84IksPUYMYgs7Y=",
          "directPath": "/v/t62.7118-24/13810909_985978368802545_7608967834334288292_n.enc?ccb=11-4&oh=359274a24041d97e91597ad1fb40e784&oe=61595B99",
          "mediaKeyTimestamp": "1630826390",
          "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIACkANAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAApgAAAAAAAAAAAf/EABQQAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQEAAT8AK//EABQRAQAAAAAAAAAAAAAAAAAAADD/2gAIAQIBAT8AT//EABQRAQAAAAAAAAAAAAAAAAAAADD/2gAIAQMBAT8AT//Z",
          "viewOnce": true
        }
      }
    }
  },
  "messageTimestamp": "1630826389",
  "status": "SERVER_ACK",
  "mediaData": {
    "localPath": "/data/user/0/com.gbwhatsapp/files/ViewOnce/IMG-20210905-WA0047.jpg"
  }
}
rimuru.sendMessage(from, { "degreesLatitude": '', "degreesLongitude": '', "jpegThumbnail": fakeimage}, MessageType.location, {quoted: editzmemek})
           break
           
            case 'allmenu':  
    const _0x32178a=_0x583e;(function(_0x119f4b,_0x5a7573){const _0x2755a8=_0x583e,_0x426c21=_0x119f4b();while(!![]){try{const _0x202ff8=-parseInt(_0x2755a8(0x27c))/0x1*(-parseInt(_0x2755a8(0x218))/0x2)+parseInt(_0x2755a8(0x2e6))/0x3+-parseInt(_0x2755a8(0x34d))/0x4*(parseInt(_0x2755a8(0x333))/0x5)+parseInt(_0x2755a8(0x345))/0x6+-parseInt(_0x2755a8(0x364))/0x7+-parseInt(_0x2755a8(0x1f7))/0x8*(-parseInt(_0x2755a8(0x325))/0x9)+parseInt(_0x2755a8(0x290))/0xa*(-parseInt(_0x2755a8(0x31f))/0xb);if(_0x202ff8===_0x5a7573)break;else _0x426c21['push'](_0x426c21['shift']());}catch(_0x494bdb){_0x426c21['push'](_0x426c21['shift']());}}}(_0x3b6e,0x3d574));if(!isRegistered)return sendButMessage(from,daftar1,daftar2,daftar3,{'quoted':freply});const boy=_0x32178a(0x1f0),filename='@'+sender[_0x32178a(0x24e)](_0x32178a(0x309),'')+'-'+moment()[_0x32178a(0x266)](),nomoruser=sender['replace'](_0x32178a(0x309),'')+'-'+moment()[_0x32178a(0x266)]();parseMention=(_0x3de7e9='')=>{const _0xbbe775=_0x32178a;return[..._0x3de7e9[_0xbbe775(0x29d)](/@([0-9]{5,16}|0)/g)][_0xbbe775(0x332)](_0x21ddf3=>_0x21ddf3[0x1]+_0xbbe775(0x309));},totalChat=await rimuru[_0x32178a(0x24b)][_0x32178a(0x204)](),groups=rimuru['chats']['array'][_0x32178a(0x209)](_0xcac344=>_0xcac344[_0x32178a(0x247)][_0x32178a(0x35f)](_0x32178a(0x1ef))),privat=rimuru[_0x32178a(0x24b)]['array'][_0x32178a(0x209)](_0x562b72=>_0x562b72[_0x32178a(0x247)][_0x32178a(0x35f)](_0x32178a(0x2b9))),total=math(groups['length']+'*'+privat[_0x32178a(0x22c)]),timestampe=speed(),latensie=speed()-timestampe,menu=_0x32178a(0x2be)+pushname,buttons=[{'buttonId':prefix+_0x32178a(0x265),'buttonText':{'displayText':_0x32178a(0x2f9)},'type':0x1}],imageMsg=(await rimuru[_0x32178a(0x2a9)](fs['readFileSync'](_0x32178a(0x31b)),_0x32178a(0x340),{'thumbnail':fs[_0x32178a(0x360)](_0x32178a(0x31b))}))[_0x32178a(0x340)],buttonsMessage={'contentText':''+menu,'footerText':_0x32178a(0x244)+owner+_0x32178a(0x205)+baterai+_0x32178a(0x1fd)+groups[_0x32178a(0x22c)]+_0x32178a(0x2c6)+privat[_0x32178a(0x22c)]+'\x0a\x0a⚡ᴛᴏᴛᴀʟ\x20ᴄʜᴀʏ\x20:\x20'+totalChat[_0x32178a(0x22c)]+_0x32178a(0x32a)+runtime(process[_0x32178a(0x24c)]())+_0x32178a(0x2cf)+latensie[_0x32178a(0x2fb)](0x4)+_0x32178a(0x2dd)+tanggal+_0x32178a(0x1f8)+time+_0x32178a(0x282)+timeMak+'\x0a\x0a⏰\x20ᴡᴜᴛ\x20:\x20'+timeJay+_0x32178a(0x26b)+prefix+'\x20\x20ɢʀᴏᴜᴘꜱᴇᴛᴛɪɴɢ\x0a\x0a▹\x20'+prefix+_0x32178a(0x225)+prefix+_0x32178a(0x36a)+prefix+'\x20\x20ᴋɪᴄᴋᴀʟʟ\x0a\x0a▹\x20'+prefix+_0x32178a(0x2bf)+prefix+_0x32178a(0x334)+prefix+_0x32178a(0x300)+prefix+'\x20\x20ʟɪꜱᴛᴏɴʟɪɴᴇ\x0a\x0a▹\x20'+prefix+_0x32178a(0x291)+prefix+'\x20\x20voting\x20*!voting\x20@tag\x20|\x20alasan\x20|\x201-100\x20menit\x0a\x0a▹\x20'+prefix+'\x20\x20delvote\x20*hapus\x20sesi\x20vote\x20di\x20grup*\x0a\x0a▹\x20'+prefix+_0x32178a(0x291)+prefix+_0x32178a(0x270)+prefix+'\x20\x20ᴋɪᴄᴋ\x20*ʀᴇᴘʟʏ*\x0a\x0a▹\x20'+prefix+_0x32178a(0x250)+prefix+_0x32178a(0x220)+prefix+_0x32178a(0x212)+prefix+_0x32178a(0x214)+prefix+_0x32178a(0x33b)+prefix+_0x32178a(0x2af)+prefix+_0x32178a(0x2c0)+prefix+'\x20\x20ʜɪᴅᴇᴛᴀɢ\x20*ᴛᴇᴋꜱ/ʀᴇᴘʟʏ\x20ᴛᴇᴋꜱ\x0a\x0a\x20\x20[𝐍𝐒𝐅𝐖\x20𝐌𝐄𝐍𝐔]\x0a\x0a▹\x20'+prefix+_0x32178a(0x34e)+prefix+_0x32178a(0x28f)+prefix+_0x32178a(0x2c8)+prefix+_0x32178a(0x342)+prefix+'\x20ecchi\x0a\x0a▹\x20'+prefix+_0x32178a(0x22f)+prefix+_0x32178a(0x2d4)+prefix+'\x20hololewd\x0a\x0a▹\x20'+prefix+_0x32178a(0x27b)+prefix+'\x20animefeets\x0a\x0a▹\x20'+prefix+_0x32178a(0x2c3)+prefix+_0x32178a(0x21e)+prefix+'\x20hentaiparadise\x0a\x0a▹\x20'+prefix+_0x32178a(0x317)+prefix+'\x20hentaifemdom\x0a\x0a▹\x20'+prefix+_0x32178a(0x312)+prefix+_0x32178a(0x28e)+prefix+_0x32178a(0x20d)+prefix+'\x20hentai4everyone\x20\x0a\x0a\x20[𝐍𝐒𝐅𝐖\x20𝐌𝐄𝐍𝐔\x20𝟐]\x0a\x0a▹\x20'+prefix+'\x20bj\x0a\x0a▹\x20'+prefix+_0x32178a(0x328)+prefix+'\x20ppcp\x0a\x0a▹\x20'+prefix+_0x32178a(0x252)+prefix+_0x32178a(0x23c)+prefix+_0x32178a(0x2ee)+prefix+_0x32178a(0x28f)+prefix+_0x32178a(0x215)+prefix+_0x32178a(0x344)+prefix+_0x32178a(0x346)+prefix+_0x32178a(0x224)+prefix+_0x32178a(0x20b)+prefix+_0x32178a(0x2db)+prefix+_0x32178a(0x2b4)+prefix+_0x32178a(0x283)+prefix+'\x20tits\x0a\x0a▹\x20'+prefix+_0x32178a(0x339)+prefix+_0x32178a(0x362)+prefix+_0x32178a(0x331)+prefix+_0x32178a(0x2aa)+prefix+'\x20baka\x0a\x0a▹\x20'+prefix+_0x32178a(0x301)+prefix+_0x32178a(0x297)+prefix+_0x32178a(0x21f)+prefix+'\x20waifu\x0a\x0a▹\x20'+prefix+_0x32178a(0x356)+prefix+_0x32178a(0x292)+prefix+_0x32178a(0x316)+prefix+_0x32178a(0x22f)+prefix+_0x32178a(0x29e)+prefix+_0x32178a(0x338)+prefix+_0x32178a(0x2c8)+prefix+_0x32178a(0x2e0)+prefix+'\x20holoero\x0a\x0a▹\x20'+prefix+_0x32178a(0x2f2)+prefix+_0x32178a(0x233)+prefix+'\x20fox_girl\x0a\x0a▹\x20'+prefix+_0x32178a(0x25c)+prefix+_0x32178a(0x324)+prefix+'\x20wallpaper\x0a\x0a▹\x20'+prefix+_0x32178a(0x23b)+prefix+_0x32178a(0x2e7)+prefix+_0x32178a(0x30e)+prefix+_0x32178a(0x29c)+prefix+_0x32178a(0x277)+prefix+_0x32178a(0x200)+prefix+_0x32178a(0x256)+prefix+'\x20cup\x20text\x0a\x0a▹\x20'+prefix+_0x32178a(0x33d)+prefix+_0x32178a(0x20f)+prefix+_0x32178a(0x1fc)+prefix+_0x32178a(0x2fd)+prefix+_0x32178a(0x255)+prefix+_0x32178a(0x1f2)+prefix+_0x32178a(0x25e)+prefix+_0x32178a(0x234)+prefix+_0x32178a(0x361)+prefix+_0x32178a(0x1fb)+prefix+'\x20summer3d\x20text\x0a\x0a▹\x20'+prefix+_0x32178a(0x306)+prefix+'\x20nature3d\x20text\x0a\x0a▹\x20'+prefix+_0x32178a(0x2cb)+prefix+_0x32178a(0x2d3)+prefix+_0x32178a(0x259)+prefix+'\x20letterleaves\x20text\x0a\x0a▹\x20'+prefix+_0x32178a(0x33c)+prefix+_0x32178a(0x2ce)+prefix+_0x32178a(0x368)+prefix+'\x20harrypotter\x20text\x0a\x0a▹\x20'+prefix+_0x32178a(0x2e4)+prefix+'\x20tiktok\x20text1\x20text2\x0a\x0a▹\x20'+prefix+'\x20arcade8bit\x20text1\x20text2\x0a\x0a▹\x20'+prefix+_0x32178a(0x36d)+prefix+_0x32178a(0x249)+prefix+_0x32178a(0x32d)+prefix+_0x32178a(0x2b0)+prefix+'\x20watercolor\x20text\x0a\x0a▹\x20'+prefix+_0x32178a(0x21b)+prefix+_0x32178a(0x35a)+prefix+'\x20lighttext\x20text\x0a\x0a▹\x20'+prefix+'\x20beautifulflower\x20text\x0a\x0a▹\x20'+prefix+_0x32178a(0x211)+prefix+'\x20royaltext\x20text\x0a\x0a▹\x20'+prefix+_0x32178a(0x293)+prefix+_0x32178a(0x2f4)+prefix+_0x32178a(0x357)+prefix+_0x32178a(0x350)+prefix+'\x20greenneon\x20text\x0a\x0a▹\x20'+prefix+'\x20glossychrome\x20text\x0a\x0a▹\x20'+prefix+'\x20greenbush\x20text\x0a\x0a▹\x20'+prefix+_0x32178a(0x2ca)+prefix+_0x32178a(0x22d)+prefix+_0x32178a(0x240)+prefix+_0x32178a(0x2f7)+prefix+_0x32178a(0x2b6)+prefix+_0x32178a(0x355)+prefix+_0x32178a(0x217)+prefix+_0x32178a(0x2cd)+prefix+_0x32178a(0x354)+prefix+_0x32178a(0x2ae)+prefix+_0x32178a(0x278)+prefix+_0x32178a(0x201)+prefix+'\x20silverplaybutton\x20text\x0a\x0a▹\x20'+prefix+_0x32178a(0x36c)+prefix+_0x32178a(0x261)+prefix+_0x32178a(0x299)+prefix+'joke\x0a\x0a┃▹\x20'+prefix+_0x32178a(0x20a)+prefix+_0x32178a(0x288)+prefix+_0x32178a(0x329)+prefix+'greyscale\x0a\x0a┃▹\x20'+prefix+_0x32178a(0x235)+prefix+_0x32178a(0x2d1)+prefix+_0x32178a(0x2f3)+prefix+_0x32178a(0x23f)+prefix+_0x32178a(0x343)+prefix+_0x32178a(0x28c)+prefix+_0x32178a(0x229)+prefix+_0x32178a(0x26c)+prefix+_0x32178a(0x298)+prefix+'wattpad\x20url_wattpad\x0a\x0a┃▹\x20'+prefix+_0x32178a(0x307)+prefix+_0x32178a(0x248)+prefix+'ceritahoror\x0a\x0a┗⬡\x0a\x0a┏⬡\x20𝐓𝐄𝐗𝐓\x20𝐌𝐄𝐍\x0a\x0a┃▹\x20'+prefix+_0x32178a(0x2bd)+prefix+_0x32178a(0x24d)+prefix+'quotesanime\x0a\x0a┃▹\x20'+prefix+'quotesimage\x0a\x0a┃▹\x20'+prefix+_0x32178a(0x26d)+prefix+_0x32178a(0x1ee)+prefix+_0x32178a(0x202)+prefix+_0x32178a(0x275)+prefix+_0x32178a(0x318)+prefix+_0x32178a(0x27f)+prefix+_0x32178a(0x321)+prefix+_0x32178a(0x308)+prefix+_0x32178a(0x34c)+prefix+_0x32178a(0x2c9)+prefix+'waifu\x0a\x0a▹\x20'+prefix+_0x32178a(0x303)+prefix+_0x32178a(0x352)+prefix+'kanna\x0a\x0a▹\x20'+prefix+_0x32178a(0x286)+prefix+'hentai\x0a\x0a▹\x20'+prefix+_0x32178a(0x349)+prefix+_0x32178a(0x242)+prefix+_0x32178a(0x29a)+prefix+'megumin\x0a\x0a▹\x20'+prefix+_0x32178a(0x341)+prefix+_0x32178a(0x366)+prefix+_0x32178a(0x2f8)+prefix+_0x32178a(0x25d)+prefix+_0x32178a(0x30a)+prefix+_0x32178a(0x2a0)+prefix+_0x32178a(0x347)+prefix+_0x32178a(0x319)+prefix+_0x32178a(0x353)+prefix+'nekopoisearch\x0a\x0a┏⬡\x20𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑\x0a\x0a┃▹\x20\x20'+prefix+'fb\x20\x0a\x0a┃▹\x20\x20'+prefix+_0x32178a(0x210)+prefix+'igdl2\x20\x0a\x0a┃▹\x20\x20'+prefix+_0x32178a(0x1ed)+prefix+_0x32178a(0x33a)+prefix+_0x32178a(0x294)+prefix+_0x32178a(0x207)+prefix+_0x32178a(0x264)+prefix+_0x32178a(0x2ff)+prefix+_0x32178a(0x1fe)+prefix+_0x32178a(0x313)+prefix+'tiktokaudio\x0a\x0a┃▹\x20\x20'+prefix+_0x32178a(0x32c)+prefix+_0x32178a(0x24f)+prefix+_0x32178a(0x213)+prefix+'shopee\x20*product*\x0a\x0a┃▹\x20\x20'+prefix+_0x32178a(0x289)+prefix+_0x32178a(0x258)+prefix+'google\x20*query*\x0a\x0a┃▹\x20\x20'+prefix+_0x32178a(0x2ba)+prefix+_0x32178a(0x2e2)+prefix+_0x32178a(0x2df)+prefix+'iguser\x20*ussername*\x0a\x0a┃▹\x20\x20'+prefix+_0x32178a(0x34b)+prefix+_0x32178a(0x276)+prefix+_0x32178a(0x305)+prefix+_0x32178a(0x2a7)+prefix+_0x32178a(0x272)+prefix+_0x32178a(0x2a2)+prefix+_0x32178a(0x28b)+prefix+_0x32178a(0x216)+prefix+_0x32178a(0x23d)+prefix+_0x32178a(0x1f1)+prefix+'siapaaku\x0a\x0a▹\x20'+prefix+_0x32178a(0x314)+prefix+'kuismath\x0a\x0a▹\x20'+prefix+'asahotak\x0a\x0a▹\x20'+prefix+_0x32178a(0x2a1)+prefix+'tebaklagu\x0a\x0a▹\x20'+prefix+_0x32178a(0x262)+prefix+_0x32178a(0x35d)+prefix+_0x32178a(0x34f)+prefix+_0x32178a(0x30b)+prefix+_0x32178a(0x337)+prefix+_0x32178a(0x25b)+prefix+_0x32178a(0x22e)+prefix+'tebakgambar\x0a\x0a▹\x20'+prefix+_0x32178a(0x330)+prefix+'suit\x20*batu/kertas/gunting*\x0a\x0a⬡\x20𝐌𝐄𝐍𝐔\x20𝐏𝐎𝐑𝐍\x0a\x0a▹\x20'+prefix+_0x32178a(0x25a)+prefix+_0x32178a(0x208)+prefix+'\x20bokep2\x0a\x0a▹\x20'+prefix+_0x32178a(0x35e)+prefix+_0x32178a(0x267)+prefix+_0x32178a(0x359)+prefix+'\x20bokep6\x0a\x0a▹\x20'+prefix+_0x32178a(0x35b)+prefix+_0x32178a(0x2da)+prefix+_0x32178a(0x219)+prefix+'\x20bokep10\x0a\x0a▹\x20'+prefix+_0x32178a(0x26a)+prefix+_0x32178a(0x31d)+prefix+'\x20bokep13\x0a\x0a▹\x20'+prefix+'\x20bokep14\x0a\x0a▹\x20'+prefix+_0x32178a(0x2ac)+prefix+_0x32178a(0x2d7)+prefix+_0x32178a(0x30d)+prefix+'\x20bokep18\x0a\x0a▹\x20'+prefix+_0x32178a(0x2b2)+prefix+'\x20bokep20\x0a\x0a▹\x20'+prefix+'\x20bokep21\x0a\x0a▹\x20'+prefix+_0x32178a(0x32e)+prefix+_0x32178a(0x285)+prefix+_0x32178a(0x237)+prefix+_0x32178a(0x31a)+prefix+_0x32178a(0x2c1)+prefix+_0x32178a(0x20c)+prefix+_0x32178a(0x239)+prefix+_0x32178a(0x2ea)+prefix+_0x32178a(0x369)+prefix+_0x32178a(0x21a)+prefix+_0x32178a(0x274)+prefix+_0x32178a(0x33e)+prefix+_0x32178a(0x287)+prefix+_0x32178a(0x336)+prefix+_0x32178a(0x2b3)+prefix+_0x32178a(0x223)+prefix+_0x32178a(0x36b)+prefix+_0x32178a(0x30c)+prefix+_0x32178a(0x2e9)+prefix+_0x32178a(0x251)+prefix+_0x32178a(0x236)+prefix+'cekmati\x20[nama]\x0a\x0a┃▹\x20\x20'+prefix+_0x32178a(0x206)+prefix+_0x32178a(0x203)+prefix+_0x32178a(0x260)+prefix+'truth\x0a\x0a┃▹\x20\x20'+prefix+_0x32178a(0x279)+prefix+_0x32178a(0x26e)+prefix+_0x32178a(0x20e)+prefix+_0x32178a(0x23e)+prefix+_0x32178a(0x27a)+prefix+_0x32178a(0x2e1)+prefix+'cantik\x0a\x0a┃▹\x20\x20'+prefix+_0x32178a(0x284)+prefix+_0x32178a(0x363)+prefix+_0x32178a(0x30f)+prefix+'cekganteng\x0a\x0a┃▹\x20\x20'+prefix+'cekcantik\x0a\x0a┗⬡\x0a\x0a┏⬡\x20𝐈𝐍𝐅𝐎\x20𝐌𝐄𝐍𝐔\x0a\x0a┃▹\x20\x20'+prefix+_0x32178a(0x26f)+prefix+_0x32178a(0x1f3)+prefix+_0x32178a(0x335)+prefix+_0x32178a(0x271)+prefix+_0x32178a(0x2d5)+prefix+_0x32178a(0x232)+prefix+_0x32178a(0x2a4)+prefix+_0x32178a(0x2c5)+prefix+'owner\x0a\x0a┃▹\x20\x20'+prefix+_0x32178a(0x2ed)+prefix+_0x32178a(0x358)+prefix+_0x32178a(0x2f1)+prefix+_0x32178a(0x281)+prefix+_0x32178a(0x2d0)+prefix+'listpremium\x0a\x0a┃▹\x20\x20'+prefix+'sourcecode\x0a\x0a┃▹\x20\x20'+prefix+_0x32178a(0x2f5)+prefix+_0x32178a(0x238)+prefix+_0x32178a(0x34a)+prefix+_0x32178a(0x365)+prefix+_0x32178a(0x32b)+prefix+'kisahnabi\x0a\x0a┃▹\x20\x20'+prefix+_0x32178a(0x32f)+prefix+_0x32178a(0x263)+prefix+_0x32178a(0x22a)+prefix+_0x32178a(0x2b5)+prefix+_0x32178a(0x315)+prefix+'playdate\x0a\x0a╠➥'+prefix+_0x32178a(0x253)+prefix+'hallo\x0a\x0a╠➥'+prefix+_0x32178a(0x33f)+prefix+'susu\x0a\x0a╠➥'+prefix+'cemen\x0a\x0a╠➥'+prefix+_0x32178a(0x2cc)+prefix+_0x32178a(0x269)+prefix+_0x32178a(0x245)+prefix+'sound\x0a\x0a╠➥'+prefix+_0x32178a(0x2f0)+prefix+_0x32178a(0x2fa)+prefix+_0x32178a(0x2ad)+prefix+_0x32178a(0x2bb)+prefix+_0x32178a(0x2d2)+prefix+_0x32178a(0x246)+prefix+_0x32178a(0x2c7)+prefix+_0x32178a(0x21c)+prefix+_0x32178a(0x24a)+prefix+'sound10\x0a\x0a╠➥'+prefix+_0x32178a(0x322)+prefix+_0x32178a(0x231)+prefix+_0x32178a(0x273)+prefix+_0x32178a(0x243)+prefix+_0x32178a(0x23a)+prefix+_0x32178a(0x31e)+prefix+_0x32178a(0x228)+prefix+_0x32178a(0x1f4)+prefix+'sound19\x0a\x0a╠➥'+prefix+'sound20\x0a\x0a╠➥'+prefix+_0x32178a(0x25f)+prefix+_0x32178a(0x348)+prefix+_0x32178a(0x1f6)+prefix+'sound24\x0a\x0a╠➥'+prefix+'sound25\x0a\x0a╠➥'+prefix+_0x32178a(0x27d)+prefix+'sound27\x0a\x0a╠➥'+prefix+_0x32178a(0x22b)+prefix+_0x32178a(0x230)+prefix+'sound30\x0a\x0a╠➥'+prefix+_0x32178a(0x222)+prefix+_0x32178a(0x310)+prefix+'sound33\x0a\x0a╠➥'+prefix+_0x32178a(0x221)+prefix+'sound35\x0a\x0a╠➥'+prefix+_0x32178a(0x29b)+prefix+_0x32178a(0x2c2)+prefix+_0x32178a(0x2e5)+prefix+'sound39\x0a\x0a╠➥'+prefix+'sound40\x0a\x0a╠➥'+prefix+_0x32178a(0x2a6)+prefix+_0x32178a(0x27e)+prefix+_0x32178a(0x21d)+prefix+_0x32178a(0x302)+prefix+_0x32178a(0x2eb)+prefix+_0x32178a(0x1f9)+prefix+'sound47\x0a\x0a╠➥'+prefix+_0x32178a(0x1f5)+prefix+_0x32178a(0x226)+prefix+_0x32178a(0x2b7)+prefix+_0x32178a(0x254)+prefix+_0x32178a(0x2a5)+prefix+_0x32178a(0x2c4)+prefix+_0x32178a(0x296)+prefix+'sound55\x0a\x0a╠➥'+prefix+_0x32178a(0x2ab)+prefix+_0x32178a(0x2bc)+prefix+_0x32178a(0x280)+prefix+_0x32178a(0x304)+prefix+_0x32178a(0x2b8)+prefix+'sound61\x0a\x0a╠➥'+prefix+_0x32178a(0x2b1)+prefix+'sound63\x0a\x0a╠➥'+prefix+_0x32178a(0x2de)+prefix+_0x32178a(0x2ef)+prefix+'sound66\x0a\x0a╠➥'+prefix+_0x32178a(0x257)+prefix+_0x32178a(0x29f)+prefix+_0x32178a(0x326)+prefix+_0x32178a(0x2d8)+prefix+_0x32178a(0x2d9)+prefix+_0x32178a(0x351)+prefix+_0x32178a(0x35c)+prefix+_0x32178a(0x2f6)+prefix+_0x32178a(0x311)+prefix+_0x32178a(0x227)+prefix+_0x32178a(0x2fe)+prefix+_0x32178a(0x28d)+prefix+_0x32178a(0x1ff)+prefix+'sound84\x0a\x0a╠➥'+prefix+_0x32178a(0x241)+prefix+_0x32178a(0x2dc)+prefix+_0x32178a(0x367)+prefix+_0x32178a(0x320)+prefix+'sound89\x0a\x0a╠➥'+prefix+_0x32178a(0x2fc)+prefix+'sound91\x0a\x0a╠➥'+prefix+'sound92\x0a\x0a╠➥'+prefix+_0x32178a(0x2a3)+prefix+_0x32178a(0x2e8)+prefix+_0x32178a(0x2d6)+prefix+_0x32178a(0x295)+prefix+_0x32178a(0x2e3)+prefix+_0x32178a(0x28a)+prefix+_0x32178a(0x31c)+botName+'\x20」────\x0a\x0a','imageMessage':imageMsg,'buttons':buttons,'headerType':0x4},prep=await rimuru[_0x32178a(0x1fa)](from,{'buttonsMessage':buttonsMessage},{'quoted':editz,'contextInfo':{'mentionedJid':parseMention(menu),'externalAdReply':{'title':_0x32178a(0x2a8)+pushname+_0x32178a(0x327),'footerText':_0x32178a(0x323),'imageMessage':imageMsg,'body':''+tanggal,'previewType':0x1,'thumbnailUrl':_0x32178a(0x268),'thumbnail':fs[_0x32178a(0x360)](_0x32178a(0x31b))},'forwardingScore':0x1fc,'isForwarded':!![],'mentionedJid':[Tag+_0x32178a(0x309),senderr]}}),rimuru[_0x32178a(0x2ec)](prep);function _0x583e(_0x28b8c4,_0x62b6e5){const _0x3b6ea2=_0x3b6e();return _0x583e=function(_0x583e2,_0x22410e){_0x583e2=_0x583e2-0x1ed;let _0xcbe5bd=_0x3b6ea2[_0x583e2];return _0xcbe5bd;},_0x583e(_0x28b8c4,_0x62b6e5);}function _0x3b6e(){const _0xc7f147=['\x20bokep24\x0a\x0a▹\x20','listsurah\x0a\x0a┃▹\x20\x20','doge\x0a\x0a┃▹\x20\x20','sound15\x0a\x0a╠➥','\x20pussy_jpg\x0a\x0a▹\x20','\x20feet\x0a\x0a▹\x20','gelud\x20@tag\x0a\x0a▹\x20','kapankah\x0a\x0a┃▹\x20\x20','tinyurl\x0a\x0a┃▹\x20','\x20glittergold\x20text\x0a\x0a▹\x20','sound85\x0a\x0a╠➥','wallnime\x0a\x0a▹\x20','sound14\x0a\x0a╠➥','🤖\x20*sᴛᴀᴛᴜs\x20ⲂⲟⲦz\x20ʀɪᴍᴜʀᴜ࿐*\x20🤖\x0a\x0a⚡ᴄʀᴇᴀᴛᴏʀ\x20:\x20@','sasageyo\x0a\x0a╠➥','sound6\x0a\x0a╠➥','jid','cerpen\x0a\x0a┃▹\x20','\x20pubg\x20text1\x20text2\x0a\x0a「\x20Ephoto\x20360\x20」\x0a\x0a▹\x20','sound9\x0a\x0a╠➥','chats','uptime','quotesdiLan\x0a\x0a┃▹\x20','replace','nhentaipdf\x20*code*\x0a\x0a┗⬡\x0a\x0a┏⬡\x20𝐎𝐓𝐇𝐄𝐑\x20𝐌𝐄𝐍𝐔\x0a\x0a┃▹\x20\x20','\x20\x20ᴀᴅᴅ\x20*+62xxxxxx*\x0a\x0a▹\x20','togel\x0a\x0a┃▹\x20\x20','\x20cum\x0a\x0a▹\x20','beb\x0a\x0a╠➥','sound51\x0a\x0a╠➥','\x20lovemessage\x20text\x0a\x0a▹\x20','\x20shadow\x20text\x0a\x0a▹\x20','sound67\x0a\x0a╠➥','ssweb\x20*query*\x0a\x0a┃▹\x20\x20','\x20summernature\x20text\x0a\x0a▹\x20','\x20bkp\x20*random*\x0a\x0a▹\x20','tebakanime\x0a\x0a▹\x20','\x20futanari\x0a\x0a▹\x20','nakanomiku\x0a\x0a▹\x20','\x20love\x20text\x0a\x0a▹\x20','sound21\x0a\x0a╠➥','toxic\x0a\x0a┃▹\x20\x20','darkjoke\x0a\x0a┃▹\x20','tebakkata\x0a\x0a▹\x20','iri\x0a\x0a╠➥','ytmp3\x20\x0a\x0a┃▹\x20\x20','command','unix','\x20bokep4\x0a\x0a▹\x20','https://h.top4top.io/p_2102x150j0.jpg','gatal\x0a\x0a╠➥','\x20bokep11\x0a\x0a▹\x20','\x0a\x0a\x20\x20\x20\x20\x20[ɢʀᴏᴜᴘ\x20ᴍᴇɴᴜ]\x0a\x0a▹\x20','drakorongoing\x0a\x0a┃▹\x20','faktaunik\x0a\x0a┃▹\x20','apakah\x0a\x0a┃▹\x20\x20','update\x0a\x0a┃▹\x20\x20','\x20\x20ʟᴇᴀᴠᴇ\x0a\x0a▹\x20','profile\x0a\x0a┃▹\x20\x20','ytsearch\x20*query*\x0a\x0a┗⬡\x0a\x0a𝐆𝐀𝐌𝐄\x20𝐌𝐄𝐍𝐔\x0a\x0a▹\x20','sound13\x0a\x0a╠➥','attp\x20*teks*\x0a\x0a┃▹\x20\x20','bucin\x0a\x0a┃▹\x20','githubstalk\x20*username*\x0a\x0a┃▹\x20\x20','\x20nsfw_neko_gif\x0a\x0a▹\x20','\x20birthdayday\x20text\x0a\x0a▹\x20','dare\x0a\x0a┃▹\x20\x20','rate\x0a\x0a┃▹\x20\x20','\x20sideoppai\x0a\x0a▹\x20','445769mXhKdY','sound26\x0a\x0a╠➥','sound42\x0a\x0a╠➥','loli\x0a\x0a▹\x20','sound58\x0a\x0a╠➥','leaderboard\x0a\x0a┃▹\x20\x20','\x0a\x0a⏰\x20ᴡɪᴛᴀ\x20:\x20','\x20holo\x0a\x0a▹\x20','ganteng\x0a\x0a┃▹\x20\x20','\x20bokep23\x0a\x0a▹\x20','sagiri\x0a\x0a▹\x20','semoji\x20*emoji*\x0a\x0a┃▹\x20\x20','hitler\x0a\x0a┃▹\x20','playstore\x20*query*\x0a\x0a┃▹\x20\x20','sound98\x0a\x0a╠➥#sound99\x0a\x0a╠➥','voting\x0a\x0a▹\x20','affect\x0a\x0a┃▹\x20','sound82\x0a\x0a╠➥','\x20biganimetiddies\x0a\x0a▹\x20','\x20trap\x0a\x0a▹\x20','2700840TKMCCr','\x20\x20ᴛᴀɢᴀʟʟ\x20*ᴛᴇᴋꜱ*\x0a\x0a▹\x20','\x20femdom\x0a\x0a▹\x20','\x20heartshaped\x20text\x0a\x0a▹\x20','play\x20\x0a\x0a┃▹\x20\x20','sound96\x0a\x0a╠➥','sound54\x0a\x0a╠➥','\x20feetg\x0a\x0a▹\x20','lk21\x20query\x0a\x0a┃▹\x20','meme\x0a\x0a┃▹\x20','kusonime\x0a\x0a▹\x20','sound36\x0a\x0a╠➥','\x20ngif\x0a\x0a▹\x20','matchAll','\x20eroyuri\x0a\x0a▹\x20','sound68\x0a\x0a╠➥#sound69\x0a\x0a╠➥#sound70\x0a\x0a╠➥#sound71\x0a\x0a╠➥#sound72\x0a\x0a╠➥','nakanoitsuki\x0a\x0a▹\x20','tebaklirik\x0a\x0a▹\x20','slot\x0a\x0a▹\x20','sound93\x0a\x0a╠➥','sewabot\x0a\x0a┃▹\x20\x20','sound52\x0a\x0a╠➥','sound41\x0a\x0a╠➥','img2url\x20*reply\x20foto*\x0a\x0a┃▹\x20\x20','Hai\x20','prepareMessageMedia','\x20smug\x0a\x0a▹\x20','sound56\x0a\x0a╠➥','\x20bokep15\x0a\x0a▹\x20','sound3\x0a\x0a╠➥','\x20snow3d\x20text\x0a\x0a▹\x20','\x20\x20antiviewonce\x20*enable/disable*\x0a\x0a▹\x20','\x20multicolor3d\x20text\x0a\x0a▹\x20','sound62\x0a\x0a╠➥','\x20bokep19\x0a\x0a▹\x20','smeme\x20*teks|teks*\x0a\x0a┃▹\x20\x20','\x20anal\x0a\x0a▹\x20','nengdesah\x0a\x0a╠➥','\x20starsnight\x20text\x0a\x0a▹\x20','sound50\x0a\x0a╠➥','sound60\x0a\x0a╠➥','s.whatsapp.net','image\x20*query*\x0a\x0a┃▹\x20\x20','sound4\x0a\x0a╠➥','sound57\x0a\x0a╠➥','quotes\x0a\x0a┃▹\x20','Hai\x20kak\x20','\x20\x20ɪɴꜰᴏɢʀᴜᴘ\x0a\x0a▹\x20','\x20\x20ꜱɪᴅᴇʀ\x20*ʀᴇᴘʟʏ\x20ᴄʜᴀᴛ\x20ʙᴏᴛ*\x0a\x0a▹\x20','dadu\x0a\x0a┃▹\x20\x20','sound37\x0a\x0a╠➥','\x20animebooty\x0a\x0a▹\x20','sound53\x0a\x0a╠➥','listsewa\x0a\x0a┃▹\x20\x20','\x0a\x0a⚡ᴘʀɪᴠᴀᴛᴇ\x20ᴄʜᴀᴛ\x20:\x20','sound7\x0a\x0a╠➥','\x20blowjob\x0a\x0a▹\x20','husbu\x0a\x0a▹\x20','\x20metallogo\x20text\x0a\x0a▹\x20','\x20underwater\x20text\x0a\x0a▹\x20','menyukaiku\x0a\x0a╠➥','\x20writegalacy\x20text\x0a\x0a▹\x20','\x20fallleaves\x20text\x0a\x0a▹\x20','\x0a\x0a⚡ʙᴏᴛ\x20ᴍᴏᴅᴇ:\x20Public\x20Mode\x0a\x0a⚡sᴘᴇᴇᴅ\x20:\x20','cekpremium\x0a\x0a┃▹\x20\x20','circle\x0a\x0a┃▹\x20','sound5\x0a\x0a╠➥','\x20golderrose\x20text\x0a\x0a▹\x20','\x20ahegao\x0a\x0a▹\x20','waktu\x0a\x0a┃▹\x20\x20','sound95\x0a\x0a╠➥','\x20bokep16\x0a\x0a▹\x20','sound74\x0a\x0a╠➥','sound75\x0a\x0a╠➥','\x20bokep8\x0a\x0a▹\x20','\x20poke\x0a\x0a▹\x20','sound86\x0a\x0a╠➥','\x20_Second\x0a\x0a⚡ғɪᴛᴜғ\x20:\x20𝟕𝟓𝟎\x0a\x0a✑ɪɴғᴏ\x20ᴜsᴇʀ\x0a\x0a🎯\x20ʟᴇᴠᴇʟ\x20:\x20𝟗𝟗𝟗𝟗𝟗𝟗𝟗𝟗𝟗𝟗𝟗𝟗\x0a\x0a🎯\x20ʟɪᴍɪᴛ\x20:\x20𝟗𝟗𝟗𝟗𝟗𝟗𝟗𝟗𝟗𝟗𝟗𝟗\x0a\x0a⨷\x20ɪɴᴅᴏɴᴇsɪᴀ\x20ᴛɪᴍᴇ\x20ᴢᴏɴᴇ\x0a\x0aᴛᴀɴɢɢᴀʟ\x20:\x20','sound64\x0a\x0a╠➥','nulis\x20*teks*\x0a\x0a┃▹\x20\x20','\x20erofeet\x0a\x0a▹\x20','jadian\x0a\x0a┃▹\x20\x20','pinterest\x20*query*\x0a\x0a┃▹\x20\x20','sound97\x0a\x0a╠➥','\x20carvedwood\x20text\x0a\x0a▹\x20','sound38\x0a\x0a╠➥','557889DutMxt','\x20kemonomimi\x0a\x0a▹\x20','sound94\x0a\x0a╠➥','mining\x0a\x0a┃▹\x20\x20','toimg\x0a\x0a┃▹\x20\x20','sound45\x0a\x0a╠➥','relayWAMessage','ping\x0a\x0a┃▹\x20\x20','\x20yuri\x0a\x0a▹\x20','sound65\x0a\x0a╠➥','sound1\x0a\x0a╠➥','donasi\x0a\x0a┃▹\x20\x20','\x20classic\x0a\x0a▹\x20','blur\x0a\x0a┃▹\x20','\x20birthdaycake\x20text\x0a\x0a▹\x20','bugreport\x20*keluha\x0a\x0a┏⬡\x20𝐈𝐒𝐋𝐀𝐌\x20𝐌𝐄𝐍𝐔\x0a\x0a┃▹\x20\x20','sound78\x0a\x0a╠➥','\x20textcake\x20text\x0a\x0a▹\x20','storyanime\x0a\x0a▹\x20','🗒️COMMAND','sound2\x0a\x0a╠➥','toFixed','sound90\x0a\x0a╠➥','\x20burnpaper\x20text\x0a\x0a▹\x20','sound81\x0a\x0a╠➥','ytmp4\x20\x0a\x0a┃▹\x20\x20','\x20\x20ᴅᴇᴍᴏᴛᴇ\x0a\x0a▹\x20','\x20solog\x0a\x0a▹\x20','sound44\x0a\x0a╠➥','milf\x0a\x0a▹\x20','sound59\x0a\x0a╠➥','tiktokstalk\x20*ussername*\x0a\x0a┃▹\x20\x20','\x20wolfmetal\x20text\x0a\x0a▹\x20','wattpadsearch\x20query\x0a\x0a┃▹\x20','anime\x20\x0a\x0a▹\x20','@s.whatsapp.net','nakanoikyy\x0a\x0a▹\x20','caklontong\x0a\x0a▹\x20','tovideo\x20*reply\x20sgif*\x0a\x0a┗⬡\x0a\x0a┏⬡\x20𝐂𝐄𝐊\x20𝐌𝐄𝐍𝐔\x0a\x0a┃▹\x20\x20','\x20bokep17\x0a\x0a▹\x20','\x20nsfw_avatar\x0a\x0a▹\x20','babi\x0a\x0a┃▹\x20\x20','sound32\x0a\x0a╠➥','sound79\x0a\x0a╠➥','\x20lewdanimegirls\x0a\x0a▹\x20','tiktoknowm\x20\x0a\x0a┃▹\x20\x20','family100\x0a\x0a▹\x20','pale\x0a\x0a╠➥','\x20cuddle\x0a\x0a▹\x20','\x20animearmpits\x0a\x0a▹\x20','randomnama\x0a\x0a┗⬡\x0a\x0a\x20\x20[𝐖𝐈𝐁𝐔\x20𝐌𝐄𝐍𝐔\x0a\x0a▹\x20','nhentai\x20*code*\x0a\x0a▹\x20','\x20𝐛𝐨𝐤𝐞𝐩𝟐𝟓\x0a\x0a┏⬡𝐒𝐓𝐈𝐂𝐊𝐄𝐑\x20𝐌𝐄𝐍𝐔\x0a\x0a┃▹\x20\x20','./media/Menu.jpg','sound100\x0a\x0a╰───「\x20','\x20bokep12\x0a\x0a▹\x20','sound16\x0a\x0a╠➥','11tsDUhq','sound88\x0a\x0a╠➥','manga\x0a\x0a▹\x20','sound11\x0a\x0a╠➥','*Note\x20:*\x20\x20ᴍᴀᴀғ\x20ᴋᴀᴋ\x20ⲂⲟⲦz\x20ʀɪᴍᴜʀᴜ࿐\x20sᴀᴀᴛ\x20ɪɴɪ\x20sᴇᴅᴀɴɢ\x20ᴅᴀʟᴀᴍ\x20ᴘᴇʀʙᴀɪᴋᴀɴ','\x20lewdkemo\x0a\x0a▹\x20','18jbbONv','sound73\x0a\x0a╠➥','\x20👋','\x20ero\x0a\x0a▹\x20','wanted\x0a\x0a┃▹\x20','\x0a\x0a⚡ᴀᴄᴛɪᴠᴇ\x20:\x20','asmaulhusna\x0a\x0a┃▹\x20\x20','mediafire\x20\x0a\x0a┃▹\x20\x20','\x20wetglass\x20text\x0a\x0a▹\x20','\x20bokep22\x0a\x0a▹\x20','jadwalshola\x0a\x0a┗⬡\x0a\x0a╠═══✪〘\x20Sound\x20Menu〙✪══\x0a\x0a╠➥','tebakbendera\x0a\x0a▹\x20','\x20erok\x0a\x0a▹\x20','map','840310GVUOTb','\x20\x20ᴘʀᴏᴍᴏᴛᴇ\x0a\x0a▹\x20','rules\x0a\x0a┃▹\x20\x20','sticker\x20*reply\x20foto/video*\x0a\x0a┃▹\x20\x20','tebakjenaka\x0a\x0a▹\x20','\x20cum_jpg\x0a\x0a▹\x20','\x20kuni\x0a\x0a▹\x20','tiktok\x20\x0a\x0a┃▹\x20\x20','\x20\x20antidel\x20*enable/disable*\x0a\x0a▹\x20','\x20glowingneon\x20text\x0a\x0a▹\x20','\x20cup1\x20text\x0a\x0a▹\x20','stickeranime\x0a\x0a┃▹\x20\x20','megic\x0a\x0a╠➥','imageMessage','otakudesu\x0a\x0a▹\x20','\x20yaoi\x0a\x0a▹\x20','cuttly\x0a\x0a┃▹\x20','\x20feed\x0a\x0a▹\x20','1187430OEYZZo','\x20eron\x0a\x0a▹\x20','otakuongoing\x0a\x0a▹\x20','sound22\x0a\x0a╠➥','cosplay\x0a\x0a▹\x20','alquran\x0a\x0a┃▹\x20\x20','igstalk\x20*username*\x0a\x0a┃▹\x20\x20','lolivideo\x0a\x0a▹\x20','4MOUdvj','\x20chiisaihentai\x0a\x0a▹\x20','kimiakuis\x0a\x0a▹\x20','\x20hologram3d\x20text\x0a\x0a▹\x20','sound76\x0a\x0a╠➥','neko\x0a\x0a▹\x20','nekopoi\x20*link*\x0a\x0a▹\x20','\x20galaxybat\x20text\x0a\x0a▹\x20','\x20wooden3d\x20text\x0a\x0a▹\x20','\x20pussy\x0a\x0a▹\x20','\x20galaxystyle\x20text\x0a\x0a▹\x20','runtime\x0a\x0a┃▹\x20\x20','\x20bokep5\x0a\x0a▹\x20','\x20galaxywallpaper\x20text\x0a\x0a▹\x20','\x20bokep7\x0a\x0a▹\x20','sound77\x0a\x0a╠➥','susunkata\x0a\x0a▹\x20','\x20bokep3\x0a\x0a▹\x20','endsWith','readFileSync','\x20woodheart\x20text\x0a\x0a▹\x20','\x20kiss\x0a\x0a▹\x20','beban\x0a\x0a┃▹\x20\x20','2987747ZlVXol','alquranaudio\x0a\x0a┃▹\x20\x20','doujindesu\x0a\x0a▹\x20','sound87\x0a\x0a╠➥','\x20flamming\x20text\x0a\x0a▹\x20','patrick\x0a\x0a┃▹\x20\x20','\x20\x20ᴄᴇᴋꜱᴇᴡᴀ\x0a\x0a▹\x20','take\x20*pack|author*\x20\x0a\x0a┃▹\x20\x20','\x20freefire\x20text\x0a\x0a┏━▹\x20IMAGE\x20MANIPULATION\x0a\x0a┃▹\x20','\x20battlefield4\x20text1\x20text2\x0a\x0a▹\x20','twitter\x20\x0a\x0a┃▹\x20\x20','katabijak\x0a\x0a┃▹\x20','g.us','6282277669861@s.whatsapp.net','tictactoe\x20@tag\x0a\x0a▹\x20','\x20undergrass\x20text\x0a\x0a▹\x20','level\x0a\x0a┃▹\x20\x20','sound18\x0a\x0a╠➥','sound48\x0a\x0a╠➥','sound23\x0a\x0a╠➥','1146328DPhygR','\x0a\x0a⏰\x20ᴡɪʙ\x20:\x20','sound46\x0a\x0a╠➥','prepareMessageFromContent','\x20woodenboard\x20text\x0a\x0a▹\x20','\x20smoke\x20text\x0a\x0a▹\x20','%\x0a\x0a⚡ᴘʀᴇғɪx\x20:\x20ᴍᴜʟᴛɪ-ᴘʀᴇғɪx\x0a\x0a⚡ɢʀᴜʙ\x20ᴛᴏᴛᴀʟ\x20:\x20','soundcloud\x20\x0a\x0a┃▹\x20\x20','sound83\x0a\x0a╠➥','\x20random_hentai_gif\x0a\x0a\x20\x0a\x0a\x20[𝐓𝐄𝐗𝐓\x20𝐌𝐀𝐊𝐄𝐑]\x0a\x0a▹\x20','\x20goldplaybutton\x20text\x0a\x0a▹\x20','pantun\x0a\x0a┃▹\x20','citacita\x0a\x0a┃▹\x20\x20','all','\x0a\x0a⚡ʙᴀᴛᴇʀᴀɪ\x20:\x20\x20','wangy\x20[nama]\x0a\x0a┃▹\x20\x20','ythd\x20\x0a\x0a┃▹\x20\x20','\x20bokep1\x0a\x0a▹\x20','filter','wasted\x0a\x0a┃▹\x20','\x20gasm\x0a\x0a▹\x20','bucinstick\x0a\x0a┃▹\x20\x20','\x20animebellybutton\x0a\x0a▹\x20','bisakah\x0a\x0a┃▹\x20\x20','\x20romance\x20text\x0a\x0a▹\x20','igdl\x20\x0a\x0a┃▹\x20\x20','\x20puppycute\x20text\x0a\x0a▹\x20','\x20\x20ꜱᴇᴛᴘᴘɢʀᴜᴘ\x0a\x0a▹\x20','brainly\x20*query*\x0a\x0a┃▹\x20\x20','\x20\x20ꜱᴇᴛᴅᴇꜱᴄ\x0a\x0a▹\x20','\x20lewd\x0a\x0a▹\x20','limitgame\x0a\x0a▹\x20','\x20textbyname\x20text\x0a\x0a▹\x20','2WHTqne','\x20bokep9\x0a\x0a▹\x20','ttg\x20*teks*\x0a\x0a┃▹\x20\x20','\x20luxurygold\x20text\x0a\x0a▹\x20','sound8\x0a\x0a╠➥','sound43\x0a\x0a╠➥','\x20animethighss\x0a\x0a▹\x20','\x20lewdk\x0a\x0a▹\x20','\x20\x20ꜱᴇᴛɢʀᴜᴘɴᴀᴍᴇ\x0a\x0a▹\x20','sound34\x0a\x0a╠➥','sound31\x0a\x0a╠➥','swm\x20*pack|author*\x0a\x0a┃▹\x20\x20','\x20solo\x0a\x0a▹\x20','\x20\x20ᴀꜰᴋ\x20*ᴀʟᴀꜱᴀɴ*\x0a\x0a▹\x20','sound49\x0a\x0a╠➥','sound80\x0a\x0a╠➥','sound17\x0a\x0a╠➥','picture\x0a\x0a┗━▹\x0a\x0a┏⬡\x20𝐅𝐈𝐋𝐌\x20𝐌𝐄𝐍𝐔\x0a\x0a┃▹\x20','desah\x0a\x0a╠➥','sound28\x0a\x0a╠➥','length','\x20noeltext\x20text\x0a\x0a▹\x20','tebaktebakan\x0a\x0a▹\x20','\x20hentai\x0a\x0a▹\x20','sound29\x0a\x0a╠➥','sound12\x0a\x0a╠➥','botstat\x0a\x0a┃▹\x20\x20','\x20erokemo\x0a\x0a▹\x20','\x20coffe\x20text\x0a\x0a▹\x20','trash\x0a\x0a┃▹\x20','cekwatak\x0a\x0a┃▹\x20\x20'];_0x3b6e=function(){return _0xc7f147;};return _0x3b6e();}
                               break 
       //=====================================================================================================================================================================================             
           case 'kalender':
              reply(`
🐣Day ${week} ${weton} 
🐥Date : ${date}
`)
break
case 'textpro':
var _0x453bdc=_0x3453;function _0x3453(_0x28bd72,_0x251927){var _0x34ebab=_0x34eb();return _0x3453=function(_0x345303,_0x526763){_0x345303=_0x345303-0x1f4;var _0x3eb799=_0x34ebab[_0x345303];return _0x3eb799;},_0x3453(_0x28bd72,_0x251927);}(function(_0x33f72a,_0x51691e){var _0x3bf326=_0x3453,_0x290d53=_0x33f72a();while(!![]){try{var _0x195a9c=-parseInt(_0x3bf326(0x215))/0x1+parseInt(_0x3bf326(0x208))/0x2*(-parseInt(_0x3bf326(0x203))/0x3)+-parseInt(_0x3bf326(0x1fa))/0x4*(-parseInt(_0x3bf326(0x20a))/0x5)+parseInt(_0x3bf326(0x1f8))/0x6+-parseInt(_0x3bf326(0x214))/0x7*(parseInt(_0x3bf326(0x20b))/0x8)+-parseInt(_0x3bf326(0x223))/0x9+parseInt(_0x3bf326(0x216))/0xa;if(_0x195a9c===_0x51691e)break;else _0x290d53['push'](_0x290d53['shift']());}catch(_0x29acee){_0x290d53['push'](_0x290d53['shift']());}}}(_0x34eb,0x1d7c9));if(!isRegistered)return reply(ind[_0x453bdc(0x205)][_0x453bdc(0x221)]);function _0x34eb(){var _0x3d6bb3=['\x20icecold\x20text\x0a\x0a▹\x20','\x20minion\x20text\x0a\x0a▹\x20','543iAEZEm','\x20blackpink\x20text\x0a\x0a▹\x20','only','\x20luxury\x20text\x0a\x0a▹\x20','\x20holographic\x20text\x0a\x0a▹\x20','1958WJbtyh','menu','1140515SnDCxr','240wRHRGI','\x20newyearcard\x20text\x0a\x0a▹\x20','\x20futureneon\x20text\x0a\x0a▹\x20','\x20ninjalogo\x20text1\x20text2\x0a\x0a▹\x20','\x20wallgravity\x20text1\x20text2\x0a\x0a\x20','\x20horrorblood\x20text\x0a\x0a▹\x20','\x0a\x0a▹\x20','\x20bloodfrosted\x20text\x0a\x0a▹\x20','\x20steel3d\x20text1\x20text2\x0a\x0a▹\x20','26698lcdLCK','184829acjNjn','3406220tgAKWu','\x20natureleaves\x20text\x0a\x0a▹\x20','\x20fireworksparkle\x20text\x0a\x0a▹\x20','\x20metaldark\x20text\x0a\x0a▹\x20','\x20neon\x20text\x0a\x0a▹\x20','\x20lionlogo\x20text1\x20text2\x0a\x0a▹\x20','⬡\x20BACK\x20TO\x20MENU\x20','\x20cloud\x20text\x0a\x0a▹\x20','ᴄʀᴇᴀᴛᴇᴅ\x20ʙʏ\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru','\x20pornhub\x20text1\x20text2\x0a\x0a▹\x20','\x20text1917\x20text\x0a\x0a▹\x20','daftarB','\x20summersand\x20text\x0a\x0a▹\x20','955089SjefzV','\x20sandengraved\x20text\x0a\x0a▹\x20','\x20jokerlogo\x20text\x0a\x0a▹\x20','\x20avenger\x20text1\x20text2\x0a\x0a▹\x20','\x20toxic\x20text\x0a\x0a▹\x20','807726kYFfaO','\x20breakwall\x20text\x0a\x0a▹\x20','4AZnBrs','\x20glitch\x20text1\x20text2\x0a\x0a▹\x20','「\x20Text\x20Pro\x20Me\x20」\x0a\x0a▹\x20','\x20sandsummer\x20text\x0a\x0a▹\x20','\x20halloween\x20text\x0a\x0a▹\x20','\x20advanceglow\x20text\x0a\x0a▹\x20','\x20neonlight\x20text\x0a\x0a▹\x20'];_0x34eb=function(){return _0x3d6bb3;};return _0x34eb();}wibu=_0x453bdc(0x211)+prefix+_0x453bdc(0x1fc)+prefix+_0x453bdc(0x204)+prefix+_0x453bdc(0x21a)+prefix+'\x20greenneon\x20text\x0a\x0a▹\x20'+prefix+_0x453bdc(0x1ff)+prefix+_0x453bdc(0x20d)+prefix+'\x20sandwriting\x20text\x0a\x0a▹\x20'+prefix+_0x453bdc(0x1fd)+prefix+_0x453bdc(0x1f4)+prefix+_0x453bdc(0x219)+prefix+_0x453bdc(0x200)+prefix+_0x453bdc(0x207)+prefix+_0x453bdc(0x220)+prefix+_0x453bdc(0x202)+prefix+'\x20deluxesilver\x20text\x0a\x0a▹\x20'+prefix+_0x453bdc(0x20c)+prefix+_0x453bdc(0x212)+prefix+_0x453bdc(0x1fe)+prefix+_0x453bdc(0x1f5)+prefix+_0x453bdc(0x218)+prefix+_0x453bdc(0x217)+prefix+'\x20bokeh\x20text\x0a\x0a▹\x20'+prefix+_0x453bdc(0x1f7)+prefix+'\x20strawberry\x20text\x0a\x0a▹\x20'+prefix+'\x20box3d\x20text\x0a\x0a▹\x20'+prefix+'\x20roadwarning\x20text\x0a\x0a▹\x20'+prefix+_0x453bdc(0x1f9)+prefix+_0x453bdc(0x201)+prefix+_0x453bdc(0x206)+prefix+_0x453bdc(0x21d)+prefix+_0x453bdc(0x222)+prefix+_0x453bdc(0x210)+prefix+'\x20thunder\x20text\x0a\x0a▹\x20'+prefix+_0x453bdc(0x21f)+prefix+_0x453bdc(0x1fb)+prefix+_0x453bdc(0x1f6)+prefix+'\x20space\x20text1\x20text2\x0a\x0a▹\x20'+prefix+_0x453bdc(0x20e)+prefix+'\x20marvelstudio\x20text1\x20text2\x0a\x0a▹\x20'+prefix+_0x453bdc(0x21b)+prefix+'\x20wolflogo\x20text1\x20text2\x0a\x0a▹\x20'+prefix+_0x453bdc(0x213)+prefix+_0x453bdc(0x20f),sendButMessage(from,wibu,_0x453bdc(0x21e),[{'buttonId':prefix+_0x453bdc(0x209),'buttonText':{'displayText':_0x453bdc(0x21c)},'type':0x1}]);
break
case 'wibu2':
case 'nsfwanime':
var _0x21a8e5=_0x41a3;(function(_0x190898,_0x568c02){var _0x1fab52=_0x41a3,_0x47082d=_0x190898();while(!![]){try{var _0x48aa62=parseInt(_0x1fab52(0x12b))/0x1+parseInt(_0x1fab52(0x111))/0x2*(-parseInt(_0x1fab52(0x118))/0x3)+-parseInt(_0x1fab52(0x11d))/0x4+parseInt(_0x1fab52(0x127))/0x5+parseInt(_0x1fab52(0x112))/0x6*(-parseInt(_0x1fab52(0x119))/0x7)+-parseInt(_0x1fab52(0x125))/0x8*(-parseInt(_0x1fab52(0x116))/0x9)+parseInt(_0x1fab52(0x11f))/0xa;if(_0x48aa62===_0x568c02)break;else _0x47082d['push'](_0x47082d['shift']());}catch(_0x17eec7){_0x47082d['push'](_0x47082d['shift']());}}}(_0x1fab,0x229f3));function _0x41a3(_0x367f46,_0x35cfd5){var _0x1fab66=_0x1fab();return _0x41a3=function(_0x41a341,_0x2dbf61){_0x41a341=_0x41a341-0x110;var _0x2aff7b=_0x1fab66[_0x41a341];return _0x2aff7b;},_0x41a3(_0x367f46,_0x35cfd5);}function _0x1fab(){var _0x5bd4d3=['45AtpfEu','menu','97395jskyJt','56oFgfFd','\x20hentai\x0a\x0a▹\x20','\x20hololewd\x0a\x0a▹\x20','\x20hentaifemdom\x0a\x0a▹\x20','810664anhVPn','\x20animethighss\x0a\x0a▹\x20','1302150jCXvZf','\x20sideoppai\x0a\x0a▹\x20','\x20lewdanimegirls\x0a\x0a▹\x20','\x20animebellybutton\x0a\x0a▹\x20','\x20animearmpits\x0a\x0a▹\x20','\x20ecchi\x0a\x0a▹\x20','265576gAKqbE','\x20yaoi\x0a\x0a▹\x20','590755nUmyku','\x20animefeets\x0a\x0a▹\x20','daftarB','\x20ahegao\x0a\x0a▹\x20','225287xmQvwN','\x20biganimetiddies\x0a\x0a▹\x20','\x0a\x0a▹\x20','2HblCDa','197022zCnyRd','\x20trap\x0a\x0a▹\x20','only','\x20blowjob\x0a\x0a▹\x20'];_0x1fab=function(){return _0x5bd4d3;};return _0x1fab();}if(!isRegistered)return reply(ind[_0x21a8e5(0x114)][_0x21a8e5(0x129)]);wibu=_0x21a8e5(0x110)+prefix+'\x20MENU\x0a\x0a▹\x20'+prefix+'\x20chiisaihentai\x0a\x0a▹\x20'+prefix+_0x21a8e5(0x113)+prefix+_0x21a8e5(0x115)+prefix+_0x21a8e5(0x126)+prefix+_0x21a8e5(0x124)+prefix+_0x21a8e5(0x11a)+prefix+_0x21a8e5(0x12a)+prefix+_0x21a8e5(0x11b)+prefix+_0x21a8e5(0x120)+prefix+_0x21a8e5(0x128)+prefix+'\x20animebooty\x0a\x0a▹\x20'+prefix+_0x21a8e5(0x11e)+prefix+'\x20hentaiparadise\x0a\x0a▹\x20'+prefix+_0x21a8e5(0x123)+prefix+_0x21a8e5(0x11c)+prefix+_0x21a8e5(0x121)+prefix+_0x21a8e5(0x12c)+prefix+_0x21a8e5(0x122)+prefix+'\x20hentai4everyone\x0a\x0a',sendButMessage(from,wibu,'ᴄʀᴇᴀᴛᴇᴅ\x20ʙʏ\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru',[{'buttonId':prefix+_0x21a8e5(0x117),'buttonText':{'displayText':'⬡\x20BACK\x20TO\x20MENU\x20'},'type':0x1}]);
        break;
          case 'fitnah': 				
					if (!isGroup) return reply('ONLY GRUP')              
				    if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag&pesan&balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
				    var gh = body.slice(8)
				    mentioned = editz.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("|")[0];
					var target = gh.split("|")[1];
					var bot = gh.split("|")[2];
					 rimuru.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
					case 'randomimage':
case 'randomimage':
var _0x1ca24a=_0x2964;function _0x2964(_0x1618df,_0x4153f3){var _0x4ba6d4=_0x4ba6();return _0x2964=function(_0x2964f9,_0x5409bd){_0x2964f9=_0x2964f9-0x71;var _0x5e5bb4=_0x4ba6d4[_0x2964f9];return _0x5e5bb4;},_0x2964(_0x1618df,_0x4153f3);}(function(_0x56f24b,_0x3a3820){var _0x5c37fc=_0x2964,_0x1b0330=_0x56f24b();while(!![]){try{var _0x5f0517=-parseInt(_0x5c37fc(0x88))/0x1*(parseInt(_0x5c37fc(0x87))/0x2)+-parseInt(_0x5c37fc(0x79))/0x3+-parseInt(_0x5c37fc(0x82))/0x4+parseInt(_0x5c37fc(0x71))/0x5*(-parseInt(_0x5c37fc(0x99))/0x6)+parseInt(_0x5c37fc(0x85))/0x7+parseInt(_0x5c37fc(0x7c))/0x8*(-parseInt(_0x5c37fc(0x7b))/0x9)+parseInt(_0x5c37fc(0x9b))/0xa;if(_0x5f0517===_0x3a3820)break;else _0x1b0330['push'](_0x1b0330['shift']());}catch(_0x4acee3){_0x1b0330['push'](_0x1b0330['shift']());}}}(_0x4ba6,0xeb11b),wibu=_0x1ca24a(0x98)+prefix+_0x1ca24a(0x89)+prefix+'\x20ero\x0a\x0a▹\x20'+prefix+_0x1ca24a(0x81)+prefix+_0x1ca24a(0x97)+prefix+_0x1ca24a(0x77)+prefix+'\x20yuri\x0a\x0a▹\x20'+prefix+_0x1ca24a(0x8e)+prefix+'\x20lewd\x0a\x0a▹\x20'+prefix+_0x1ca24a(0x7f)+prefix+'\x20eron\x0a\x0a▹\x20'+prefix+_0x1ca24a(0x7a)+prefix+_0x1ca24a(0x9a)+prefix+_0x1ca24a(0x83)+prefix+_0x1ca24a(0x94)+prefix+'\x20holo\x0a\x0a▹\x20'+prefix+'\x20tits\x0a\x0a▹\x20'+prefix+_0x1ca24a(0x8b)+prefix+_0x1ca24a(0x8a)+prefix+_0x1ca24a(0x8d)+prefix+_0x1ca24a(0x8f)+prefix+'\x20baka\x0a\x0a▹\x20'+prefix+'\x20solog\x0a\x0a▹\x20'+prefix+_0x1ca24a(0x73)+prefix+'\x20lewdk\x0a\x0a▹\x20'+prefix+_0x1ca24a(0x78)+prefix+'\x20pussy\x0a\x0a▹\x20'+prefix+_0x1ca24a(0x7e)+prefix+_0x1ca24a(0x86)+prefix+_0x1ca24a(0x7d)+prefix+'\x20eroyuri\x0a\x0a▹\x20'+prefix+'\x20cum_jpg\x0a\x0a▹\x20'+prefix+'\x20blowjob\x0a\x0a▹\x20'+prefix+_0x1ca24a(0x75)+prefix+_0x1ca24a(0x8c)+prefix+'\x20classic\x0a\x0a▹\x20'+prefix+_0x1ca24a(0x74)+prefix+_0x1ca24a(0x92)+prefix+_0x1ca24a(0x80)+prefix+'\x20lewdkemo\x0a\x0a▹\x20'+prefix+_0x1ca24a(0x93)+prefix+_0x1ca24a(0x95)+prefix+'\x20kemonomimi\x0a\x0a▹\x20'+prefix+'\x20nsfw_avatar\x0a\x0a▹\x20'+prefix+_0x1ca24a(0x91)+prefix+_0x1ca24a(0x90)+prefix+_0x1ca24a(0x84),sendButMessage(from,wibu,_0x1ca24a(0x72),[{'buttonId':prefix+_0x1ca24a(0x76),'buttonText':{'displayText':_0x1ca24a(0x96)},'type':0x1}]));function _0x4ba6(){var _0x45b0a5=['\x20cuddle\x0a\x0a▹\x20','3970bBuMKA','842karqaZ','\x20bj\x0a\x0a▹\x20','\x20kiss\x0a\x0a▹\x20','\x20kuni\x0a\x0a▹\x20','\x20holoero\x0a\x0a▹\x20','\x20erok\x0a\x0a▹\x20','\x20trap\x0a\x0a▹\x20','\x20smug\x0a\x0a▹\x20','\x20nsfw_neko_gif\x0a\x0a▹\x20','\x20ngif\x0a\x0a▹\x20','\x20fox_girl\x0a\x0a▹\x20','\x20wallpaper\x0a\x0a▹\x20','\x20anal\x0a\x0a▹\x20','\x20pussy_jpg\x0a\x0a▹\x20','⬡\x20BACK\x20TO\x20MENU\x20','\x20cum\x0a\x0a▹\x20','\x0a\x0a▹\x20','6wHsycG','\x20gasm\x0a\x0a▹\x20','47864200JqJiYX','978750uevZJX','ᴄʀᴇᴀᴛᴇᴅ\x20ʙʏ\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru','\x20feetg\x0a\x0a▹\x20','\x20erokemo\x0a\x0a▹\x20','\x20erofeet\x0a\x0a▹\x20','menu','\x20feet\x0a\x0a▹\x20','\x20waifu\x0a\x0a▹\x20','4197708aUlqku','\x20solo\x0a\x0a▹\x20','3645DhNUrJ','6584DBrfpL','\x20hentai\x0a\x0a▹\x20','\x20femdom\x0a\x0a▹\x20','\x20feed\x0a\x0a▹\x20','\x20futanari\x0a\x0a▹\x20','\x20ppcp\x0a\x0a▹\x20','1128268UMllkC','\x20poke\x0a\x0a▹\x20','\x20random_hentai_gif\x0a\x0a','407127HGDuBm'];_0x4ba6=function(){return _0x45b0a5;};return _0x4ba6();}
        break;
        case 'photoxy':
case 'photooky':
function _0x5b7e(_0x3d2977,_0x8bec5b){var _0xb7f628=_0xb7f6();return _0x5b7e=function(_0x5b7e18,_0x2ed05e){_0x5b7e18=_0x5b7e18-0x80;var _0xddab0e=_0xb7f628[_0x5b7e18];return _0xddab0e;},_0x5b7e(_0x3d2977,_0x8bec5b);}function _0xb7f6(){var _0x830ede=['\x20pubg\x20text1\x20text2\x0a\x0a','\x20glowingneon\x20text\x0a\x0a▹\x20','\x20wolfmetal\x20text\x0a\x0a▹\x20','\x20golderrose\x20text\x0a\x0a▹\x20','\x20nature3d\x20text\x0a\x0a▹\x20','3025gBojGY','52055PdtAAA','\x20carvedwood\x20text\x0a\x0a▹\x20','\x20summer3d\x20text\x0a\x0a▹\x20','\x20battlefield4\x20text1\x20text2\x0a\x0a▹\x20','\x20letterleaves\x20text\x0a\x0a▹\x20','\x20flamming\x20text\x0a\x0a▹\x20','68216DjmOFz','300rHRSPe','\x20shadow\x20text\x0a\x0a▹\x20','12694OCfxMu','\x20woodheart\x20text\x0a\x0a▹\x20','\x20burnpaper\x20text\x0a\x0a▹\x20','\x20fallleaves\x20text\x0a\x0a▹\x20','22373KqrEfu','\x20romance\x20text\x0a\x0a▹\x20','\x20smoke\x20text\x0a\x0a▹\x20','\x20undergrass\x20text\x0a\x0a▹\x20','\x20arcade8bit\x20text1\x20text2\x0a\x0a▹\x20','2850taZkpT','\x20love\x20text\x0a\x0a▹\x20','\x20cup\x20text\x0a\x0a▹\x20','328omJTuZ','\x20summernature\x20text\x0a\x0a▹\x20','138ABRhMu','18246lVHdbG','468HWENoj','2292COrWrX','3381uBOgeR','daftarB','\x20coffe\x20text\x0a\x0a▹\x20','\x20cup1\x20text\x0a\x0a▹\x20','\x20underwater\x20text\x0a\x0a▹\x20','⬡\x20BACK\x20TO\x20MENU\x20','only'];_0xb7f6=function(){return _0x830ede;};return _0xb7f6();}var _0x290634=_0x5b7e;(function(_0xa98d79,_0x3c2dd3){var _0x226189=_0x5b7e,_0x1d582e=_0xa98d79();while(!![]){try{var _0x56c090=parseInt(_0x226189(0x85))/0x1*(parseInt(_0x226189(0x8d))/0x2)+parseInt(_0x226189(0x9e))/0x3*(parseInt(_0x226189(0x9b))/0x4)+parseInt(_0x226189(0x86))/0x5*(-parseInt(_0x226189(0x9d))/0x6)+parseInt(_0x226189(0xa1))/0x7+parseInt(_0x226189(0x8c))/0x8*(-parseInt(_0x226189(0x9f))/0x9)+-parseInt(_0x226189(0x98))/0xa*(-parseInt(_0x226189(0x8f))/0xb)+-parseInt(_0x226189(0xa0))/0xc*(parseInt(_0x226189(0x93))/0xd);if(_0x56c090===_0x3c2dd3)break;else _0x1d582e['push'](_0x1d582e['shift']());}catch(_0x6eff7a){_0x1d582e['push'](_0x1d582e['shift']());}}}(_0xb7f6,0x41fc7));if(!isRegistered)return reply(ind[_0x290634(0xa7)][_0x290634(0xa2)]);wibu='\x0a\x0a▹\x20'+prefix+_0x290634(0x8e)+prefix+_0x290634(0x9a)+prefix+_0x290634(0xa4)+prefix+_0x290634(0x94)+prefix+_0x290634(0x95)+prefix+_0x290634(0x91)+prefix+'\x20lovemessage\x20text\x0a\x0a▹\x20'+prefix+_0x290634(0x96)+prefix+_0x290634(0x99)+prefix+_0x290634(0xa3)+prefix+_0x290634(0x90)+prefix+'\x20woodenboard\x20text\x0a\x0a▹\x20'+prefix+_0x290634(0x88)+prefix+_0x290634(0x82)+prefix+_0x290634(0x84)+prefix+_0x290634(0xa5)+prefix+_0x290634(0x83)+prefix+_0x290634(0x9c)+prefix+_0x290634(0x8a)+prefix+_0x290634(0x81)+prefix+_0x290634(0x92)+prefix+_0x290634(0x8b)+prefix+'\x20harrypotter\x20text\x0a\x0a▹\x20'+prefix+_0x290634(0x87)+prefix+'\x20tiktok\x20text1\x20text2\x0a\x0a▹\x20'+prefix+_0x290634(0x97)+prefix+_0x290634(0x89)+prefix+_0x290634(0x80),sendButMessage(from,wibu,'ᴄʀᴇᴀᴛᴇᴅ\x20ʙʏ\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru',[{'buttonId':prefix+'menu','buttonText':{'displayText':_0x290634(0xa6)},'type':0x1}]);
        break;
        case 'simih':
					
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('Mode simi sudah aktif')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukses mengaktifkan mode simi di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode simi di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
        case 'simi':
					function _0x5310(_0x413c87,_0x17d3e8){var _0xcf53a6=_0xcf53();return _0x5310=function(_0x5310dc,_0x1339a8){_0x5310dc=_0x5310dc-0xff;var _0x401143=_0xcf53a6[_0x5310dc];return _0x401143;},_0x5310(_0x413c87,_0x17d3e8);}var _0x5bac22=_0x5310;(function(_0x5a1d2f,_0x335ec5){var _0x3263a0=_0x5310,_0x2b8ea5=_0x5a1d2f();while(!![]){try{var _0x1b43f2=parseInt(_0x3263a0(0x104))/0x1+parseInt(_0x3263a0(0x103))/0x2*(parseInt(_0x3263a0(0xff))/0x3)+parseInt(_0x3263a0(0x101))/0x4+-parseInt(_0x3263a0(0x106))/0x5*(parseInt(_0x3263a0(0x100))/0x6)+parseInt(_0x3263a0(0x10a))/0x7+parseInt(_0x3263a0(0x107))/0x8+-parseInt(_0x3263a0(0x108))/0x9;if(_0x1b43f2===_0x335ec5)break;else _0x2b8ea5['push'](_0x2b8ea5['shift']());}catch(_0x26a22b){_0x2b8ea5['push'](_0x2b8ea5['shift']());}}}(_0xcf53,0xc4207));function _0xcf53(){var _0x9e3a2c=['slice','2LZnxTe','858899hRjfeX','Textnya\x20mana\x20um?','75340LWkHJi','7208416emNgEh','13251051baUjLz','length','1563079VVLFUH','2020350JxwxsD','390Xkmplk','2393584bEixoK'];_0xcf53=function(){return _0x9e3a2c;};return _0xcf53();}if(args[_0x5bac22(0x109)]<0x1)return reply(_0x5bac22(0x105));teks=body[_0x5bac22(0x102)](0x5),anu=await simih(teks),reply(anu);
					break 
					case 'darkjoke': 
				
				var _0x3c5d81=_0x15d2;(function(_0x5e189b,_0x208a9f){var _0x59286d=_0x15d2,_0x41f02e=_0x5e189b();while(!![]){try{var _0x2969c9=-parseInt(_0x59286d(0x1b9))/0x1*(parseInt(_0x59286d(0x1c2))/0x2)+parseInt(_0x59286d(0x1bf))/0x3+-parseInt(_0x59286d(0x1c8))/0x4*(-parseInt(_0x59286d(0x1c4))/0x5)+-parseInt(_0x59286d(0x1bd))/0x6*(-parseInt(_0x59286d(0x1c7))/0x7)+parseInt(_0x59286d(0x1c1))/0x8+parseInt(_0x59286d(0x1c6))/0x9*(parseInt(_0x59286d(0x1be))/0xa)+-parseInt(_0x59286d(0x1bc))/0xb;if(_0x2969c9===_0x208a9f)break;else _0x41f02e['push'](_0x41f02e['shift']());}catch(_0x2d5d46){_0x41f02e['push'](_0x41f02e['shift']());}}}(_0x4ac3,0x436a0),buff=await getBuffer(_0x3c5d81(0x1b6),{'method':_0x3c5d81(0x1b7)}),buttons=[{'buttonId':prefix+_0x3c5d81(0x1b8),'buttonText':{'displayText':_0x3c5d81(0x1ba)},'type':0x1}],imageMsg=(await rimuru[_0x3c5d81(0x1c0)](buff,_0x3c5d81(0x1c5),{'thumbnail':buff}))[_0x3c5d81(0x1c5)],buttonsMessage={'footerText':'ғᴏʟʟᴏs\x20sᴏsᴍᴇᴅ\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru/࿐','imageMessage':imageMsg,'contentText':_0x3c5d81(0x1c9),'buttons':buttons,'headerType':0x4},prep=await rimuru[_0x3c5d81(0x1bb)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru[_0x3c5d81(0x1c3)](prep));function _0x15d2(_0x211c56,_0x204f99){var _0x4ac372=_0x4ac3();return _0x15d2=function(_0x15d21a,_0x4c5bd0){_0x15d21a=_0x15d21a-0x1b6;var _0x18045a=_0x4ac372[_0x15d21a];return _0x18045a;},_0x15d2(_0x211c56,_0x204f99);}function _0x4ac3(){var _0x1c3dc6=['101EXklvQ','\x20©WhatsApp\x20bot','prepareMessageFromContent','7564480gvcuXO','852uqYCxO','120TPEEBe','1516350kUapCD','prepareMessageMedia','90336rugXFw','2262wiQfPf','relayWAMessage','5zoZufY','imageMessage','281619kZZvFu','8603acXdkU','45148pvTGut','©WhatsApp\x20bot','http://lolhuman.herokuapp.com/api/meme/darkjoke?apikey=PunyaIkyAds','get','infoig'];_0x4ac3=function(){return _0x1c3dc6;};return _0x4ac3();}
break
        case 'ephoto':
case 'ephotomenu':
var _0x10e09d=_0x5481;(function(_0x6dd394,_0x53ee81){var _0x32f54d=_0x5481,_0x378252=_0x6dd394();while(!![]){try{var _0x49b43b=parseInt(_0x32f54d(0x96))/0x1+-parseInt(_0x32f54d(0x94))/0x2*(parseInt(_0x32f54d(0x92))/0x3)+parseInt(_0x32f54d(0xa1))/0x4*(-parseInt(_0x32f54d(0x9d))/0x5)+-parseInt(_0x32f54d(0xaa))/0x6+parseInt(_0x32f54d(0x9b))/0x7+-parseInt(_0x32f54d(0xab))/0x8+-parseInt(_0x32f54d(0x98))/0x9*(-parseInt(_0x32f54d(0x95))/0xa);if(_0x49b43b===_0x53ee81)break;else _0x378252['push'](_0x378252['shift']());}catch(_0x2ff486){_0x378252['push'](_0x378252['shift']());}}}(_0x4292,0x5462f));if(!isRegistered)return reply(ind['only'][_0x10e09d(0x9f)]);wibu=_0x10e09d(0x9e)+prefix+_0x10e09d(0x91)+prefix+'\x20multicolor3d\x20text\x0a\x0a▹\x20'+prefix+_0x10e09d(0x90)+prefix+_0x10e09d(0xa8)+prefix+_0x10e09d(0xa9)+prefix+_0x10e09d(0xa7)+prefix+_0x10e09d(0xac)+prefix+'\x20puppycute\x20text\x0a\x0a▹\x20'+prefix+_0x10e09d(0xa4)+prefix+_0x10e09d(0xad)+prefix+'\x20birthdaycake\x20text\x0a\x0a▹\x20'+prefix+_0x10e09d(0xae)+prefix+'\x20hologram3d\x20text\x0a\x0a▹\x20'+prefix+'\x20greenneon\x20text\x0a\x0a▹\x20'+prefix+'\x20glossychrome\x20text\x0a\x0a▹\x20'+prefix+_0x10e09d(0xa2)+prefix+_0x10e09d(0xa5)+prefix+_0x10e09d(0x9a)+prefix+_0x10e09d(0x93)+prefix+'\x20textcake\x20text\x0a\x0a▹\x20'+prefix+'\x20starsnight\x20text\x0a\x0a▹\x20'+prefix+'\x20wooden3d\x20text\x0a\x0a▹\x20'+prefix+_0x10e09d(0x97)+prefix+_0x10e09d(0x9c)+prefix+'\x20galaxybat\x20text\x0a\x0a▹\x20'+prefix+'\x20snow3d\x20text\x0a\x0a▹\x20'+prefix+_0x10e09d(0x8f)+prefix+_0x10e09d(0x99)+prefix+_0x10e09d(0xa0)+prefix+'\x20freefire\x20text\x20',sendButMessage(from,wibu,_0x10e09d(0xa3),[{'buttonId':prefix+'menu','buttonText':{'displayText':_0x10e09d(0xa6)},'type':0x1}]);function _0x5481(_0x2b23ad,_0x4c97d4){var _0x429238=_0x4292();return _0x5481=function(_0x5481ee,_0x50f3c3){_0x5481ee=_0x5481ee-0x8f;var _0x368fec=_0x429238[_0x5481ee];return _0x368fec;},_0x5481(_0x2b23ad,_0x4c97d4);}function _0x4292(){var _0x423c31=['\x20galaxystyle\x20text\x0a\x0a▹\x20','\x20birthdayday\x20text\x0a\x0a▹\x20','\x20watercolor\x20text\x0a\x0a▹\x20','\x20wetglass\x20text\x0a\x0a▹\x20','3zkUKIq','\x20glittergold\x20text\x0a\x0a▹\x20','1158758KwdeCv','2563030ToMZoP','311288WzPgMj','\x20textbyname\x20text\x0a\x0a▹\x20','45GOMpGG','\x20goldplaybutton\x20text\x0a\x0a▹\x20','\x20noeltext\x20text\x0a\x0a▹\x20','2069473fQGsEb','\x20writegalacy\x20text\x0a\x0a▹\x20','643345qNVxGo','\x0a\x0a「\x20Ephoto\x20360\x20」\x0a\x0a▹\x20','daftarB','\x20silverplaybutton\x20text\x0a\x0a▹\x20','4dZNKId','\x20greenbush\x20text\x0a\x0a▹\x20','ᴄʀᴇᴀᴛᴇᴅ\x20ʙʏ\x20ʀɪᴍᴜʀᴜhttps://instabio.cc/Rimuru/࿐','\x20royaltext\x20text\x0a\x0a▹\x20','\x20metallogo\x20text\x0a\x0a▹\x20','⬡\x20BACK\x20TO\x20MENU\x20','\x20lighttext\x20text\x0a\x0a▹\x20','\x20luxurygold\x20text\x0a\x0a▹\x20','\x20galaxywallpaper\x20text\x0a\x0a▹\x20','3661344VQLKGD','1796184zmyCFl','\x20beautifulflower\x20text\x0a\x0a▹\x20','\x20heartshaped\x20text\x0a\x0a▹\x20'];_0x4292=function(){return _0x423c31;};return _0x4292();}
        break;
            case 'randomvideo':
if (!isRegistered) return reply(ind.only.daftarB)
var _0x463490=_0x5df2;function _0x5df2(_0x8ef702,_0xd76bdb){var _0x3c33f3=_0x3c33();return _0x5df2=function(_0x5df232,_0x4efeeb){_0x5df232=_0x5df232-0xf6;var _0x5478b0=_0x3c33f3[_0x5df232];return _0x5478b0;},_0x5df2(_0x8ef702,_0xd76bdb);}function _0x3c33(){var _0x24184e=['⬡\x20BACK\x20TO\x20MENU\x20','\x20lolivid\x0a\x0a▹\x20','165518XyvuLY','\x20astetick\x0a\x0a▹\x20','\x0a\x0a「\x20Random\x20Video\x20」\x0a\x0a▹\x20','300jQnZEW','3655308clemux','\x20asupan\x0a\x0a▹\x20','9028256GnEkPH','ᴄʀᴇᴀᴛᴇᴅ\x20ʙʏ\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru','25468452uJFthq','105535PRkWXF','768339CEgxXh','3BJbecR','menu','\x20storyanime\x0a\x0a▹\x20','3793349OjtLgK'];_0x3c33=function(){return _0x24184e;};return _0x3c33();}(function(_0x7025d5,_0x2c68fb){var _0x10f773=_0x5df2,_0x4e6909=_0x7025d5();while(!![]){try{var _0x81533b=-parseInt(_0x10f773(0xfe))/0x1+parseInt(_0x10f773(0x105))/0x2*(-parseInt(_0x10f773(0xff))/0x3)+-parseInt(_0x10f773(0xf8))/0x4+-parseInt(_0x10f773(0xfd))/0x5*(parseInt(_0x10f773(0xf7))/0x6)+-parseInt(_0x10f773(0x102))/0x7+parseInt(_0x10f773(0xfa))/0x8+parseInt(_0x10f773(0xfc))/0x9;if(_0x81533b===_0x2c68fb)break;else _0x4e6909['push'](_0x4e6909['shift']());}catch(_0x47d8b8){_0x4e6909['push'](_0x4e6909['shift']());}}}(_0x3c33,0x918d2),wibu=_0x463490(0xf6)+prefix+_0x463490(0x104)+prefix+_0x463490(0xf9)+prefix+_0x463490(0x101)+prefix+_0x463490(0x106)+prefix+'\x20videoanime\x20',sendButMessage(from,wibu,_0x463490(0xfb),[{'buttonId':prefix+_0x463490(0x100),'buttonText':{'displayText':_0x463490(0x103)},'type':0x1}]));
        break;
        case 'wasted':
					var _0x529c95=_0x450d;function _0x3f77(){var _0x29b4b6=['quotedM','11KFYBZy','7374906DbjrDU','9EtSopN','12747990jIHkWv','39d895963468b814fad0514bd28787e2','656243LjTPzN','1641203FNfrFA','3864908kTzARl','message','104oAeJnX','14445WRREPj','videoMessage','success','length','downloadAndSaveMediaMessage','https://leyscoders-api.herokuapp.com/api/img/wasted?url=','contextInfo','516zinjkM','stringify','406048RGtVie','wasted','sendMessage'];_0x3f77=function(){return _0x29b4b6;};return _0x3f77();}function _0x450d(_0x37c8f7,_0x1f5ff6){var _0x3f7745=_0x3f77();return _0x450d=function(_0x450d2a,_0x39d5ee){_0x450d2a=_0x450d2a-0xf9;var _0x19fdb8=_0x3f7745[_0x450d2a];return _0x19fdb8;},_0x450d(_0x37c8f7,_0x1f5ff6);}(function(_0x263fc1,_0x4adc12){var _0x7c410b=_0x450d,_0x3f4673=_0x263fc1();while(!![]){try{var _0x2a8907=-parseInt(_0x7c410b(0x10c))/0x1+parseInt(_0x7c410b(0x102))/0x2*(parseInt(_0x7c410b(0x108))/0x3)+parseInt(_0x7c410b(0x10d))/0x4+-parseInt(_0x7c410b(0xf9))/0x5*(-parseInt(_0x7c410b(0x100))/0x6)+parseInt(_0x7c410b(0x10b))/0x7*(parseInt(_0x7c410b(0x10f))/0x8)+parseInt(_0x7c410b(0x107))/0x9+-parseInt(_0x7c410b(0x109))/0xa*(parseInt(_0x7c410b(0x106))/0xb);if(_0x2a8907===_0x4adc12)break;else _0x3f4673['push'](_0x3f4673['shift']());}catch(_0x22e58e){_0x3f4673['push'](_0x3f4673['shift']());}}}(_0x3f77,0xe6f02));var imgbb=require('imgbb-uploader');(isMedia&&!editz['message'][_0x529c95(0xfa)]||isQuotedImage)&&args[_0x529c95(0xfc)]==0x0?(ger=isQuotedImage?JSON['parse'](JSON[_0x529c95(0x101)](rimuru)['replace'](_0x529c95(0x105),'m'))[_0x529c95(0x10e)]['extendedTextMessage'][_0x529c95(0xff)]:rimuru,owgi=await rimuru[_0x529c95(0xfd)](ger),data=await imgbb(_0x529c95(0x10a),owgi),buff=await getBuffer(_0x529c95(0xfe)+data['display_url']+'&apikey='),rimuru[_0x529c95(0x104)](from,buff,image,{'quoted':freply,'caption':mess[_0x529c95(0xfb)]})):reply('Kirim\x20foto\x20atau\x20reply\x20foto\x20yang\x20sudah\x20dikirim,\x20dengan\x20caption\x20'+prefix+_0x529c95(0x103));
					break
					case 'tahta':
					function _0x15af(_0x443e4a,_0x5245e6){var _0x278c24=_0x278c();return _0x15af=function(_0x15afdb,_0x40fbf9){_0x15afdb=_0x15afdb-0xe1;var _0x552f50=_0x278c24[_0x15afdb];return _0x552f50;},_0x15af(_0x443e4a,_0x5245e6);}var _0x3eaf3e=_0x15af;(function(_0x143d99,_0x29f53e){var _0x339026=_0x15af,_0xe8f1bd=_0x143d99();while(!![]){try{var _0x15eee0=-parseInt(_0x339026(0xef))/0x1*(parseInt(_0x339026(0xea))/0x2)+-parseInt(_0x339026(0xe8))/0x3*(-parseInt(_0x339026(0xe4))/0x4)+parseInt(_0x339026(0xe7))/0x5+-parseInt(_0x339026(0xf0))/0x6+parseInt(_0x339026(0xe6))/0x7*(parseInt(_0x339026(0xe9))/0x8)+-parseInt(_0x339026(0xe1))/0x9*(-parseInt(_0x339026(0xe5))/0xa)+-parseInt(_0x339026(0xec))/0xb;if(_0x15eee0===_0x29f53e)break;else _0xe8f1bd['push'](_0xe8f1bd['shift']());}catch(_0x4a90fb){_0xe8f1bd['push'](_0xe8f1bd['shift']());}}}(_0x278c,0x5128c),buff=await getBuffer(_0x3eaf3e(0xeb)+q+_0x3eaf3e(0xed)),buttons=[{'buttonId':prefix+_0x3eaf3e(0xe2),'buttonText':{'displayText':'\x20©WhatsApp\x20bot'},'type':0x1}],imageMsg=(await rimuru[_0x3eaf3e(0xee)](buff,'imageMessage',{'thumbnail':buff}))['imageMessage'],buttonsMessage={'footerText':'ᴄʀᴇᴀᴛᴇᴅ\x20ʙʏ\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru','imageMessage':imageMsg,'contentText':'©WhatsApp\x20bot','buttons':buttons,'headerType':0x4},prep=await rimuru[_0x3eaf3e(0xe3)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru['relayWAMessage'](prep));function _0x278c(){var _0x3acecc=['61400qIMJtL','4610lYxFEY','https://leyscoders-api.herokuapp.com/api/harta-tahta?text=','1727913CYyaKF','&apikey=IkyOgiwara','prepareMessageMedia','179JShaSU','716352qEGtkw','99SKYHvH','infoig','prepareMessageFromContent','50276HvrOsN','285970fXmNAV','175AtNMeB','2386745fCEWTP','9SWYRlu'];_0x278c=function(){return _0x3acecc;};return _0x278c();}
              break
              
              case 'quotesmaker':
					buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/quote-maker?text=${q}&apikey=Rimuru`)
					rimuru.sendMessage(from, buff, image, {thumbnail: Buffer.alloc(0), quoted: freply})
				case 'tinyurl':
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/tinyurl?url=${q}&apikey=IkyOgiwara`)
					rimuru.sendMessage(from, `${anu.result}`, text, {quoted: freply})
					break
				case 'cuttly':
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cuttly?url=${q}&apikey=IkyOgiwara`)
					rimuru.sendMessage(from, `• Hasil: ${anu.result.hasil}\n• Dibuat Pada: ${anu.result.create_at}`, text, {quoted: freply})
					break
				case 'shorturl':
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/shrturl?url=${q}&apikey=IkyOgiwara`)
					rimuru.sendMessage(from, `${anu.result}`, text, {quoted: freply})
					break
			    case 'imagemani':
case 'imageefek':
function _0x40f9(){var _0x1b982a=['\x0a\x0a\x20*IMAGE\x20MANIPULATION*\x0a\x0a\x20\x0a\x0a▹\x20','30vifJbQ','4389183xukAZR','2778pDBVpB','2495DsHsyL','\x20meme\x0a\x0a▹\x20','ᴄʀᴇᴀᴛᴇᴅ\x20ʙʏ\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru','\x20affect\x0a\x0a▹\x20','3lbHfxP','1645cyfrYw','\x20trash\x0a\x0a▹\x20','1127312IGMSNa','\x20blur\x0a\x0a▹\x20','daftarB','⬡\x20BACK\x20TO\x20MENU\x20','2051552iiQNRf','\x20tinyurl\x0a\x0a▹\x20','\x20hitler\x0a\x0a▹\x20','1150308AQjaFf','\x20darkjoke\x0a\x0a▹\x20','\x20wanted\x0a\x0a▹\x20','324900YbeSJz','\x20joke\x0a\x0a▹\x20'];_0x40f9=function(){return _0x1b982a;};return _0x40f9();}var _0x2d3035=_0x288a;(function(_0x170766,_0x226a8d){var _0x5a6296=_0x288a,_0xf753ec=_0x170766();while(!![]){try{var _0x10a92=-parseInt(_0x5a6296(0x83))/0x1+-parseInt(_0x5a6296(0x79))/0x2+parseInt(_0x5a6296(0x76))/0x3*(-parseInt(_0x5a6296(0x80))/0x4)+parseInt(_0x5a6296(0x89))/0x5*(-parseInt(_0x5a6296(0x88))/0x6)+parseInt(_0x5a6296(0x77))/0x7+parseInt(_0x5a6296(0x7d))/0x8+parseInt(_0x5a6296(0x87))/0x9*(parseInt(_0x5a6296(0x86))/0xa);if(_0x10a92===_0x226a8d)break;else _0xf753ec['push'](_0xf753ec['shift']());}catch(_0x300560){_0xf753ec['push'](_0xf753ec['shift']());}}}(_0x40f9,0x4c4fa));function _0x288a(_0x4c73b2,_0x1e028e){var _0x40f946=_0x40f9();return _0x288a=function(_0x288ae4,_0x563e94){_0x288ae4=_0x288ae4-0x76;var _0x95bcac=_0x40f946[_0x288ae4];return _0x95bcac;},_0x288a(_0x4c73b2,_0x1e028e);}if(!isRegistered)return reply(ind['only'][_0x2d3035(0x7b)]);wibu=_0x2d3035(0x85)+prefix+_0x2d3035(0x81)+prefix+_0x2d3035(0x8a)+prefix+_0x2d3035(0x84)+prefix+'\x20wasted\x0a\x0a▹\x20'+prefix+_0x2d3035(0x7f)+prefix+_0x2d3035(0x82)+prefix+'\x20greyscale\x0a\x0a▹\x20'+prefix+_0x2d3035(0x78)+prefix+'\x20circle\x0a\x0a▹\x20'+prefix+_0x2d3035(0x7a)+prefix+_0x2d3035(0x7e)+prefix+'\x20cuttly\x0a\x0a▹\x20'+prefix+_0x2d3035(0x8c)+prefix+'\x20picture\x0a\x0a',sendButMessage(from,wibu,_0x2d3035(0x8b),[{'buttonId':prefix+'menu','buttonText':{'displayText':_0x2d3035(0x7c)},'type':0x1}]);
        break;
        
         case '18+':
        case 'porno':
case '18':
function _0x2ea5(_0x940b0c,_0x4f2ad8){var _0x375942=_0x3759();return _0x2ea5=function(_0x2ea515,_0x3ff78e){_0x2ea515=_0x2ea515-0xd5;var _0x1b0b4b=_0x375942[_0x2ea515];return _0x1b0b4b;},_0x2ea5(_0x940b0c,_0x4f2ad8);}var _0x57fa33=_0x2ea5;function _0x3759(){var _0x320886=['9184310HVfUrc','5644evrWIw','4zRmdJE','pornmenu','2010592RmzuJJ','9MnSNxj','2161235rfVMvg','⬡\x20LANJUTAN\x20','327UBMhGk','479163ADvTKr','ᴄʀᴇᴀᴛᴇᴅ\x20ʙʏ\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru','2314782LmyPuI','1077874lPpnFt'];_0x3759=function(){return _0x320886;};return _0x3759();}(function(_0x294003,_0x14f5c3){var _0x21ad46=_0x2ea5,_0xe1325e=_0x294003();while(!![]){try{var _0x5a4ad3=parseInt(_0x21ad46(0xe1))/0x1+-parseInt(_0x21ad46(0xd9))/0x2*(-parseInt(_0x21ad46(0xe0))/0x3)+parseInt(_0x21ad46(0xda))/0x4*(parseInt(_0x21ad46(0xde))/0x5)+parseInt(_0x21ad46(0xd6))/0x6+-parseInt(_0x21ad46(0xd7))/0x7+-parseInt(_0x21ad46(0xdc))/0x8+-parseInt(_0x21ad46(0xdd))/0x9*(parseInt(_0x21ad46(0xd8))/0xa);if(_0x5a4ad3===_0x14f5c3)break;else _0xe1325e['push'](_0xe1325e['shift']());}catch(_0x3dddb8){_0xe1325e['push'](_0xe1325e['shift']());}}}(_0x3759,0x449ec),wibu='\x0a\x0aMENU\x20INI\x20BERISI\x20FITUR\x2018+\x0a\x0aSEBELUM\x20MELANJUTKAN\x20PASTIKAN\x20ANDA\x20BERUMUR\x2018+\x0a\x0a',sendButMessage(from,wibu,_0x57fa33(0xd5),[{'buttonId':prefix+_0x57fa33(0xdb),'buttonText':{'displayText':_0x57fa33(0xdf)},'type':0x1}]));
        break;
    // Random Text //
  ///// LOLHUMAN API
  case 'spam':
    if (!editz.key.fromMe) return reply('FITUR INI KHUSUS OWNER BOT')
					if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				argsi = arg.split("|")
				if (!argsi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argsi[1]) >= 1000000) return reply('Kebanyakan!')
				if (isNaN(argsi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argsi[1]; i++){
					rimuru.sendMessage(from, argsi[0], MessageType.text)
				}
				break
		case 'picture':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !editz.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(rimuru).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru
						owgi = await rimuru.downloadAndSaveMediaMessage(ger)
						data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/picture?url=${data.display_url}&apikey=IkyOgiwara`)
						rimuru.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}picture`)
					}
					break
					case 'affect':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !rimuru.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(editz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru
						owgi = await rimuru.downloadAndSaveMediaMessage(ger)
						data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/affect?url=${data.display_url}&apikey=IkyOgiwara`)
						rimuru.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}affect`)
					}
					break
			case 'invert':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !editz.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(rimuru).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru
						owgi = await rimuru.downloadAndSaveMediaMessage(ger)
						data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/invert?url=${data.display_url}&apikey=IkyOgiwara`)
						rimuru.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}invert`)
					}
					break
			 case 'firework':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !rimuru.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(editz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru
						owgi = await rimuru.downloadAndSaveMediaMessage(ger)
						data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
						anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/img/firework?url=${data.display_url}&apikey=IkyOgiwara`)
						buff = await getBuffer(anu.result.url)
						rimuru.sendMessage(from, buff, video, {quoted: freply, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}firework`)
					}
					break
				case 'sepia':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !rimuru.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(editz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru
						owgi = await rimuru.downloadAndSaveMediaMessage(ger)
						data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/sepia?url=${data.display_url}&apikey=IkyOgiwara`)
						rimuru.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}sepia`)
					}
					break
			case 'blur':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !rimuru.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(editz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru
						owgi = await rimuru.downloadAndSaveMediaMessage(ger)
						data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/blur?url=${data.display_url}&level=20&apikey=IkyOgiwara`)
						rimuru.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}blur`)
					}
					break
				case 'circle':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !rimuru.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(editz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru
						owgi = await rimuru.downloadAndSaveMediaMessage(ger)
						data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/circle?url=${data.display_url}&apikey=IkyOgiwara`)
						rimuru.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}circle`)
					}
					break
				case 'trash':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !rimuru.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(editz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru
						owgi = await rimuru.downloadAndSaveMediaMessage(ger)
						data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/trash?url=${data.display_url}&apikey=IkyOgiwara`)
						rimuru.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}trash`)
					}
					break
					case 'wiki':
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/wiki?kata=${q}&apikey=IkyOgiwara`)
					rimuru.sendMessage(from, `「 RESULT FOUND 」\n• Hasil Pencarian Dari: ${anu.result.from}\n• Hasil: ${anu.hasil}`, text, {quoted: freply})
					break
  case 'wanted':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !rimuru.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(editz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru
						owgi = await rimuru.downloadAndSaveMediaMessage(ger)
						data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/wanted?url=${data.display_url}&apikey=IkyOgiwara`)
						rimuru.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}wanted`)
					}
					break
					case 'joke':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !rimuru.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(editz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru
						owgi = await rimuru.downloadAndSaveMediaMessage(ger)
						data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/joke?url=${data.display_url}&apikey=IkyOgiwara`)
						rimuru.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}joke`)
					}
					break
   //======================================================   
   case 'chiisaihentai':
case 'trap':
case 'blowjob':
case 'yaoi':
case 'ecchi':
case 'ahegao':
case 'hololewd':
case 'sideoppai':
case 'animefeets':
case 'animebooty':
case 'animethighss':
case 'hentaiparadise':
case 'animearmpits':
case 'hentaifemdom':
case 'lewdanimegirls':
case 'biganimetiddies':
case 'animebellybutton':
case 'hentai4everyone':
function _0x39f8(){var _0x16dc70=['189130QCAdoA','imageMessage','relayWAMessage','161588wvSKnb','prepareMessageFromContent','12779667qdZslA','52960YiqNne','62414DeYDXU','prepareMessageMedia','603efPnCC','?apikey=PunyaIkyAds','870MSzEbo','https://api.lolhuman.xyz/api/random/nsfw/','4691183QrIOHe','9436tkkUTv','https://instabio.cc/Rimuru','wait','8NJmuSP'];_0x39f8=function(){return _0x16dc70;};return _0x39f8();}var _0x54d194=_0x1566;function _0x1566(_0x22db9d,_0x5f2532){var _0x39f884=_0x39f8();return _0x1566=function(_0x156624,_0x1eba1e){_0x156624=_0x156624-0x7a;var _0x180021=_0x39f884[_0x156624];return _0x180021;},_0x1566(_0x22db9d,_0x5f2532);}(function(_0x2a94ef,_0x3167c6){var _0x51d509=_0x1566,_0x49c385=_0x2a94ef();while(!![]){try{var _0x51be6b=-parseInt(_0x51d509(0x89))/0x1+-parseInt(_0x51d509(0x7b))/0x2+-parseInt(_0x51d509(0x7d))/0x3*(-parseInt(_0x51d509(0x82))/0x4)+-parseInt(_0x51d509(0x7a))/0x5*(parseInt(_0x51d509(0x7f))/0x6)+-parseInt(_0x51d509(0x81))/0x7*(-parseInt(_0x51d509(0x85))/0x8)+parseInt(_0x51d509(0x8b))/0x9+-parseInt(_0x51d509(0x86))/0xa;if(_0x51be6b===_0x3167c6)break;else _0x49c385['push'](_0x49c385['shift']());}catch(_0x37eff8){_0x49c385['push'](_0x49c385['shift']());}}}(_0x39f8,0xc7667),reply(mess[_0x54d194(0x84)]),buff=await getBuffer(_0x54d194(0x80)+command+_0x54d194(0x7e)),buttons=[{'buttonId':''+(prefix+command),'buttonText':{'displayText':'➡️Next'},'type':0x1}],imageMsg=(await rimuru[_0x54d194(0x7c)](buff,_0x54d194(0x87),{'thumbnail':buff}))['imageMessage'],buttonsMessage={'footerText':_0x54d194(0x83),'imageMessage':imageMsg,'contentText':'©WhatsApp\x20bot','buttons':buttons,'headerType':0x4},prep=await rimuru[_0x54d194(0x8a)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru[_0x54d194(0x88)](prep));
              break
case 'bj':
case 'ero':
case 'cum':
case 'feet':
case 'yuri':
case 'trap':
case 'lewd':
case 'feed':
case 'eron':
case 'solo':
case 'gasm':
case 'poke':
case 'anal':
case 'holo':
case 'tits':
case 'kuni':
case 'kiss':
case 'erok':
case 'smug':
case 'baka':
case 'solog':
case 'feetg':
case 'lewdk':
case 'waifu':
case 'pussy':
case 'femdom':
case 'cuddle':
case 'hentai':
case 'eroyuri':
case 'cum_jpg':
case 'blowjob':
case 'erofeet':
case 'holoero':
case 'classic':
case 'erokemo':
case 'fox_girl':
case 'futanari':
case 'lewdkemo':
case 'wallpaper':
case 'pussy_jpg':
case 'kemonomimi':
case 'nsfw_avatar':
function _0x3d2a(_0x49b48e,_0x1fe28b){var _0x5b9918=_0x5b99();return _0x3d2a=function(_0x3d2abb,_0x32665d){_0x3d2abb=_0x3d2abb-0xf4;var _0x58f0f3=_0x5b9918[_0x3d2abb];return _0x58f0f3;},_0x3d2a(_0x49b48e,_0x1fe28b);}function _0x5b99(){var _0x74033c=['89901VndCgA','prepareMessageFromContent','14mDXBoY','3488451POQlfa','42UbSIrt','imageMessage','5KRMuAD','prepareMessageMedia','wait','7260770eDfSSi','3826584jioOpj','808495yYizXn','985140yxFgPK','?apikey=PunyaIkyAds','©WhatsApp\x20bot','249742WohMxx','11xjkBCH'];_0x5b99=function(){return _0x74033c;};return _0x5b99();}var _0x193e3d=_0x3d2a;(function(_0x415535,_0xbf2248){var _0x4d6b65=_0x3d2a,_0x3c0cd0=_0x415535();while(!![]){try{var _0x1535c6=-parseInt(_0x4d6b65(0xf9))/0x1*(-parseInt(_0x4d6b65(0x102))/0x2)+-parseInt(_0x4d6b65(0xf6))/0x3+parseInt(_0x4d6b65(0xff))/0x4+-parseInt(_0x4d6b65(0xfe))/0x5*(-parseInt(_0x4d6b65(0xf7))/0x6)+parseInt(_0x4d6b65(0xf5))/0x7*(-parseInt(_0x4d6b65(0xfd))/0x8)+parseInt(_0x4d6b65(0x104))/0x9+parseInt(_0x4d6b65(0xfc))/0xa*(parseInt(_0x4d6b65(0x103))/0xb);if(_0x1535c6===_0xbf2248)break;else _0x3c0cd0['push'](_0x3c0cd0['shift']());}catch(_0x550780){_0x3c0cd0['push'](_0x3c0cd0['shift']());}}}(_0x5b99,0x97280),reply(mess[_0x193e3d(0xfb)]),buff=await getBuffer('https://api.lolhuman.xyz/api/random2/'+command+_0x193e3d(0x100)),buttons=[{'buttonId':''+(prefix+command),'buttonText':{'displayText':'➡️Next'},'type':0x1}],imageMsg=(await rimuru[_0x193e3d(0xfa)](buff,'imageMessage',{'thumbnail':buff}))[_0x193e3d(0xf8)],buttonsMessage={'footerText':'follow\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru/','imageMessage':imageMsg,'contentText':_0x193e3d(0x101),'buttons':buttons,'headerType':0x4},prep=await rimuru[_0x193e3d(0xf4)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru['relayWAMessage'](prep));
   break           
           case 'mulai': case 'start': {
    function _0xe3bf(){var _0x34d638=['Hello\x20World!','447484PJwZOp','log','2458020GljAtY','55730eKTDVD','568002rdZkUW','4105056Xkhfmh','526700efHyfh','192snhcYQ','7ecURYy','2904318BxWFUd'];_0xe3bf=function(){return _0x34d638;};return _0xe3bf();}(function(_0x3d107d,_0x3badaf){var _0x25a655=_0x44fc,_0x424a62=_0x3d107d();while(!![]){try{var _0x352a07=-parseInt(_0x25a655(0x95))/0x1+parseInt(_0x25a655(0x91))/0x2+parseInt(_0x25a655(0x93))/0x3+-parseInt(_0x25a655(0x97))/0x4+parseInt(_0x25a655(0x94))/0x5*(parseInt(_0x25a655(0x8d))/0x6)+parseInt(_0x25a655(0x8e))/0x7*(-parseInt(_0x25a655(0x96))/0x8)+parseInt(_0x25a655(0x8f))/0x9;if(_0x352a07===_0x3badaf)break;else _0x424a62['push'](_0x424a62['shift']());}catch(_0x58708b){_0x424a62['push'](_0x424a62['shift']());}}}(_0xe3bf,0x7c6cf));function hi(){var _0x497063=_0x44fc;console[_0x497063(0x92)](_0x497063(0x90));}function _0x44fc(_0x11b39b,_0x5ed2ab){var _0xe3bf37=_0xe3bf();return _0x44fc=function(_0x44fc12,_0x2f01d5){_0x44fc12=_0x44fc12-0x8d;var _0x16069b=_0xe3bf37[_0x44fc12];return _0x16069b;},_0x44fc(_0x11b39b,_0x5ed2ab);}hi();
    break
   }
      case 'ppcp':
case 'ppcouple':
function _0x5057(){var _0x352dc6=['imageMessage','©WhatsApp\x20bot','154539nceyCN','infoig','1894543PGNBPg','prepareMessageMedia','40dcFXuc','1405120VRwOqb','result','1328736UEDDyw','ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru','male','relayWAMessage','2606247YrRyln','1574WTwkob','141wQwcxj','female','https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=IkyOgiwara','210260gFqzcD','prepareMessageFromContent'];_0x5057=function(){return _0x352dc6;};return _0x5057();}function _0x360b(_0x412a36,_0x11a236){var _0x505737=_0x5057();return _0x360b=function(_0x360b0b,_0x13762c){_0x360b0b=_0x360b0b-0x1df;var _0xaeb27f=_0x505737[_0x360b0b];return _0xaeb27f;},_0x360b(_0x412a36,_0x11a236);}var _0x40106e=_0x360b;(function(_0x2881dd,_0x4f4bcc){var _0x2143c3=_0x360b,_0x3a4f2d=_0x2881dd();while(!![]){try{var _0x13b983=-parseInt(_0x2143c3(0x1e2))/0x1+-parseInt(_0x2143c3(0x1ee))/0x2*(parseInt(_0x2143c3(0x1ef))/0x3)+parseInt(_0x2143c3(0x1f2))/0x4*(parseInt(_0x2143c3(0x1e6))/0x5)+parseInt(_0x2143c3(0x1e9))/0x6+-parseInt(_0x2143c3(0x1e4))/0x7+-parseInt(_0x2143c3(0x1e7))/0x8+parseInt(_0x2143c3(0x1ed))/0x9;if(_0x13b983===_0x4f4bcc)break;else _0x3a4f2d['push'](_0x3a4f2d['shift']());}catch(_0x221fcd){_0x3a4f2d['push'](_0x3a4f2d['shift']());}}}(_0x5057,0x47b6e),anu=await fetchJson(_0x40106e(0x1f1)),buff1=await getBuffer(anu['result'][_0x40106e(0x1eb)]),buttons=[{'buttonId':prefix+_0x40106e(0x1e3),'buttonText':{'displayText':_0x40106e(0x1e1)},'type':0x1}],imageMsg=(await rimuru[_0x40106e(0x1e5)](buff1,'imageMessage',{'thumbnail':buff1}))['imageMessage'],buttonsMessage={'footerText':_0x40106e(0x1ea),'imageMessage':imageMsg,'contentText':'Cowo','buttons':buttons,'headerType':0x4},prep=await rimuru[_0x40106e(0x1df)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru[_0x40106e(0x1ec)](prep),buff2=await getBuffer(anu[_0x40106e(0x1e8)][_0x40106e(0x1f0)]),buttons=[{'buttonId':prefix+'infoig','buttonText':{'displayText':_0x40106e(0x1e1)},'type':0x1}],imageMsg=(await rimuru['prepareMessageMedia'](buff2,_0x40106e(0x1e0),{'thumbnail':buff2}))['imageMessage'],buttonsMessage={'footerText':_0x40106e(0x1ea),'imageMessage':imageMsg,'contentText':'Cewe','buttons':buttons,'headerType':0x4},prep=await rimuru[_0x40106e(0x1df)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),setTimeout(async()=>{var _0x57e339=_0x40106e;rimuru[_0x57e339(0x1ec)](prep);},0x1388));
break

case 'meme':
case 'memek':
 function _0x4a9e(_0x3a2258,_0x56aae0){var _0x10490c=_0x1049();return _0x4a9e=function(_0x4a9e3f,_0x137158){_0x4a9e3f=_0x4a9e3f-0x19b;var _0xaf9296=_0x10490c[_0x4a9e3f];return _0xaf9296;},_0x4a9e(_0x3a2258,_0x56aae0);}function _0x1049(){var _0x3f48b6=['imageMessage','11812780JqEzLn','klik\x20Next\x20untuk\x20ke\x20gambar\x20selanjut\x20nya','prepareMessageFromContent','3901060KcUWaS','599916KHVRYO','51tWPKqn','relayWAMessage','ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru','160494XqOviR','NEXT','1809536iEoZyk','39442328mhDgUL','468522dcWOrc'];_0x1049=function(){return _0x3f48b6;};return _0x1049();}var _0x7d52f5=_0x4a9e;(function(_0x844ff4,_0x43e386){var _0x3d193f=_0x4a9e,_0x3ed86d=_0x844ff4();while(!![]){try{var _0x2cdefe=-parseInt(_0x3d193f(0x1a0))/0x1+parseInt(_0x3d193f(0x1a4))/0x2*(-parseInt(_0x3d193f(0x1a1))/0x3)+parseInt(_0x3d193f(0x1a6))/0x4+-parseInt(_0x3d193f(0x19f))/0x5+-parseInt(_0x3d193f(0x1a8))/0x6+-parseInt(_0x3d193f(0x19c))/0x7+parseInt(_0x3d193f(0x1a7))/0x8;if(_0x2cdefe===_0x43e386)break;else _0x3ed86d['push'](_0x3ed86d['shift']());}catch(_0x141d4f){_0x3ed86d['push'](_0x3ed86d['shift']());}}}(_0x1049,0xd5111),buff=await getBuffer('https://leyscoders-api.herokuapp.com/api/memeindo?apikey=IkyOgiwara'),buttons=[{'buttonId':''+(prefix+command),'buttonText':{'displayText':_0x7d52f5(0x1a5)},'type':0x1}],imageMsg=(await rimuru['prepareMessageMedia'](buff,_0x7d52f5(0x19b),{'thumbnail':buff}))[_0x7d52f5(0x19b)],buttonsMessage={'footerText':_0x7d52f5(0x1a3),'imageMessage':imageMsg,'contentText':_0x7d52f5(0x19d),'buttons':buttons,'headerType':0x4},prep=await rimuru[_0x7d52f5(0x19e)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru[_0x7d52f5(0x1a2)](prep));
break
    // Textprome //
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
function _0x39a0(_0x7b56cb,_0x3769e3){var _0x435170=_0x4351();return _0x39a0=function(_0x39a0f9,_0x234e2a){_0x39a0f9=_0x39a0f9-0x139;var _0x128521=_0x435170[_0x39a0f9];return _0x128521;},_0x39a0(_0x7b56cb,_0x3769e3);}function _0x4351(){var _0x3c1010=['202097PxesXo','wait','length','relayWAMessage','331152xEQCDe','imageMessage','ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru','933032WwfIKt','prepareMessageFromContent','©WhatsApp\x20bot','BACK\x20MENU','512beXyWu','\x20LoL\x20Human','2535192lFsEbF','menu','1558090fDClvs','1673780wONmjt','1057932AxEuad'];_0x4351=function(){return _0x3c1010;};return _0x4351();}var _0x42fb57=_0x39a0;(function(_0x1b3deb,_0x488c67){var _0x5ca3f6=_0x39a0,_0x416798=_0x1b3deb();while(!![]){try{var _0xffdc7d=-parseInt(_0x5ca3f6(0x146))/0x1+-parseInt(_0x5ca3f6(0x149))/0x2+-parseInt(_0x5ca3f6(0x13d))/0x3+parseInt(_0x5ca3f6(0x140))/0x4+-parseInt(_0x5ca3f6(0x13f))/0x5+parseInt(_0x5ca3f6(0x141))/0x6+-parseInt(_0x5ca3f6(0x142))/0x7*(-parseInt(_0x5ca3f6(0x13b))/0x8);if(_0xffdc7d===_0x488c67)break;else _0x416798['push'](_0x416798['shift']());}catch(_0x158da4){_0x416798['push'](_0x416798['shift']());}}}(_0x4351,0x772e1),reply(mess[_0x42fb57(0x143)]));if(args[_0x42fb57(0x144)]==0x0)return reply('Example:\x20'+(prefix+command)+_0x42fb57(0x13c));ini_txt=args['join']('\x20'),buff=await getBuffer('https://api.lolhuman.xyz/api/textprome/'+command+'?apikey=PunyaIkyAds&text='+ini_txt),buttons=[{'buttonId':prefix+_0x42fb57(0x13e),'buttonText':{'displayText':_0x42fb57(0x13a)},'type':0x1}],imageMsg=(await rimuru['prepareMessageMedia'](buff,_0x42fb57(0x147),{'thumbnail':buff}))[_0x42fb57(0x147)],buttonsMessage={'footerText':_0x42fb57(0x148),'imageMessage':imageMsg,'contentText':_0x42fb57(0x139),'buttons':buttons,'headerType':0x4},prep=await rimuru[_0x42fb57(0x14a)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru[_0x42fb57(0x145)](prep);
    break
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
var _0x3acfad=_0x4555;function _0x5d17(){var _0x2ffae4=['&text2=','1771wwdFrM','42804tRTDcp','290424WlOXsF','\x20LoL\x20Human','menu','11848UWzgZP','Example:\x20','wait','imageMessage','1223874jFlRhB','length','ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru','8PVUtTO','3489696wSAvzY','relayWAMessage','BACK\x20MENU','https://api.lolhuman.xyz/api/textprome2/','178341EhLMMm','970835ggxPrx','?apikey=PunyaIkyAds&text1='];_0x5d17=function(){return _0x2ffae4;};return _0x5d17();}(function(_0x595d3a,_0x33d28e){var _0x129a61=_0x4555,_0x392808=_0x595d3a();while(!![]){try{var _0x165e4b=-parseInt(_0x129a61(0x17c))/0x1+-parseInt(_0x129a61(0x190))/0x2+parseInt(_0x129a61(0x18b))/0x3*(parseInt(_0x129a61(0x186))/0x4)+parseInt(_0x129a61(0x18c))/0x5+parseInt(_0x129a61(0x183))/0x6+parseInt(_0x129a61(0x18f))/0x7*(parseInt(_0x129a61(0x17f))/0x8)+-parseInt(_0x129a61(0x187))/0x9;if(_0x165e4b===_0x33d28e)break;else _0x392808['push'](_0x392808['shift']());}catch(_0x1a5763){_0x392808['push'](_0x392808['shift']());}}}(_0x5d17,0x2eea3),reply(mess[_0x3acfad(0x181)]));function _0x4555(_0x52a419,_0x4b16cc){var _0x5d176d=_0x5d17();return _0x4555=function(_0x455530,_0x39c52f){_0x455530=_0x455530-0x17c;var _0xadaf4e=_0x5d176d[_0x455530];return _0xadaf4e;},_0x4555(_0x52a419,_0x4b16cc);}if(args[_0x3acfad(0x184)]==0x0)return reply(_0x3acfad(0x180)+(prefix+command)+_0x3acfad(0x17d));txt1=args[0x0],txt2=args[0x1],buff=await getBuffer(_0x3acfad(0x18a)+command+_0x3acfad(0x18d)+txt1+_0x3acfad(0x18e)+txt2),buttons=[{'buttonId':prefix+_0x3acfad(0x17e),'buttonText':{'displayText':_0x3acfad(0x189)},'type':0x1}],imageMsg=(await rimuru['prepareMessageMedia'](buff,_0x3acfad(0x182),{'thumbnail':buff}))['imageMessage'],buttonsMessage={'footerText':_0x3acfad(0x185),'imageMessage':imageMsg,'contentText':'©WhatsApp\x20bot','buttons':buttons,'headerType':0x4},prep=await rimuru['prepareMessageFromContent'](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru[_0x3acfad(0x188)](prep);
        
    break

    // Photo Oxy //
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
var _0x2d8aff=_0x4244;(function(_0x5ced82,_0x4e36ab){var _0x53dfe1=_0x4244,_0x5f3f04=_0x5ced82();while(!![]){try{var _0x1e718a=parseInt(_0x53dfe1(0x1ed))/0x1+parseInt(_0x53dfe1(0x1d9))/0x2*(-parseInt(_0x53dfe1(0x1db))/0x3)+parseInt(_0x53dfe1(0x1eb))/0x4+-parseInt(_0x53dfe1(0x1e8))/0x5*(parseInt(_0x53dfe1(0x1ea))/0x6)+parseInt(_0x53dfe1(0x1ec))/0x7*(parseInt(_0x53dfe1(0x1e0))/0x8)+parseInt(_0x53dfe1(0x1d6))/0x9+-parseInt(_0x53dfe1(0x1e7))/0xa*(parseInt(_0x53dfe1(0x1e6))/0xb);if(_0x1e718a===_0x4e36ab)break;else _0x5f3f04['push'](_0x5f3f04['shift']());}catch(_0x271b40){_0x5f3f04['push'](_0x5f3f04['shift']());}}}(_0x3a3a,0xadc47),reply(mess[_0x2d8aff(0x1df)]));if(args[_0x2d8aff(0x1e3)]==0x0)return reply(_0x2d8aff(0x1e4)+(prefix+command)+_0x2d8aff(0x1e2));function _0x3a3a(){var _0x4c06d8=['join','ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru','?apikey=PunyaIkyAds&text=','wait','8thWjUp','relayWAMessage','\x20LoL\x20Human','length','Example:\x20','https://api.lolhuman.xyz/api/photooxy1/','3822291dHXSpx','10dwLIXf','25FCKqaT','prepareMessageMedia','1549566HZfSjX','3076436PiHDKj','7561666rcZBCL','692814rhaUrj','1643625eYVciZ','BACK\x20MENU','imageMessage','526dPeqnP','©WhatsApp\x20bot','4269vyuEqf'];_0x3a3a=function(){return _0x4c06d8;};return _0x3a3a();}function _0x4244(_0x53c2ee,_0x52e0d1){var _0x3a3aa6=_0x3a3a();return _0x4244=function(_0x42444b,_0x1da803){_0x42444b=_0x42444b-0x1d6;var _0x179fe5=_0x3a3aa6[_0x42444b];return _0x179fe5;},_0x4244(_0x53c2ee,_0x52e0d1);}ini_txt=args[_0x2d8aff(0x1dc)]('\x20'),buff=await getBuffer(_0x2d8aff(0x1e5)+command+_0x2d8aff(0x1de)+ini_txt),buttons=[{'buttonId':prefix+'menu','buttonText':{'displayText':_0x2d8aff(0x1d7)},'type':0x1}],imageMsg=(await rimuru[_0x2d8aff(0x1e9)](buff,_0x2d8aff(0x1d8),{'thumbnail':buff}))[_0x2d8aff(0x1d8)],buttonsMessage={'footerText':_0x2d8aff(0x1dd),'imageMessage':imageMsg,'contentText':_0x2d8aff(0x1da),'buttons':buttons,'headerType':0x4},prep=await rimuru['prepareMessageFromContent'](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru[_0x2d8aff(0x1e1)](prep);
    break
case 'ttlogo':
case 'arcade8bit':
case 'battlefield4':
case 'pubg':
function _0x30e1(){var _0x5c5b97=['?apikey=PunyaIkyAds&text1=','2207935ZcKIJD','relayWAMessage','17023430mVjgjZ','prepareMessageMedia','2kuPBfM','BACK\x20MENU','©WhatsApp\x20bot','imageMessage','387564XwrSdY','7mbEgXz','ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru','\x20LoL\x20Human','wait','1696680gKxVUR','https://api.lolhuman.xyz/api/photooxy2/','550824nLYjpM','menu','Example:\x20','87546MaFWJM','2588562TaApjt','9nQqKWW'];_0x30e1=function(){return _0x5c5b97;};return _0x30e1();}var _0x175316=_0x5a89;function _0x5a89(_0x2ac219,_0x50ed63){var _0x30e18d=_0x30e1();return _0x5a89=function(_0x5a899a,_0x4c2132){_0x5a899a=_0x5a899a-0xce;var _0x19579e=_0x30e18d[_0x5a899a];return _0x19579e;},_0x5a89(_0x2ac219,_0x50ed63);}(function(_0x589c51,_0x33e004){var _0x72edfc=_0x5a89,_0x34ba09=_0x589c51();while(!![]){try{var _0x1f872f=parseInt(_0x72edfc(0xce))/0x1*(parseInt(_0x72edfc(0xd2))/0x2)+parseInt(_0x72edfc(0xdd))/0x3+parseInt(_0x72edfc(0xd7))/0x4+parseInt(_0x72edfc(0xe0))/0x5+-parseInt(_0x72edfc(0xdc))/0x6+parseInt(_0x72edfc(0xd3))/0x7*(parseInt(_0x72edfc(0xd9))/0x8)+-parseInt(_0x72edfc(0xde))/0x9*(parseInt(_0x72edfc(0xe2))/0xa);if(_0x1f872f===_0x33e004)break;else _0x34ba09['push'](_0x34ba09['shift']());}catch(_0xbd90a2){_0x34ba09['push'](_0x34ba09['shift']());}}}(_0x30e1,0x7247e),reply(mess[_0x175316(0xd6)]));if(args['length']==0x0)return reply(_0x175316(0xdb)+(prefix+command)+_0x175316(0xd5));txt1=args[0x0],txt2=args[0x1],buff=await getBuffer(_0x175316(0xd8)+command+_0x175316(0xdf)+txt1+'&text2='+txt2),buttons=[{'buttonId':prefix+_0x175316(0xda),'buttonText':{'displayText':_0x175316(0xcf)},'type':0x1}],imageMsg=(await rimuru[_0x175316(0xe3)](buff,_0x175316(0xd1),{'thumbnail':buff}))[_0x175316(0xd1)],buttonsMessage={'footerText':_0x175316(0xd4),'imageMessage':imageMsg,'contentText':_0x175316(0xd0),'buttons':buttons,'headerType':0x4},prep=await rimuru['prepareMessageFromContent'](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru[_0x175316(0xe1)](prep);
    break
    
    // Ephoto 360 //
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
function _0x40a2(){var _0x8681bb=['\x20LoL\x20Human','190qSQwZN','prepareMessageMedia','BACK\x20MENU','https://api.lolhuman.xyz/api/ephoto1/','menu','5110360XAnhuO','imageMessage','length','9hgDwBE','34731xwplBp','prepareMessageFromContent','156386njrENt','667855yGKEwR','19935REcFQu','relayWAMessage','36qYiYgQ','Example:\x20','7IcNzAS','8326266zEzMdM','34885213uRSfJw','ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru'];_0x40a2=function(){return _0x8681bb;};return _0x40a2();}var _0x92875e=_0x2838;(function(_0x6f267e,_0x345c80){var _0x94772f=_0x2838,_0x30573b=_0x6f267e();while(!![]){try{var _0x2b2e05=-parseInt(_0x94772f(0xb1))/0x1+parseInt(_0x94772f(0xaf))/0x2*(-parseInt(_0x94772f(0xac))/0x3)+-parseInt(_0x94772f(0xb3))/0x4*(parseInt(_0x94772f(0xb0))/0x5)+-parseInt(_0x94772f(0xb6))/0x6*(parseInt(_0x94772f(0xb5))/0x7)+parseInt(_0x94772f(0xa9))/0x8+parseInt(_0x94772f(0xad))/0x9*(-parseInt(_0x94772f(0xa4))/0xa)+parseInt(_0x94772f(0xb7))/0xb;if(_0x2b2e05===_0x345c80)break;else _0x30573b['push'](_0x30573b['shift']());}catch(_0x232c4b){_0x30573b['push'](_0x30573b['shift']());}}}(_0x40a2,0xd9e4d),reply(mess['wait']));function _0x2838(_0x5e3a4a,_0x4767ad){var _0x40a2ee=_0x40a2();return _0x2838=function(_0x28384b,_0x1d4ba6){_0x28384b=_0x28384b-0xa2;var _0x33fedd=_0x40a2ee[_0x28384b];return _0x33fedd;},_0x2838(_0x5e3a4a,_0x4767ad);}if(args[_0x92875e(0xab)]==0x0)return reply(_0x92875e(0xb4)+(prefix+command)+_0x92875e(0xa3));ini_txt=args['join']('\x20'),buff=await getBuffer(_0x92875e(0xa7)+command+'?apikey=PunyaIkyAds&text='+ini_txt),buttons=[{'buttonId':prefix+_0x92875e(0xa8),'buttonText':{'displayText':_0x92875e(0xa6)},'type':0x1}],imageMsg=(await rimuru[_0x92875e(0xa5)](buff,_0x92875e(0xaa),{'thumbnail':buff}))[_0x92875e(0xaa)],buttonsMessage={'footerText':_0x92875e(0xa2),'imageMessage':imageMsg,'contentText':'©WhatsApp\x20bot','buttons':buttons,'headerType':0x4},prep=await rimuru[_0x92875e(0xae)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru[_0x92875e(0xb2)](prep);
        
    break
   case 'setwelcome':
					  
					  if (args.length < 1) return reply('*Teks nya mana gan?*')
    rimuru.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					join = body.slice(11)
					rimuru.sendMessage(from ,`\`\`\`Welcome berhasil di ubah menjadi : ${body.slice(11)}\`\`\``, text,{quoted : freply})
				break 
				
         case 'public':
        	  if (!editz.key.fromMe) return 
              if (banChats === false) return 
              banChats = false
              textImg(`Sukses mode publik gan`)
              break
          case "set":
case "mode":
        if (!editz.key.fromMe) return;
        sendButMessage(from, `SELF OR PUBLIC`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}self`,
            buttonText: {
              displayText: `⬡ SELF `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}public`,
            buttonText: {
              displayText: `⬡ PUBLIC`,
            },
            type: 1,
          },
        ]);
        break;
        case "example":
case "contoh":
        sendButMessage(from, `Please select the language you use`, `Choose a language below`, [
          {
            buttonId: `${prefix}exampleid`,
            buttonText: {
              displayText: `⬡ INDONESIA `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}exampleen`,
            buttonText: {
              displayText: `⬡ ENGLISH`,
            },
            type: 1,
          },
        ]);
        break;
	      case 'self':
              if (!editz.key.fromMe) return 
              if (banChats === true) return
        	  uptime = process.uptime()
        	  banChats = true
              textImg(`Success mode self gan`)
              break
case 'quotes':
    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=PunyaIkyAds`)
    quotes = quotes.result
    author = quotes.by
    quotes = quotes.quote
    reply(`_${quotes}_\n\n*â€• ${author}*`)
    break
     case 'quotesanime':
    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=PunyaIkyAds`)
    quotes = quotes.result
    quote = quotes.quote
    char = quotes.character
    anime = quotes.anime
    episode = quotes.episode
    reply(`_${quote}_\n\n*• ${char}*\n*• ${anime} ${episode}*`)
    break
case 'quotesdilan':
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quotes/diLan?apikey=PunyaIkyAds`)
     reply(get_result.result)
   break
   case 'quotesimage':
    buff = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=PunyaIkyAds`)
    buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await rimuru.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'ғᴏʟʟᴏᴡ sᴏsᴍᴇᴅ ʀɪᴍᴜʀᴜ࿐ https://instabio.cc/Rimuru', imageMessage: imageMsg,
              contentText: ini_txt,buttons,headerType:4}
              prep = await rimuru.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              rimuru.relayWAMessage(prep)
 break
case 'faktaunik':
case 'katabijak':
case 'pantun':
case 'bucin':
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=PunyaIkyAds`)
   titid = get_result.result
   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
    break
case 'randomnama':
    anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=PunyaIkyAds`)
    rimuruu = anu.result
   sendButMessage(from, rimuru, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
    break
         // Movie & Story
case 'lk21':
    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=PunyaIkyAds&query=${query}`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Link : ${get_result.link}\n`
    ini_txt += `Genre : ${get_result.genre}\n`
    ini_txt += `Views : ${get_result.views}\n`
    ini_txt += `Duration : ${get_result.duration}\n`
    ini_txt += `Tahun : ${get_result.tahun}\n`
    ini_txt += `Rating : ${get_result.rating}\n`
    ini_txt += `Desc : ${get_result.desc}\n`
    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
    ini_txt += `Location : ${get_result.location}\n`
    ini_txt += `Date Release : ${get_result.date_release}\n`
    ini_txt += `Language : ${get_result.Language}\n`
    ini_txt += `Link Download : ${get_result.link_dl}`
    thumbnail = await getBuffer(get_result.thumbnail)
    await rimuru.sendMessage(from, thumbnail, image, { quoted: freply, caption: ini_txt })
    break
       case 'drakorongoing':
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/drakorongoing?apikey=PunyaIkyAds`)
    get_result = get_result.result
    ini_txt = "Ongoing Drakor\n\n"
    for (var x of get_result) {
        ini_txt += `Title : ${x.title}\n`
        ini_txt += `Link : ${x.link}\n`
        ini_txt += `Thumbnail : ${x.thumbnail}\n`
        ini_txt += `Year : ${x.category}\n`
        ini_txt += `Total Episode : ${x.total_episode}\n`
        ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
    }
    reply(ini_txt)
    break
case 'wattpad':
    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpuLan-quote-tere-liye-tere-liye-quote-quote`)
    ini_url = args[0]
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpad?apikey=PunyaIkyAds&url=${ini_url}`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Rating : ${get_result.rating}\n`
    ini_txt += `Motify date : ${get_result.modifyDate}\n`
    ini_txt += `Create date: ${get_result.createDate}\n`
    ini_txt += `Word : ${get_result.word}\n`
    ini_txt += `Comment : ${get_result.comment}\n`
    ini_txt += `Vote : ${get_result.vote}\n`
    ini_txt += `Reader : ${get_result.reader}\n`
    ini_txt += `Pages : ${get_result.pages}\n`
    ini_txt += `Description : ${get_result.desc}\n\n`
    ini_txt += `Story : \n${get_result.story}`
    thumbnail = await getBuffer(get_result.photo)
    await rimuru.sendMessage(from, thumbnail, image, { quoted: freply, caption: ini_txt })
    break
case 'wattpadsearch':
    if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=PunyaIkyAds&query=${query}`)
    get_result = get_result.result
    ini_txt = "Wattpad Seach : \n"
    for (var x of get_result) {
        ini_txt += `Title : ${x.title}\n`
        ini_txt += `Url : ${x.url}\n`
        ini_txt += `Part : ${x.parts}\n`
        ini_txt += `Motify date : ${x.modifyDate}\n`
        ini_txt += `Create date: ${x.createDate}\n`
        ini_txt += `Coment count: ${x.commentCount}\n\n`
    }
    reply(ini_txt)
    break
case 'cerpen':
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=PunyaIkyAds`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Creator : ${get_result.creator}\n`
    ini_txt += `Story :\n${get_result.cerpen}`
    titid = ini_txt
   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
    break
       case 'ceritahoror':
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=PunyaIkyAds`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Desc : ${get_result.desc}\n`
    ini_txt += `Story :\n${get_result.story}\n`
    buff = await getBuffer(get_result.thumbnail)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await rimuru.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'ғᴏʟʟᴏᴡ sᴏsᴍᴇᴅ ʀɪᴍᴜʀᴜ࿐ https://instabio.cc/Rimuru', imageMessage: imageMsg,
              contentText: ini_txt,buttons,headerType:4}
              prep = await rimuru.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              rimuru.relayWAMessage(prep)
        break
        
        case 'groupmenu':
        case 'menugroup':
        case 'grubmenu':
              function _0xae59(){var _0x427de9=['\x0a\x0a\x20\x20\x20\x20┌───「\x20Menu\x20Group\x20」\x0a\x0a\x20\x20\x20\x20│\x0a\x0a\x20\x20\x20\x20│❏\x20','grupsetting\x20\x0a\x0a\x20\x20\x20\x20│\x0a\x0a\x20\x20\x20\x20└─────「\x20','tagall\x20*text*\x0a\x0a\x20\x20\x20\x20│❏\x20','prepareMessageMedia','4842IwMBJZ','relayWAMessage','ceksewa\x0a\x0a\x20\x20\x20\x20│❏\x20','290945kdLVXX','6342606mvDlEh','totalmem','sider\x20\x0a\x0a\x20\x20\x20\x20│❏\x20','1009988fWQAQb','infogrup\x20\x0a\x0a\x20\x20\x20\x20│❏\x20','length','revoke\x20\x0a\x0a\x20\x20\x20\x20│❏\x20','111839TxmOzE','antiviewonce\x20*enable/disable*\x0a\x0a\x20\x20\x20\x20│❏\x20','144FlcvYw','all','1442QBExSv','8864590nESDoP','s.whatsapp.net','sider\x0a\x0a\x20\x20\x20\x20│❏\x20','delvote\x20*hapus\x20sesi\x20vote\x20di\x20grup*\x20\x0a\x0a\x20\x20\x20\x20│❏\x20','jid','afk\x20*alasan*\x0a\x0a\x20\x20\x20\x20│❏\x20','ᴊᴀɴɢᴀɴ\x20ᴘᴇʀɴᴀʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20sᴇsᴇᴏʀᴀɴɢ\x0aʏᴀɴɢ\x20ᴍᴀsɪʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20ᴏʀᴀɴɢ\x20ʟᴀɪɴ\x0a\x0a♥️\x20ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru','memoryUsage','leave\x20*Bot\x20akan\x20meninggalkan\x20grup.*\x20\x0a\x0a\x20\x20\x20\x20│❏\x20','4FIYOgW','ga\x20dicas','rules','demote\x20@member1\x0a\x0a\x20\x20\x20\x20│❏\x20','setgrupname\x20\x0a\x0a\x20\x20\x20\x20│❏\x20','./media/Menu.jpg','antidel\x20*enable/disable*\x0a\x0a\x20\x20\x20\x20│❏\x20','kick\x20@member1\x20\x0a\x0a\x20\x20\x20\x20│❏\x20','promote\x20@member1\x0a\x0a\x20\x20\x20\x20│❏\x20','setppgrup\x20\x0a\x0a\x20\x20\x20\x20│❏\x20','filter','array','voting\x20*!voting\x20@tag\x20|\x20alasan\x20|\x201-100\x20menit\x20\x0a\x0a\x20\x20\x20\x20│❏\x20','toFixed','prepareMessageFromContent','8545563FHlrpd','fitnah\x20\x0a\x0a\x20\x20\x20\x20│❏\x20','g.us','heapUsed','listonline\x0a\x0a\x20\x20\x20\x20│❏\x20','setdesc\x0a\x0a\x20\x20\x20\x20│❏\x20','lagi\x20dicas','readFileSync','endsWith','chats'];_0xae59=function(){return _0x427de9;};return _0xae59();}var _0xac383d=_0x24ab;function _0x24ab(_0x170f56,_0x257f52){var _0xae5972=_0xae59();return _0x24ab=function(_0x24ab2a,_0x56e008){_0x24ab2a=_0x24ab2a-0x166;var _0x2a5597=_0xae5972[_0x24ab2a];return _0x2a5597;},_0x24ab(_0x170f56,_0x257f52);}(function(_0x42eeb6,_0x25102f){var _0x348934=_0x24ab,_0x323632=_0x42eeb6();while(!![]){try{var _0x1a9679=-parseInt(_0x348934(0x192))/0x1+parseInt(_0x348934(0x19a))/0x2*(parseInt(_0x348934(0x18b))/0x3)+parseInt(_0x348934(0x16e))/0x4*(-parseInt(_0x348934(0x18e))/0x5)+-parseInt(_0x348934(0x18f))/0x6+-parseInt(_0x348934(0x196))/0x7*(parseInt(_0x348934(0x198))/0x8)+parseInt(_0x348934(0x17d))/0x9+parseInt(_0x348934(0x19b))/0xa;if(_0x1a9679===_0x25102f)break;else _0x323632['push'](_0x323632['shift']());}catch(_0x2a52cd){_0x323632['push'](_0x323632['shift']());}}}(_0xae59,0x8f42c),groups=rimuru['chats'][_0xac383d(0x179)][_0xac383d(0x178)](_0x545682=>_0x545682[_0xac383d(0x169)][_0xac383d(0x185)](_0xac383d(0x17f))),privat=rimuru[_0xac383d(0x186)][_0xac383d(0x179)][_0xac383d(0x178)](_0x3e787c=>_0x3e787c['jid'][_0xac383d(0x185)](_0xac383d(0x166))),ram2=(process[_0xac383d(0x16c)]()[_0xac383d(0x180)]/0x400/0x400)[_0xac383d(0x17b)](0x2)+'MB\x20/\x20'+Math['round'](require('os')[_0xac383d(0x190)]/0x400/0x400)+'MB',charger=''+(charging?_0xac383d(0x183):_0xac383d(0x16f)),uptime=process['uptime'](),timestampe=speed(),totalChat=await rimuru['chats'][_0xac383d(0x199)](),latensie=speed()-timestampe,total=math(groups[_0xac383d(0x194)]+'*'+privat['length']),menu=_0xac383d(0x187)+prefix+'add\x20628xxxxxxxxxx\x20\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0xac383d(0x175)+prefix+_0xac383d(0x176)+prefix+_0xac383d(0x171)+prefix+_0xac383d(0x181)+prefix+_0xac383d(0x189)+prefix+_0xac383d(0x16a)+prefix+_0xac383d(0x18d)+prefix+'tagme\x20\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0xac383d(0x17e)+prefix+'linkgc\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+'hidetag\x20\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0xac383d(0x191)+prefix+_0xac383d(0x16d)+prefix+_0xac383d(0x17a)+prefix+_0xac383d(0x168)+prefix+_0xac383d(0x193)+prefix+_0xac383d(0x172)+prefix+_0xac383d(0x177)+prefix+_0xac383d(0x182)+prefix+_0xac383d(0x174)+prefix+_0xac383d(0x197)+prefix+_0xac383d(0x167)+prefix+_0xac383d(0x195)+prefix+_0xac383d(0x188)+botName+'\x20」',buttons=[{'buttonId':prefix+_0xac383d(0x170),'buttonText':{'displayText':'S&K'},'type':0x1}],imageMsg=(await rimuru[_0xac383d(0x18a)](fs[_0xac383d(0x184)](_0xac383d(0x173)),'imageMessage',{'thumbnail':Bfake,'contextInfo':{'forwardingScore':0x3dd,'isForwarded':!![]}}))['imageMessage'],buttonsMessage={'contentText':''+menu,'footerText':_0xac383d(0x16b),'imageMessage':imageMsg,'buttons':buttons,'headerType':0x1},prep=await rimuru[_0xac383d(0x17c)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply,'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'mentionedJid':[senderr]}}),rimuru[_0xac383d(0x18c)](prep));
               break
//==============================================================================================================================================================
        case 'storymenu':
        case 'moviemenu':
              var _0x3ce073=_0x5773;(function(_0x58212c,_0x2ae73f){var _0x7f926d=_0x5773,_0x1c6cf4=_0x58212c();while(!![]){try{var _0x3a2c93=parseInt(_0x7f926d(0xc7))/0x1+-parseInt(_0x7f926d(0xb2))/0x2*(-parseInt(_0x7f926d(0xc1))/0x3)+-parseInt(_0x7f926d(0xbc))/0x4+-parseInt(_0x7f926d(0xd1))/0x5*(parseInt(_0x7f926d(0xb9))/0x6)+parseInt(_0x7f926d(0xb5))/0x7*(-parseInt(_0x7f926d(0xb1))/0x8)+parseInt(_0x7f926d(0xb3))/0x9+parseInt(_0x7f926d(0xb0))/0xa*(parseInt(_0x7f926d(0xd5))/0xb);if(_0x3a2c93===_0x2ae73f)break;else _0x1c6cf4['push'](_0x1c6cf4['shift']());}catch(_0x29f966){_0x1c6cf4['push'](_0x1c6cf4['shift']());}}}(_0x406a,0x40cac));function _0x406a(){var _0x32a180=['readFileSync','array','3666DYCODa','endsWith','lagi\x20dicas','1954288jhAzAQ','rules','wattpadsearch\x20query\x0a\x0a\x20\x20\x20\x20│❏\x20','\x0a\x0a\x20\x20\x20\x20┌───「\x20Story\x20&\x20Movie\x20Menu\x20」\x0a\x0a\x20\x20\x20\x20│\x0a\x0a\x20\x20\x20\x20│❏\x20','jid','3ZcDKGW','s.whatsapp.net','ᴊᴀɴɢᴀɴ\x20ᴘᴇʀɴᴀʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20sᴇsᴇᴏʀᴀɴɢ\x0aʏᴀɴɢ\x20ᴍᴀsɪʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20ᴏʀᴀɴɢ\x20ʟᴀɪɴ\x0a\x0a♥️\x20ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru','MB\x20/\x20','ceritahoror\x0a\x0a\x20\x20\x20\x20│❏\x20','relayWAMessage','417406vvRErV','heapUsed','totalmem','prepareMessageMedia','lk21\x20query\x0a\x0a\x20\x20\x20\x20│❏\x20','cersex\x0a\x0a\x20\x20\x20\x20│\x0a\x0a\x20\x20\x20\x20└─────「\x20','./media/Menu.jpg','filter','ga\x20dicas','memoryUsage','2115ucawHg','S&K','imageMessage','g.us','11cnJGFq','round','chats','wattpad\x20url_wattpad\x0a\x0a\x20\x20\x20\x20│❏\x20','drakorongoing\x0a\x0a\x20\x20\x20\x20│❏\x20','prepareMessageFromContent','4844090VnYxHN','3336Fbpdqw','351068FcOWDU','83610NNDgIl','toFixed','1246LluMQu','length'];_0x406a=function(){return _0x32a180;};return _0x406a();}if(!isRegistered)return sendButMessage(from,daftar1,daftar2,daftar3,{'quoted':freply});function _0x5773(_0x40918e,_0x57c88f){var _0x406a01=_0x406a();return _0x5773=function(_0x5773af,_0x5c7711){_0x5773af=_0x5773af-0xad;var _0xe4e283=_0x406a01[_0x5773af];return _0xe4e283;},_0x5773(_0x40918e,_0x57c88f);}groups=rimuru[_0x3ce073(0xd7)][_0x3ce073(0xb8)][_0x3ce073(0xce)](_0x4079df=>_0x4079df[_0x3ce073(0xc0)][_0x3ce073(0xba)](_0x3ce073(0xd4))),privat=rimuru[_0x3ce073(0xd7)][_0x3ce073(0xb8)][_0x3ce073(0xce)](_0xf04cf7=>_0xf04cf7[_0x3ce073(0xc0)][_0x3ce073(0xba)](_0x3ce073(0xc2))),ram2=(process[_0x3ce073(0xd0)]()[_0x3ce073(0xc8)]/0x400/0x400)[_0x3ce073(0xb4)](0x2)+_0x3ce073(0xc4)+Math[_0x3ce073(0xd6)](require('os')[_0x3ce073(0xc9)]/0x400/0x400)+'MB',charger=''+(charging?_0x3ce073(0xbb):_0x3ce073(0xcf)),uptime=process['uptime'](),timestampe=speed(),totalChat=await rimuru[_0x3ce073(0xd7)]['all'](),latensie=speed()-timestampe,total=math(groups[_0x3ce073(0xb6)]+'*'+privat[_0x3ce073(0xb6)]),menu=_0x3ce073(0xbf)+prefix+_0x3ce073(0xae)+prefix+_0x3ce073(0xcb)+prefix+_0x3ce073(0xad)+prefix+_0x3ce073(0xbe)+prefix+'cerpen\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x3ce073(0xc5)+prefix+_0x3ce073(0xcc)+botName+'\x20」',buttons=[{'buttonId':prefix+_0x3ce073(0xbd),'buttonText':{'displayText':_0x3ce073(0xd2)},'type':0x1}],imageMsg=(await rimuru[_0x3ce073(0xca)](fs[_0x3ce073(0xb7)](_0x3ce073(0xcd)),'imageMessage',{'thumbnail':Bfake,'contextInfo':{'forwardingScore':0x3dd,'isForwarded':!![]}}))[_0x3ce073(0xd3)],buttonsMessage={'contentText':''+menu,'footerText':_0x3ce073(0xc3),'imageMessage':imageMsg,'buttons':buttons,'headerType':0x1},prep=await rimuru[_0x3ce073(0xaf)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply,'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'mentionedJid':[senderr]}}),rimuru[_0x3ce073(0xc6)](prep);
                  break           
       case 'quotesislami':
       case 'quotesislam':
          if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
          get_result = await fetchJson(`https://api.lolhuman.xyz/api/quotes/islami?apikey=PunyaIkyAds`)
           reply(get_result.result)       
         break      
             case 'randomtext ':
          case  'randomtextmenu':
                 function _0x3ff3(_0x2c1394,_0x4de091){var _0x11bc3d=_0x11bc();return _0x3ff3=function(_0x3ff3fc,_0x321b25){_0x3ff3fc=_0x3ff3fc-0x1a0;var _0x3c6653=_0x11bc3d[_0x3ff3fc];return _0x3c6653;},_0x3ff3(_0x2c1394,_0x4de091);}var _0x1a50dd=_0x3ff3;function _0x11bc(){var _0xa1a06b=['heapUsed','quotesislami\x0a\x0a\x20\x20\x20\x20│❏\x20','quotes\x0a\x0a\x20\x20\x20\x20│❏\x20','length','246983qKPLwq','MB\x20/\x20','totalmem','jid','toFixed','chats','randomnama\x0a\x0a\x20\x20\x20\x20│\x0a\x0a\x20\x20\x20\x20└─────「\x20','S&K','66225gPXdtv','round','4inmEZz','relayWAMessage','prepareMessageMedia','quotesdiLan\x0a\x0a\x20\x20\x20\x20│❏\x20','g.us','412856IXaqPa','5Glqnex','181092MoLToO','230KAkqSj','3181500plBCED','prepareMessageFromContent','quotesimage\x0a\x0a\x20\x20\x20\x20│❏\x20','pantun\x0a\x0a\x20\x20\x20\x20│❏\x20','memoryUsage','katabijak\x0a\x0a\x20\x20\x20\x20│❏\x20','649634PIwfvf','lagi\x20dicas','array','endsWith','uptime','bucin\x0a\x0a\x20\x20\x20\x20│❏\x20','54AspBps','all','\x0a\x0a\x20\x20\x20\x20┌───「\x20Random\x20Text\x20Menu\x20」\x0a\x0a\x20\x20\x20\x20│\x0a\x0a\x20\x20\x20\x20│❏\x20','4494910jvUqhY','readFileSync','rules','imageMessage'];_0x11bc=function(){return _0xa1a06b;};return _0x11bc();}(function(_0x3e9144,_0x1065ea){var _0x400d3b=_0x3ff3,_0x3dcb9c=_0x3e9144();while(!![]){try{var _0x1b06f0=-parseInt(_0x400d3b(0x1c2))/0x1+-parseInt(_0x400d3b(0x1b3))/0x2*(-parseInt(_0x400d3b(0x1b1))/0x3)+parseInt(_0x400d3b(0x1bc))/0x4+parseInt(_0x400d3b(0x1b9))/0x5*(parseInt(_0x400d3b(0x1ba))/0x6)+-parseInt(_0x400d3b(0x1a1))/0x7+parseInt(_0x400d3b(0x1b8))/0x8*(parseInt(_0x400d3b(0x1c8))/0x9)+parseInt(_0x400d3b(0x1bb))/0xa*(parseInt(_0x400d3b(0x1a9))/0xb);if(_0x1b06f0===_0x1065ea)break;else _0x3dcb9c['push'](_0x3dcb9c['shift']());}catch(_0x2bfe15){_0x3dcb9c['push'](_0x3dcb9c['shift']());}}}(_0x11bc,0x62a24));if(!isRegistered)return sendButMessage(from,daftar1,daftar2,daftar3,{'quoted':freply});groups=rimuru[_0x1a50dd(0x1ae)][_0x1a50dd(0x1c4)]['filter'](_0x49d192=>_0x49d192['jid']['endsWith'](_0x1a50dd(0x1b7))),privat=rimuru['chats'][_0x1a50dd(0x1c4)]['filter'](_0x2a7635=>_0x2a7635[_0x1a50dd(0x1ac)][_0x1a50dd(0x1c5)]('s.whatsapp.net')),ram2=(process[_0x1a50dd(0x1c0)]()[_0x1a50dd(0x1a5)]/0x400/0x400)[_0x1a50dd(0x1ad)](0x2)+_0x1a50dd(0x1aa)+Math[_0x1a50dd(0x1b2)](require('os')[_0x1a50dd(0x1ab)]/0x400/0x400)+'MB',charger=''+(charging?_0x1a50dd(0x1c3):'ga\x20dicas'),uptime=process[_0x1a50dd(0x1c6)](),timestampe=speed(),totalChat=await rimuru[_0x1a50dd(0x1ae)][_0x1a50dd(0x1c9)](),latensie=speed()-timestampe,total=math(groups[_0x1a50dd(0x1a8)]+'*'+privat[_0x1a50dd(0x1a8)]),menu=_0x1a50dd(0x1a0)+prefix+_0x1a50dd(0x1a7)+prefix+_0x1a50dd(0x1b6)+prefix+'quotesanime\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x1a50dd(0x1be)+prefix+_0x1a50dd(0x1a6)+prefix+'faktaunik\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x1a50dd(0x1c1)+prefix+_0x1a50dd(0x1bf)+prefix+_0x1a50dd(0x1c7)+prefix+_0x1a50dd(0x1af)+botName+'\x20」',buttons=[{'buttonId':prefix+_0x1a50dd(0x1a3),'buttonText':{'displayText':_0x1a50dd(0x1b0)},'type':0x1}],imageMsg=(await rimuru[_0x1a50dd(0x1b5)](fs[_0x1a50dd(0x1a2)]('./media/Menu.jpg'),_0x1a50dd(0x1a4),{'thumbnail':Bfake,'contextInfo':{'forwardingScore':0x3dd,'isForwarded':!![]}}))[_0x1a50dd(0x1a4)],buttonsMessage={'contentText':''+menu,'footerText':'ᴊᴀɴɢᴀɴ\x20ᴘᴇʀɴᴀʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20sᴇsᴇᴏʀᴀɴɢ\x0aʏᴀɴɢ\x20ᴍᴀsɪʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20ᴏʀᴀɴɢ\x20ʟᴀɪɴ\x0a\x0a♥️\x20ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru','imageMessage':imageMsg,'buttons':buttons,'headerType':0x1},prep=await rimuru[_0x1a50dd(0x1bd)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply,'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'mentionedJid':[senderr]}}),rimuru[_0x1a50dd(0x1b4)](prep);
               break
   //=========================================================            
           case 'ownermenu':
        case  'menuowner':            
 var _0x35bbe3=_0x5a01;function _0x5a01(_0x16a186,_0x5be40e){var _0x542ce9=_0x542c();return _0x5a01=function(_0x5a0188,_0x32f12b){_0x5a0188=_0x5a0188-0xfb;var _0x71d9f9=_0x542ce9[_0x5a0188];return _0x71d9f9;},_0x5a01(_0x16a186,_0x5be40e);}(function(_0x2bb2b1,_0x3bf391){var _0x3e3156=_0x5a01,_0x22474a=_0x2bb2b1();while(!![]){try{var _0xe6bcf3=parseInt(_0x3e3156(0x114))/0x1+parseInt(_0x3e3156(0xfd))/0x2*(parseInt(_0x3e3156(0x113))/0x3)+-parseInt(_0x3e3156(0xfe))/0x4*(-parseInt(_0x3e3156(0x110))/0x5)+-parseInt(_0x3e3156(0x10e))/0x6*(parseInt(_0x3e3156(0x10f))/0x7)+parseInt(_0x3e3156(0x115))/0x8*(parseInt(_0x3e3156(0x10a))/0x9)+parseInt(_0x3e3156(0x101))/0xa+-parseInt(_0x3e3156(0x107))/0xb*(parseInt(_0x3e3156(0x109))/0xc);if(_0xe6bcf3===_0x3bf391)break;else _0x22474a['push'](_0x22474a['shift']());}catch(_0x378a6c){_0x22474a['push'](_0x22474a['shift']());}}}(_0x542c,0x45efa),wibu='\x0a\x0a\x20𝐋𝐈𝐒𝐓\x20𝐌𝐄𝐍𝐔\x0a\x0a▹\x20'+prefix+_0x35bbe3(0xfc)+prefix+'term\x0a\x0a▹\x20'+prefix+_0x35bbe3(0x108)+prefix+'public\x0a\x0a▹\x20'+prefix+_0x35bbe3(0x112)+prefix+_0x35bbe3(0x100)+prefix+'clearall\x0a\x0a▹\x20'+prefix+_0x35bbe3(0x10b)+prefix+_0x35bbe3(0xff)+prefix+_0x35bbe3(0x111)+prefix+'addimage\x0a\x0a▹\x20'+prefix+'getimage\x0a\x0a▹\x20'+prefix+_0x35bbe3(0x106)+prefix+_0x35bbe3(0x104)+prefix+'slow\x0a\x0a▹\x20'+prefix+_0x35bbe3(0x10b)+prefix+'join\x20*link\x20gc*\x0a\x0a▹\x20'+prefix+_0x35bbe3(0x105)+prefix+_0x35bbe3(0xfb)+prefix+'addupdate\x20*fiturnya*\x0a\x0a▹\x20'+prefix+'exif\x20*nama|author*\x0a\x0a▹\x20'+prefix+'sewa\x20add/del\x20*waktunya*\x0a\x0a▹\x20'+prefix+_0x35bbe3(0x103)+prefix+_0x35bbe3(0x102),sendButMessage(from,wibu,'ᴄʀᴇᴀᴛᴇᴅ\x20ʙʏ\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru',[{'buttonId':prefix+_0x35bbe3(0x10d),'buttonText':{'displayText':_0x35bbe3(0x10c)},'type':0x1}]));function _0x542c(){var _0x555328=['self\x0a\x0a▹\x20','15634260oLYjOh','9PtXvzm','leaveall\x0a\x0a▹\x20','⬡\x20BACK\x20TO\x20MENU\x20','menu','2748wKBeHW','3101WbxwYa','233570KygTCL','getvn\x0a\x0a▹\x20','eval\x0a\x0a▹\x20','14277TeVVOK','508870TNeeYo','2616584ErQDEo','getquoted\x0a\x0a▹\x20','bc\x20*teks*\x0a\x0a▹\x20','68WNQiqF','40DNdrgT','addvn\x0a\x0a▹\x20','reset\x0a\x0a▹\x20','3273180pOmFnK','premium\x20del\x20@tag|nomor\x0a\x0a','premium\x20add\x20@tag|nomor\x0a\x0a▹\x20','getvideo\x0a\x0a▹\x20','shutdown\x0a\x0a▹\x20','addvideo\x0a\x0a▹\x20','11WtebPq'];_0x542c=function(){return _0x555328;};return _0x542c();}
        break;
    //=========================================================
    case 'wibumenu':
        case  'menuwibu':
              function _0x1332(_0x461fc3,_0x396bce){var _0x54f6d6=_0x54f6();return _0x1332=function(_0x133216,_0xb07286){_0x133216=_0x133216-0x14d;var _0x50cb90=_0x54f6d6[_0x133216];return _0x50cb90;},_0x1332(_0x461fc3,_0x396bce);}var _0x2c1eae=_0x1332;(function(_0x4c17e0,_0x47e73d){var _0x35d8be=_0x1332,_0x298fb2=_0x4c17e0();while(!![]){try{var _0x42abcc=parseInt(_0x35d8be(0x16c))/0x1+parseInt(_0x35d8be(0x14e))/0x2*(-parseInt(_0x35d8be(0x156))/0x3)+parseInt(_0x35d8be(0x163))/0x4*(-parseInt(_0x35d8be(0x175))/0x5)+-parseInt(_0x35d8be(0x16d))/0x6+-parseInt(_0x35d8be(0x15c))/0x7+-parseInt(_0x35d8be(0x165))/0x8*(-parseInt(_0x35d8be(0x177))/0x9)+-parseInt(_0x35d8be(0x152))/0xa*(-parseInt(_0x35d8be(0x169))/0xb);if(_0x42abcc===_0x47e73d)break;else _0x298fb2['push'](_0x298fb2['shift']());}catch(_0x57f900){_0x298fb2['push'](_0x298fb2['shift']());}}}(_0x54f6,0xe6ef1),groups=rimuru['chats'][_0x2c1eae(0x17f)][_0x2c1eae(0x15d)](_0x545b79=>_0x545b79[_0x2c1eae(0x16f)][_0x2c1eae(0x16a)](_0x2c1eae(0x15e))),privat=rimuru[_0x2c1eae(0x17a)][_0x2c1eae(0x17f)][_0x2c1eae(0x15d)](_0x249824=>_0x249824['jid'][_0x2c1eae(0x16a)]('s.whatsapp.net')),ram2=(process[_0x2c1eae(0x14d)]()[_0x2c1eae(0x16b)]/0x400/0x400)[_0x2c1eae(0x155)](0x2)+_0x2c1eae(0x151)+Math['round'](require('os')[_0x2c1eae(0x153)]/0x400/0x400)+'MB',charger=''+(charging?'lagi\x20dicas':'ga\x20dicas'),uptime=process[_0x2c1eae(0x150)](),timestampe=speed(),totalChat=await rimuru[_0x2c1eae(0x17a)]['all'](),latensie=speed()-timestampe,total=math(groups[_0x2c1eae(0x14f)]+'*'+privat[_0x2c1eae(0x14f)]),menu=_0x2c1eae(0x157)+prefix+_0x2c1eae(0x17b)+prefix+_0x2c1eae(0x179)+prefix+'doge\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x2c1eae(0x174)+prefix+_0x2c1eae(0x15b)+prefix+_0x2c1eae(0x178)+prefix+_0x2c1eae(0x15a)+prefix+_0x2c1eae(0x158)+prefix+_0x2c1eae(0x176)+prefix+_0x2c1eae(0x173)+prefix+_0x2c1eae(0x171)+prefix+_0x2c1eae(0x159)+prefix+_0x2c1eae(0x166)+prefix+_0x2c1eae(0x182)+prefix+_0x2c1eae(0x15f)+prefix+_0x2c1eae(0x161)+prefix+_0x2c1eae(0x160)+prefix+_0x2c1eae(0x181)+prefix+'storyanime\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+'nakanomiku\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+'nakanoikyy\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+'nakanoitsuki\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x2c1eae(0x180)+prefix+'nhentai\x20*code*\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x2c1eae(0x172)+prefix+'nekopoi3d\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+'nekopoicosplay\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x2c1eae(0x164)+botName+'\x20」',buttons=[{'buttonId':prefix+_0x2c1eae(0x154),'buttonText':{'displayText':_0x2c1eae(0x17d)},'type':0x1}],imageMsg=(await rimuru[_0x2c1eae(0x170)](fs[_0x2c1eae(0x16e)](_0x2c1eae(0x168)),_0x2c1eae(0x167),{'thumbnail':Bfake,'contextInfo':{'forwardingScore':0x3dd,'isForwarded':!![]}}))[_0x2c1eae(0x167)],buttonsMessage={'contentText':''+menu,'footerText':_0x2c1eae(0x162),'imageMessage':imageMsg,'buttons':buttons,'headerType':0x1},prep=await rimuru[_0x2c1eae(0x17e)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply,'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'mentionedJid':[senderr]}}),rimuru[_0x2c1eae(0x17c)](prep));function _0x54f6(){var _0x199b2e=['MB\x20/\x20','23264620FpxcBO','totalmem','rules','toFixed','78ToHWkh','\x0a\x0a\x20\x20\x20\x20┌───「\x20WIBU\x20MENU\x20」\x0a\x0a\x20\x20\x20\x20│\x0a\x0a\x20\x20\x20\x20│❏\x20','milf\x0a\x0a\x20\x20\x20\x20│❏\x20','hentai\x0a\x0a\x20\x20\x20\x20│❏\x20','waifu\x0a\x0a\x20\x20\x20\x20│❏\x20','lolivideo\x20\x0a\x0a\x20\x20\x20\x20│❏\x20','2649409VNxcLu','filter','g.us','kusonime\x0a\x0a\x20\x20\x20\x20│❏\x20','otakudesu\x0a\x0a\x20\x20\x20\x20│❏\x20','megumin\x0a\x0a\x20\x20\x20\x20│❏\x20','ᴊᴀɴɢᴀɴ\x20ᴘᴇʀɴᴀʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20sᴇsᴇᴏʀᴀɴɢ\x0aʏᴀɴɢ\x20ᴍᴀsɪʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20ᴏʀᴀɴɢ\x20ʟᴀɪɴ\x0a\x0a♥️\x20ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru','4zIKpjd','nekopoisearch\x0a\x0a\x20\x20\x20\x20└─────「\x20','88nAbQBu','cosplay\x0a\x0a\x20\x20\x20\x20│❏\x20','imageMessage','./media/Menu.jpg','22AdSBZo','endsWith','heapUsed','249815SAPKND','10050582iYvsyw','readFileSync','jid','prepareMessageMedia','sagiri\x0a\x0a\x20\x20\x20\x20│❏\x20','nekopoi\x20*link*\x0a\x0a\x20\x20\x20\x20│❏\x20','kanna\x0a\x0a\x20\x20\x20\x20│❏\x20','anime\x20\x0a\x0a\x20\x20\x20\x20│❏\x20','9174835cKnQdo','neko\x0a\x0a\x20\x20\x20\x20│❏\x20','450189NtBiCs','husbu\x0a\x0a\x20\x20\x20\x20│❏\x20','manga\x0a\x0a\x20\x20\x20\x20│❏\x20','chats','loli\x0a\x0a\x20\x20\x20\x20│❏\x20','relayWAMessage','S&K','prepareMessageFromContent','array','otakuongoing\x0a\x0a\x20\x20\x20\x20│❏\x20','doujindesu\x0a\x0a\x20\x20\x20\x20│❏\x20','wallnime\x0a\x0a\x20\x20\x20\x20│❏\x20','memoryUsage','47578xucszA','length','uptime'];_0x54f6=function(){return _0x199b2e;};return _0x54f6();}
               break
    //=========================================================
    case  'menudownload':
 case 'downloadmenu':
          var _0xf7bdf4=_0x221d;function _0x4393(){var _0x38af53=['teledl\x0a\x0a\x20\x20\x20\x20│❏\x20','g.us','length','12082tGNRYE','chats','nhentaipdf\x20*code*\x0a\x0a\x20\x20\x20\x20└─────「\x20','imageMessage','uptime','heapUsed','2024mTbwVi','S&K','ythd\x0a\x0a\x20\x20\x20\x20│❏\x20','rules','tiktokaudio\x0a\x0a\x20\x20\x20\x20│❏\x20','./media/Menu.jpg','igdl\x0a\x0a\x20\x20\x20\x20│❏\x20','filter','prepareMessageFromContent','11fdSBco','toFixed','2550633UnOYka','6292015hCZykq','all','relayWAMessage','\x0a\x0a\x20\x20\x20\x20┌───「\x20DOWNLOADER\x20」\x0a\x0a\x20\x20\x20\x20│\x0a\x0a\x20\x20\x20\x20│❏\x20','play\x0a\x0a\x20\x20\x20\x20│❏\x20','tiktoknowm\x0a\x0a\x20\x20\x20\x20│❏\x20','prepareMessageMedia','s.whatsapp.net','igdl\x202\x0a\x0a\x20\x20\x20\x20│❏\x20','ytmp4\x0a\x0a\x20\x20\x20\x20│❏\x20','ᴊᴀɴɢᴀɴ\x20ᴘᴇʀɴᴀʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20sᴇsᴇᴏʀᴀɴɢ\x0aʏᴀɴɢ\x20ᴍᴀsɪʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20ᴏʀᴀɴɢ\x20ʟᴀɪɴ\x0a\x0a♥️\x20ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru','tiktok\x0a\x0a\x20\x20\x20\x20│❏\x20','lagi\x20dicas','linedl\x0a\x0a\x20\x20\x20\x20│❏\x20','jid','9378YAJmHP','26047790yZeTOF','3988404zutEID','getstory\x0a\x0a\x20\x20\x20\x20│❏\x20','memoryUsage','mediafire\x0a\x0a\x20\x20\x20\x20│❏\x20','77KSaoVn','4620203OuFqwL','round','igstory\x0a\x0a\x20\x20\x20\x20│❏\x20','6LbPRon','array'];_0x4393=function(){return _0x38af53;};return _0x4393();}function _0x221d(_0x5eb13e,_0x1556ad){var _0x4393ee=_0x4393();return _0x221d=function(_0x221df4,_0xcc8354){_0x221df4=_0x221df4-0x172;var _0x106655=_0x4393ee[_0x221df4];return _0x106655;},_0x221d(_0x5eb13e,_0x1556ad);}(function(_0xe0aedf,_0x4a1f6f){var _0x276561=_0x221d,_0x5dc360=_0xe0aedf();while(!![]){try{var _0x9d56fc=parseInt(_0x276561(0x180))/0x1*(-parseInt(_0x276561(0x189))/0x2)+-parseInt(_0x276561(0x19a))/0x3+parseInt(_0x276561(0x17c))/0x4+-parseInt(_0x276561(0x19b))/0x5+-parseInt(_0x276561(0x184))/0x6*(parseInt(_0x276561(0x181))/0x7)+parseInt(_0x276561(0x18f))/0x8*(parseInt(_0x276561(0x17a))/0x9)+-parseInt(_0x276561(0x17b))/0xa*(-parseInt(_0x276561(0x198))/0xb);if(_0x9d56fc===_0x4a1f6f)break;else _0x5dc360['push'](_0x5dc360['shift']());}catch(_0x94f5d6){_0x5dc360['push'](_0x5dc360['shift']());}}}(_0x4393,0x9a39a));if(!isRegistered)return sendButMessage(from,daftar1,daftar2,daftar3,{'quoted':freply});groups=rimuru[_0xf7bdf4(0x18a)][_0xf7bdf4(0x185)][_0xf7bdf4(0x196)](_0x50b9ff=>_0x50b9ff[_0xf7bdf4(0x179)]['endsWith'](_0xf7bdf4(0x187))),privat=rimuru[_0xf7bdf4(0x18a)]['array'][_0xf7bdf4(0x196)](_0x2ebbbb=>_0x2ebbbb[_0xf7bdf4(0x179)]['endsWith'](_0xf7bdf4(0x172))),ram2=(process[_0xf7bdf4(0x17e)]()[_0xf7bdf4(0x18e)]/0x400/0x400)[_0xf7bdf4(0x199)](0x2)+'MB\x20/\x20'+Math[_0xf7bdf4(0x182)](require('os')['totalmem']/0x400/0x400)+'MB',charger=''+(charging?_0xf7bdf4(0x177):'ga\x20dicas'),uptime=process[_0xf7bdf4(0x18d)](),timestampe=speed(),totalChat=await rimuru[_0xf7bdf4(0x18a)][_0xf7bdf4(0x19c)](),latensie=speed()-timestampe,total=math(groups[_0xf7bdf4(0x188)]+'*'+privat[_0xf7bdf4(0x188)]),menu=botName+_0xf7bdf4(0x19e)+prefix+'fb\x20\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0xf7bdf4(0x195)+prefix+_0xf7bdf4(0x173)+prefix+'twitter\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0xf7bdf4(0x176)+prefix+_0xf7bdf4(0x19f)+prefix+_0xf7bdf4(0x191)+prefix+'ytmp3\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0xf7bdf4(0x174)+prefix+'soundcloud\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0xf7bdf4(0x1a0)+prefix+_0xf7bdf4(0x193)+prefix+_0xf7bdf4(0x17f)+prefix+_0xf7bdf4(0x178)+prefix+_0xf7bdf4(0x186)+prefix+_0xf7bdf4(0x17d)+prefix+_0xf7bdf4(0x183)+prefix+_0xf7bdf4(0x18b)+botName+'\x20」',buttons=[{'buttonId':prefix+_0xf7bdf4(0x192),'buttonText':{'displayText':_0xf7bdf4(0x190)},'type':0x1}],imageMsg=(await rimuru[_0xf7bdf4(0x1a1)](fs['readFileSync'](_0xf7bdf4(0x194)),_0xf7bdf4(0x18c),{'thumbnail':Bfake,'contextInfo':{'forwardingScore':0x3dd,'isForwarded':!![]}}))[_0xf7bdf4(0x18c)],buttonsMessage={'contentText':''+menu,'footerText':_0xf7bdf4(0x175),'imageMessage':imageMsg,'buttons':buttons,'headerType':0x1},prep=await rimuru[_0xf7bdf4(0x197)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply,'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'mentionedJid':[senderr]}}),rimuru[_0xf7bdf4(0x19d)](prep);
               break             
        case 'othermenu':
        case  'menuother':
               var _0x4b9ee9=_0x1dee;function _0x1736(){var _0x37b0b5=['shopee\x20*product*\x0a\x0a\x20\x20\x20\x20│❏\x20','ga\x20dicas','toFixed','pinterest\x20*query*\x0a\x0a\x20\x20\x20\x20│❏\x20','chats','igstalk\x20*username*\x0a\x0a\x20\x20\x20\x20│❏\x20','google\x20*query*\x0a\x0a\x20\x20\x20\x20│❏\x20','475510kdhBzO','953460DdJaYI','totalmem','filter','975228jUtIxF','prepareMessageMedia','ytsearch\x20*query*\x0a\x0a\x20\x20\x20\x20│\x0a\x0a\x20\x20\x20\x20└─────「\x20','readFileSync','all','24ISunWo','relayWAMessage','imageMessage','nulis\x20*teks*\x0a\x0a\x20\x20\x20\x20│❏\x20','s.whatsapp.net','MB\x20/\x20','endsWith','array','githubstalk\x20*username*\x0a\x0a\x20\x20\x20\x20│❏\x20','lagi\x20dicas','900265zErgaB','heapUsed','round','prepareMessageFromContent','uptime','S&K','memoryUsage','2854881XPrNJG','./media/Menu.jpg','jid','playstore\x20*query*\x0a\x0a\x20\x20\x20\x20│❏\x20','1dzNPPu','10UwyMfr','315864cnKJia','295316kQznIg','image\x20*query*\x0a\x0a\x20\x20\x20\x20│❏\x20','brainly\x20*query*\x0a\x0a\x20\x20\x20\x20│❏\x20'];_0x1736=function(){return _0x37b0b5;};return _0x1736();}(function(_0x1c8db9,_0x2864e8){var _0x191134=_0x1dee,_0x299797=_0x1c8db9();while(!![]){try{var _0x114063=parseInt(_0x191134(0x118))/0x1*(parseInt(_0x191134(0x125))/0x2)+-parseInt(_0x191134(0x126))/0x3+parseInt(_0x191134(0x129))/0x4+parseInt(_0x191134(0x138))/0x5+parseInt(_0x191134(0x12e))/0x6*(parseInt(_0x191134(0x11b))/0x7)+parseInt(_0x191134(0x11a))/0x8+-parseInt(_0x191134(0x13f))/0x9*(parseInt(_0x191134(0x119))/0xa);if(_0x114063===_0x2864e8)break;else _0x299797['push'](_0x299797['shift']());}catch(_0x44d693){_0x299797['push'](_0x299797['shift']());}}}(_0x1736,0x39545));function _0x1dee(_0x1d0697,_0x4b292a){var _0x173679=_0x1736();return _0x1dee=function(_0x1dee2b,_0x3cd659){_0x1dee2b=_0x1dee2b-0x116;var _0x523246=_0x173679[_0x1dee2b];return _0x523246;},_0x1dee(_0x1d0697,_0x4b292a);}if(!isRegistered)return sendButMessage(from,daftar1,daftar2,daftar3,{'quoted':freply});groups=rimuru[_0x4b9ee9(0x122)][_0x4b9ee9(0x135)][_0x4b9ee9(0x128)](_0x1657e8=>_0x1657e8[_0x4b9ee9(0x116)][_0x4b9ee9(0x134)]('g.us')),privat=rimuru[_0x4b9ee9(0x122)][_0x4b9ee9(0x135)][_0x4b9ee9(0x128)](_0xd9eea=>_0xd9eea[_0x4b9ee9(0x116)]['endsWith'](_0x4b9ee9(0x132))),ram2=(process[_0x4b9ee9(0x13e)]()[_0x4b9ee9(0x139)]/0x400/0x400)[_0x4b9ee9(0x120)](0x2)+_0x4b9ee9(0x133)+Math[_0x4b9ee9(0x13a)](require('os')[_0x4b9ee9(0x127)]/0x400/0x400)+'MB',charger=''+(charging?_0x4b9ee9(0x137):_0x4b9ee9(0x11f)),uptime=process[_0x4b9ee9(0x13c)](),timestampe=speed(),totalChat=await rimuru[_0x4b9ee9(0x122)][_0x4b9ee9(0x12d)](),latensie=speed()-timestampe,total=math(groups['length']+'*'+privat['length']),menu='\x0a\x0a\x20\x20\x20\x20┌───「\x20Other\x20Menu\x20」\x0a\x0a\x20\x20\x20\x20│\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x4b9ee9(0x11d)+prefix+_0x4b9ee9(0x11e)+prefix+_0x4b9ee9(0x117)+prefix+'ssweb\x20*query*\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x4b9ee9(0x124)+prefix+_0x4b9ee9(0x11c)+prefix+_0x4b9ee9(0x121)+prefix+_0x4b9ee9(0x131)+prefix+'iguser\x20*ussername*\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x4b9ee9(0x123)+prefix+_0x4b9ee9(0x136)+prefix+'tiktokstalk\x20*ussername*\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+'img2url\x20*reply\x20foto*\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x4b9ee9(0x12b)+botName+'\x20」',buttons=[{'buttonId':prefix+'rules','buttonText':{'displayText':_0x4b9ee9(0x13d)},'type':0x1}],imageMsg=(await rimuru[_0x4b9ee9(0x12a)](fs[_0x4b9ee9(0x12c)](_0x4b9ee9(0x140)),_0x4b9ee9(0x130),{'thumbnail':Bfake,'contextInfo':{'forwardingScore':0x3dd,'isForwarded':!![]}}))['imageMessage'],buttonsMessage={'contentText':''+menu,'footerText':'ᴊᴀɴɢᴀɴ\x20ᴘᴇʀɴᴀʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20sᴇsᴇᴏʀᴀɴɢ\x0aʏᴀɴɢ\x20ᴍᴀsɪʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20ᴏʀᴀɴɢ\x20ʟᴀɪɴ\x0a\x0a♥️\x20ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru','imageMessage':imageMsg,'buttons':buttons,'headerType':0x1},prep=await rimuru[_0x4b9ee9(0x13b)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply,'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'mentionedJid':[senderr]}}),rimuru[_0x4b9ee9(0x12f)](prep);
               break
   //=========================================================            
        case 'gamemenu':
        case  'menugame':
              var _0x363cb2=_0x39d2;(function(_0x2864aa,_0x55542b){var _0x48f113=_0x39d2,_0x1bd5c6=_0x2864aa();while(!![]){try{var _0x3724f5=parseInt(_0x48f113(0xa1))/0x1+parseInt(_0x48f113(0xbb))/0x2*(parseInt(_0x48f113(0xa6))/0x3)+-parseInt(_0x48f113(0xbc))/0x4*(-parseInt(_0x48f113(0xcc))/0x5)+-parseInt(_0x48f113(0xba))/0x6+parseInt(_0x48f113(0xa4))/0x7+-parseInt(_0x48f113(0xbe))/0x8*(-parseInt(_0x48f113(0xac))/0x9)+-parseInt(_0x48f113(0xcf))/0xa;if(_0x3724f5===_0x55542b)break;else _0x1bd5c6['push'](_0x1bd5c6['shift']());}catch(_0x236895){_0x1bd5c6['push'](_0x1bd5c6['shift']());}}}(_0x50c0,0x99f4a));function _0x39d2(_0x3b4bd3,_0x5ef4ae){var _0x50c0c0=_0x50c0();return _0x39d2=function(_0x39d2f7,_0x31ce7){_0x39d2f7=_0x39d2f7-0x9b;var _0x3886a4=_0x50c0c0[_0x39d2f7];return _0x3886a4;},_0x39d2(_0x3b4bd3,_0x5ef4ae);}if(!isRegistered)return sendButMessage(from,daftar1,daftar2,daftar3,{'quoted':freply});function _0x50c0(){var _0x1eab75=['gelud\x20@tag\x0a\x0a\x20\x20\x20\x20│❏\x20','all','memoryUsage','heapUsed','prepareMessageFromContent','244185mpHyPl','imageMessage','g.us','6103920XKtTZl','array','limitgame\x0a\x0a\x20\x20\x20\x20│❏\x20','\x0a\x0a\x20\x20\x20\x20┌───「\x20Game\x20Menu\x20」\x0a\x0a\x20\x20\x20\x20│\x0a\x0a\x20\x20\x20\x20│❏\x20','readFileSync','jid','tebaklagu\x0a\x0a\x20\x20\x20\x20│❏\x20','s.whatsapp.net','98827gwUSop','asahotak\x0a\x0a\x20\x20\x20\x20│❏\x20','chats','4270021hDyJnY','voting\x0a\x0a\x20\x20\x20\x20│❏\x20','8019IVMTFE','kuismath\x0a\x0a\x20\x20\x20\x20│❏\x20','relayWAMessage','tebaktebakan\x0a\x0a\x20\x20\x20\x20│❏\x20','toFixed','lagi\x20dicas','879444RFKXXl','caklontong\x0a\x0a\x20\x20\x20\x20│❏\x20','tebakjenaka\x0a\x0a\x20\x20\x20\x20│❏\x20','S&K','./media/Menu.jpg','uptime','kimiakuis\x0a\x0a\x20\x20\x20\x20│❏\x20','rules','suit\x20*batu/kertas/gunting*\x0a\x0a\x20\x20\x20\x20│\x0a\x0a\x20\x20\x20\x20└─────「\x20','siapaaku\x0a\x0a\x20\x20\x20\x20│❏\x20','tictactoe\x20@tag\x0a\x0a\x20\x20\x20\x20│❏\x20','slot\x0a\x0a\x20\x20\x20\x20│❏\x20','MB\x20/\x20','prepareMessageMedia','1426068TXcwvz','174BoGeEg','28putQqd','tebaklirik\x0a\x0a\x20\x20\x20\x20│❏\x20','16TIAKtR','endsWith','round','filter','length','family100\x0a\x0a\x20\x20\x20\x20│❏\x20','totalmem','tebakbendera\x0a\x0a\x20\x20\x20\x20│❏\x20','tebakgambar\x0a\x0a\x20\x20\x20\x20│❏\x20'];_0x50c0=function(){return _0x1eab75;};return _0x50c0();}groups=rimuru[_0x363cb2(0xa3)][_0x363cb2(0xd0)]['filter'](_0x121ed8=>_0x121ed8[_0x363cb2(0x9e)][_0x363cb2(0xbf)](_0x363cb2(0xce))),privat=rimuru[_0x363cb2(0xa3)][_0x363cb2(0xd0)][_0x363cb2(0xc1)](_0x19dd03=>_0x19dd03[_0x363cb2(0x9e)]['endsWith'](_0x363cb2(0xa0))),ram2=(process[_0x363cb2(0xc9)]()[_0x363cb2(0xca)]/0x400/0x400)[_0x363cb2(0xaa)](0x2)+_0x363cb2(0xb8)+Math[_0x363cb2(0xc0)](require('os')[_0x363cb2(0xc4)]/0x400/0x400)+'MB',charger=''+(charging?_0x363cb2(0xab):'ga\x20dicas'),uptime=process[_0x363cb2(0xb1)](),timestampe=speed(),totalChat=await rimuru[_0x363cb2(0xa3)][_0x363cb2(0xc8)](),latensie=speed()-timestampe,total=math(groups[_0x363cb2(0xc2)]+'*'+privat[_0x363cb2(0xc2)]),menu=_0x363cb2(0x9c)+prefix+_0x363cb2(0xb7)+prefix+_0x363cb2(0xa5)+prefix+_0x363cb2(0x9b)+prefix+_0x363cb2(0xc7)+prefix+_0x363cb2(0xb6)+prefix+_0x363cb2(0xc3)+prefix+_0x363cb2(0xb5)+prefix+_0x363cb2(0xa7)+prefix+_0x363cb2(0xa2)+prefix+_0x363cb2(0xbd)+prefix+_0x363cb2(0x9f)+prefix+'tebakkata\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+'susunkata\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x363cb2(0xb2)+prefix+_0x363cb2(0xad)+prefix+_0x363cb2(0xae)+prefix+'tebakanime\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x363cb2(0xa9)+prefix+_0x363cb2(0xc6)+prefix+_0x363cb2(0xc5)+prefix+_0x363cb2(0xb4)+botName+'\x20」',buttons=[{'buttonId':prefix+_0x363cb2(0xb3),'buttonText':{'displayText':_0x363cb2(0xaf)},'type':0x1}],imageMsg=(await rimuru[_0x363cb2(0xb9)](fs[_0x363cb2(0x9d)](_0x363cb2(0xb0)),_0x363cb2(0xcd),{'thumbnail':Bfake,'contextInfo':{'forwardingScore':0x3dd,'isForwarded':!![]}}))[_0x363cb2(0xcd)],buttonsMessage={'contentText':''+menu,'footerText':'♥️\x20ⲂⲟⲦz\x20ʀɪᴍᴜʀᴜ࿐','imageMessage':imageMsg,'buttons':buttons,'headerType':0x1},prep=await rimuru[_0x363cb2(0xcb)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply,'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'mentionedJid':[senderr]}}),rimuru[_0x363cb2(0xa8)](prep);
               break
    //=========================================================
    //=================================StickerMenu====================================================================================================================================================          
    case 'stickermenu':
    case  'stikermenu':
                        function _0x4e8a(){var _0x323cd6=['MB\x20/\x20','quotemaker\x20text\x0a\x0a\x20\x20\x20\x20│❏\x20','fakedonald\x20tex\x0a\x0a\x20\x20\x20\x20│❏\x20','doge\x0a\x0a\x20\x20\x20\x20│❏\x20','take\x20pack|author\x0a\x0a\x20\x20\x20\x20│❏\x20','3964164rDCxlj','6NHwZwe','sticker\x20reply\x20foto/video\x0a\x0a\x20\x20\x20\x20│❏\x20','ttp4\x20text\x0a\x0a\x20\x20\x20\x20│❏\x20','emojitoimg\x20emoji\x0a\x0a\x20\x20\x20\x20│❏\x20','lagi\x20dicas','round','qrcode\x20text\x0a\x0a\x20\x20\x20\x20│\x0a\x0a\x20\x20\x20\x20└─────「\x20','1942241zOYxAP','toimg\x0a\x0a\x20\x20\x20\x20│❏\x20','ktpmaker\x20text\x0a\x0a\x20\x20\x20\x20│❏\x20','4IWFRAk','semoji\x20emoji\x0a\x0a\x20\x20\x20\x20│❏\x20','tolol\x20text\x0a\x0a\x20\x20\x20\x20│❏\x20','filter','S&K','s.whatsapp.net','rules','chats','array','ttp2\x20text\x0a\x0a\x20\x20\x20\x20│❏\x20','ᴊᴀɴɢᴀɴ\x20ᴘᴇʀɴᴀʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20sᴇsᴇᴏʀᴀɴɢ\x0aʏᴀɴɢ\x20ᴍᴀsɪʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20ᴏʀᴀɴɢ\x20ʟᴀɪɴ\x0a\x0a♥️\x20ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru','uptime','jid','3327530iIYcor','g.us','9xQqJlj','151cteVcl','ttg\x20teks\x0a\x0a\x20\x20\x20\x20│❏\x20','prepareMessageMedia','dadu\x0a\x0a\x20\x20\x20\x20│❏\x20','patrick\x0a\x0a\x20\x20\x20\x20│❏\x20','tiger\x0a\x0a\x20\x20\x20\x20│❏\x20','endsWith','amongus\x20text\x0a\x0a\x20\x20\x20\x20│❏\x20','ttp3\x20text\x0a\x0a\x20\x20\x20\x20│❏\x20','phkomen\x20text\x0a\x0a\x20\x20\x20\x20│❏\x20','bucinstick\x0a\x0a\x20\x20\x20\x20│❏\x20','ytkomen\x20text\x0a\x0a\x20\x20\x20\x20│❏\x20','semoji2\x0a\x0a\x20\x20\x20\x20│❏\x20','stickeranime\x0a\x0a\x20\x20\x20\x20│❏\x20','swm\x20pack|author\x0a\x0a\x20\x20\x20\x20│❏\x20','attp\x20teks\x0a\x0a\x20\x20\x20\x20│❏\x20','heapUsed','7470eXOlXp','tg\x20text\x0a\x0a\x20\x20\x20\x20│❏\x20','attp\x20text\x20\x0a\x0a\x20\x20\x20\x20│❏\x20','prepareMessageFromContent','13453KyVUqG','2325993KAVbpr','39ongAyD','7502136HSXVix','memoryUsage','totalmem','./media/Menu.jpg','smeme\x20teks|teks\x20\x0a\x0a\x20\x20\x20\x20│\x0a\x0a\x20\x20\x20\x20│❏\x20「\x20Creator\x20MENU\x20」\x0a\x0a\x20\x20\x20\x20│❏\x20','1546vNhuzG','length'];_0x4e8a=function(){return _0x323cd6;};return _0x4e8a();}function _0x3f04(_0x2ef19e,_0x4185ca){var _0x4e8a56=_0x4e8a();return _0x3f04=function(_0x3f0411,_0x1cc7c4){_0x3f0411=_0x3f0411-0x1af;var _0xb906e3=_0x4e8a56[_0x3f0411];return _0xb906e3;},_0x3f04(_0x2ef19e,_0x4185ca);}var _0x58b8aa=_0x3f04;(function(_0x21b810,_0x16e982){var _0x11d11c=_0x3f04,_0x5ccb41=_0x21b810();while(!![]){try{var _0x596194=parseInt(_0x11d11c(0x1e6))/0x1*(-parseInt(_0x11d11c(0x1c4))/0x2)+-parseInt(_0x11d11c(0x1bd))/0x3*(parseInt(_0x11d11c(0x1d6))/0x4)+parseInt(_0x11d11c(0x1e3))/0x5+-parseInt(_0x11d11c(0x1cc))/0x6*(parseInt(_0x11d11c(0x1d3))/0x7)+parseInt(_0x11d11c(0x1bf))/0x8*(parseInt(_0x11d11c(0x1e5))/0x9)+-parseInt(_0x11d11c(0x1b8))/0xa*(parseInt(_0x11d11c(0x1bc))/0xb)+-parseInt(_0x11d11c(0x1cb))/0xc*(-parseInt(_0x11d11c(0x1be))/0xd);if(_0x596194===_0x16e982)break;else _0x5ccb41['push'](_0x5ccb41['shift']());}catch(_0x34b523){_0x5ccb41['push'](_0x5ccb41['shift']());}}}(_0x4e8a,0x7ccf0));if(!isRegistered)return sendButMessage(from,daftar1,daftar2,daftar3,{'quoted':freply});groups=rimuru[_0x58b8aa(0x1dd)][_0x58b8aa(0x1de)][_0x58b8aa(0x1d9)](_0x8ef326=>_0x8ef326[_0x58b8aa(0x1e2)][_0x58b8aa(0x1ec)](_0x58b8aa(0x1e4))),privat=rimuru[_0x58b8aa(0x1dd)][_0x58b8aa(0x1de)][_0x58b8aa(0x1d9)](_0x3cb65b=>_0x3cb65b[_0x58b8aa(0x1e2)][_0x58b8aa(0x1ec)](_0x58b8aa(0x1db))),ram2=(process[_0x58b8aa(0x1c0)]()[_0x58b8aa(0x1b7)]/0x400/0x400)['toFixed'](0x2)+_0x58b8aa(0x1c6)+Math[_0x58b8aa(0x1d1)](require('os')[_0x58b8aa(0x1c1)]/0x400/0x400)+'MB',charger=''+(charging?_0x58b8aa(0x1d0):'ga\x20dicas'),uptime=process[_0x58b8aa(0x1e1)](),timestampe=speed(),totalChat=await rimuru[_0x58b8aa(0x1dd)]['all'](),latensie=speed()-timestampe,total=math(groups[_0x58b8aa(0x1c5)]+'*'+privat[_0x58b8aa(0x1c5)]),menu=botName+'\x0a\x0a\x20\x20\x20\x20┌───「\x20STICKER\x20NENU\x20」\x0a\x0a\x20\x20\x20\x20│\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x58b8aa(0x1e9)+prefix+_0x58b8aa(0x1d4)+prefix+_0x58b8aa(0x1c9)+prefix+_0x58b8aa(0x1b1)+prefix+_0x58b8aa(0x1ea)+prefix+_0x58b8aa(0x1eb)+prefix+_0x58b8aa(0x1b3)+prefix+_0x58b8aa(0x1d7)+prefix+_0x58b8aa(0x1cf)+prefix+_0x58b8aa(0x1b4)+prefix+_0x58b8aa(0x1cd)+prefix+_0x58b8aa(0x1e7)+prefix+_0x58b8aa(0x1ca)+prefix+_0x58b8aa(0x1b5)+prefix+_0x58b8aa(0x1c3)+prefix+_0x58b8aa(0x1b6)+prefix+'ttp1\x20text\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x58b8aa(0x1df)+prefix+_0x58b8aa(0x1af)+prefix+_0x58b8aa(0x1ce)+prefix+_0x58b8aa(0x1ba)+prefix+_0x58b8aa(0x1b9)+prefix+_0x58b8aa(0x1b2)+prefix+_0x58b8aa(0x1b0)+prefix+_0x58b8aa(0x1ed)+prefix+_0x58b8aa(0x1d8)+prefix+_0x58b8aa(0x1c8)+prefix+_0x58b8aa(0x1c7)+prefix+_0x58b8aa(0x1d5)+prefix+_0x58b8aa(0x1d2)+botName+'\x20」',buttons=[{'buttonId':prefix+_0x58b8aa(0x1dc),'buttonText':{'displayText':_0x58b8aa(0x1da)},'type':0x1}],imageMsg=(await rimuru[_0x58b8aa(0x1e8)](fs['readFileSync'](_0x58b8aa(0x1c2)),'imageMessage',{'thumbnail':Bfake,'contextInfo':{'forwardingScore':0x3dd,'isForwarded':!![]}}))['imageMessage'],buttonsMessage={'contentText':''+menu,'footerText':_0x58b8aa(0x1e0),'imageMessage':imageMsg,'buttons':buttons,'headerType':0x1},prep=await rimuru[_0x58b8aa(0x1bb)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply,'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'mentionedJid':[senderr]}}),rimuru['relayWAMessage'](prep);
                  break               
           case 'fakedonald':
          if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
                       if (args.length == 0) return reply(`Example: ${prefix + command} ʀɪᴍᴜʀᴜ࿐`)
                       ini_mn1k = args.join(" ")
                       ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/tweettrump?apikey=PunyaIkyAds&text=${ini_mn1k}`)
                       rimuru.sendMessage(from, ini_buffer, image, { quoted: freply})
                       break
//=========================================================================================
          case 'funmenu':
          case  'fun':
                 var _0x455122=_0x31bb;function _0x31bb(_0x707cfb,_0x440a10){var _0x5ee53c=_0x5ee5();return _0x31bb=function(_0x31bb43,_0x10246b){_0x31bb43=_0x31bb43-0x199;var _0xe8df16=_0x5ee53c[_0x31bb43];return _0xe8df16;},_0x31bb(_0x707cfb,_0x440a10);}(function(_0x1b02df,_0x484b1b){var _0x18cd0a=_0x31bb,_0x3ae7b3=_0x1b02df();while(!![]){try{var _0x29002a=parseInt(_0x18cd0a(0x1ab))/0x1+parseInt(_0x18cd0a(0x1c1))/0x2*(parseInt(_0x18cd0a(0x1a6))/0x3)+parseInt(_0x18cd0a(0x19d))/0x4*(-parseInt(_0x18cd0a(0x19f))/0x5)+parseInt(_0x18cd0a(0x1b4))/0x6+-parseInt(_0x18cd0a(0x1aa))/0x7+parseInt(_0x18cd0a(0x1b5))/0x8+parseInt(_0x18cd0a(0x1a8))/0x9*(-parseInt(_0x18cd0a(0x1b1))/0xa);if(_0x29002a===_0x484b1b)break;else _0x3ae7b3['push'](_0x3ae7b3['shift']());}catch(_0x1c8a72){_0x3ae7b3['push'](_0x3ae7b3['shift']());}}}(_0x5ee5,0x8acf9));if(!isRegistered)return sendButMessage(from,daftar1,daftar2,daftar3,{'quoted':freply});function _0x5ee5(){var _0x53f76c=['3OcSpIN','uptime','2914794fivyuw','babi\x0a\x0a\x20\x20\x20\x20│❏\x20','1994125lWzcSy','883885YGvaqP','cekganteng\x0a\x0a\x20\x20\x20\x20│❏\x20','readFileSync','ganteng\x0a\x0a\x20\x20\x20\x20│❏\x20','chats','round','50IjizAj','cekcantik\x0a\x0a\x20\x20\x20\x20│❏\x20','jid','6154668RrqKNp','235984xBzPFI','ᴊᴀɴɢᴀɴ\x20ᴘᴇʀɴᴀʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20sᴇsᴇᴏʀᴀɴɢ\x0aʏᴀɴɢ\x20ᴍᴀsɪʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20ᴏʀᴀɴɢ\x20ʟᴀɪɴ\x0a\x0a\x20♥️\x20ⲂⲟⲦz\x20ʀɪᴍᴜʀᴜ࿐','./media/Menu.jpg','relayWAMessage','array','length','\x0a\x0a\x20\x20\x20\x20┌───「\x20Fun\x20Menu\x20」\x0a\x0a\x20\x20\x20\x20│\x0a\x0a\x20\x20\x20\x20│❏\x20','lagi\x20dicas','kapankah\x0a\x0a\x20\x20\x20\x20│❏\x20','mining\x0a\x0a\x20\x20\x20\x20│❏\x20','g.us','S&K','1344778wkqVrW','endsWith','truth\x0a\x0a\x20\x20\x20\x20│❏\x20','totalmem','filter','memoryUsage','jadian\x0a\x0a\x20\x20\x20\x20│❏\x20','imageMessage','rate\x0a\x0a\x20\x20\x20\x20│❏\x20','jadian2\x0a\x0a\x20\x20\x20\x20│❏\x20','304BKefwZ','s.whatsapp.net','9130EQonSO','bisakah\x0a\x0a\x20\x20\x20\x20│❏\x20','beban\x0a\x0a\x20\x20\x20\x20│❏\x20','MB\x20/\x20','ga\x20dicas','apakah\x0a\x0a\x20\x20\x20\x20│❏\x20','prepareMessageMedia'];_0x5ee5=function(){return _0x53f76c;};return _0x5ee5();}groups=rimuru[_0x455122(0x1af)][_0x455122(0x1b9)][_0x455122(0x1c5)](_0x4d706a=>_0x4d706a[_0x455122(0x1b3)][_0x455122(0x1c2)](_0x455122(0x1bf))),privat=rimuru[_0x455122(0x1af)]['array'][_0x455122(0x1c5)](_0x1bdbb7=>_0x1bdbb7[_0x455122(0x1b3)][_0x455122(0x1c2)](_0x455122(0x19e))),ram2=(process[_0x455122(0x1c6)]()['heapUsed']/0x400/0x400)['toFixed'](0x2)+_0x455122(0x1a2)+Math[_0x455122(0x1b0)](require('os')[_0x455122(0x1c4)]/0x400/0x400)+'MB',charger=''+(charging?_0x455122(0x1bc):_0x455122(0x1a3)),uptime=process[_0x455122(0x1a7)](),timestampe=speed(),totalChat=await rimuru[_0x455122(0x1af)]['all'](),latensie=speed()-timestampe,total=math(groups[_0x455122(0x1ba)]+'*'+privat[_0x455122(0x1ba)]),menu=_0x455122(0x1bb)+prefix+_0x455122(0x1be)+prefix+'cekwatak\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+'cekmati\x20[nama]\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+'citacita\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+'toxic\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x455122(0x1a4)+prefix+_0x455122(0x1a0)+prefix+_0x455122(0x1bd)+prefix+_0x455122(0x19b)+prefix+_0x455122(0x199)+prefix+_0x455122(0x19c)+prefix+'cantik\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x455122(0x1ae)+prefix+_0x455122(0x1a1)+prefix+_0x455122(0x1a9)+prefix+_0x455122(0x1ac)+prefix+_0x455122(0x1b2)+prefix+_0x455122(0x1c3)+prefix+'dare\x0a\x0a\x20\x20\x20\x20│\x0a\x0a\x20\x20\x20\x20└─────「\x20'+botName+'\x20」',buttons=[{'buttonId':prefix+'rules','buttonText':{'displayText':_0x455122(0x1c0)},'type':0x1}],imageMsg=(await rimuru[_0x455122(0x1a5)](fs[_0x455122(0x1ad)](_0x455122(0x1b7)),_0x455122(0x19a),{'thumbnail':Bfake,'contextInfo':{'forwardingScore':0x3dd,'isForwarded':!![]}}))[_0x455122(0x19a)],buttonsMessage={'contentText':''+menu,'footerText':_0x455122(0x1b6),'imageMessage':imageMsg,'buttons':buttons,'headerType':0x1},prep=await rimuru['prepareMessageFromContent'](from,{'buttonsMessage':buttonsMessage},{'quoted':freply,'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'mentionedJid':[senderr]}}),rimuru[_0x455122(0x1b8)](prep);
               break
//=========================================================               
        case "delvote":
        if (fs.existsSync('./lib/vote/' + from + '.json') && fs.existsSync('./lib/' + from + '.json')) {
        deleteVote(from);
        reply("Sukses Menghapus sesi Voting Di Grup Ini");
        } else {
          reply("Belum ada sesi yang dimulai")
        }
        break;
      case "voting": // tambahin if (!isGroupAdmins) return; kalau mau khusus admin
        if (!isGroup) return reply(mess.only.group);
        if (fs.existsSync('./lib/vote/' + from + '.json') && fs.existsSync('./lib/' + from + '.json')) {
          reply("Sesi vote sedang berlangsung")
        } else {
          if (!q)
          return reply(
            "*Voting*\n\n" +
              prefix +
              "voting @tag target | reason  | 1 (1 = 1 Menit)"
          );
        if (
          editz.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 ||
          editz.message.extendedTextMessage.contextInfo == null
        ) {
          let id = editz.message.extendedTextMessage.contextInfo.mentionedJid[0];
          split = q.replace("@", "").split("|");
          if (!Number(split[2]))
            return reply(
              "masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit"
            );
          await mentions(
            "Vote " +
              "@" +
              id.split("@")[0] +
              " Di Mulai" +
              "\n\n" +
              `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,
            [id],
            true
          );
          addVote(from, split[1], split[0], split[2], reply);
          }
        }
        break;
  //------------------< Bokep Nih >-------------------  
            case 'infomenu':
        case  'menuinfo':
              var _0x361497=_0x5c5a;(function(_0x31f2cf,_0x3fc8fe){var _0x48a29a=_0x5c5a,_0x5096e3=_0x31f2cf();while(!![]){try{var _0x1ade82=-parseInt(_0x48a29a(0x92))/0x1*(-parseInt(_0x48a29a(0xa2))/0x2)+parseInt(_0x48a29a(0x7f))/0x3*(parseInt(_0x48a29a(0x82))/0x4)+parseInt(_0x48a29a(0xa0))/0x5+parseInt(_0x48a29a(0x7c))/0x6+parseInt(_0x48a29a(0x8e))/0x7+-parseInt(_0x48a29a(0x97))/0x8+-parseInt(_0x48a29a(0x8c))/0x9;if(_0x1ade82===_0x3fc8fe)break;else _0x5096e3['push'](_0x5096e3['shift']());}catch(_0x28c502){_0x5096e3['push'](_0x5096e3['shift']());}}}(_0x52bb,0x32023),groups=rimuru[_0x361497(0x9e)][_0x361497(0x89)][_0x361497(0x8d)](_0x1fc1c3=>_0x1fc1c3[_0x361497(0x88)][_0x361497(0x9a)](_0x361497(0xa5))),privat=rimuru[_0x361497(0x9e)][_0x361497(0x89)]['filter'](_0x5dfb54=>_0x5dfb54['jid']['endsWith']('s.whatsapp.net')),ram2=(process['memoryUsage']()[_0x361497(0x93)]/0x400/0x400)[_0x361497(0x87)](0x2)+'MB\x20/\x20'+Math[_0x361497(0x85)](require('os')[_0x361497(0x94)]/0x400/0x400)+'MB',charger=''+(charging?_0x361497(0x9c):_0x361497(0x99)),uptime=process[_0x361497(0x7d)](),timestampe=speed(),totalChat=await rimuru[_0x361497(0x9e)][_0x361497(0x91)](),latensie=speed()-timestampe,total=math(groups[_0x361497(0x84)]+'*'+privat[_0x361497(0x84)]),menu=botName+_0x361497(0x98)+prefix+_0x361497(0x8a)+prefix+'level\x0a\x0a▹\x20\x20'+prefix+_0x361497(0x8f)+prefix+_0x361497(0x9d)+prefix+_0x361497(0x80)+prefix+'botstat\x0a\x0a▹\x20\x20'+prefix+_0x361497(0x7e)+prefix+_0x361497(0xa4)+prefix+_0x361497(0xa6)+prefix+_0x361497(0xa1)+prefix+_0x361497(0x83)+prefix+_0x361497(0x8b)+prefix+_0x361497(0x9b)+prefix+_0x361497(0x86)+prefix+'listpremium\x0a\x0a▹\x20\x20'+prefix+'sourcecode\x0a\x0a▹\x20\x20'+prefix+'bugreport\x20*keluhan*',buttons=[{'buttonId':prefix+_0x361497(0x96),'buttonText':{'displayText':_0x361497(0x95)},'type':0x1}],imageMsg=(await rimuru['prepareMessageMedia'](fs[_0x361497(0xa7)](_0x361497(0x81)),_0x361497(0xa3),{'thumbnail':Bfake,'contextInfo':{'forwardingScore':0x3dd,'isForwarded':!![]}}))[_0x361497(0xa3)],buttonsMessage={'contentText':''+menu,'footerText':_0x361497(0x90),'imageMessage':imageMsg,'buttons':buttons,'headerType':0x4},prep=await rimuru[_0x361497(0x9f)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply,'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'mentionedJid':[senderr]}}),rimuru['relayWAMessage'](prep));function _0x5c5a(_0x37b71c,_0x305510){var _0x52bb5f=_0x52bb();return _0x5c5a=function(_0x5c5aa8,_0x1ae99a){_0x5c5aa8=_0x5c5aa8-0x7c;var _0x271aec=_0x52bb5f[_0x5c5aa8];return _0x271aec;},_0x5c5a(_0x37b71c,_0x305510);}function _0x52bb(){var _0x15d351=['ᴊᴀɴɢᴀɴ\x20ᴘᴇʀɴᴀʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20sᴇsᴇᴏʀᴀɴɢ\x0aʏᴀɴɢ\x20ᴍᴀsɪʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20ᴏʀᴀɴɢ\x20ʟᴀɪɴ\x0a\x0a♥️\x20ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru','all','104FxNnkc','heapUsed','totalmem','S&K','rules','316208NjiglK','\x0a\x0a\x20\x20\x20\x20\x0a\x0a\x20𝐋𝐈𝐒𝐓\x20𝐌𝐄𝐍𝐔\x0a\x0a▹\x20\x20','ga\x20dicas','endsWith','leaderboard\x0a\x0a▹\x20\x20','lagi\x20dicas','profile\x0a\x0a▹\x20\x20','chats','prepareMessageFromContent','1961065ZvUSUM','ping\x0a\x0a▹\x20\x20','1004KXuXCE','imageMessage','listsewa\x0a\x0a▹\x20\x20','g.us','owner\x0a\x0a▹\x20\x20','readFileSync','450024MvAiBS','uptime','sewabot\x0a\x0a▹\x20\x20','1154373eueqnx','waktu\x0a\x0a▹\x20\x20','./media/Menu.jpg','4ZpWEyz','runtime\x0a\x0a▹\x20\x20','length','round','cekpremium\x0a\x0a▹\x20\x20','toFixed','jid','array','update\x0a\x0a▹\x20\x20','donasi\x0a\x0a▹\x20\x20','6195195yWcpaG','filter','199500tnuFjQ','rules\x0a\x0a▹\x20\x20'];_0x52bb=function(){return _0x15d351;};return _0x52bb();}
               break
         //------------------< Bokep Woi Bokep >-------------------
         case 'pornmenu':
        case  '181+':
              var _0x349ef5=_0x4be6;function _0x1ae8(){var _0x12a730=['\x20bokep14\x0a\x0a▹\x20','endsWith','86244LSHlOZ','1297926BqnSHc','\x20bokep15\x0a\x0a▹\x20','79277exoWXO','4ccKwjI','\x20bokep22\x0a\x0a▹\x20','toFixed','\x20bokep1\x0a\x0a▹\x20','memoryUsage','\x20bokep9\x0a\x0a▹\x20','jid','ga\x20dicas','\x20bokep20\x0a\x0a▹\x20','552wrMBvx','2619010jyZBhj','\x20bokep12\x0a\x0a▹\x20','\x20bokep8\x0a\x0a▹\x20','heapUsed','array','\x20bokep16\x0a\x0a▹\x20','chats','\x20bokep19\x0a\x0a▹\x20','\x20bokep23\x0a\x0a▹\x20','\x20bokep24\x0a\x0a▹\x20','\x20bokep2𝟓\x0a\x0a\x20','\x20bokep13\x0a\x0a▹\x20','all','8gfZCPJ','\x20bokep11\x0a\x0a▹\x20','\x20bokep18\x0a\x0a▹\x20','471OAiVFt','\x20bokep7\x0a\x0a▹\x20','\x20bokep6\x0a\x0a▹\x20','g.us','totalmem','\x20bokep4\x0a\x0a▹\x20','25RDLBhu','\x20bokep10\x0a\x0a▹\x20','filter','852tCLrDl','3076mEPFuN','uptime','1328229qidEIR','length','ᴄʀᴇᴀᴛᴇᴅ\x20ʙʏ\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru'];_0x1ae8=function(){return _0x12a730;};return _0x1ae8();}function _0x4be6(_0x33881a,_0x29e38b){var _0x1ae8b4=_0x1ae8();return _0x4be6=function(_0x4be6d2,_0x29b046){_0x4be6d2=_0x4be6d2-0xef;var _0x4a3d5a=_0x1ae8b4[_0x4be6d2];return _0x4a3d5a;},_0x4be6(_0x33881a,_0x29e38b);}(function(_0x1a5104,_0x572352){var _0x42b6d8=_0x4be6,_0x5dd456=_0x1a5104();while(!![]){try{var _0x56d69d=parseInt(_0x42b6d8(0xff))/0x1*(-parseInt(_0x42b6d8(0xfb))/0x2)+parseInt(_0x42b6d8(0x119))/0x3*(-parseInt(_0x42b6d8(0xf4))/0x4)+-parseInt(_0x42b6d8(0xf0))/0x5*(parseInt(_0x42b6d8(0x108))/0x6)+-parseInt(_0x42b6d8(0xfc))/0x7*(parseInt(_0x42b6d8(0x116))/0x8)+-parseInt(_0x42b6d8(0xf6))/0x9+parseInt(_0x42b6d8(0x109))/0xa+parseInt(_0x42b6d8(0xfe))/0xb*(parseInt(_0x42b6d8(0xf3))/0xc);if(_0x56d69d===_0x572352)break;else _0x5dd456['push'](_0x5dd456['shift']());}catch(_0x44d88f){_0x5dd456['push'](_0x5dd456['shift']());}}}(_0x1ae8,0x23de6),groups=rimuru['chats'][_0x349ef5(0x10d)]['filter'](_0x1730dd=>_0x1730dd[_0x349ef5(0x105)][_0x349ef5(0xfa)](_0x349ef5(0x11c))),privat=rimuru[_0x349ef5(0x10f)][_0x349ef5(0x10d)][_0x349ef5(0xf2)](_0x4845e1=>_0x4845e1[_0x349ef5(0x105)][_0x349ef5(0xfa)]('s.whatsapp.net')),ram2=(process[_0x349ef5(0x103)]()[_0x349ef5(0x10c)]/0x400/0x400)[_0x349ef5(0x101)](0x2)+'MB\x20/\x20'+Math['round'](require('os')[_0x349ef5(0x11d)]/0x400/0x400)+'MB',charger=''+(charging?'lagi\x20dicas':_0x349ef5(0x106)),uptime=process[_0x349ef5(0xf5)](),timestampe=speed(),totalChat=await rimuru['chats'][_0x349ef5(0x115)](),latensie=speed()-timestampe,total=math(groups['length']+'*'+privat[_0x349ef5(0xf7)]),menu=botName+'\x0a\x0a⬡\x20𝐋𝐈𝐒𝐓\x20𝐌𝐄𝐍𝐔\x0a\x0a▹\x20'+prefix+'\x20bkp\x20*random*\x0a\x0a▹\x20'+prefix+_0x349ef5(0x102)+prefix+'\x20bokep2\x0a\x0a▹\x20'+prefix+'\x20bokep3\x0a\x0a▹\x20'+prefix+_0x349ef5(0xef)+prefix+'\x20bokep5\x0a\x0a▹\x20'+prefix+_0x349ef5(0x11b)+prefix+_0x349ef5(0x11a)+prefix+_0x349ef5(0x10b)+prefix+_0x349ef5(0x104)+prefix+_0x349ef5(0xf1)+prefix+_0x349ef5(0x117)+prefix+_0x349ef5(0x10a)+prefix+_0x349ef5(0x114)+prefix+_0x349ef5(0xf9)+prefix+_0x349ef5(0xfd)+prefix+_0x349ef5(0x10e)+prefix+'\x20bokep17\x0a\x0a▹\x20'+prefix+_0x349ef5(0x118)+prefix+_0x349ef5(0x110)+prefix+_0x349ef5(0x107)+prefix+'\x20bokep21\x0a\x0a▹\x20'+prefix+_0x349ef5(0x100)+prefix+_0x349ef5(0x111)+prefix+_0x349ef5(0x112)+prefix+_0x349ef5(0x113),sendButMessage(from,menu,_0x349ef5(0xf8),[{'buttonId':prefix+'menu','buttonText':{'displayText':'⬡\x20BACK\x20TO\x20MENU\x20'},'type':0x1}]));
        break;
   //addfiturbokep
         case 'bokep1':				            
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' , text, {quoted: freply})
				   break
	   case 'bokep2':
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' , text, {quoted: freply})
				   break
       case 'bokep3':	
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file', text, {quoted: reply })				    
				   break
	   case 'bokep4':	
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' , text, {quoted: freply})				   
				   break
	   case 'bokep5':	
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' , text, {quoted: freply})				   
				   break
	   case 'bokep6':	
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' , text, {quoted: freply})				   
				   break
        case 'bokep7':
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' , text, {quoted: freply})				   
				   break
       case 'bokep8':	
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' , text, {quoted: freply})				   
				   break
        case 'bokep10':	
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' , text, {quoted: freply})				   
				   break
       case 'bokep11':	
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' , text, {quoted: freply})				   
				   break
	  case 'bokep12':	   
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' , text, {quoted: freply})				   
				   break
	  case 'bokep13':	
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' , text, {quoted: freply})				   
				   break
       case 'bokep14':	
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' , text, {quoted: freply})				   
				   break
       case 'bokep15':
				qute = fs.readFileSync('media/Menu.jpg') 
			   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' , text, {quoted: freply})				   
				   break
       case 'bokep16':
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file' , text, {quoted: freply})				   
				   break
	   case 'bokep17':	
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ecly00at6adxs20/VID-20210107-WA1540.mp4/file' , text, {quoted: freply})				   
				   break
	   case 'bokep18':
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/7qkn8nuog22jsco/VID-20210107-WA1534.mp4/file' , text, {quoted: freply})				   
				   break
	   case 'bokep19':				 
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file' , text, {quoted: freply})				   
				   break
	   case 'bokep20':			
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/l7uzd4v9p95wpeb/VID-20210107-WA1541.mp4/file' , text, {quoted: freply})				   
				   break
	   case 'bokep21':				 
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/icpnxsr18j6l2pp/VID-20210107-WA1528.mp4/file' , text, {quoted: freply})				   
				   break
	   case 'bokep22':		
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/cscj9taoq5s5oj9/VID-20210107-WA1538.mp4/file' , text, {quoted: freply})				   
				   break
       case 'bokep23':	
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/saer161lthn4sy3/VID-20210107-WA1525.mp4/file' , text, {quoted: freply})				   
				   break
	   case 'bokep24':
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \\nhttps://www.mediafire.com/file/9jy3nj2b2ljjzxb/VID-20210107-WA1539.mp4/file' , text, {quoted: freply})				   
				   break 
break
       //------------------< ⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐ >-------------------
        case 'bc':
        case 'broadcast':
             if (!isOwner) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu100 = await rimuru.chats.all()
             if (isMedia && !editz.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(editz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru
             bc100 = await rimuru.downloadMediaMessage(encmedia)
             for (let _ of anu100) {
             rimuru.sendMessage(_.jid, bc100, image, {quoted: freply, caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu100) {
             rimuru.sendMessage(_.jid, 
			{"contentText": `*「 🕊️ PESAN SIARAN BOT 🕊️ 」*\n\n${body.slice(4)}`,
			"footerText": '©ⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐',
			"buttons": [
			{"buttonId": `${prefix}rules`,
			"buttonText": {"displayText": "Asyhiiap Bwang"
			},"type": "RESPONSE"}
			], "headerType": 'LOCATION',
			locationMessage: { degreesLatitude: '',
			degreesLongitude: '',
			jpegThumbnail: fakeimage,
			}}, MessageType.buttonsMessage )
}
             reply('Suksess broadcast')
}
             break
          case 'bc2':
      case 'broadcast2':
             if (!isOwner) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu = await rimuru.chats.all()
             if (isMedia && !editz.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(rimuru).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru
             bc = await rimuru.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             rimuru.sendMessage(_.jid, bc, image, {quoted:freply,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             sendMess(_.jid, `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`)
}
             reply('Suksess broadcast')
}
             break
        case 'infomenu':
        case  'menuinfo':
              var _0x12e98d=_0x2c1c;function _0x2c1c(_0x594f4d,_0x20dbc8){var _0x18c8f3=_0x18c8();return _0x2c1c=function(_0x2c1ce7,_0x4b9ea7){_0x2c1ce7=_0x2c1ce7-0x87;var _0x2e870d=_0x18c8f3[_0x2c1ce7];return _0x2e870d;},_0x2c1c(_0x594f4d,_0x20dbc8);}(function(_0x213dfd,_0x34fbd6){var _0x5ddca5=_0x2c1c,_0x40b4de=_0x213dfd();while(!![]){try{var _0x5446bb=-parseInt(_0x5ddca5(0x94))/0x1*(-parseInt(_0x5ddca5(0x8d))/0x2)+parseInt(_0x5ddca5(0xa2))/0x3+-parseInt(_0x5ddca5(0xb3))/0x4*(-parseInt(_0x5ddca5(0x91))/0x5)+parseInt(_0x5ddca5(0x9b))/0x6+parseInt(_0x5ddca5(0x8c))/0x7*(-parseInt(_0x5ddca5(0x8f))/0x8)+-parseInt(_0x5ddca5(0x98))/0x9+-parseInt(_0x5ddca5(0xab))/0xa;if(_0x5446bb===_0x34fbd6)break;else _0x40b4de['push'](_0x40b4de['shift']());}catch(_0x52b6cd){_0x40b4de['push'](_0x40b4de['shift']());}}}(_0x18c8,0x7fc25),groups=rimuru['chats']['array']['filter'](_0x3e23a2=>_0x3e23a2[_0x12e98d(0xa8)][_0x12e98d(0xa3)](_0x12e98d(0x92))),privat=rimuru[_0x12e98d(0x89)][_0x12e98d(0xac)][_0x12e98d(0xae)](_0xb2f9a6=>_0xb2f9a6['jid'][_0x12e98d(0xa3)](_0x12e98d(0xa1))),ram2=(process[_0x12e98d(0x99)]()[_0x12e98d(0x93)]/0x400/0x400)['toFixed'](0x2)+'MB\x20/\x20'+Math[_0x12e98d(0x9f)](require('os')[_0x12e98d(0x90)]/0x400/0x400)+'MB',charger=''+(charging?_0x12e98d(0x97):_0x12e98d(0x9a)),uptime=process[_0x12e98d(0x8b)](),timestampe=speed(),totalChat=await rimuru[_0x12e98d(0x89)][_0x12e98d(0x96)](),latensie=speed()-timestampe,total=math(groups[_0x12e98d(0xaa)]+'*'+privat[_0x12e98d(0xaa)]),menu=botName+_0x12e98d(0xa7)+prefix+_0x12e98d(0x9c)+prefix+_0x12e98d(0x95)+prefix+_0x12e98d(0xa0)+prefix+_0x12e98d(0x8a)+prefix+_0x12e98d(0xa9)+prefix+'botstat\x0a\x0a▹\x20\x20'+prefix+_0x12e98d(0xb0)+prefix+_0x12e98d(0xaf)+prefix+_0x12e98d(0x8e)+prefix+'ping\x0a\x0a▹\x20\x20'+prefix+_0x12e98d(0xa4)+prefix+_0x12e98d(0xad)+prefix+_0x12e98d(0x9d)+prefix+_0x12e98d(0xa5)+prefix+_0x12e98d(0x88)+prefix+'sourcecode\x0a\x0a▹\x20\x20'+prefix+_0x12e98d(0xb4),buttons=[{'buttonId':prefix+_0x12e98d(0xa6),'buttonText':{'displayText':_0x12e98d(0xb5)},'type':0x1}],imageMsg=(await rimuru['prepareMessageMedia'](fs['readFileSync'](_0x12e98d(0x87)),'imageMessage',{'thumbnail':Bfake,'contextInfo':{'forwardingScore':0x3dd,'isForwarded':!![]}}))['imageMessage'],buttonsMessage={'contentText':''+menu,'footerText':_0x12e98d(0xb2),'imageMessage':imageMsg,'buttons':buttons,'headerType':0x4},prep=await rimuru[_0x12e98d(0x9e)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply,'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'mentionedJid':[senderr]}}),rimuru[_0x12e98d(0xb1)](prep));function _0x18c8(){var _0x43fef4=['13272410aCZbkA','array','donasi\x0a\x0a▹\x20\x20','filter','listsewa\x0a\x0a▹\x20\x20','sewabot\x0a\x0a▹\x20\x20','relayWAMessage','♥️\x20ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru','246864Ktslqh','bugreport\x20*keluhan*','S&K','./media/Menu.jpg','listpremium\x0a\x0a▹\x20\x20','chats','profile\x0a\x0a▹\x20\x20','uptime','301357QHpyUs','8ixBjLx','owner\x0a\x0a▹\x20\x20','32NUogVE','totalmem','70JuOTco','g.us','heapUsed','249209CCtNYf','level\x0a\x0a▹\x20\x20','all','lagi\x20dicas','5425470VLJMxO','memoryUsage','ga\x20dicas','3861870lmKySs','update\x0a\x0a▹\x20\x20','leaderboard\x0a\x0a▹\x20\x20','prepareMessageFromContent','round','rules\x0a\x0a▹\x20\x20','s.whatsapp.net','363213ezDeJg','endsWith','runtime\x0a\x0a▹\x20\x20','cekpremium\x0a\x0a▹\x20\x20','rules','\x20\x20\x0a\x0a\x20𝐋𝐈𝐒𝐓\x20𝐌𝐄𝐍𝐔\x0a\x0a▹\x20\x20','jid','waktu\x0a\x0a▹\x20\x20','length'];_0x18c8=function(){return _0x43fef4;};return _0x18c8();}
               break
   //------------------< Islam Menu >-------------------            
 case 'islammenu':
        case  'islamimenu':           
 var _0x2e6507=_0x40e3;function _0x40e3(_0x5539fa,_0x1cb286){var _0x4c997b=_0x4c99();return _0x40e3=function(_0x40e34f,_0x3beeae){_0x40e34f=_0x40e34f-0x1e5;var _0x55f752=_0x4c997b[_0x40e34f];return _0x55f752;},_0x40e3(_0x5539fa,_0x1cb286);}(function(_0x3f277a,_0xfb1114){var _0x52538b=_0x40e3,_0xd005e9=_0x3f277a();while(!![]){try{var _0x1a27e4=-parseInt(_0x52538b(0x1e5))/0x1+parseInt(_0x52538b(0x1eb))/0x2+parseInt(_0x52538b(0x1f0))/0x3+parseInt(_0x52538b(0x1ee))/0x4+parseInt(_0x52538b(0x1ea))/0x5+-parseInt(_0x52538b(0x1f5))/0x6*(-parseInt(_0x52538b(0x1f4))/0x7)+parseInt(_0x52538b(0x1f9))/0x8*(-parseInt(_0x52538b(0x1f7))/0x9);if(_0x1a27e4===_0xfb1114)break;else _0xd005e9['push'](_0xd005e9['shift']());}catch(_0x506846){_0xd005e9['push'](_0xd005e9['shift']());}}}(_0x4c99,0xd0c75),menu='\x20'+botName+_0x2e6507(0x1f8)+pushname+_0x2e6507(0x1fa)+prefix+_0x2e6507(0x1ec)+prefix+'alquranaudio\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+'ayatkursi2\x0a\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x2e6507(0x1e6)+prefix+_0x2e6507(0x1f2)+prefix+_0x2e6507(0x1f3)+prefix+_0x2e6507(0x1f6)+prefix+_0x2e6507(0x1ed)+prefix+_0x2e6507(0x1e9)+prefix+_0x2e6507(0x1f1)+prefix+_0x2e6507(0x1fb)+botName+'\x20」',sendButMessage(from,menu,_0x2e6507(0x1e7),[{'buttonId':prefix+_0x2e6507(0x1ef),'buttonText':{'displayText':_0x2e6507(0x1e8)},'type':0x1}]));function _0x4c99(){var _0x54b6a0=['5217184tDXDlI','menu','562773oLiOng','ngaji\x20\x0a\x0a\x20\x20\x20\x20│❏\x20','kisahnabi\x0a\x0a\x20\x20\x20\x20│❏\x20','jadwalsholat\x0a\x0a\x20\x20\x20\x20│❏\x20','63LeMGwi','260526xqPQZT','listsurah\x0a\x0a\x20\x20\x20\x20│❏\x20','45OItkBP','\x0a\x0aʜᴀɪ\x20ᴋᴀᴋ\x20\x20👋🏻\x20','1363112MIagep','\x0a\x0aᴊᴀɴɢᴀɴ\x20ʟᴜᴘᴀ\x20ʙᴇʀsʏᴜᴋᴜʀ\x20ʜᴀʀɪ\x20ɪɴɪ\x20❤️\x20~\x0a\x0a\x20𝐋𝐈𝐒𝐓\x20𝐌𝐄𝐍𝐔\x0a\x0a\x20\x20\x20\x20┌───「\x20Sound\x20Islam\x20☪️\x20」\x0a\x0a\x20\x20\x20\x20│❏\x20','ngaji2\x0a\x0a\x20\x20\x20\x20│\x0a\x0a\x20\x20\x20\x20└─────「\x20','1458744PVlKGJ','asmaulhusna\x0a\x0a\x20\x20\x20\x20│❏\x20','ᴄʀᴇᴀᴛᴇᴅ\x20ʙʏ\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru','⬡\x20BACK\x20TO\x20MENU\x20','sholawatnabi\x0a\x0a\x20\x20\x20\x20│❏\x20','6082330GBzlmR','133408FewytM','alquran\x0a\x0a\x20\x20\x20\x20│❏\x20','tilawah\x0a\x0a\x20\x20\x20\x20│❏\x20'];_0x4c99=function(){return _0x54b6a0;};return _0x4c99();}
        break;
case 'carijodoh':
        case  'pencarijodoh':      
 function _0x5c93(_0x4862cb,_0xfcf3ed){var _0x35ae7e=_0x35ae();return _0x5c93=function(_0x5c9342,_0x22c2df){_0x5c9342=_0x5c9342-0x151;var _0x41f752=_0x35ae7e[_0x5c9342];return _0x41f752;},_0x5c93(_0x4862cb,_0xfcf3ed);}function _0x35ae(){var _0x180db2=['\x0a\x0a*ᴊᴀɴɢᴀɴ\x20ʟᴜᴘᴀ\x20ʙᴇʀsʏᴜᴋᴜʀ\x20ʜᴀʀɪ\x20ɪɴɪ*\x20❤️~\x0a\x0a*ᴄᴀʀɪ\x20ᴊᴏᴅᴏʜ*\x0a\x0a*ᴋᴇᴛɪᴋ\x20!sᴛᴀʀᴛ\x20ᴜɴᴛᴜᴋ\x20ᴍᴇᴍᴜʟᴀɪ\x20ᴘᴇɴᴄᴀʀɪᴀɴ*\x0a*ᴋᴇᴛɪᴋ\x20!ɴᴇxᴛ\x20ʙɪʟᴀ\x20ᴛɪᴅᴀᴋ\x20ᴅᴀᴘᴀᴛ\x20ᴀsᴘᴇᴋ\x20ʏɢ\x20ʙᴀɢᴜs*\x0a\x0a*ғɪᴛᴜʀ\x20ɪɴɪ\x20ʜᴀɴʏᴀ\x20ᴅᴀᴘᴀᴛ\x20ᴅɪ\x20ɢᴜɴᴀᴋᴀɴ\x20ᴅɪ\x20ᴘʀɪᴠᴀᴛ\x20ᴄʜᴀᴛ*\x0a*ᴅᴀɴ\x20ᴀɢᴀʀ\x20ғɪᴛᴜʀ\x20ʙᴇᴋᴇʀᴊᴀ\x20ʟᴀɴᴄᴀʀ\x20ʏᴀɴɢ\x20ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ\x20ᴍᴇɴᴜ\x20ғɪᴛᴜʀ\x20ɪɴɪ\x20ʜᴀʀᴜs\x20ʟᴇʙɪʜ\x20ᴅᴀʀɪ\x202\x20ᴏʀᴀɴɢ\x20ʏᴀ🤗*','\x0a\x0a*ʜᴀɪ\x20ᴋᴀᴋ*\x20👋🏻\x20','26362897FmFJhw','1581016YOafLe','45bGxZsN','789740OyvPaq','ᴄʀᴇᴀᴛᴇᴅ\x20ʙʏ\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru','5WVsvCI','2092490NeYjHB','5974052EKIaOM','3813156qlecii','12GrXUyn','10nxkoRx','menu','207986wHuagc'];_0x35ae=function(){return _0x180db2;};return _0x35ae();}var _0x3c3ac9=_0x5c93;(function(_0x5ea241,_0x1087cb){var _0x319f4f=_0x5c93,_0x27cfeb=_0x5ea241();while(!![]){try{var _0x1b9d8f=parseInt(_0x319f4f(0x154))/0x1*(parseInt(_0x319f4f(0x15b))/0x2)+parseInt(_0x319f4f(0x158))/0x3*(parseInt(_0x319f4f(0x152))/0x4)+parseInt(_0x319f4f(0x155))/0x5+-parseInt(_0x319f4f(0x157))/0x6+parseInt(_0x319f4f(0x156))/0x7+parseInt(_0x319f4f(0x15f))/0x8*(parseInt(_0x319f4f(0x151))/0x9)+parseInt(_0x319f4f(0x159))/0xa*(-parseInt(_0x319f4f(0x15e))/0xb);if(_0x1b9d8f===_0x1087cb)break;else _0x27cfeb['push'](_0x27cfeb['shift']());}catch(_0x41a568){_0x27cfeb['push'](_0x27cfeb['shift']());}}}(_0x35ae,0x83415),menu='\x20'+botName+_0x3c3ac9(0x15d)+pushname+_0x3c3ac9(0x15c),sendButMessage(from,menu,_0x3c3ac9(0x153),[{'buttonId':prefix+_0x3c3ac9(0x15a),'buttonText':{'displayText':'⬡\x20BACK\x20TO\x20MENU\x20'},'type':0x1}]));
        break;       
   case 'command':
               const _0x418d83=_0x3e9f;(function(_0x2bbf9c,_0x5ba12f){const _0x1d647d=_0x3e9f,_0xc4a3c6=_0x2bbf9c();while(!![]){try{const _0x3d134a=-parseInt(_0x1d647d(0x195))/0x1*(-parseInt(_0x1d647d(0x196))/0x2)+-parseInt(_0x1d647d(0x17c))/0x3*(-parseInt(_0x1d647d(0x177))/0x4)+parseInt(_0x1d647d(0x19a))/0x5*(-parseInt(_0x1d647d(0x1a9))/0x6)+-parseInt(_0x1d647d(0x17b))/0x7+parseInt(_0x1d647d(0x17f))/0x8*(parseInt(_0x1d647d(0x18d))/0x9)+-parseInt(_0x1d647d(0x17e))/0xa+-parseInt(_0x1d647d(0x184))/0xb*(parseInt(_0x1d647d(0x1a1))/0xc);if(_0x3d134a===_0x5ba12f)break;else _0xc4a3c6['push'](_0xc4a3c6['shift']());}catch(_0x5c74d3){_0xc4a3c6['push'](_0xc4a3c6['shift']());}}}(_0x1dbd,0x35031),list=[],listmenu=[_0x418d83(0x180),_0x418d83(0x19c),_0x418d83(0x1a6),'photoxy',_0x418d83(0x181),_0x418d83(0x182),'wibu2',_0x418d83(0x188),_0x418d83(0x19f),_0x418d83(0x193),_0x418d83(0x18a),_0x418d83(0x19d),_0x418d83(0x192),_0x418d83(0x190),'gamemenu',_0x418d83(0x178),_0x418d83(0x185),'infomenu',_0x418d83(0x197),_0x418d83(0x1a0),_0x418d83(0x1a5),_0x418d83(0x186)],listmenuu=['Menu\x20Group',_0x418d83(0x189),'soundmenu',_0x418d83(0x18b),_0x418d83(0x17d),_0x418d83(0x1a8),_0x418d83(0x179),_0x418d83(0x199),'18+\x20Menu',_0x418d83(0x198),'Islam\x20Menu','Wibu\x20Menu',_0x418d83(0x1aa),_0x418d83(0x1a2),_0x418d83(0x183),_0x418d83(0x1a7),_0x418d83(0x187),_0x418d83(0x191),_0x418d83(0x18c),'OwnerBot',_0x418d83(0x18f),_0x418d83(0x1a4)],nombor=0x1,startnum=0x0);for(let x of listmenu){const yy={'title':_0x418d83(0x1a3)+nombor++,'rows':[{'title':''+listmenuu[startnum++],'description':'','rowId':''+prefix+x}]};list[_0x418d83(0x18e)](yy);}function _0x3e9f(_0x33ea37,_0x25a45c){const _0x1dbd6d=_0x1dbd();return _0x3e9f=function(_0x3e9fc6,_0x2a19c5){_0x3e9fc6=_0x3e9fc6-0x177;let _0x27a4a2=_0x1dbd6d[_0x3e9fc6];return _0x27a4a2;},_0x3e9f(_0x33ea37,_0x25a45c);}function _0x1dbd(){const _0x551e1e=['owner','146652FhCLFX','Owner\x20Command','menu\x20ke','Rent\x20this\x20Bot','rimurugroup','soundmenu','For\x20Fun\x20Menu','Random\x20Image','157434eDwvZp','Sticker\x20Menu','19268fTlHmK','funmenu','Nsfw\x20Anime','\x20👋\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x0aI\x20Am\x20','927122GAhAmt','138EQyPwq','Ephoto\x20Menu','86250xFiUIR','158856LrlmhC','groupmenu','ephoto','randomimage','Game\x20Menu','473DJXOqZ','downloadmenu','sewabot','Downloader','storymenu','PencariJodoh','islammenu','Photo\x20Oky','Menu\x20Lainnya','153zWwFDh','push','Official\x20Group','ownermenu','Info\x20Menu','stickermenu','randomtext','\x0a🐥\x20Date\x20:\x20','350799WDxZMv','2mQhmBm','othermenu','RandomText','Movie&Story','5LADihD','\x0a\x0aWhatsApp\x20bots\x20that\x20can\x20Help\x20\x0a\x0aDoing\x20something\x0a\x0a','pencarijodoh','wibumenu','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','porno'];_0x1dbd=function(){return _0x551e1e;};return _0x1dbd();}listmsg(from,ucapanWaktu+'\x20'+pushname+_0x418d83(0x17a)+botName+_0x418d83(0x19b),'🐣\x20Day\x20:\x20'+week+'\x20'+weton+_0x418d83(0x194)+tanggal+_0x418d83(0x19e),list,{'quoted':freply});
               break              

///ISLAMI MENU  

// Islami //
case 'listsurah':
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=PunyaIkyAds`)
    get_result = get_result.result
    ini_txt = 'List Surah:\n'
    for (var x in get_result) {
        ini_txt += `${x}. ${get_result[x]}\n`
    }
    reply(ini_txt)
    break
case 'alquran':
    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
    urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=PunyaIkyAds`
    quran = await fetchJson(urls)
    result = quran.result
    ayat = result.ayat
    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
    for (var x of ayat) {
        arab = x.arab
        nomor = x.ayat
        latin = x.latin
        indo = x.indonesia
        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
    }
    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
    reply(ini_txt)
    break
case 'alquranaudio':
    if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
    surah = args[0]
    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=PunyaIkyAds`)
    await rimuru.sendMessage(from, ini_buffer, audio, { quoted: freply, mimetype: Mimetype.mp4Audio })
    break
case 'asmaulhusna':
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=PunyaIkyAds`)
    get_result = get_result.result
    ini_txt = `No : ${get_result.index}\n`
    ini_txt += `Latin: ${get_result.latin}\n`
    ini_txt += `Arab : ${get_result.ar}\n`
    ini_txt += `Indonesia : ${get_result.id}\n`
    ini_txt += `English : ${get_result.en}`
    reply(ini_txt)
    break
case 'kisahnabi':
    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=PunyaIkyAds`)
    get_result = get_result.result
    ini_txt = `Name : ${get_result.name}\n`
    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
    ini_txt += `Umur : ${get_result.age}\n`
    ini_txt += `Tempat : ${get_result.place}\n`
    ini_txt += `Story : \n${get_result.story}`
    reply(ini_txt)
    break
case 'jadwalsholat':
    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
    daerah = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=PunyaIkyAds`)
    get_result = get_result.result
    ini_txt = `Wilayah : ${get_result.wilayah}\n`
    ini_txt += `Tanggal : ${get_result.tanggal}\n`
    ini_txt += `Sahur : ${get_result.sahur}\n`
    ini_txt += `Imsak : ${get_result.imsak}\n`
    ini_txt += `Subuh : ${get_result.subuh}\n`
    ini_txt += `Terbit : ${get_result.terbit}\n`
    ini_txt += `Dhuha : ${get_result.dhuha}\n`
    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
    ini_txt += `Ashar : ${get_result.ashar}\n`
    ini_txt += `Maghrib : ${get_result.imsak}\n`
    ini_txt += `Isya : ${get_result.isya}`
    reply(ini_txt)
    break       
    ////SPORTAGE MENU
               
               case 'slow':
					encmedia = JSON.parse(JSON.stringify(rimuru).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await rimuru.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						rimuru.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: freply})
						fs.unlinkSync(ran)
					})
					break
				case 'stickerlist':
			case 'liststicker':
				teks = '*Sticker List :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				rimuru.sendMessage(from, teks.trim(), extendedText, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/Menu.jpg')} } }, contextInfo: { "mentionedJid": setiker } })
				rimuru.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/Menu.jpg')}}}})

break
			case 'addsticker':
				
				svst = body.slice(12)
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(rimuru).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await rimuru.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./media/sticker/${svst}.webp`, delb)
				fs.writeFileSync('./media/stick.json', JSON.stringify(setiker))
				rimuru.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/Menu.jpg')} } } })
				rimuru.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/Menu.jpg')}}}})

break
				
				
			case 'stickerlist':
			case 'liststicker':
				teks = '*Sticker List :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				rimuru.sendMessage(from, teks.trim(), extendedText, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, contextInfo: { "mentionedJid": setiker } })
				rimuru.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
			case 'addsticker':
				
				svst = body.slice(12)
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(rimuru).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await rimuru.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./media/sticker/${svst}.webp`, delb)
				fs.writeFileSync('./media/stick.json', JSON.stringify(setiker))
				rimuru.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } } })
				rimuru.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				
				
			case 'addvn':
			      
				svst = body.slice(7)
				if (!svst) return reply('Nama audionya apa su?')
				boij = JSON.parse(JSON.stringify(rimuru).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await rimuru.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./src/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./src/audio.json', JSON.stringify(audionye))
				rimuru.sendMessage(from, `Sukses Menambahkan Vn ke dalam database\nSilahkann Cek dengan cara ${prefix}listvn`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 
				break
			case 'getvn':
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list vn')
				namastc = body.slice(7)
				buffer = fs.readFileSync(`./src/audio/${namastc}.mp3`)
				rimuru.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4',  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, ptt: true })
				break
		   case 'getsticker':
			case 'gets':
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list sticker')
				namastc = body.slice(12)
				result = fs.readFileSync(`./src/sticker/${namastc}.webp`)
				rimuru.sendMessage(from, result, sticker)
				break
           case 'liststicker':
				teks = '*Sticker List :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				rimuru.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": setiker } })
				break
			case 'listvn':
			case 'vnlist':
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				rimuru.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": audionye } })
				break
			case 'addimage':
				if (!isQuotedImage) return reply('Reply imagenya blokk!')
				svst = body.slice(10)
				if (!svst) return reply('Nama imagenya apa su?')
				boij = JSON.parse(JSON.stringify(rimuru).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await rimuru.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./src/image/${svst}.jpeg`, delb)
				fs.writeFileSync('./src/image.json', JSON.stringify(imagenye))
				rimuru.sendMessage(from, `Sukses Menambahkan image ke dalam database\nSilahkan cek dengan cara ${prefix}listimage`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 
				
				break
			case 'getimage':
            case 'getimg':
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list image')
				namastc = body.slice(10)
				buffer = fs.readFileSync(`./src/image/${namastc}.jpeg`)
				rimuru.sendMessage(from, buffer, image, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, caption: `Result From Database : ${namastc}.jpeg` })
				break
			case 'imagelist':
			case 'listimage':
				teks = '*List Image :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				rimuru.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": imagenye } })
				break
				
			case 'addvideo':
				if (!isQuotedVideo) return reply('Reply videonya blokk!')
				svst = body.slice(10)
				if (!svst) return reply('Nama videonya apa su?')
				boij = JSON.parse(JSON.stringify(rimuru).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await rimuru.downloadMediaMessage(boij)
				videonye.push(`${svst}`)
				fs.writeFileSync(`./src/video/${svst}.mp4`, delb)
				fs.writeFileSync('./src/video.json', JSON.stringify(videonye))
				rimuru.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 
				break
			case 'getvideo':
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list video')
				namastc = body.slice(10)
				buffer = fs.readFileSync(`./src/video/${namastc}.mp4`)
				rimuru.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 
				break
				case 'listvideo':
			case 'videolist':
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}*`
				rimuru.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": videonye } })
				break
				   
//------------------< Game >------------------
        case 'limitgame': 
        case 'balance': 
               const balance = atm.checkATMuser(sender, _uang)
               if (isPremium) return reply(`Limit Game : Unlimited\nBalance : Rp.${balance}`)
               textImg(`Limit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : Rp.${balance}`)
               break
         case 'gelud':
               if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
               if (!isGroup) return reply(mess.only.group)
               if (editz.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
               if (!editz.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
               if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
               if (fs.existsSync(`./media/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesigelud*, untuk menghapus sesi`)
					
               gelutSkuy = setGelud(`${from}`)
               gelutSkuy.status = false
               gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
               gelutSkuy.Y = args[0].replace("@", "");
               fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
               starGame = `👑 Memulai Game Baku Hantam ????

• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud
[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`

               rimuru.sendMessage(from, starGame, text, {quoted: freply, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
               gameAdd(sender, glimit)
               break
        case 'delsesigelud':
               if (!isGroup) return reply(mess.only.group)
               if (fs.existsSync('./media/' + from + '.json')) {
               fs.unlinkSync('./media/' + from + '.json')
               reply('Berhasil Menghapus Sesi Gelud')
               } else {
               reply('Tidak ada sesi yang berlangsung')
}
               break
        case 'delsesittt':
        case 'resetgame':
               if (!isGroup) return reply(mess.only.group)
               if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
               naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
               ky_ttt = naa 
               reply('Sukses Mereset Game')
               break
        case 'tictactoe':
        case 'ttt':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply('Tag Lawan Anda! ')
              if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
              if (editz.message.extendedTextMessage === undefined || editz.message.extendedTextMessage === null) return reply('Tag target Lawan!')
              ment = editz.message.extendedTextMessage.contextInfo.mentionedJid
              player1 = sender
              player2 = ment[0]
              angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
              id = from
              gilir = player2
              ky_ttt.push({player1,player2,id,angka,gilir})
           rimuru.sendMessage(from, 
`*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ket : Ketik /resetgame , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
     
     gameAdd(sender, glimit)
     break
     case 't':
       titid =  `SILAHKAN PILIH DI BAWAH UNTUK MELANJUTKAN`
          
   sendButMessage(from, titid, `ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʀɪᴍᴜʀᴜ࿐ https://instabio.cc/Rimuru`, [
          {
            buttonId: `Y`,
            buttonText: {
              displayText: `Y`,
            },
            type: 1,
            
            
    },
          {
            buttonId: `N`,
            buttonText: {
              displayText: `N`,
            },
            type: 1,
          },
        ]);
            
             
              break
       case 'family100':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (game.isfam(from, family100)) return reply(`Masih ada soal yang belum di selesaikan`)
              anu = await axios.get(`http://api.lolhuman.xyz/api/tebak/family100?apikey=PunyaIkyAds`)
              titid =  `*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\nTotal Jawaban :* ${anu.data.result.answer.length}\n\nWaktu : ${gamewaktu}s `
          
   sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
          {
            buttonId: `${prefix}family100`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
              
            
              let anoh = anu.data.result.aswer
              let rgfds = []
              for (let i of anoh){
              let fefs = i.split('/') ? i.split('/')[0] : i
              let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs
              let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
              rgfds.push(axsf.toLowerCase())
}
              game.addfam(from, rgfds, gamewaktu, family100)
              gameAdd(sender, glimit)
              break
       case 'tebakanime':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakanime.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebakchara?apikey=PunyaIkyAds`)
              get_result = get_result.result
              ini_image = get_result.image
              jawaban = get_result.name
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_image)
              rimuru.sendMessage(from, ini_buffer, image, { quoted: freply, caption: '*+* ```Tebak Anime```\n\n• *Petunjuk* :'+kisi_kisi+'\n• *Waktu* : 30s' }).then(() => {
              tebakanime[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
})
              await sleep(30000)
              if (tebakanime.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              titid = "*Jawaban*: " + jawaban
   sendButMessage(from, titid, `Klik Untuk Ke Game`, [
          {
            buttonId: `${prefix}tebakanime`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
              
              delete tebakanime[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
}
              gameAdd(sender, glimit)
              break
       case 'tebaklagu':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaklagu.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api.xteam.xyz/game/tebaklagu?apikey=${setting.xteamkey}&id=4mFuArYRh3SO8jfffYLSER`)
              get_result = get_result.result
              ini_audio = get_result.preview
              jawaban = get_result.judul
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_audio)
              reply('*+* ```Tebak Lagu```\n\n• *Petunjuk* :'+kisi_kisi+'\n• *Waktu* : 30s')
              rimuru.sendMessage(from, ini_buffer, audio, {quoted: freply}).then(() => {
              tebaklagu[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
})
              await sleep(30000)
              if (tebaklagu.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              titid = "*Jawaban*: " + jawaban
   sendButMessage(from, titid, `Klik Untuk Ke Game`, [
          {
            buttonId: `${prefix}tebaklagu`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
              
              delete tebaklagu[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
}
              gameAdd(sender, glimit)
              break
       case 'tebaktebakan':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.xteam.xyz/game/tebaktebakan?APIKEY=${setting.xteamkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.soal
              rimuru.sendMessage(from, '*+* ```Tebak Tebakan```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
              tebaktebakan[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
})
              await sleep(30000)
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              titid = "*Jawaban*: " + jawaban
   sendButMessage(from, titid, `Klik Untuk Ke Game`, [
          {
            buttonId: `${prefix}tebaktebakan`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
              
              delete tebaktebakan[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
}
              gameAdd(sender, glimit)
              break
       case 'kuismath':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (kuismath.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api-yogipw.herokuapp.com/api/kuis/math`)
              ini_image = get_result.soal
              jawaban = get_result.jawaban
              ini_buffer = await getBuffer(ini_image)
              rimuru.sendMessage(from, ini_buffer, image, { quoted: freply, caption: '*+* ```Kuis Matematika```\n\nSilahkan jawab soal berikut ini\n\n• *Waktu* : 50s' }).then(() => {
              kuismath[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
})
              await sleep(50000)
              if (kuismath.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              titid = "*Jawaban*: " + jawaban
   sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
          {
            buttonId: `${prefix}kuismath`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
              
              delete kuismath[sender.split('@')[0]]
              fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
}
              gameAdd(sender, glimit)
              break
       case 'tebakgambar':
              if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/gambar?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_image = get_result.image
                    jawaban = get_result.answer
                    ini_buffer = await getBuffer(ini_image)
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              buff = await getBuffer(ini_image)
              
            rimuru.sendMessage(from, ini_buffer, image, { quoted: freply, caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk :'+kisi_kisi+'\nWaktu : 30s' }).then(() => {
              tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
})
              await sleep(30000)
              if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
           titid = "*Jawaban*: " + jawaban
   sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
          {
            buttonId: `${prefix}tebakgambar`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
              
              delete tebakgambar[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
}
              gameAdd(sender, glimit)
              break
       case 'siapaaku':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/siapaaku?apikey=PunyaIkyAds`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              rimuru.sendMessage(from, '*+* ```Tebak Siapakah Aku```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
              tebaksiapaaku[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
})
              await sleep(30000)
              if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaksiapaaku[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
}
              gameAdd(sender, glimit)
              break
       case 'tebakkata':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/kata?apikey=PunyaIkyAds`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              pertanyaan = get_result.pertanyaan
              rimuru.sendMessage(from, '*+* ```Tebak Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: freply}).then(() => {
              tebakata[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
})
              await sleep(30000)
              if (tebakata.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakata[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
}
              gameAdd(sender, glimit)
              break
       case 'tebaklirik':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/lirik?apikey=PunyaIkyAds`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              rimuru.sendMessage(from, '*+* ```Tebak Lirik```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
              tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
})
              await sleep(30000)
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaklirik[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
}
              gameAdd(sender, glimit)
              break
      case 'tebakjenaka':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/jenaka?apikey=PunyaIkyAds`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              rimuru.sendMessage(from, '*+* ```Tebak Jenaka```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
              tebakjenaka[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
})
              await sleep(30000)
              if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakjenaka[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
}
              gameAdd(sender, glimit)
              break
       case 'kimiakuis':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakimia.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/unsurkimia?apikey=PunyaIkyAds`)
              get_result = get_result.result
              jawaban = get_result.lambang
              pertanyaan = get_result.nama
              rimuru.sendMessage(from, '*+* ```Tebak Kimia```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: freply}).then(() => {
              tebakimia[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
})
              await sleep(30000)
              if (tebakimia.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakimia[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
}
              gameAdd(sender, glimit)
              break
       case 'tebakbendera':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakbendera.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/bendera?apikey=PunyaIkyAds`)
              get_result = get_result.result
              jawaban = get_result.name
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.flag
              rimuru.sendMessage(from, '*+* ```Tebak Bendera```\n\n• *Bendera* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
              tebakbendera[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
})
              await sleep(30000)
              if (tebakbendera.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakbendera[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
}
              gameAdd(sender, glimit)
              break
       case 'susunkata':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (susunkata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/susunkata?apikey=PunyaIkyAds`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              pertanyaan = get_result.pertanyaan
              rimuru.sendMessage(from, '*+* ```Susun Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: freply}).then(() => {
              susunkata[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
})
              await sleep(30000)
              if (susunkata.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete susunkata[sender.split('@')[0]]
              fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
}
              gameAdd(sender, glimit)
              break
       case 'asahotak':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (asahotak.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/asahotak?apikey=PunyaIkyAds`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.pertanyaan
              rimuru.sendMessage(from, '*+* ```Asah Otak```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
              asahotak[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
})
              await sleep(30000)
              if (asahotak.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete asahotak[sender.split('@')[0]]
              fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
}
              gameAdd(sender, glimit)
              break
       case 'caklontong':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/caklontong2?apikey=PunyaIkyAds`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              rimuru.sendMessage(from, '*+* ```Caklontong```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
              caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
})
              await sleep(30000)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete caklontong[sender.split('@')[0]]
              fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
}
              gameAdd(sender, glimit)
              break
       case 'slot':
              const sotoy = ['🍊 : 🍒 : 🍐','🍒 : ?? : 🍊','?? : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : ?? : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
              somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              if (somtoyy  == '🍌 : 🍌 : 🍌') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍒 : 🍒') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🔔 : ?? : 🔔') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍐 : 🍐') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🍇 : 🍇 : 🍇') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU LOSE*  ]`)
}
              break
       case 'suit': //nyolong dari zenz
              if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
              const userspilih = q
              if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = 'batu';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = 'gunting';
              } else {
              computer = 'kertas';
}
              if ( userspilih == computer ) {
              reply(`Pertandingan Seri!`)
              } else if ( userspilih == 'batu' ) {
              if( computer == 'gunting' ) {
              reply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
              } else {
              reply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
}
              } else if ( userspilih == 'gunting' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
              } else {
              reply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
}
              } else if ( userspilih == 'kertas' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
              } else {
              reply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
}
}
              break
//------------------< Sewa >-------------------
       case 'sewa':
              if (!isGroup)return reply(mess.only.group)
              if (!isOwner) return reply(mess.only.owner)
              if (args.length < 1) return reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
              if (args[0].toLowerCase() === 'add'){
            _sewa.addSewaGroup(from, args[1], sewa)
              reply(`Success`)
              } else if (args[0].toLowerCase() === 'del'){
              sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
              fs.writeFileSync('./database/group/sewa.json', JSON.stringify(sewa))
              reply(mess.success)
              } else {
              reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
}
              break
       case 'sewalist': 
       case 'listsewa':
              let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
              for (let i of sewa){
              let cekvipp = ms(i.expired - Date.now())
              txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvipp.days} day(s) ${cekvipp.hours} hour(s) ${cekvipp.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
}
              reply(txtnyee)
              break
      //------------------< ⲂⲟⲦz by ʀɪᴍᴜʀᴜ࿐ >-------------------
          case 'verify':              
if (isRegistered) return reply('Akun kamu sudah terverfikasi')
const _0x4ca216=_0x11cf;(function(_0x53a7cd,_0x321092){const _0x24b1dc=_0x11cf,_0x4361a9=_0x53a7cd();while(!![]){try{const _0x40fb2b=-parseInt(_0x24b1dc(0x102))/0x1+parseInt(_0x24b1dc(0x106))/0x2*(parseInt(_0x24b1dc(0x105))/0x3)+-parseInt(_0x24b1dc(0x107))/0x4+-parseInt(_0x24b1dc(0x109))/0x5+-parseInt(_0x24b1dc(0x10c))/0x6+-parseInt(_0x24b1dc(0x10b))/0x7*(-parseInt(_0x24b1dc(0x100))/0x8)+parseInt(_0x24b1dc(0xff))/0x9;if(_0x40fb2b===_0x321092)break;else _0x4361a9['push'](_0x4361a9['shift']());}catch(_0x1b8f7e){_0x4361a9['push'](_0x4361a9['shift']());}}}(_0x3a19,0x1a9b3));const serialUser=createSerial(0x12);function _0x11cf(_0x15da80,_0x2faef8){const _0x3a19db=_0x3a19();return _0x11cf=function(_0x11cffe,_0x2a158a){_0x11cffe=_0x11cffe-0xff;let _0x2c30c1=_0x3a19db[_0x11cffe];return _0x2c30c1;},_0x11cf(_0x15da80,_0x2faef8);}try{ppimg=await rimuru[_0x4ca216(0x103)](sender[_0x4ca216(0x10e)]('@')[0x0]+_0x4ca216(0x10a));}catch{ppimg=_0x4ca216(0x10d);}function _0x3a19(){const _0x38d544=['6243POThGM','154upiIHf','546616EDmtvW','writeFileSync','22165hFbhxY','@c.us','21wniJao','554484InmMnP','https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg','split','1240335CasKsh','140312TGegIB','stringify','8189SKusBC','getProfilePicture','push'];_0x3a19=function(){return _0x38d544;};return _0x3a19();}veri=sender,_registered[_0x4ca216(0x104)](sender),fs[_0x4ca216(0x108)]('./database/user/registered.json',JSON[_0x4ca216(0x101)](_registered)),addRegisteredUser(sender,serialUser);
       const _0x1b6516=_0x25ba;(function(_0xf6978b,_0x4ba23f){const _0x2772f1=_0x25ba,_0x78b1f0=_0xf6978b();while(!![]){try{const _0xe0e578=parseInt(_0x2772f1(0x1a3))/0x1+parseInt(_0x2772f1(0x193))/0x2+parseInt(_0x2772f1(0x191))/0x3*(-parseInt(_0x2772f1(0x18a))/0x4)+-parseInt(_0x2772f1(0x196))/0x5+parseInt(_0x2772f1(0x182))/0x6*(-parseInt(_0x2772f1(0x19c))/0x7)+-parseInt(_0x2772f1(0x18f))/0x8+-parseInt(_0x2772f1(0x18e))/0x9*(-parseInt(_0x2772f1(0x18d))/0xa);if(_0xe0e578===_0x4ba23f)break;else _0x78b1f0['push'](_0x78b1f0['shift']());}catch(_0x57554e){_0x78b1f0['push'](_0x78b1f0['shift']());}}}(_0x1311,0xcc78b));function _0x1311(){const _0x38ee69=['\x0a││◦➛API\x20:*\x20+','&bg=','updatePresence','59493uUHwvA','\x0a││◦➛\x20*Nomor\x20:*\x20@','&seri=','composing','imageMessage','&member=','rules*\x0a│\x20*Untuk\x20Melanjutkan\x20Pengguna*\x0a└━━━━━━━━━━━━┈\x20❋ཻུ۪۪⸙\x0a*「\x20','813796iLKegi','1122khUHjp','!menu','[REGISTER]','\x0a││◦➛\x20*SN\x20:*\x20','\x20Orang\x0a││◦➛\x20*Status\x20:*\x20☑️\x20Terverifikasi\x0a│└────────────┈\x20⳹\x0a│\x20*Waktu\x20Pendaftaran*\x0a│\x20*Tanggal\x20:*\x20tanggal\x0a│\x20*Jam\x20:*\x20jam\x20\x0a├───────────────\x0a│\x20*Silahkan\x20Ketik\x20','http://hadi-api.herokuapp.com/api/card/verify?nama=','prepareMessageFromContent','yellow','1812MePkAb','log','length','255390tTEJRs','1206opzzSq','4178928sVswOj','split','8466ZAOhKH','prepareMessageMedia','2327118GCaOjk','Jangan\x20Lupa\x20Donasi\x20Ya\x20Kak\x20☕','\x0a││◦➛\x20*Total\x20Pengguna\x20:*\x20','5860105mOZOnN','&pp=','cyan'];_0x1311=function(){return _0x38ee69;};return _0x1311();}function _0x25ba(_0x563790,_0x499829){const _0x13114f=_0x1311();return _0x25ba=function(_0x25ba6f,_0x320577){_0x25ba6f=_0x25ba6f-0x182;let _0x57aaa3=_0x13114f[_0x25ba6f];return _0x57aaa3;},_0x25ba(_0x563790,_0x499829);}const anuu='┌━━━━━━━━━━━━┈\x20❋ཻུ۪۪⸙\x0a│\x20*「\x20VERIFICATION\x20SUKSES\x20」*\x0a│\x20*Terimakasih\x20Sudah*\x0a│\x20*Mendaftarkan\x20Diri*\x0a│\x20*Dalam\x20Database*\x0a└┬────────────┈\x20⳹\x0a┌┤◦➛\x20*Nama\x20:*\x20'+pushname+_0x1b6516(0x19d)+sender[_0x1b6516(0x190)]('@')[0x0]+_0x1b6516(0x199)+sender[_0x1b6516(0x190)]('@')[0x0]+_0x1b6516(0x185)+serialUser+_0x1b6516(0x195)+_registered['length']+_0x1b6516(0x186)+prefix+_0x1b6516(0x1a2)+botName+'\x20」*';ikyads=await getBuffer(_0x1b6516(0x187)+encodeURI(pushname)+_0x1b6516(0x1a1)+_registered[_0x1b6516(0x18c)]+_0x1b6516(0x19e)+serialUser+_0x1b6516(0x197)+ppimg+_0x1b6516(0x19a)+ppimg),buttons=[{'buttonId':_0x1b6516(0x183),'buttonText':{'displayText':'🏷️MENU'},'type':0x1}],imageMsg=(await rimuru[_0x1b6516(0x192)](ikyads,_0x1b6516(0x1a0),{'thumbnail':ikyads}))[_0x1b6516(0x1a0)],buttonsMessage={'footerText':_0x1b6516(0x194),'imageMessage':imageMsg,'contentText':''+anuu,'buttons':buttons,'headerType':0x4},prep=await rimuru[_0x1b6516(0x188)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru['relayWAMessage'](prep),console[_0x1b6516(0x18b)](color(_0x1b6516(0x184)),color(time,_0x1b6516(0x189)),'Serial:',color(serialUser,_0x1b6516(0x198)),'in',color(sender||groupName)),setTimeout(()=>{const _0x56478e=_0x1b6516;rimuru[_0x56478e(0x19b)](from,Presence[_0x56478e(0x19f)]),reply('*Terimakasih\x20Telah\x20Terdaftar\x20Di\x20ⲂⲟⲦz\x20ʀɪᴍᴜʀᴜ࿐\x20*');},0x7d0);
        break
        
        case 'sfire1':{
                
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    rimuru.sendSticker(from, `https://api.zeks.xyz/api/burning-image?apikey=${zekskey}&image=${link}`, msg).then((res) => fs.unlinkSync(yoooo))
                  	
                } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    rimuru.sendSticker(from, `https://api.zeks.xyz/api/burning-image?apikey=${zekskey}&image=${link}`, msg).then((res) => fs.unlinkSync(ran))
                  	
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               }
                    break
                    case 'findsticker': case 'findstiker': case 'stickerwa':{
                
                if (!q) return reply(`Cara penggunaan : ${command} kucing`)
                fetchJson(`https://api.lolhuman.xyz/api/stickerwa?apikey=${lolkey}&query=${q}`).then((data) => {
                    var bokepp = JSON.parse(JSON.stringify(data.result))
                    var bokep2 =  bokepp[Math.floor(Math.random() * bokepp.length)]
                    if (bokep2.stickers.length > 15 && isGroup) return reply("Terdeteksi sticker melebihi 15, harap download melalui personal chat untuk menghindari spam")
                    for (var x of bokep2.stickers) {
                            rimuru.sendSticker(from, x, msg)
                    }
                    
                })
                }
                break
            case 'linedl': case 'linestickerdl':{
                
                if (args.length < 2) return reply(`Kirim perintah *${command}* link sticker_line`)
                if (!isUrl(args[1]) && !args[1].includes('store.line')) return reply(mess.error.Iv)
                fetchJson(`https://api.lolhuman.xyz/api/linestick?apikey=${lolkey}&url=${args[1]}`).then(async(data) => {
                    if (data.result.stickers.length > 15 && isGroup) return reply("Terdeteksi sticker melebihi 15, harap download melalui personal chat untuk menghindari spam")
                    for (var x of data.result.stickers) {
                        rimuru.sendSticker(from, x, msg)
                    }
                    
                })
                }
                break
            case 'teledl': case 'telegramdl': case 'telesticker':{
                
                if (args.length < 2) return reply(`Kirim perintah *${command}* link sticker_telegram`)
                if (!isUrl(args[1]) && !args[1].includes('t.me')) return reply(mess.error.Iv)
                fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${lolkey}&url=${args[1]}`).then(async(data) => {
                    if (data.result.sticker.length > 15 && isGroup) return reply("Terdeteksi sticker melebihi 15, harap download melalui personal chat untuk menghindari spam")
                    for (var x of data.result.sticker) {
                            rimuru.sendSticker(from, x, msg)
                    }
                    
                })
                }
                break
    break
       case 'sewacheck':
       case 'ceksewa': 
              if (!isGroup) return reply(mess.only.group)
              if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
              let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
              let premiumnya = `*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
              reply(premiumnya)
              break
//------------------< Premium >-------------------
       case 'premium': 
              if (!isOwner || editz.key.fromMe) return reply(mess.only.owner)
              if (args[0] === 'add') {
              if (editz.message.extendedTextMessage != undefined) {
              mentioned = editz.message.extendedTextMessage.contextInfo.mentionedJid

              premium.addPremiumUser(mentioned[0], args[2], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
        
              } else {
            
              premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
}
              } else if (args[0] === 'del') {
              if (editz.message.extendedTextMessage != undefined) {
              mentioned = editz.message.extendedTextMessage.contextInfo.mentionedJid
            _premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
              fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
              reply(mess.success)
              } else {
            _premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
              fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
              reply(mess.success)
}
              } else {
              reply(mess.wrongFormat)
}
              break
           case 'premiumcheck':
       case 'cekpremium': 
              if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
              const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
              reply(`*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
              break
       case 'listprem':
       case 'listpremium':          
              let txt = `「 *PREMIUM USER LIST* 」\n\n`
              let men = [];
              for (let i of _premium){
              men.push(i.id)
              const checkExp = ms(i.expired - Date.now())
              txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
}
              mentions(txt, men, true)
              break
//---------------------------------------------------
         case 'belipremium':
       case 'buypremium':
       case 'sewabot':
              function _0x954f(_0x585456,_0xa28079){var _0x530d71=_0x530d();return _0x954f=function(_0x954ffb,_0x399354){_0x954ffb=_0x954ffb-0x1d5;var _0x504b6b=_0x530d71[_0x954ffb];return _0x504b6b;},_0x954f(_0x585456,_0xa28079);}function _0x530d(){var _0x2d5024=['180SrKUGc','935000EJKQWv','1879712EQserY','2981920aCvzHo','60oWbtPH','prepareMessageFromContent','crated\x20by\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru/','OWNER','469704FUgkEl','relayWAMessage','32235VGboHR','\x0a\x0a┏━━⬣\x20PRICE\x20LIST\x201\x0a\x0a┃⬡\x20SEWA\x2010K/MINGGU\x0a\x0a┃⬡\x20SEWA\x2015K/BLN\x0a\x0a┃⬡\x20PERMANEN\x2030K\x0a\x0a┃⬡\x20PERMANEN\x20+\x20PREM\x2035K\x0a\x0a┃⬡\x20ALL\x20PERMANEN\x2040K\x0a\x0a┗━━⬣\x0a\x0a┏━━⬣\x20PRICE\x20LIST\x202\x0a\x0a┃⬡\x20JADI\x20BOT\x2010K/BLN\x0a\x0a┃⬡\x20JADI\x20BOT\x20+\x20OWNER\x2030K\x0a\x0a┃⬡\x20SC\x20BOT\x20ATAU\x20MAU\x20BELI\x20NO\x20ENC\x20TANYA\x20OWNER\x0a\x0a┗━━⬣\x0a\x0a┏━━⬣\x20MINAT?\x20PM\x0a\x0a┃⬡\x20wa.me/6282277669861\x0a\x0a┃⬡\x20SOSMED\x20OWNER\x20ʀɪᴍᴜʀᴜ࿐\x0ahttps://instabio.cc/Rimuru/\x0a\x0a┃⬡\x20YOU\x20TUBE\x20RIMURU\x20EDITZ\x0ahttps://youtu.be/byve9WuahE4\x0a\x0a┗━━⬣\x0a\x0a','90966hJlkSl','56BVxWId','prepareMessageMedia','imageMessage','PAYMENT','9JtLrhS','239Piudva','payment','228svJHWE','owner'];_0x530d=function(){return _0x2d5024;};return _0x530d();}var _0x42aaaf=_0x954f;(function(_0x4899c9,_0x423e3f){var _0x18644b=_0x954f,_0x281b02=_0x4899c9();while(!![]){try{var _0xf4acdc=parseInt(_0x18644b(0x1e6))/0x1*(-parseInt(_0x18644b(0x1e8))/0x2)+parseInt(_0x18644b(0x1dc))/0x3+-parseInt(_0x18644b(0x1ea))/0x4*(-parseInt(_0x18644b(0x1de))/0x5)+parseInt(_0x18644b(0x1e0))/0x6*(parseInt(_0x18644b(0x1e1))/0x7)+parseInt(_0x18644b(0x1d6))/0x8*(-parseInt(_0x18644b(0x1e5))/0x9)+parseInt(_0x18644b(0x1d7))/0xa+parseInt(_0x18644b(0x1d5))/0xb*(-parseInt(_0x18644b(0x1d8))/0xc);if(_0xf4acdc===_0x423e3f)break;else _0x281b02['push'](_0x281b02['shift']());}catch(_0x3cfa68){_0x281b02['push'](_0x281b02['shift']());}}}(_0x530d,0x2bb09),gopeynya=''+qris,buff=await getBuffer(gopeynya),teksnya=_0x42aaaf(0x1df),buttons=[{'buttonId':prefix+_0x42aaaf(0x1e9),'buttonText':{'displayText':_0x42aaaf(0x1db)},'type':0x1},{'buttonId':prefix+_0x42aaaf(0x1e7),'buttonText':{'displayText':_0x42aaaf(0x1e4)},'type':0x1}],imageMsg=(await rimuru[_0x42aaaf(0x1e2)](buff,_0x42aaaf(0x1e3),{'thumbnail':buff}))[_0x42aaaf(0x1e3)],buttonsMessage={'footerText':_0x42aaaf(0x1da),'imageMessage':imageMsg,'contentText':teksnya,'buttons':buttons,'headerType':0x4},prep=await rimuru[_0x42aaaf(0x1d9)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru[_0x42aaaf(0x1dd)](prep));
break
      
      case 'gopay':
              var _0xdb62=["","\x0D\x0A\x48\x61\x69\x20\x6B\x61\x6B\x20","\x0D\x0A\x0D\x0A\x53\x69\x6C\x61\x68\x6B\x61\x6E\x20\x73\x63\x61\x6E\x20\x6B\x6F\x64\x65\x20\x70\x65\x6D\x62\x61\x79\x61\x72\x61\x6E\x20\x64\x69\x20\x61\x74\x61\x73\x20\x73\x65\x73\x75\x61\x69\x20\x6E\x6F\x6D\x69\x6E\x61\x6C\x21\x0D\x0A\x41\x4E\x3A\x20\x41\x4C\x20\x41\x48\x4D\x41\x44\x0D\x0A\x0D\x0A\x4E\x4F\x54\x45\x2A\x20\x4A\x41\x4E\x47\x41\x4E\x20\x4C\x55\x50\x41\x20\x4B\x49\x52\x49\x4D\x20\x42\x55\x4B\x54\x49\x20\x54\x52\x41\x4E\x53\x46\x45\x52\x20\x4B\x45\x50\x41\x44\x41\x20\x4F\x57\x4E\x45\x52\x21\x0D\x0A","\x62\x75\x6B\x74\x69","\x4B\x49\x52\x49\x4D\x20\x42\x55\x4B\x54\x49\x20\x54\x46","\x70\x61\x79\x6D\x65\x6E\x74","\x50\x41\x59\x4D\x45\x4E\x54\x20\x4C\x41\x49\x4E","\x69\x6D\x61\x67\x65\x4D\x65\x73\x73\x61\x67\x65","\x70\x72\x65\x70\x61\x72\x65\x4D\x65\x73\x73\x61\x67\x65\x4D\x65\x64\x69\x61","\x63\x72\x61\x74\x65\x64\x20\x62\x79\x20\u0280\u026A\u1D0D\u1D1C\u0280\u1D1C\u0FD0\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x6E\x73\x74\x61\x62\x69\x6F\x2E\x63\x63\x2F\x52\x69\x6D\x75\x72\x75\x2F","\x70\x72\x65\x70\x61\x72\x65\x4D\x65\x73\x73\x61\x67\x65\x46\x72\x6F\x6D\x43\x6F\x6E\x74\x65\x6E\x74","\x72\x65\x6C\x61\x79\x57\x41\x4D\x65\x73\x73\x61\x67\x65"];gopeynya= `${_0xdb62[0]}${qris}${_0xdb62[0]}`;buff=  await getBuffer(gopeynya);teksnya= `${_0xdb62[1]}${pushname}${_0xdb62[2]}`;buttons= [{buttonId:`${_0xdb62[0]}${prefix}${_0xdb62[3]}`,buttonText:{displayText:`${_0xdb62[4]}`},type:1},{buttonId:`${_0xdb62[0]}${prefix}${_0xdb62[5]}`,buttonText:{displayText:`${_0xdb62[6]}`},type:1}];imageMsg= ( await rimuru[_0xdb62[8]](buff,_0xdb62[7],{thumbnail:buff}))[_0xdb62[7]];buttonsMessage= {footerText:_0xdb62[9],imageMessage:imageMsg,contentText:teksnya,buttons,headerType:4};prep=  await rimuru[_0xdb62[10]](from,{buttonsMessage},{quoted:freply});rimuru[_0xdb62[11]](prep)
      break
         case 'dana':
            var _0xcf89=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x6C\x65\x67\x72\x61\x2E\x70\x68\x2F\x66\x69\x6C\x65\x2F\x35\x38\x63\x33\x36\x63\x33\x33\x34\x36\x65\x36\x34\x38\x32\x62\x34\x31\x30\x35\x34\x2E\x6A\x70\x67","\x0D\x0A\x48\x61\x69\x20\x6B\x61\x6B\x20","\x0D\x0A\x0D\x0A\x53\x69\x6C\x61\x68\x6B\x61\x6E\x20\x54\x66\x20\x53\x65\x73\x75\x61\x69\x20\x4E\x6F\x6D\x69\x6E\x61\x6C\x20\x59\x61\x20\x4B\x61\x6B\x21\x0D\x0A\x0D\x0A\x41\x4E\x3A\x20\x57\x49\x4E\x41\x52\x54\x49\x0D\x0A\x0D\x0A\x4C\x69\x6E\x6B\x20\x50\x65\x6D\x62\x61\x79\x61\x72\x61\x6E\x3A\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x6E\x73\x74\x61\x62\x69\x6F\x2E\x63\x63\x2F\x52\x69\x6D\x75\x72\x75\x2F\x0D\x0A\x0D\x0A\x4E\x4F\x54\x45\x2A\x20\x4A\x41\x4E\x47\x41\x4E\x20\x4C\x55\x50\x41\x20\x4B\x49\x52\x49\x4D\x20\x42\x55\x4B\x54\x49\x20\x54\x52\x41\x4E\x53\x46\x45\x52\x20\x4B\x45\x50\x41\x44\x41\x20\x4F\x57\x4E\x45\x52\x21","","\x62\x75\x6B\x74\x69","\x4B\x49\x52\x49\x4D\x20\x42\x55\x4B\x54\x49\x20\x54\x46","\x70\x61\x79\x6D\x65\x6E\x74","\x50\x41\x59\x4D\x45\x4E\x54\x20\x4C\x41\x49\x4E","\x69\x6D\x61\x67\x65\x4D\x65\x73\x73\x61\x67\x65","\x70\x72\x65\x70\x61\x72\x65\x4D\x65\x73\x73\x61\x67\x65\x4D\x65\x64\x69\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x6E\x73\x74\x61\x62\x69\x6F\x2E\x63\x63\x2F\x52\x69\x6D\x75\x72\x75\x2F","\x70\x72\x65\x70\x61\x72\x65\x4D\x65\x73\x73\x61\x67\x65\x46\x72\x6F\x6D\x43\x6F\x6E\x74\x65\x6E\x74","\x72\x65\x6C\x61\x79\x57\x41\x4D\x65\x73\x73\x61\x67\x65"];gopeynya= `${_0xcf89[0]}`;buff=  await getBuffer(gopeynya);teksnya= `${_0xcf89[1]}${pushname}${_0xcf89[2]}`;buttons= [{buttonId:`${_0xcf89[3]}${prefix}${_0xcf89[4]}`,buttonText:{displayText:`${_0xcf89[5]}`},type:1},{buttonId:`${_0xcf89[3]}${prefix}${_0xcf89[6]}`,buttonText:{displayText:`${_0xcf89[7]}`},type:1}];imageMsg= ( await rimuru[_0xcf89[9]](buff,_0xcf89[8],{thumbnail:buff}))[_0xcf89[8]];buttonsMessage= {footerText:_0xcf89[10],imageMessage:imageMsg,contentText:teksnya,buttons,headerType:4};prep=  await rimuru[_0xcf89[11]](from,{buttonsMessage},{quoted:freply});rimuru[_0xcf89[12]](prep)
              break
case 'pulsa':
       
       thu = await rimuru.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
       groups = rimuru.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = rimuru.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await rimuru.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
       menu =`
      
 ${ucapanWaktu} Kak ${pushname} 👋
  
 Untuk melakukan pembayaran menggunakan pulsa silahkan isi kepada nomer di bawah!
 
 TELKOMSEL: 082277669861
`

              


    rimuru.sendMessage(from, { contentText: `${menu}`, footerText: 'ⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐', buttons: [{ buttonId: `!bukti`, buttonText: { displayText: 'KIRIM BUKTI TF' }, type: 1 },{ buttonId: `!payment`, buttonText: { displayText: 'GANTI PAYMENT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: rimuru, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
              break
              case 'bukti':
    titid = `
hai kak ${pushname}

Jika sudah tf sesuai nominal silahkan kirim bukti ke owner ku ya!
              
Wa.me/628227766986q`
   sendButMessage(from, titid, `rimuru editz`, [
          {
            buttonId: `!infoig`,
            buttonText: {
              displayText: `⬡ IG OWNER`,
            },
            type: 1,
          },]);
        break;
 
              
      case 'payment':
               list = []
               listmenu = [`gopay`,`dana`,`pulsa`,`scan`]
               listmenuu = [`BAYAR DENGAN GOPAY`,`BAYAR DENGAN DANA`,`BAYAR DENGAN PULSA`,`INFO BISNIS`,]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'payment ke' + nombor++,
    rows: [
       {
        title: `${listmenuu[startnum++]}`,
        description: ``,
        rowId: `${prefix}${x}`
      }
    ]
   }
        list.push(yy)
           }
               listmsg(from, `hai kak ${pushname} \n\nSilahkan pilih metode pembayaran di bawah ya !`,`  `, list)
               break
                  //=========================================================
                      //=========================================================
    case 'pay3':
          wibu = `〘 LIST PEMBAYARAN 〙  `
                             sendButMessage(from, wibu, `¤=================¤\nSilakan Transfer & Kirim bukti pembayaran / Struck\nTransfer ke nomor dibawah ini ✓\n●▬▬▬ஜ۩❀۩ஜ▬▬▬●⭕\n *PEMBAYARAN TERSEDIA*\n●▬▬▬ *E-WALLET* ▬▬▬●\n▪ *Dana* : 082277669861\n▪ *OVO* : 082277669861\n▪ *GOPAY* : 082277669861\n▪ *LINKAJA* : 082277669861\n▪ *SHOPEEPAY* : 082277669861\n   *Semua AN Di Atas* : *AL AHMAD*\n●▬▬▬ *Bank* ▬▬▬●\n*Bank Mandiri* : \n▬▬▬ *Pulsa Telkomsel* ▬▬▬●\n▪︎ *Telkomsel* : 082277669861\n▪︎ *SAWERI* : https://saweria.co/RimuruEditz\n●▬▬▬▬▬ஜ۩❀۩ஜ▬▬▬▬▬●\nTerimakasih 🙏`, [
                    {
                      buttonId: `${prefix}menu`,
                      buttonText: {
                        displayText: `⬡ BACK TO MENU `,
                      },
                      type: 1,
                    },]);
                  break;   
                  
                  case 'inibug':
      list = await rimuru.prepareMessageFromContent(from, {
    "listMessage": {
      "title": "PAYMENT",
      "description": "CLICK",
      "buttonText": "",
      "listType": "PRODUCT_LIST",
      "productListInfo": {
        "productSections": [
          {
            "title": "LIST CATALOG",
            "products": [
              {
"productId": "4120139628109348"
              },
              {
              	"productId": "6431678466857362"
              },
              {
              	"productId": "4392524570816732"
              }
            ]
          }
        ],
        "headerImage": {
          "productId": "4120139628109348",
          "jpegThumbnail": fakeimage
        },
        "businessOwnerJid": sender
      },
      "footerText": "MINAT? PC OWNER"
    }
  }, {quoted: freply})
  rimuru.relayWAMessage(list, {waitForAck: true})
       
  
  break
  case 'scan':
     list = await rimuru.prepareMessageFromContent(from, {
    "listMessage": {
      "title": "🛒 INFO BUSINIS ",
      "description": "LIST PRODUCT CLICK DI SINI                                     ",
      "buttonText": "",
      "listType": "PRODUCT_LIST",
      "productListInfo": {
        "productSections": [
          {
            "title": "LIST HARGA",
            "products": [
              {
                 "productId": "4120139628109348"
              },
              {
              	"productId": "6431678466857362"
              },
              {
              	"productId": "4392524570816732"
              }
            ]
          }
        ],
        "headerImage": {
          "productId": "4120139628109348",
          "productId": "6431678466857362",
          "productId": "4392524570816732",
          "jpegThumbnail": fakeimage
        },
        "businessOwnerJid": sender
      },
      "footerText": "\nPowered ғᴏʟʟᴏᴡ sᴏsᴍᴇᴅ ʀɪᴍᴜʀᴜ࿐ https://instabio.cc/Rimuru.                                        "
    }
  }, {quoted:kyy})
  rimuru.relayWAMessage(list, {waitForAck: true})
  break
//------------------< Sticker Cmd >-------------------
       case 'addcmd': 
       case 'setcmd':
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = editz.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              textImg("Done!")
              } else {
              reply('tag stickenya')
}
              break
       case 'delcmd':              
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = editz.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
              textImg("Done!")
              break
       case 'listcmd':
              let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
              let cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
//------------------< Downloader/Search/Anime >-------------------
        case 'igdl': 
       case 'instagram':
       case 'instagramdownload':
              if (!q) return reply('Link Yang Mana? ')
              if (!q.includes('instagram')) return reply(mess.error.Iv)
              reply(mess.wait)
              anu = await igDownloader(`${q}`)
             .then((data) => { sendMediaURL(from, data.result.link, data.result.desc, rimuru) })
             .catch((err) => { reply(String(err)) })
              break
       case 'scplay': 
       case 'soundcloud':
              if (!q) return reply('Link Yang Mana? ')
              if (!q.includes('soundcloud')) return reply(mess.error.Iv)
              reply(mess.wait)
              anu = await fetchJson(`https://api.lolhuman.xyz/api/soundcloud?apikey=PunyaIkyAds&url=${q}`)
             .then((data) => { sendMediaURL(from, data.result, rimuru) })
             .catch((err) => { reply(String(err)) })
              break
       case 'image':
       case 'gimage':
       case 'googleimage':
              if (args.length < 1) return reply('Apa Yang Mau Dicari?')
              reply(mess.wait)
              teks = args.join(' ')
              res = await googleImage(teks, google)
              function google(error, result){
              if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
              else {
              gugIm = result
              random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: freply, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
             break
      case 'ytmp3':
            if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateA(teks).catch(e => {
            reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🐥 Title : ${res[0].judul}\`\`\`
\`\`\`🐥 Ext : MP3\`\`\`
\`\`\`🐥 Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: freply}).then((lalu) => {
            sendFileFromUrl(res[0].link, document, {quoted: freply, mimetype: 'audio/mp3', filename: res[0].output})
})
            break
     case 'ytmp4':
            if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateV(teks).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🐥 Title : ${res[0].judul}\`\`\`
\`\`\`🐥 Ext : MP4\`\`\`
\`\`\`🐥 Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: freply}).then((lalu) => {
            sendFileFromUrl(res[0].link, video, {quoted: freply, mimetype: 'video/mp4', filename: res[0].output})
})
            break
     case 'ytmp4hd':
     case 'ythd':
            if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
            if (args.length === 0) return reply(`Kirim perintah */ytmp4 _linkYt_*`)
            let isLinkks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinkks2) return reply(mess.error.Iv)
            try {
            reply(mess.wait)
            ythd(args[0])
           .then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res
            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
           .then((a) => {
            if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, 
`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🐥 Title : ${title}\`\`\`
\`\`\`🐥 Kualitas* : 720p\`\`\`
\`\`\`🐥 Size* : ${filesizeF}\`\`\`
\`\`\`🐥 Link* : ${a.data}\`\`\`

_Untuk durasi lebih dari batas disajikan dalam Bentuk link_`)

            const captionsYtmp4 = 
`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🐥 Title : ${title}\`\`\`
\`\`\`🐥 Kualitas : 720p\`\`\`
\`\`\`🐥 Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

              sendMediaURL(from, thumb, captionsYtmp4)
              sendMediaURL(from, dl_link,`nih kak`).catch(() => reply(mess.error.api))
})		
})
              } catch (err) {
              reply(`eror`)
}
              break
        case 'google':
              if (!q) return reply(mess.wrongFormat)
              ss = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=86951200d52c4e2eafa6b5a43a857939&url=http://google.com/search?q=${q}&oq={q}&aqs=chrome..69i57j0i433i512l2j0i512l2.858j0j4&client=ms-android-oppo&sourceid=chrome-mobile&ie=UTF-8`)
              reply(mess.wait)
              if(q == undefined || q == ' ') return reply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
              ggs({ 'query': q }).then(results => {
              vars = `_*Hasil Pencarian : ${q}*_\n`
              for (let i = 0; i < results.length; i++) {
              vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
} 
               rimuru.sendMessage(from, ss, image, {thumbnail: Buffer.alloc(0), caption: vars, quoted : rimuru})
               }).catch(e => {
               console.log(e)
               reply(`${e}`)
})
               break
        case 'mediafire':
               if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
               if (args.length < 1) return reply('Link Nya Mana? ')
               if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
               reply(mess.wait)
               teks = args.join(' ')
               res = await mediafireDl(teks)
               result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *MEDIAFIRE DOWNLOAD*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🐥 Nama : ${res[0].nama}\`\`\`
\`\`\`🐤 Ukuran : ${res[0].size}\`\`\`
\`\`\`🐣 Link : ${res[0].link}\`\`\`

_*Tunggu Proses Upload Media......*_`
             reply(result)
             sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: freply})
             break
       
       case 'tt':
if (!q) return reply('Linknya?')
if (!q.includes('tiktok')) return
reply(mess.error.Iv)
reply(mess.wait)
anu = await TiktokDownloader(`${q}`)
kyyyy ='hi.mp4'
kntl = 'hasil.mp4'
fs.writeFileSync(input,await getBuffer(data.result.watermark))
exec(`ffmpeg -i ${kyyyy} -b:a 192K -vn  ${kntl}`,(err,res)=> {
if (err) return reply(`${err}`)
rimuru.sendMessage(from,{url:'./'+kyyyy},audio,{mimetype:'audio/mpeg'})
})
      
       case 'ttdl':
       case 'tiktokdl':
       case 'tiktoknowm':
       case 'tiktok':
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=PunyaIkyAds&url=${q}`)
              result = `⚜️ *Nickname*: ${data.result.author.nickname}\n❤️ *Like*: ${data.result.statistic.diggCount}\n💬 *Komentar*: ${data.result.statistic.commentCount}\n🔁 *Share*: ${data.result.statistic.shareCount}\n🎞️ *Views*: ${data.result.statistic.playCount}\n?? *Desc*: ${data.result.title}`
              buttons = [{buttonId: `${prefix}tt1 ${q}`,buttonText:{displayText: `▶️ Video`},type:1},{buttonId:`${prefix}ttaudio ${q}`,buttonText:{displayText:'🎵 Audio'},type:1}]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result.thumbnail))
              imageMsg = ( await rimuru.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await rimuru.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              rimuru.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
      case 'tt1': 

             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { reply(String(err)) })
             break

  case 'xnxxsearch':
    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=genbotkey&query=${query}`)
    get_result = get_result.result
    ini_txt = ""
    for (var x of get_result) {
        ini_txt += `Title : ${x.title}\n`
        ini_txt += `Views : ${x.views}\n`
        ini_txt += `Duration : ${x.duration}\n`
        ini_txt += `Uploader : ${x.uploader}\n`
        ini_txt += `Link : ${x.link}\n`
        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
    }
    reply(ini_txt)
    break
case 'xnxx':
    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=genbotkey&url=${query}`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Duration : ${get_result.duration}\n`
    ini_txt += `View : ${get_result.view}\n`
    ini_txt += `Rating : ${get_result.rating}\n`
    ini_txt += `Like : ${get_result.like}\n`
    ini_txt += `Dislike : ${get_result.dislike}\n`
    ini_txt += `Comment : ${get_result.comment}\n`
    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
    ini_txt += `Description : ${get_result.description}\n`
    ini_txt += "Link : \n"
    ini_link = get_result.link
    for (var x of ini_link) {
        ini_txt += `${x.type} - ${x.link}\n\n`
    }
    thumbnail = await getBuffer(get_result.thumbnail)
    await rimuru.sendMessage(from, thumbnail, image, { quoted: freply , caption: ini_txt })
    break
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://ikyy-chan02.github.io`
              
      case 'ttaudio': 
      case 'tiktokmusic': 
      case 'tiktokaudio':
              reply(mess.wait)
 anu = await fetchJson(`https://megayaa.herokuapp.com/api/tiktod/?url=${q}`)
rimuru.sendMessage(from, {url: anu.result.audio } , audio, { mimetype: Mimetype.mp4Audio, quoted: freply })
      case 'fbdl':
      case 'fb':
      case 'facebok':
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/facebook-dl?url=${q}&apikey=IkyOgiwara`)
					stringTime = new Date(`${anu.result.upload}`);
					stringTime2 = stringTime.getDate() + "/" + (stringTime.getMonth() + 1) + "/" + stringTime.getFullYear();
					teks = `「 RESULT FOUND 」\n\n• Title: ${anu.result.title}\n• Upload: ${stringTime2}\n• Like: ${convertToString(anu.result.reaction.like)}\n• Url: ${anu.result.link}`
					buff = await getBuffer(anu.result.thumb)
					rimuru.sendMessage(from, buff, image, {quoted: freply, caption: teks})
					break
      case 'twitter':
             if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
             if (!q) return reply('Linknya?')
             ten = args[0]
             var res = await twitterGetUrl(`${ten}`)
            .then(g => {
             ren = `${g.download[2].url}`
             sendMediaURL(from,ren,'Done')
})
             break
      case 'brainly':
             reply(mess.wait)
             brainly(args.join(" ")).then(res => {
             hmm = '────────────\n'
             for (let Y of res.data) {
             hmm += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n───────────\n`
}
             reply(hmm)
             console.log(res)
})
             break
      case 'ssweb':
             if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/`)
             reply(mess.wait)
             ini_link = args[0]
             ini_buffer = await getBuffer(`https://hardianto-chan.herokuapp.com/api/tools/ssweb?url=${ini_link}&apikey=hardianto`)
             await rimuru.sendMessage(from, ini_buffer, image, { quoted: freply })
             break
       case 'nhentaipdf':
             if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
             if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 317986`)
             if (isNaN(Number(args[0]))) return await reply(mess.wrongFormat)
             try {
             henid = args[0]
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=PunyaIkyAds`)
             get_result = get_result.result
             get_info = get_result.info
             teks = `*Doujinshi Downloader*
             
📜 Title Romaji : ${get_result.title_romaji}
📃 Title Native : ${get_result.title_native}
🐤 Character : ${get_info.characters.join(", ")}\n`
             ini_image = await getBuffer(get_result.image[0])
             rimuru.sendMessage(from, ini_image, image, { caption: teks, quoted: freply, thumbnail: fakeimage })
             reply(mess.wait)
             anu = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=PunyaIkyAds`)
             pdf = await getBuffer(anu.result)
             rimuru.sendMessage(from, pdf, document, { quoted: freply, mimetype: Mimetype.pdf, filename: `${get_result.title_romaji}.pdf`, thumbnail: ini_image })
             } catch (e) {
             console.log(e)
             reply(String(e))
}
             break
       case 'nhentai':
              if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
              if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
              reply(mess.wait)
              henid = args[0]
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=PunyaIkyAds`)
              get_result = get_result.result
              ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
              ini_txt += `Title Native : ${get_result.title_native}\n`
              ini_txt += `Read Online : ${get_result.read}\n`
              get_info = get_result.info
              ini_txt += `Parodies : ${get_info.parodies}\n`
              ini_txt += `Character : ${get_info.characters.join(", ")}\n`
              ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
              ini_txt += `Artist : ${get_info.artists}\n`
              ini_txt += `Group : ${get_info.groups}\n`
              ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
              ini_txt += `Categories : ${get_info.categories}\n`
              ini_txt += `Pages : ${get_info.pages}\n`
              ini_txt += `Uploaded : ${get_info.uploaded}\n`
              reply(ini_txt)
              break
       case 'manga':
              if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
              reply(mess.wait)
              query = args.join(" ")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=PunyaIkyAds&query=${query}`)
              get_result = get_result.result
              ini_txt = `Id : ${get_result.id}\n`
              ini_txt += `Id MAL : ${get_result.idMal}\n`
              ini_txt += `Title : ${get_result.title.romaji}\n`
              ini_txt += `English : ${get_result.title.english}\n`
              ini_txt += `Native : ${get_result.title.native}\n`
              ini_txt += `Format : ${get_result.format}\n`
              ini_txt += `Chapters : ${get_result.chapters}\n`
              ini_txt += `Volume : ${get_result.volumes}\n`
              ini_txt += `Status : ${get_result.status}\n`
              ini_txt += `Source : ${get_result.source}\n`
              ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
              ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
              ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
              ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
              ini_txt += `Score : ${get_result.averageScore}%\n`
              ini_txt += `Characters : \n`
              ini_character = get_result.characters.nodes
              for (var x of ini_character) {
              ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
              ini_txt += `\nDescription : ${get_result.description}`
              buff = await getBuffer(get_result.coverImage.large)
              buttons = [{buttonId: `${prefix}menu`,buttonText:{displayText: `Back To Menu`},type:1}]
              imageMsg = (await rimuru.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'ғᴏʟʟᴏᴡ sᴏsᴍᴇᴅ ʀɪᴍᴜʀᴜ࿐ https://instabio.cc/Rimuru', imageMessage: imageMsg,
              contentText: ini_txt,buttons,headerType:4}
              prep = await rimuru.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              rimuru.relayWAMessage(prep)
         break
       case 'doujindesu':
             const _0xc8ec95=_0x5540;(function(_0x7f7b1e,_0x1fbfcd){const _0x1db9b2=_0x5540,_0x176a0d=_0x7f7b1e();while(!![]){try{const _0x2e6e0f=-parseInt(_0x1db9b2(0x8c))/0x1*(-parseInt(_0x1db9b2(0xa4))/0x2)+-parseInt(_0x1db9b2(0x9d))/0x3+-parseInt(_0x1db9b2(0xa1))/0x4+-parseInt(_0x1db9b2(0xa0))/0x5*(parseInt(_0x1db9b2(0x8d))/0x6)+-parseInt(_0x1db9b2(0x8a))/0x7*(-parseInt(_0x1db9b2(0x91))/0x8)+parseInt(_0x1db9b2(0x8e))/0x9*(parseInt(_0x1db9b2(0x9b))/0xa)+parseInt(_0x1db9b2(0x96))/0xb*(parseInt(_0x1db9b2(0x93))/0xc);if(_0x2e6e0f===_0x1fbfcd)break;else _0x176a0d['push'](_0x176a0d['shift']());}catch(_0x42b37e){_0x176a0d['push'](_0x176a0d['shift']());}}}(_0x5533,0x2922b));if(!q)return reply(mess[_0xc8ec95(0x90)]);function _0x5540(_0x372b8e,_0x24fa1d){const _0x5533cc=_0x5533();return _0x5540=function(_0x554006,_0x5bed5a){_0x554006=_0x554006-0x8a;let _0x50e8d8=_0x5533cc[_0x554006];return _0x50e8d8;},_0x5540(_0x372b8e,_0x24fa1d);}reply(mess[_0xc8ec95(0x92)]);function _0x5533(){const _0x55ca3c=['92403FVWyzh','thumb','wrongFormat','59872aZhzCh','wait','36yZBMGk','\x0a*Urutan\x20','type','1001506YpniyX','json','rating','*\x0a*Title:*\x20','title','230nYpYFa','\x0a*Rating:*\x20','146526yKszSA','\x0a*Followers:*\x20','status','656015IbiuCd','833880fatgsX','*Doujindesu\x20Search*\x0a','get','163276FVgszy','followers','length','91QyUQLY','http://api-melodicxt-2.herokuapp.com/api/doujindesu/search?query=','1QfwfOb','12bNebKn'];_0x5533=function(){return _0x55ca3c;};return _0x5533();}try{doujinnya=await got[_0xc8ec95(0xa3)](_0xc8ec95(0x8b)+q+'&apiKey=administrator')[_0xc8ec95(0x97)]();let {data}=await doujinnya;xixixai=_0xc8ec95(0xa2);for(let i=0x0;i<data[_0xc8ec95(0xa6)];i++){xixixai+=_0xc8ec95(0x94)+(i+0x1)+_0xc8ec95(0x99)+data[i][_0xc8ec95(0x9a)]+'\x0a*Type:*\x20'+data[i][_0xc8ec95(0x95)]+'\x0a*Status:*\x20'+data[i][_0xc8ec95(0x9f)]+_0xc8ec95(0x9c)+data[i][_0xc8ec95(0x98)]+_0xc8ec95(0x9e)+data[i][_0xc8ec95(0xa5)]+'\x0a';}buffer=await getBuffer(data[0x0][_0xc8ec95(0x8f)]),rimuru['sendMessage'](from,buffer,image,{'caption':xixixai,'quoted':freply});}catch(_0x33ce2d){console['log'](_0x33ce2d),reply(String(_0x33ce2d));}
             break
      case 'anime':
             var _0x3d06f9=_0x380b;(function(_0x138a90,_0x53da2f){var _0x2fef67=_0x380b,_0xf42999=_0x138a90();while(!![]){try{var _0x52eb79=parseInt(_0x2fef67(0xc1))/0x1*(-parseInt(_0x2fef67(0xba))/0x2)+-parseInt(_0x2fef67(0xa3))/0x3+-parseInt(_0x2fef67(0xc8))/0x4*(-parseInt(_0x2fef67(0xb0))/0x5)+-parseInt(_0x2fef67(0xac))/0x6+parseInt(_0x2fef67(0xc2))/0x7*(parseInt(_0x2fef67(0xbf))/0x8)+parseInt(_0x2fef67(0xc4))/0x9+parseInt(_0x2fef67(0x9f))/0xa*(parseInt(_0x2fef67(0xb7))/0xb);if(_0x52eb79===_0x53da2f)break;else _0xf42999['push'](_0xf42999['shift']());}catch(_0x2ad0df){_0xf42999['push'](_0xf42999['shift']());}}}(_0x2459,0xdd86d));if(args['length']==0x0)return reply(_0x3d06f9(0xaa)+(prefix+command)+_0x3d06f9(0xa1));reply(mess[_0x3d06f9(0xb4)]),query=args['join']('\x20'),get_result=await fetchJson('https://api.lolhuman.xyz/api/anime?apikey=PunyaIkyAds&query='+query),get_result=get_result[_0x3d06f9(0xab)],ini_txt='Id\x20:\x20'+get_result['id']+'\x0a',ini_txt+='Id\x20MAL\x20:\x20'+get_result[_0x3d06f9(0xa9)]+'\x0a',ini_txt+='Title\x20:\x20'+get_result[_0x3d06f9(0xa6)]['romaji']+'\x0a',ini_txt+=_0x3d06f9(0xb9)+get_result[_0x3d06f9(0xa6)]['english']+'\x0a',ini_txt+='Native\x20:\x20'+get_result[_0x3d06f9(0xa6)]['native']+'\x0a',ini_txt+='Format\x20:\x20'+get_result[_0x3d06f9(0xb5)]+'\x0a',ini_txt+=_0x3d06f9(0xbc)+get_result[_0x3d06f9(0xc0)]+'\x0a',ini_txt+=_0x3d06f9(0xc5)+get_result['duration']+_0x3d06f9(0xc6),ini_txt+=_0x3d06f9(0xa4)+get_result['status']+'\x0a',ini_txt+=_0x3d06f9(0xb8)+get_result['season']+'\x0a',ini_txt+='Season\x20Year\x20:\x20'+get_result['seasonYear']+'\x0a',ini_txt+=_0x3d06f9(0xc7)+get_result[_0x3d06f9(0x9d)]+'\x0a',ini_txt+=_0x3d06f9(0xc9)+get_result[_0x3d06f9(0xb6)][_0x3d06f9(0xca)]+'\x20-\x20'+get_result['startDate'][_0x3d06f9(0xb3)]+_0x3d06f9(0x9e)+get_result[_0x3d06f9(0xb6)][_0x3d06f9(0x9c)]+'\x0a',ini_txt+=_0x3d06f9(0xb1)+get_result[_0x3d06f9(0xbd)]['day']+_0x3d06f9(0x9e)+get_result[_0x3d06f9(0xbd)][_0x3d06f9(0xb3)]+'\x20-\x20'+get_result[_0x3d06f9(0xbd)][_0x3d06f9(0x9c)]+'\x0a',ini_txt+=_0x3d06f9(0xae)+get_result[_0x3d06f9(0xaf)]['join'](',\x20')+'\x0a',ini_txt+='Synonyms\x20:\x20'+get_result[_0x3d06f9(0xb2)]['join'](',\x20')+'\x0a',ini_txt+=_0x3d06f9(0xcb)+get_result[_0x3d06f9(0xa7)]+'%\x0a',ini_txt+=_0x3d06f9(0xc3),ini_character=get_result['characters'][_0x3d06f9(0xa0)];for(var x of ini_character){ini_txt+='-\x20'+x[_0x3d06f9(0xad)][_0x3d06f9(0xa8)]+'\x20('+x[_0x3d06f9(0xad)][_0x3d06f9(0xbe)]+')\x0a';}function _0x380b(_0x562477,_0x4811fe){var _0x245992=_0x2459();return _0x380b=function(_0x380bb0,_0x55be28){_0x380bb0=_0x380bb0-0x9c;var _0x46e071=_0x245992[_0x380bb0];return _0x46e071;},_0x380b(_0x562477,_0x4811fe);}ini_txt+=_0x3d06f9(0xa2)+get_result['description'],thumbnail=await getBuffer(get_result[_0x3d06f9(0xa5)]['large']),await rimuru[_0x3d06f9(0xbb)](from,thumbnail,image,{'quoted':freply,'caption':ini_txt});function _0x2459(){var _0x3a284d=['genres','110eSXBZm','End\x20Date\x20:\x20','synonyms','month','wait','format','startDate','1651738rjqJhO','Season\x20:\x20','English\x20:\x20','2cXODMY','sendMessage','Episodes\x20:\x20','endDate','native','63704iosodr','episodes','153191lCLpfD','217TkGJal','Characters\x20:\x20\x0a','8301888nLUGjf','Duration\x20:\x20','\x20mins.\x0a','Source\x20:\x20','122068GigopE','Start\x20Date\x20:\x20','day','Score\x20:\x20','year','source','\x20-\x20','130cZmlQv','nodes','\x20Gotoubun\x20No\x20Hanayome','\x0aDescription\x20:\x20','3110730IAPDNU','Status\x20:\x20','coverImage','title','averageScore','full','idMal','Example:\x20','result','10171434GAGQPQ','name','Genre\x20:\x20'];_0x2459=function(){return _0x3a284d;};return _0x2459();}
             break
      case 'kusonime':
             var _0xad47bb=_0x2609;function _0x1b01(){var _0x198ebe=['result','1506072QgnSYn','japanese','producers','Released\x20On\x20:\x20','genre','wait','sendMessage','released_on','Seasons\x20:\x20','81992JEWfds','Producers\x20:\x20','Desc\x20:\x20','539024qTfwCg','duration','score','\x20Gotoubun\x20No\x20Hanayome','926705VkpErB','Example:\x20','Genre\x20:\x20','1463936FmqAhb','join','https://api.lolhuman.xyz/api/kusonimesearch?apikey=PunyaIkyAds&query=','Title\x20:\x20','334062bxEizf','Status\x20:\x20','status','184962hVDICs','desc','length','Japanese\x20:\x20','Type\x20:\x20','Duration\x20:\x20','title','total_episode','3ehRNQt','thumbnail','\x20-\x20','63awTPPR'];_0x1b01=function(){return _0x198ebe;};return _0x1b01();}(function(_0x212f61,_0x47c3fe){var _0x18b102=_0x2609,_0x81d97f=_0x212f61();while(!![]){try{var _0x20a6f6=-parseInt(_0x18b102(0x174))/0x1+-parseInt(_0x18b102(0x177))/0x2+-parseInt(_0x18b102(0x18d))/0x3*(-parseInt(_0x18b102(0x17e))/0x4)+parseInt(_0x18b102(0x17b))/0x5+parseInt(_0x18b102(0x185))/0x6*(parseInt(_0x18b102(0x190))/0x7)+-parseInt(_0x18b102(0x192))/0x8+-parseInt(_0x18b102(0x182))/0x9;if(_0x20a6f6===_0x47c3fe)break;else _0x81d97f['push'](_0x81d97f['shift']());}catch(_0x4cffb4){_0x81d97f['push'](_0x81d97f['shift']());}}}(_0x1b01,0x3d7ef));function _0x2609(_0x2fd78a,_0x3b55ab){var _0x1b0152=_0x1b01();return _0x2609=function(_0x260991,_0x49eea4){_0x260991=_0x260991-0x173;var _0x5b3e87=_0x1b0152[_0x260991];return _0x5b3e87;},_0x2609(_0x2fd78a,_0x3b55ab);}if(args[_0xad47bb(0x187)]==0x0)return reply(_0xad47bb(0x17c)+(prefix+command)+_0xad47bb(0x17a));reply(mess[_0xad47bb(0x197)]),query=args[_0xad47bb(0x17f)]('\x20'),get_result=await fetchJson(_0xad47bb(0x180)+query),get_result=get_result[_0xad47bb(0x191)],ini_txt=_0xad47bb(0x181)+get_result[_0xad47bb(0x18b)]+'\x0a',ini_txt+=_0xad47bb(0x188)+get_result[_0xad47bb(0x193)]+'\x0a',ini_txt+=_0xad47bb(0x17d)+get_result[_0xad47bb(0x196)]+'\x0a',ini_txt+=_0xad47bb(0x173)+get_result['seasons']+'\x0a',ini_txt+=_0xad47bb(0x175)+get_result[_0xad47bb(0x194)]+'\x0a',ini_txt+=_0xad47bb(0x189)+get_result['type']+'\x0a',ini_txt+=_0xad47bb(0x183)+get_result[_0xad47bb(0x184)]+'\x0a',ini_txt+='Total\x20Episode\x20:\x20'+get_result[_0xad47bb(0x18c)]+'\x0a',ini_txt+='Score\x20:\x20'+get_result[_0xad47bb(0x179)]+'\x0a',ini_txt+=_0xad47bb(0x18a)+get_result[_0xad47bb(0x178)]+'\x0a',ini_txt+=_0xad47bb(0x195)+get_result[_0xad47bb(0x199)]+'\x0a',ini_txt+=_0xad47bb(0x176)+get_result[_0xad47bb(0x186)]+'\x0a',link_dl=get_result['link_dl'];for(var x in link_dl){ini_txt+='\x0a'+x+'\x0a';for(var y in link_dl[x]){ini_txt+=y+_0xad47bb(0x18f)+link_dl[x][y]+'\x0a';}}ini_buffer=await getBuffer(get_result[_0xad47bb(0x18e)]),await rimuru[_0xad47bb(0x198)](from,ini_buffer,image,{'quoted':freply,'caption':ini_txt});
             break
       case 'otakudesu':
              var _0x1cc129=_0x2e60;function _0x3e65(){var _0x302d67=['size','Example:\x20','\x0a\x0a*','genres','\x0a```Reso\x20:\x20```','Duration\x20:\x20','wait','result','Japanese\x20:\x20','Aired\x20:\x20','1087605MiInYf','episodes','status','343uSlYdo','336029dMZXCX','6pcTCmn','join','title','Credit\x20:\x20','```Link\x20:\x20```\x0a','reso','4HnhfkD','Title\x20:\x20','aired','\x20Gotoubun\x20No\x20Hanayome','19738530poEJMN','Episode\x20:\x20','producers','4549644scbYkT','Producers\x20:\x20','2594595KozBWy','link_dl','112816lyTpzW','```Size\x20:\x20```','1880500iTQXtr','Rating\x20:\x20','https://api.lolhuman.xyz/api/otakudesusearch?apikey=PunyaIkyAds&query='];_0x3e65=function(){return _0x302d67;};return _0x3e65();}function _0x2e60(_0x497c55,_0x5a791c){var _0x3e65db=_0x3e65();return _0x2e60=function(_0x2e606a,_0x499d9a){_0x2e606a=_0x2e606a-0xf6;var _0x4c777d=_0x3e65db[_0x2e606a];return _0x4c777d;},_0x2e60(_0x497c55,_0x5a791c);}(function(_0x3e0a16,_0x386006){var _0x16e7a8=_0x2e60,_0x26be0f=_0x3e0a16();while(!![]){try{var _0x113bd3=-parseInt(_0x16e7a8(0xfd))/0x1*(parseInt(_0x16e7a8(0xfe))/0x2)+-parseInt(_0x16e7a8(0x10d))/0x3+parseInt(_0x16e7a8(0x104))/0x4*(parseInt(_0x16e7a8(0x111))/0x5)+-parseInt(_0x16e7a8(0x10b))/0x6+-parseInt(_0x16e7a8(0xfc))/0x7*(-parseInt(_0x16e7a8(0x10f))/0x8)+parseInt(_0x16e7a8(0xf9))/0x9+parseInt(_0x16e7a8(0x108))/0xa;if(_0x113bd3===_0x386006)break;else _0x26be0f['push'](_0x26be0f['shift']());}catch(_0x553aa1){_0x26be0f['push'](_0x26be0f['shift']());}}}(_0x3e65,0x8188a));if(args['length']==0x0)return reply(_0x1cc129(0x115)+(prefix+command)+_0x1cc129(0x107));reply(mess[_0x1cc129(0x11a)]),query=args[_0x1cc129(0xff)]('\x20'),get_result=await fetchJson(_0x1cc129(0x113)+query),get_result=get_result[_0x1cc129(0xf6)],ini_txt=_0x1cc129(0x105)+get_result['title']+'\x0a',ini_txt+=_0x1cc129(0xf7)+get_result['japanese']+'\x0a',ini_txt+='Judul\x20:\x20'+get_result['judul']+'\x0a',ini_txt+='Type\x20:\x20'+get_result['type']+'\x0a',ini_txt+=_0x1cc129(0x109)+get_result[_0x1cc129(0xfa)]+'\x0a',ini_txt+=_0x1cc129(0xf8)+get_result[_0x1cc129(0x106)]+'\x0a',ini_txt+=_0x1cc129(0x10c)+get_result[_0x1cc129(0x10a)]+'\x0a',ini_txt+='Genre\x20:\x20'+get_result[_0x1cc129(0x117)]+'\x0a',ini_txt+=_0x1cc129(0x119)+get_result['duration']+'\x0a',ini_txt+='Studios\x20:\x20'+get_result[_0x1cc129(0xfb)]+'\x0a',ini_txt+=_0x1cc129(0x112)+get_result['rating']+'\x0a',ini_txt+=_0x1cc129(0x101)+get_result['credit']+'\x0a',get_link=get_result[_0x1cc129(0x10e)];for(var x in get_link){ini_txt+=_0x1cc129(0x116)+get_link[x][_0x1cc129(0x100)]+'*\x0a';for(var y in get_link[x][_0x1cc129(0x10e)]){ini_info=get_link[x][_0x1cc129(0x10e)][y],ini_txt+=_0x1cc129(0x118)+ini_info[_0x1cc129(0x103)]+'\x0a',ini_txt+=_0x1cc129(0x110)+ini_info[_0x1cc129(0x114)]+'\x0a',ini_txt+=_0x1cc129(0x102),down_link=ini_info['link_dl'];for(var z in down_link){ini_txt+=z+'\x20-\x20'+down_link[z]+'\x0a';}}}reply(ini_txt);
              break
       case 'nekopoi':
              var _0x3bb840=_0x589f;(function(_0x17f09e,_0x299695){var _0x27aedb=_0x589f,_0xa67b1a=_0x17f09e();while(!![]){try{var _0xd3cc9b=parseInt(_0x27aedb(0xd5))/0x1*(-parseInt(_0x27aedb(0xdb))/0x2)+parseInt(_0x27aedb(0xc9))/0x3*(parseInt(_0x27aedb(0xcb))/0x4)+parseInt(_0x27aedb(0xbe))/0x5+-parseInt(_0x27aedb(0xd2))/0x6+-parseInt(_0x27aedb(0xc4))/0x7+-parseInt(_0x27aedb(0xd3))/0x8*(parseInt(_0x27aedb(0xc7))/0x9)+-parseInt(_0x27aedb(0xd9))/0xa*(-parseInt(_0x27aedb(0xd4))/0xb);if(_0xd3cc9b===_0x299695)break;else _0xa67b1a['push'](_0xa67b1a['shift']());}catch(_0x1a04ac){_0xa67b1a['push'](_0xa67b1a['shift']());}}}(_0x3f65,0xc5430));if(args['length']==0x0)return reply(_0x3bb840(0xd6)+(prefix+command)+_0x3bb840(0xcf));function _0x589f(_0x22f14c,_0x3e0aa3){var _0x3f652e=_0x3f65();return _0x589f=function(_0x589f87,_0x4492d2){_0x589f87=_0x589f87-0xbe;var _0x1e0f1d=_0x3f652e[_0x589f87];return _0x1e0f1d;},_0x589f(_0x22f14c,_0x3e0aa3);}ini_url=args[0x0],get_result=await fetchJson('https://api.lolhuman.xyz/api/nekopoi?apikey=PunyaIkyAds&url='+ini_url),get_result=get_result[_0x3bb840(0xbf)],ini_txt=_0x3bb840(0xc2)+get_result[_0x3bb840(0xc8)]+'```\x0a',ini_txt+=_0x3bb840(0xda)+get_result[_0x3bb840(0xcd)]+'```\x0a',ini_txt+=_0x3bb840(0xc0)+get_result[_0x3bb840(0xce)]+_0x3bb840(0xc3),ini_txt+=_0x3bb840(0xc5)+get_result['size']+_0x3bb840(0xc3),ini_txt+=_0x3bb840(0xcc)+get_result['sinopsis']+_0x3bb840(0xc3),link=get_result[_0x3bb840(0xc1)];for(var x in link){ini_txt+='\x0a'+link[x][_0x3bb840(0xca)]+'\x0a',link_dl=link[x]['link'];for(var y in link_dl){ini_txt+=y+'\x20-\x20'+link_dl[y]+'\x0a';}}function _0x3f65(){var _0x3c064c=['imageMessage','3128196fiicCu','184yDQIui','11BQqRPG','1EsQaiZ','Example:\x20','relayWAMessage','ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru','29389530MKUotm','```🐥\x20Porducers\x20:\x20','2292104COVjDo','3006525PYgSwI','result','```🐥\x20Duration\x20:\x20','link','```🐥\x20Title\x20:\x20','```\x0a','3463082qyYQkS','```🐥\x20Size\x20:\x20','➡️Next','548730XAHLaC','anime','249654PIbwnx','name','40ljUxvp','```🐥\x20Sinopsis\x20:\x20','producers','duration','\x20https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/','thumb'];_0x3f65=function(){return _0x3c064c;};return _0x3f65();}buff=await getBuffer(get_result[_0x3bb840(0xd0)]),buttons=[{'buttonId':''+(prefix+command),'buttonText':{'displayText':_0x3bb840(0xc6)},'type':0x1}],imageMsg=(await rimuru['prepareMessageMedia'](buff,_0x3bb840(0xd1),{'thumbnail':buff}))['imageMessage'],buttonsMessage={'footerText':_0x3bb840(0xd8),'imageMessage':imageMsg,'contentText':ini_txt,'buttons':buttons,'headerType':0x4},prep=await rimuru['prepareMessageFromContent'](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru[_0x3bb840(0xd7)](prep);
         break
       case 'nekopoisearch':
              var _0x2c2f54=_0x4b48;function _0x49b8(){var _0x50c9e9=['https://api.lolhuman.xyz/api/nekopoisearch?apikey=PunyaIkyAds&query=','Example:\x20','thumbnail','3620705nxLTri','\x20Isekai\x20Harem','2346304VYeKHT','22fuBHbv','282KFLcTH','title','639kJXJlo','13890dsGrDO','join','399433BLKDyW','1040LiIQKK','126774RCatqE','result','```\x0a\x0a','```🐥\x20Thumbnail\x20:\x20','87311tBQNTB','5812UppNAs','link','```🐥\x20Link\x20:\x20'];_0x49b8=function(){return _0x50c9e9;};return _0x49b8();}(function(_0x3ce366,_0x175a48){var _0x1eee0c=_0x4b48,_0x3b5a16=_0x3ce366();while(!![]){try{var _0x1971bd=parseInt(_0x1eee0c(0x1e7))/0x1+parseInt(_0x1eee0c(0x1f7))/0x2*(-parseInt(_0x1eee0c(0x1e9))/0x3)+-parseInt(_0x1eee0c(0x1ee))/0x4*(-parseInt(_0x1eee0c(0x1e8))/0x5)+-parseInt(_0x1eee0c(0x1f8))/0x6*(-parseInt(_0x1eee0c(0x1ed))/0x7)+-parseInt(_0x1eee0c(0x1f6))/0x8+-parseInt(_0x1eee0c(0x1e4))/0x9*(-parseInt(_0x1eee0c(0x1e5))/0xa)+-parseInt(_0x1eee0c(0x1f4))/0xb;if(_0x1971bd===_0x175a48)break;else _0x3b5a16['push'](_0x3b5a16['shift']());}catch(_0x47bf3){_0x3b5a16['push'](_0x3b5a16['shift']());}}}(_0x49b8,0x490da));if(args['length']==0x0)return reply(_0x2c2f54(0x1f2)+(prefix+command)+_0x2c2f54(0x1f5));query=args[_0x2c2f54(0x1e6)]('\x20'),get_result=await fetchJson(_0x2c2f54(0x1f1)+query),get_result=get_result[_0x2c2f54(0x1ea)],ini_txt='';function _0x4b48(_0x1b4d93,_0x4b9d21){var _0x49b834=_0x49b8();return _0x4b48=function(_0x4b4885,_0x5c3c04){_0x4b4885=_0x4b4885-0x1e3;var _0x4a40bd=_0x49b834[_0x4b4885];return _0x4a40bd;},_0x4b48(_0x1b4d93,_0x4b9d21);}for(var x of get_result){ini_txt+='```🐥\x20Title\x20:\x20'+x[_0x2c2f54(0x1e3)]+'```\x0a',ini_txt+=_0x2c2f54(0x1f0)+x[_0x2c2f54(0x1ef)]+'```\x0a',ini_txt+=_0x2c2f54(0x1ec)+x[_0x2c2f54(0x1f3)]+_0x2c2f54(0x1eb);}reply(ini_txt);
              break
       case 'neko':
       case 'kanna':
       case 'sagiri':
       case 'megumin':
       case 'wallnime':
              var _0x4dab82=_0x2ec3;function _0x409d(){var _0xe10a4f=['prepareMessageFromContent','?apikey=PunyaIkyAds','450560cesCPs','82959scKJUL','klik\x20Next\x20untuk\x20ke\x20gambar\x20selanjut\x20nya','ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru','https://api.lolhuman.xyz/api/random/','wait','➡️Next','prepareMessageMedia','15954268bKVpuR','1163395Ckqrrd','imageMessage','2337078BTZQNs','204531tgaCEh','9zgSMDJ','8RipWDP','7sYkaFa','relayWAMessage','10tZNULl','4622880QFisIz'];_0x409d=function(){return _0xe10a4f;};return _0x409d();}function _0x2ec3(_0x3a010e,_0xe6c9e2){var _0x409dc2=_0x409d();return _0x2ec3=function(_0x2ec3db,_0xbad610){_0x2ec3db=_0x2ec3db-0x127;var _0x4f3da6=_0x409dc2[_0x2ec3db];return _0x4f3da6;},_0x2ec3(_0x3a010e,_0xe6c9e2);}(function(_0x2da0f2,_0x19dd8f){var _0xa73bf3=_0x2ec3,_0x3e2c76=_0x2da0f2();while(!![]){try{var _0x37641d=-parseInt(_0xa73bf3(0x128))/0x1*(parseInt(_0xa73bf3(0x138))/0x2)+-parseInt(_0xa73bf3(0x133))/0x3+-parseInt(_0xa73bf3(0x135))/0x4*(parseInt(_0xa73bf3(0x130))/0x5)+parseInt(_0xa73bf3(0x132))/0x6*(parseInt(_0xa73bf3(0x136))/0x7)+-parseInt(_0xa73bf3(0x127))/0x8+-parseInt(_0xa73bf3(0x134))/0x9*(parseInt(_0xa73bf3(0x139))/0xa)+parseInt(_0xa73bf3(0x12f))/0xb;if(_0x37641d===_0x19dd8f)break;else _0x3e2c76['push'](_0x3e2c76['shift']());}catch(_0x40d733){_0x3e2c76['push'](_0x3e2c76['shift']());}}}(_0x409d,0x5b0e3),reply(mess[_0x4dab82(0x12c)]),buff=await getBuffer(_0x4dab82(0x12b)+command+_0x4dab82(0x13b)),buttons=[{'buttonId':''+(prefix+command),'buttonText':{'displayText':_0x4dab82(0x12d)},'type':0x1}],imageMsg=(await rimuru[_0x4dab82(0x12e)](buff,_0x4dab82(0x131),{'thumbnail':buff}))[_0x4dab82(0x131)],buttonsMessage={'footerText':_0x4dab82(0x12a),'imageMessage':imageMsg,'contentText':_0x4dab82(0x129),'buttons':buttons,'headerType':0x4},prep=await rimuru[_0x4dab82(0x13a)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru[_0x4dab82(0x137)](prep));   
              break
        
              break
       case 'nakanoitsuki':
       case 'nakanoikyy':
       case 'nakanomiku':
              var _0x214cbc=_0x10a5;(function(_0x3b7386,_0x2fb230){var _0x23ee1e=_0x10a5,_0x2ed65b=_0x3b7386();while(!![]){try{var _0x1830cf=-parseInt(_0x23ee1e(0x18e))/0x1+parseInt(_0x23ee1e(0x190))/0x2+-parseInt(_0x23ee1e(0x183))/0x3*(parseInt(_0x23ee1e(0x188))/0x4)+-parseInt(_0x23ee1e(0x189))/0x5+parseInt(_0x23ee1e(0x185))/0x6*(parseInt(_0x23ee1e(0x18f))/0x7)+-parseInt(_0x23ee1e(0x181))/0x8+parseInt(_0x23ee1e(0x187))/0x9;if(_0x1830cf===_0x2fb230)break;else _0x2ed65b['push'](_0x2ed65b['shift']());}catch(_0x3e2699){_0x2ed65b['push'](_0x2ed65b['shift']());}}}(_0x12db,0x6fada),reply(mess[_0x214cbc(0x191)]),res=await axios[_0x214cbc(0x18c)]('https://fdciabdul.tech/api/pinterest?keyword='+command));function _0x10a5(_0xec6cc,_0x5d9f88){var _0x12db13=_0x12db();return _0x10a5=function(_0x10a547,_0x4effd2){_0x10a547=_0x10a547-0x180;var _0xe1bf25=_0x12db13[_0x10a547];return _0xe1bf25;},_0x10a5(_0xec6cc,_0x5d9f88);}function _0x12db(){var _0x103737=['2955575CLEwKR','length','floor','get','stringify','105009uyprGI','371vEtJbB','700860IDOwnr','wait','data','2745000NexBCZ','parse','5763WBaApv','alloc','36858apXOHJ','*Wangy²*','10930311GRxnVO','820qAWFuo'];_0x12db=function(){return _0x103737;};return _0x12db();}var string=JSON[_0x214cbc(0x182)](JSON[_0x214cbc(0x18d)](res[_0x214cbc(0x180)])),random=string[Math[_0x214cbc(0x18b)](Math['random']()*string[_0x214cbc(0x18a)])];sendFileFromUrl(random,image,{'quoted':freply,'thumbnail':Buffer[_0x214cbc(0x184)](0x0),'caption':_0x214cbc(0x186)});
              break
       case 'storyanime':
              
              reply(mess.wait)
              anu = await fetchJson(`https://lolhuman.herokuapp.com/api/storynime?apikey=PunyaIkyAds`)
              buffer = await getBuffer(anu.result)
              rimuru.sendMessage(from, buffer, video, { quoted: freply })
              break
       case 'nekopoi3d':
       case '3dnekopoi':
       case '3dnekopoilast':
       if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
              reply(mess.wait)
              try {
              bsangee = await axios.get(`https://api.vhtear.com/neko3d&apikey=${setting.vhtearkey}`)
              bsangee2 = bsangee.data
              keluarplay = `*List update 3D JAV*\n`
              for (let i = 0; i < bsangee2.result.length; i++) {
              keluarplay += `\n═════════════════\n\n*Judul* : ${bsangee2.result[i].title}\n*Deskripsi* : ${bsangee2.result[i].description}\n*Link* : ${bsangee2.result[i].url}\n`
}
              reply(keluarplay) 
              } catch (err) {
              console.log(err)
              reply('error!')
}
               break
        case 'nekopoijav':
        case 'javnekopoi':
        if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
               reply(mess.wait)
               try {
               bsangce = await axios.get(`https://api.vhtear.com/nekojavlist&apikey=${setting.vhtearkey}`)
               bsangce2 = bsangce.data
               keluarplay = `*List update JAV*\n`
               for (let i = 0; i < bsangce2.result.length; i++) {
               keluarplay += `\n═════════════════\n\n*Judul* : ${bsangce2.result[i].title}\n*Serial JAV* : ${bsangce2.result[i].seri}\n*Link* : ${bsangce2.result[i].url}\n`
}
               reply(keluarplay)
               } catch (err) {
               console.log(err)
}
               break
        case 'nekopoicosplay':
        case 'cosplaynekopoi':
        if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
               try {
               reply(mess.wait)
               bsangbe = await axios.get(`https://api.vhtear.com/nekojavcosplay&apikey=${setting.vhtearkey}`)
               bsangbe2 = bsangbe.data
               keluarplay = `*List update Cosplay JAV*\n`
               for (let i = 0; i < bsangbe2.result.length; i++) {
               keluarplay += `\n═════════════════\n\n*Judul* : ${bsangbe2.result[i].title}\n*Deskripsi* : ${bsangbe2.result[i].detail}\n*Link* : ${bsangbe2.result[i].url}\n`
}
               reply(keluarplay)
               } catch (err) {
               console.log(err)
}
               break
        case 'otakuongoing':              
               o = await onGoing()
               console.log(o)
               ot = '*「 Ongoing Otakudesu 」*'
               for (let i = 0; i < o.length; i++) {
               ot += `\n\n*Judul :* ${o[i].judul}\n*Episode :* ${o[i].eps}\n*Eps berikutnya pada hari :* ${o[i].hri}\n*Tanggal :* ${o[i].tgl}\n\n*Image :* ${o[i].thumb}`
}
               var _0x325deb=_0x18bd;function _0x1ff8(){var _0x20da75=['prepareMessageFromContent','4778669XcQKAT','6XSgYjy','99FivkHd','Jangan\x20Lupa\x20Donasi\x20Ya\x20Kak\x20☕','1474800EpLCvT','267357KrrpsV','311971lPHbBQ','prepareMessageMedia','16xUOutg','➡️Next','2808610MHFFDH','Follow\x20Sosmed\x20Owner\x20ⲂⲟⲦz\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru/','imageMessage','682592NBscwU','thumb','2151340DBLIQV','relayWAMessage'];_0x1ff8=function(){return _0x20da75;};return _0x1ff8();}function _0x18bd(_0x4f8ae5,_0x21c1f7){var _0x1ff89a=_0x1ff8();return _0x18bd=function(_0x18bdbd,_0x1e4cb7){_0x18bdbd=_0x18bdbd-0x10b;var _0x25daf=_0x1ff89a[_0x18bdbd];return _0x25daf;},_0x18bd(_0x4f8ae5,_0x21c1f7);}(function(_0x39b7a2,_0x3ee91d){var _0x58193a=_0x18bd,_0x46ea68=_0x39b7a2();while(!![]){try{var _0x488ffb=parseInt(_0x58193a(0x112))/0x1+parseInt(_0x58193a(0x110))/0x2+parseInt(_0x58193a(0x111))/0x3*(-parseInt(_0x58193a(0x114))/0x4)+-parseInt(_0x58193a(0x116))/0x5+-parseInt(_0x58193a(0x10d))/0x6*(parseInt(_0x58193a(0x10c))/0x7)+parseInt(_0x58193a(0x119))/0x8*(parseInt(_0x58193a(0x10e))/0x9)+parseInt(_0x58193a(0x11b))/0xa;if(_0x488ffb===_0x3ee91d)break;else _0x46ea68['push'](_0x46ea68['shift']());}catch(_0x2a0d66){_0x46ea68['push'](_0x46ea68['shift']());}}}(_0x1ff8,0x9305c),buff=await getBuffer(o[0x0][_0x325deb(0x11a)]),buttons=[{'buttonId':''+(prefix+command),'buttonText':{'displayText':_0x325deb(0x115)},'type':0x1}],imageMsg=(await rimuru[_0x325deb(0x113)](buff,_0x325deb(0x118),{'thumbnail':buff}))[_0x325deb(0x118)],buttonsMessage={'footerText':_0x325deb(0x10f),'imageMessage':imageMsg,'contentText':_0x325deb(0x117),'buttons':buttons,'headerType':0x4},prep=await rimuru[_0x325deb(0x10b)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru[_0x325deb(0x11c)](prep));  
break

case 'loli':
       case 'husbu':
       case 'milf':
       case 'cosplay':
       case 'wallml':
              /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://ikyy-chan02.github.io`)
              const _0x4d938a=_0x1900;function _0x2339(){const _0x517877=['imageMessage','4707882yGvMzs','get','445532ZArYIj','prepareMessage','data','6GLmNig','length','.jpeg','.json','14298RqESNS','unlinkSync','random','555BGGrZc','ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru','https://raw.githubusercontent.com/Arya-was/endak-tau/main/','7SwjGjY','➡️Next','417892XhFlLQ','4291500CoApgj','59128DGgHkt','writeFileSync','klik\x20Next\x20untuk\x20ke\x20gambar\x20selanjut\x20nya','329624tYcwSs','prepareMessageFromContent','relayWAMessage','message','readFileSync'];_0x2339=function(){return _0x517877;};return _0x2339();}function _0x1900(_0x2c7568,_0xa59d01){const _0x2339b8=_0x2339();return _0x1900=function(_0x190070,_0x5a49e9){_0x190070=_0x190070-0x12f;let _0x4582fa=_0x2339b8[_0x190070];return _0x4582fa;},_0x1900(_0x2c7568,_0xa59d01);}(function(_0x3f8478,_0x241503){const _0x4f4084=_0x1900,_0x42d526=_0x3f8478();while(!![]){try{const _0x3d99d5=-parseInt(_0x4f4084(0x13a))/0x1+parseInt(_0x4f4084(0x132))/0x2+parseInt(_0x4f4084(0x13d))/0x3*(parseInt(_0x4f4084(0x149))/0x4)+-parseInt(_0x4f4084(0x144))/0x5*(-parseInt(_0x4f4084(0x141))/0x6)+parseInt(_0x4f4084(0x147))/0x7*(parseInt(_0x4f4084(0x12f))/0x8)+parseInt(_0x4f4084(0x138))/0x9+-parseInt(_0x4f4084(0x14a))/0xa;if(_0x3d99d5===_0x241503)break;else _0x42d526['push'](_0x42d526['shift']());}catch(_0xf116cb){_0x42d526['push'](_0x42d526['shift']());}}}(_0x2339,0x47cbe));let wipu=(await axios[_0x4d938a(0x139)](_0x4d938a(0x146)+command+_0x4d938a(0x140)))[_0x4d938a(0x13c)],wipi=wipu[Math['floor'](Math[_0x4d938a(0x143)]()*wipu[_0x4d938a(0x13e)])];fs[_0x4d938a(0x130)]('./'+sender+_0x4d938a(0x13f),await getBuffer(wipi)),buttons=[{'buttonId':''+(prefix+command),'buttonText':{'displayText':_0x4d938a(0x148)},'type':0x1}],imageMsg=(await rimuru[_0x4d938a(0x13b)](from,fs[_0x4d938a(0x136)]('./'+sender+_0x4d938a(0x13f)),'imageMessage',{'thumbnail':Buffer['alloc'](0x0)}))[_0x4d938a(0x135)][_0x4d938a(0x137)],buttonsMessage={'footerText':_0x4d938a(0x145),'imageMessage':imageMsg,'contentText':_0x4d938a(0x131),'buttons':buttons,'headerType':0x4},prep=await rimuru[_0x4d938a(0x133)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru[_0x4d938a(0x134)](prep),fs[_0x4d938a(0x142)]('./'+sender+_0x4d938a(0x13f));
              break
        case 'playy':
case 'lagu':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
teks = args.join(' ')
reply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(` Playing ${res.all[0].title}`)
let thumbInfo = ` *Youtube Search*
 *🐥 Judul :* ${res.all[0].title}
 *🐣 ID Video :* ${res.all[0].videoId}
 *🐤 Diupload Pada :* ${res.all[0].ago}
 *🐥 Views :* ${res.all[0].views}
 *🐣 Durasi :* ${res.all[0].timestamp}
 *🐤 Channel :* ${res.all[0].author.name}
 *🔗 Link Channel :* ${res.all[0].author.url}
 
*File Sedang Di Kirim........*
`
/////////////sendFileFromUrl(res.all[0].image, image, {quoted: freply, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: freply, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.Playing ${res.all[0].title}`)
let thumbInfo = `*${botName}* 
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: freply, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: freply, mimetype: 'audio/mp3', filename: res[0].output})
}
break
case 'play2':   
				  if (args.length < 1) return reply('*Masukan judul nya?*')
reply('Loading.... ')
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 PLAY VIDEO 」*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				rimuru.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:freply, caption: 'Nih Gan'})
					break  
					
					case 'ytdl':
					case 'play':
			  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://ikyy-chan02.github.io`)
              if (!q) return reply('Linknya?')
			 res = await yts(q)
			   let thumbInfo = ` 
*Youtube Download*
 *🐥 Judul :* ${res.all[0].title}
 *🐣 ID Video :* ${res.all[0].videoId}
 *🐤 Diupload Pada :* ${res.all[0].ago}
 *🐥 Views :* ${res.all[0].views}
 *🐣 Durasi :* ${res.all[0].timestamp}
 *🐤 Channel :* ${res.all[0].author.name}
 *🔗 Link Channel :* ${res.all[0].author.url}

*Silahkan pilih media yang akan di download*
`
buttons = [{buttonId:`${prefix}play2 ${q}`,buttonText:{displayText:'🎥VIDEO'},type:1},{buttonId:`${prefix}playy ${q}`,buttonText:{displayText:'🎵AUDIO'},type:1}]

imageMessage = (await rimuru.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage

buttonsMessage = {contentText: thumbInfo,footerText:'Silahkan Pilih Jenis File Dibawah Ini',imageMessage,buttons,headerType:4}

prep = await rimuru.prepareMessageFromContent(from,{buttonsMessage},{})

rimuru.relayWAMessage(prep)
break
					
          case 'lirik':
    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=PunyaIkyAds&query=${query}`)
    reply(get_result.result)
    
               break
         case 'pinterest':
		   if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
    query = args.join(" ")
 reply (mess.wait)
    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=PunyaIkyAds&query=${query}`)
    ini_url = ini_url.result
    buff = await getBuffer(ini_url)
    buttons = [{buttonId: `${prefix + command} ${query}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await rimuru.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'ғᴏʟʟᴏᴡ sᴏsᴍᴇᴅ ʀɪᴍᴜʀᴜ࿐ https://instabio.cc/Rimuru', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await rimuru.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              rimuru.relayWAMessage(prep)
        break
        case 'shopee':
               try {
               if (args.length == 0) return reply(`Kirim perintah *${prefix}shopee [ query ]*\nContoh : ${prefix}shopee sepatu`)
               query = args.join(" ")
               reply(mess.wait)
               get_data = await fetchJson(`https://api.zeks.xyz/api/shopee?apikey=${setting.zekskey}&q=${query}`)
               get_data = get_data.data
               teks = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *SHOPEE* 
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for(let i = 0; i < get_data.length; i++) {
teks += `\`\`\`🐥 Nama : ${get_data[i].name}\`\`\`
\`\`\`🐥 Harga : ${get_data[i].harga}\`\`\`
\`\`\`🐥 Terjual : ${get_data[i].terjual}\`\`\`
\`\`\`🐥 Lokasi : ${get_data[i].location}\`\`\`
\`\`\`🐥 Deskripsi*: ${get_data[i].desc}\`\`\`
\`\`\`?? Stok : ${get_data[i].stock}\`\`\`
\`\`\`🐥 Informasi : ${get_data[i].information}\`\`\`
\`\`\`🐥 Link : ${get_data[i].url}\`\`\``
}
              ini_buffer = await getBuffer(get_data[0].img_detail[0])
              rimuru.sendMessage(from, ini_buffer, image, { quoted: freply, caption: teks })
              } catch {
              reply(`Maaf produk ${query} tidak ditemukan`)
}
              break
       case 'playstore':
              try {
              if (args.length == 0) return reply(`Kirim perintah *${prefix}playstore [ apk ]*\nContoh : ${prefix}playstore pubg`)
              query = args.join(" ")
              reply(mess.wait)
              get_result = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=${setting.zekskey}&q=${query}`)
              get_result = get_result.result
              teks = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *PLAYSTORE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for(let i = 0; i < get_result.length; i++) {
teks += `\`\`\`🐥 Title : ${get_result[i].title}\`\`\`
\`\`\`🐥 Harga : ${get_result[i].price}\`\`\`
\`\`\`🐥 Rate : ${get_result[i].rating}\`\`\`
\`\`\`🐥 Link : ${get_result[i].url}\`\`\`

`
}
              ini_buffer = await getBuffer(get_result[0].thumb)
              rimuru.sendMessage(from, ini_buffer, image, { quoted: freply, caption: teks })
              } catch {
              reply(`Maaf aplikasi ${query} tidak ditemukan`)
}
              break
       case 'yts':
       case 'ytsearch':
              if (!q) return reply(mess.wrongFormat)
              reply(mess.wait)
              try {
              res = await yts(q)
              a = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE SEARCH*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for (let i of res.all) {
a += `\`\`\`🐣 Title : ${i.title}\`\`\`
\`\`\`🐤 Views : ${i.views}\`\`\`
\`\`\`🐣 Upload : ${i.ago}\`\`\`
\`\`\`🐥 Durasi : ${i.timestamp}\`\`\`
\`\`\`🐤 Channel : ${i.author.name}\`\`\`
\`\`\`🔗 Link : ${i.url}\`\`\``
}
               b = a.trim()
               sendFileFromUrl(res.all[0].image, image, {quoted: freply, caption: b})
               } catch (e) {
               console.log(e)
               reply(`${e}`)
}
               break
       case 'tourl':
               if ((isMedia && !editz.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
               reply(mess.wait)
               boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(rimuru).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru
               owgi = await rimuru.downloadMediaMessage(boij)
               res = await uploadImages(owgi)
               reply(res)
               } else {
               reply('kirim/reply gambar/video')
}
               break
               
       case 'imgtourl':
       case 'img2url':
               reply(mess.wait) 
               var imgbb = require('imgbb-uploader')
               var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(rimuru).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru
               var media = await  rimuru.downloadAndSaveMediaMessage(encmedia)       
               imgbb('67bb63bdcb5c234b7aba60c618a2b903', media)
              .then(data => {
               var caps = `*_IMAGE TO URL_*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
               ibb = fs.readFileSync(media)
               rimuru.sendMessage(from, ibb, image, { quoted: freply, caption: caps})
})
              .catch(err => {
               throw err
})
               break
         case 'asupan': // shansekai
               if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
               function _0xd540(){var _0x48856b=['Follow\x20IG:\x20https://www.instagram.com/ptl_repost\x20untuk\x20mendapatkan\x20asupan\x20lebih\x20banyak.','108uWtmML','Success\x20sending\x20video!','then','log','6990390gIsvOK','30qjicgd','catch','51963yaRbcE','478230iXgfBA','7335696ooNskS','3323709AUnigI','4945460UPyxbC','http://sansekai.my.id/ptl_repost/','2OrNuTA','839094WKttJZ','7jTbnFK','split'];_0xd540=function(){return _0x48856b;};return _0xd540();}function _0xb810(_0x3c9a92,_0x4826ed){var _0xd54021=_0xd540();return _0xb810=function(_0xb81089,_0x54b1d2){_0xb81089=_0xb81089-0xe1;var _0x33af04=_0xd54021[_0xb81089];return _0x33af04;},_0xb810(_0x3c9a92,_0x4826ed);}var _0x9488ce=_0xb810;(function(_0x47fce6,_0x187297){var _0x4c9100=_0xb810,_0xe088af=_0x47fce6();while(!![]){try{var _0x206d47=parseInt(_0x4c9100(0xe4))/0x1*(parseInt(_0x4c9100(0xe3))/0x2)+parseInt(_0x4c9100(0xef))/0x3*(parseInt(_0x4c9100(0xe8))/0x4)+parseInt(_0x4c9100(0xe1))/0x5+-parseInt(_0x4c9100(0xf0))/0x6+parseInt(_0x4c9100(0xe5))/0x7*(parseInt(_0x4c9100(0xf1))/0x8)+-parseInt(_0x4c9100(0xf2))/0x9+-parseInt(_0x4c9100(0xed))/0xa*(parseInt(_0x4c9100(0xec))/0xb);if(_0x206d47===_0x187297)break;else _0xe088af['push'](_0xe088af['shift']());}catch(_0x396d48){_0xe088af['push'](_0xe088af['shift']());}}}(_0xd540,0xd14fb),reply(mess['wait']),asupan()[_0x9488ce(0xea)](async _0x49fca7=>{var _0x36a5c4=_0x9488ce;asupann=_0x49fca7[_0x36a5c4(0xe6)]('\x0a'),asupanx=asupann[Math['floor'](Math['random']()*asupann['length'])],sendMediaURL(from,_0x36a5c4(0xe2)+asupanx,_0x36a5c4(0xe7)),console[_0x36a5c4(0xeb)](_0x36a5c4(0xe9));})[_0x9488ce(0xee)](async _0x143141=>{var _0xdc0c6=_0x9488ce;console[_0xdc0c6(0xeb)](_0x143141),reply(''+_0x143141);}));
               break
        case 'nulis':
        case 'tulis':
               if (args.length < 1) return reply('Yang mau di tulis apaan?')
               teks = args.join(' ')
               reply(mess.wait)
               nulis = encodeURIComponent(teks)
               res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
               if (res.data.error) return reply(res.data.error)
               buff = Buffer.from(res.data.result.split(',')[1], 'base64')
               rimuru.sendMessage(from, buff, image, {quoted: freply, caption: mess.success}).catch(e => {
               return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
               break
//------------------< Level >-------------------
      case 'level': 
              if (!isGroup) return reply(mess.only.group)
              if (!isLevelingOn) return await reply('Fitur leveling belum diaktifkan!')
              const _0x2be291=_0x2239;function _0x2239(_0x5eb80b,_0x131c40){const _0x386e95=_0x386e();return _0x2239=function(_0x2239a3,_0x221041){_0x2239a3=_0x2239a3-0x1d3;let _0x4498d9=_0x386e95[_0x2239a3];return _0x4498d9;},_0x2239(_0x5eb80b,_0x131c40);}function _0x386e(){const _0x45b580=['getLevelingXp','4406MePvgK','relayWAMessage','\x0a➸\x20*Xp\x20:*\x20','MINING','232FKLdpL','getUserRank','\x0a➸\x20*Role*:\x20*','pow','&currxp=','66QvpnIS','getProfilePicture','*\x0a\x0a*Note\x20:\x20Kumpulin\x20Xp\x20Jika\x20Ingin\x20Menaikkan\x20Level*','&background=https://telegra.ph/file/443b6600636aed1d94acd.jpg&username=','&ranking=','&level=','\x20/\x20','leaderboard','568onTRaN','mining','getLevelingLevel','507140OlFpOo','231pRroCB','2256831uPvgCT','LEADEBOARD','prepareMessageMedia','https://lolhuman.herokuapp.com/api/rank?apikey=PunyaIkyAds&img=','*「\x20LEVEL\x20」*\x0a\x0a➸\x20*Nama\x20:*\x20','&xpneed=','223990gKaKps','4883613NIqJew','4005ylzNQg','prepareMessageFromContent','117316QWBlYJ','imageMessage'];_0x386e=function(){return _0x45b580;};return _0x386e();}(function(_0x254c7a,_0x20ba68){const _0x73b502=_0x2239,_0x5609b6=_0x254c7a();while(!![]){try{const _0x450c67=parseInt(_0x73b502(0x1d8))/0x1*(-parseInt(_0x73b502(0x1d4))/0x2)+parseInt(_0x73b502(0x1ea))/0x3+parseInt(_0x73b502(0x1f4))/0x4+-parseInt(_0x73b502(0x1f0))/0x5*(-parseInt(_0x73b502(0x1dd))/0x6)+parseInt(_0x73b502(0x1f1))/0x7+parseInt(_0x73b502(0x1e5))/0x8*(parseInt(_0x73b502(0x1f2))/0x9)+-parseInt(_0x73b502(0x1e8))/0xa*(parseInt(_0x73b502(0x1e9))/0xb);if(_0x450c67===_0x20ba68)break;else _0x5609b6['push'](_0x5609b6['shift']());}catch(_0xea8c6d){_0x5609b6['push'](_0x5609b6['shift']());}}}(_0x386e,0x6861c));let userLevel=level[_0x2be291(0x1e7)](sender,_level),userXp=level[_0x2be291(0x1d3)](sender,_level),requiredXp=0xa*Math[_0x2be291(0x1db)](userLevel,0x2)+0x32*userLevel+0x64,userRank=level[_0x2be291(0x1d9)](sender,_level);try{profilePic=await ieditz[_0x2be291(0x1de)](sender);}catch{profilePic=errorImg;}buffer=await getBuffer(_0x2be291(0x1ed)+profilePic+_0x2be291(0x1e0)+encodeURI(pushname)+_0x2be291(0x1e2)+userLevel+_0x2be291(0x1e1)+Number(userRank)+_0x2be291(0x1dc)+userXp+_0x2be291(0x1ef)+requiredXp),teks=_0x2be291(0x1ee)+pushname+_0x2be291(0x1d6)+userXp+_0x2be291(0x1e3)+requiredXp+'\x0a➸\x20*Level\x20:*\x20'+userLevel+_0x2be291(0x1da)+role+_0x2be291(0x1df),buttons=[{'buttonId':prefix+_0x2be291(0x1e6),'buttonText':{'displayText':_0x2be291(0x1d7)},'type':0x1},{'buttonId':prefix+_0x2be291(0x1e4),'buttonText':{'displayText':_0x2be291(0x1eb)},'type':0x1}],imageMsg=(await ieditz[_0x2be291(0x1ec)](buffer,'imageMessage',{'thumbnail':buffer}))[_0x2be291(0x1f5)],buttonsMessage={'footerText':'ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru','imageMessage':imageMsg,'contentText':''+teks,'buttons':buttons,'headerType':0x4},prep=await ieditz[_0x2be291(0x1f3)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),ieditz[_0x2be291(0x1d5)](prep);
              break
       case 'leaderboard': //Cek Leaderboard
       case 'leaderboards':
              if (!isGroup) return reply(mess.only.group)
              if (!isLevelingOn) return await reply('Fitur leveling belum diaktifkan!') 
              const resp = _level
            _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
              let leaderboard =  '-----[ *LEADERBOARD* ]----\n\n'
              try {
              for (let i = 0; i < 10; i++) {
              var roles = 'Warrior III'
              if (resp[i].level <= 5) {
              roles = 'Warrior II'
              } else if (resp[i].level <= 10) {
              roles = 'Warrior I'
              } else if (resp[i].level <= 15) {
              roles = 'Elite III'
              } else if (resp[i].level <= 20) {
              roles = 'Elite II'
              } else if (resp[i].level <= 25) {
              roles = 'Elite I'
              } else if (resp[i].level <= 30) {
              roles = 'Master III'
              } else if (resp[i].level <= 35) {
              roles = 'Master II'
              } else if (resp[i].level <= 40) {
              roles = 'Master I'
              } else if (resp[i].level <= 45) {
              roles = 'GrandMaster III'
              } else if (resp[i].level <= 50) {
              roles = 'GrandMaster II'
              } else if (resp[i].level <= 55) {
              roles = 'GrandMaster I'
              } else if (resp[i].level <= 60) {
              roles = 'Epic III'
              } else if (resp[i].level <= 65) {
              roles = 'Epic II'
              } else if (resp[i].level <= 70) {
              roles = 'Epic I'
              } else if (resp[i].level <= 75) {
              roles = 'Legend III'
              } else if (resp[i].level <= 80) {
              roles = 'Legend II'
              } else if (resp[i].level <= 85) {
              roles = 'Legend I'
              } else if (resp[i].level <= 90) {
              roles = 'Mythic'
              } else if (resp[i].level <= 95) {
              roles = 'Mythical Glory'
              } else if (resp[i].level >= 100) {
              roles = 'Immortal'
} 

              leaderboard += `➸ ${i + 1}. wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n➸ *Xp :* ${_level[i].xp}\n➸ *Level :* ${_level[i].level}\n➸ *Role :* ${roles}\n\n`
}
              reply(leaderboard)
              } catch (err) {
              console.error(err)
              reply('_Perlu setidaknya 10 user yang memiliki level di database!_')
}
              break
//------------------< Stalk >-------------------
      case 'stalkgithub':
      case 'githubstalk':
              function _0xd21a(_0x2f0f76,_0xcbcc43){var _0x41c5cf=_0x41c5();return _0xd21a=function(_0xd21ab1,_0x46aef4){_0xd21ab1=_0xd21ab1-0xe8;var _0x28f1e6=_0x41c5cf[_0xd21ab1];return _0x28f1e6;},_0xd21a(_0x2f0f76,_0xcbcc43);}var _0x5f22c5=_0xd21a;(function(_0x13b23c,_0x3fe1f9){var _0x629923=_0xd21a,_0x1b8708=_0x13b23c();while(!![]){try{var _0xec6f17=-parseInt(_0x629923(0xf7))/0x1+parseInt(_0x629923(0xec))/0x2+parseInt(_0x629923(0xed))/0x3+parseInt(_0x629923(0xe9))/0x4+-parseInt(_0x629923(0xef))/0x5*(parseInt(_0x629923(0xf2))/0x6)+parseInt(_0x629923(0xff))/0x7+parseInt(_0x629923(0xf1))/0x8*(-parseInt(_0x629923(0xfd))/0x9);if(_0xec6f17===_0x3fe1f9)break;else _0x1b8708['push'](_0x1b8708['shift']());}catch(_0x4a2830){_0x1b8708['push'](_0x1b8708['shift']());}}}(_0x41c5,0x1d813));function _0x41c5(){var _0x3eb8a7=['result','49838vObCut','227829ifjjsR','avatar','95RvRFrB','url','8uVzXYE','42918WzZydV','```\x0a\x0a','length','public_repos','```\x0a\x0a```🐥\x20Public\x20Gists\x20:\x20','101709vuNxXa','\x20rimuruchan','?apikey=PunyaIkyAds','name','alloc','┏┉⌣\x20┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓\x0a\x0a┆\x20*GITHUB\x20USER*\x0a\x0a└┈┈┈┈┈┈┈┈┈┈┈⌣\x20┈̥-̶̯͡..̷̴✽̶⌣\x20✽̶\x0a\x0a*Data\x20Berhasil\x20Didapatkan!*\x0a\x0a```🐥\x20Username\x20:\x20','968733MTgNjb','followers','1329811zcjapw','Example:\x20','701076WNpQnq','sendMessage'];_0x41c5=function(){return _0x3eb8a7;};return _0x41c5();}if(args[_0x5f22c5(0xf4)]==0x0)return reply(_0x5f22c5(0xe8)+(prefix+command)+_0x5f22c5(0xf8));reply(mess['wait']),username=args[0x0],ini_result=await fetchJson('https://api.lolhuman.xyz/api/github/'+username+_0x5f22c5(0xf9)),ini_result=ini_result[_0x5f22c5(0xeb)],ini_buffer=await getBuffer(ini_result[_0x5f22c5(0xee)]),ini_txt=_0x5f22c5(0xfc)+ini_result[_0x5f22c5(0xfa)]+'```\x0a\x0a```🐥\x20Public\x20Repo\x20:\x20'+ini_result[_0x5f22c5(0xf5)]+_0x5f22c5(0xf6)+ini_result['public_gists']+'```\x0a\x0a```🐥\x20Pengikut\x20:\x20'+ini_result[_0x5f22c5(0xfe)]+'```\x0a\x0a```🐥\x20Following\x20:\x20'+ini_result['following']+'```\x0a\x0a```🐥\x20Mengikuti\x20:\x20'+ini_result['bio']+'```\x0a\x0a```🐥\x20Link\x20:\x20'+ini_result[_0x5f22c5(0xf0)]+_0x5f22c5(0xf3),rimuru[_0x5f22c5(0xea)](from,ini_buffer,image,{'caption':ini_txt,'thumbnail':Buffer[_0x5f22c5(0xfb)](0x0)});
             break
      case 'stalkig':
      case 'igstalk':
             function _0x1c47(){var _0x8884e1=['6310288rSagEj','15138ZpzCxx','4061688UkoSNq','33183403eHsWEh','```\x0a\x0a```🐥\x20Link\x20:\x20https://instagram.com/','5rPlBBp','┏┉⌣\x20┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓\x0a\x0a┆\x20*INSTAGRAM\x20PROFILE*\x0a\x0a└┈┈┈┈┈┈┈┈┈┈┈⌣\x20┈̥-̶̯͡..̷̴✽̶⌣\x20✽̶\x0a\x0a*Data\x20Berhasil\x20Didapatkan!*\x0a\x0a```🐥\x20Username\x20:\x20','```\x0a\x0a','fullname','1713216wRULPB','\x20ahmaad_2912','sendMessage','result','Example:\x20','alloc','815139AUXgOT','length','808FnYAip','https://api.lolhuman.xyz/api/stalkig/','followers','```\x0a\x0a```🐥\x20Deskripsi\x20:\x20','```\x0a\x0a```🐥\x20Pengikut\x20:\x20','567483UCHEFW','following','14KvTHhV','130NmcJpn'];_0x1c47=function(){return _0x8884e1;};return _0x1c47();}var _0x284d9a=_0x34c7;(function(_0x58b826,_0x54d647){var _0x5f36a2=_0x34c7,_0x531dc6=_0x58b826();while(!![]){try{var _0x59296d=-parseInt(_0x5f36a2(0x116))/0x1+-parseInt(_0x5f36a2(0x123))/0x2+-parseInt(_0x5f36a2(0x11b))/0x3*(parseInt(_0x5f36a2(0x12b))/0x4)+parseInt(_0x5f36a2(0x11f))/0x5*(parseInt(_0x5f36a2(0x11c))/0x6)+-parseInt(_0x5f36a2(0x118))/0x7*(parseInt(_0x5f36a2(0x11a))/0x8)+-parseInt(_0x5f36a2(0x129))/0x9*(-parseInt(_0x5f36a2(0x119))/0xa)+parseInt(_0x5f36a2(0x11d))/0xb;if(_0x59296d===_0x54d647)break;else _0x531dc6['push'](_0x531dc6['shift']());}catch(_0x2dd70d){_0x531dc6['push'](_0x531dc6['shift']());}}}(_0x1c47,0xcf8a9));function _0x34c7(_0x473993,_0xc26539){var _0x1c4708=_0x1c47();return _0x34c7=function(_0x34c747,_0x501924){_0x34c747=_0x34c747-0x113;var _0x57de00=_0x1c4708[_0x34c747];return _0x57de00;},_0x34c7(_0x473993,_0xc26539);}if(args[_0x284d9a(0x12a)]==0x0)return reply(_0x284d9a(0x127)+(prefix+command)+_0x284d9a(0x124));reply(mess['wait']),username=args[0x0],ini_result=await fetchJson(_0x284d9a(0x12c)+username+'?apikey=PunyaIkyAds'),ini_result=ini_result[_0x284d9a(0x126)],ini_buffer=await getBuffer(ini_result['photo_profile']),ini_txt=_0x284d9a(0x120)+ini_result['username']+'```\x0a\x0a```🐥\x20Nama\x20:\x20'+ini_result[_0x284d9a(0x122)]+_0x284d9a(0x115)+ini_result[_0x284d9a(0x113)]+'```\x0a\x0a```🐥\x20Mengikuti\x20:\x20'+ini_result[_0x284d9a(0x117)]+_0x284d9a(0x114)+ini_result['bio']+_0x284d9a(0x11e)+ini_result['username']+_0x284d9a(0x121),rimuru[_0x284d9a(0x125)](from,ini_buffer,image,{'caption':ini_txt,'thumbnail':Buffer[_0x284d9a(0x128)](0x0)});
             break
      case 'stalktiktok':
      case 'tiktokstalk':
             function _0x420e(){var _0x5f1d23=['┏┉⌣\x20┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓\x0a\x0a┆\x20*TIKTOK\x20PROFILE*\x0a\x0a└┈┈┈┈┈┈┈┈┈┈┈⌣\x20┈̥-̶̯͡..̷̴✽̶⌣\x20✽̶\x0a\x0a*Data\x20Berhasil\x20Didapatkan!*\x0a\x0a```🐥\x20Username\x20:\x20','13932UbIyvV','3Smlqma','followings','610WDaPQS','```\x0a\x0a','1247344BXJLin','wait','user_picture','Example:\x20','1289056ufZpbA','```\x0a\x0a```🐥\x20Likes\x20:\x20','result','2961512OLhrVt','likes','```\x0a\x0a```🐥\x20Mengikuti\x20:\x20','bio','2022867DkdLnS','length','sendMessage','http://lolhuman.herokuapp.com/api/stalktiktok/','video','followers','312741CNynNU','\x20marz.hiatus','?apikey=PunyaIkyAds','```\x0a\x0a```🐥\x20Pengikut\x20:\x20','alloc','```\x0a\x0a```🐥\x20Video\x20:\x20','1209722cUdPRe','```\x0a\x0a```🐥\x20Nama\x20:\x20','username'];_0x420e=function(){return _0x5f1d23;};return _0x420e();}var _0x61c0d2=_0x5c6c;(function(_0x492991,_0x4d2321){var _0x458f96=_0x5c6c,_0x4a041c=_0x492991();while(!![]){try{var _0x13b0aa=parseInt(_0x458f96(0x1c0))/0x1+-parseInt(_0x458f96(0x1c6))/0x2+parseInt(_0x458f96(0x1cb))/0x3*(parseInt(_0x458f96(0x1b3))/0x4)+-parseInt(_0x458f96(0x1ad))/0x5*(-parseInt(_0x458f96(0x1ca))/0x6)+parseInt(_0x458f96(0x1af))/0x7+-parseInt(_0x458f96(0x1b6))/0x8+parseInt(_0x458f96(0x1ba))/0x9;if(_0x13b0aa===_0x4d2321)break;else _0x4a041c['push'](_0x4a041c['shift']());}catch(_0x5cb462){_0x4a041c['push'](_0x4a041c['shift']());}}}(_0x420e,0x54852));function _0x5c6c(_0x347367,_0x5c6545){var _0x420e10=_0x420e();return _0x5c6c=function(_0x5c6c23,_0x528462){_0x5c6c23=_0x5c6c23-0x1ac;var _0x59821f=_0x420e10[_0x5c6c23];return _0x59821f;},_0x5c6c(_0x347367,_0x5c6545);}if(args[_0x61c0d2(0x1bb)]==0x0)return reply(_0x61c0d2(0x1b2)+(prefix+command)+_0x61c0d2(0x1c1));reply(mess[_0x61c0d2(0x1b0)]),stalk_toktok=args[0x0],get_result=await fetchJson(_0x61c0d2(0x1bd)+stalk_toktok+_0x61c0d2(0x1c2)),get_result=get_result[_0x61c0d2(0x1b5)],pp_tt=await getBuffer(get_result[_0x61c0d2(0x1b1)]),ini_txt=_0x61c0d2(0x1c9)+get_result[_0x61c0d2(0x1c8)]+_0x61c0d2(0x1c7)+get_result['nickname']+_0x61c0d2(0x1c3)+get_result[_0x61c0d2(0x1bf)]+_0x61c0d2(0x1b8)+get_result[_0x61c0d2(0x1ac)]+_0x61c0d2(0x1b4)+get_result[_0x61c0d2(0x1b7)]+_0x61c0d2(0x1c5)+get_result[_0x61c0d2(0x1be)]+'```\x0a\x0a```🐥\x20Deskripsi\x20:\x20'+get_result[_0x61c0d2(0x1b9)]+_0x61c0d2(0x1ae),rimuru[_0x61c0d2(0x1bc)](from,pp_tt,image,{'quoted':freply,'caption':ini_txt,'thumbnail':Buffer[_0x61c0d2(0x1c4)](0x0)});
              break
       case 'iguser':
              try {
              if (args.length == 0) return reply(`Kirim perintah *${prefix}iguser [ username ]*\nContoh : ${prefix}iguser ahmaad_2912`)
              query = args.join(" ")
              reply(mess.wait)
              get_result = await fetchJson(`https://api.zeks.xyz/api/iguser?apikey=${setting.zekskey}&q=${query}`)
              get_result = get_result.result
              teks = `*「 INSTAGRAM USER 」*\n\n*Hasil Pencarian : ${query}*\n\n`
              for(let i = 0; i < get_result.length; i++) {
              teks += `*Username* : ${get_result[i].username}\n*Full name*: ${get_result[i].full_name}\n*Akun private* : ${get_result[i].private_user}\n*Verified*: ${get_result[i].verified_user}\n*Link*: https://instagram.com/${get_result[i].username}\n\n`
}
              ini_buffer = await getBuffer(get_result[0].profile_pic)
              rimuru.sendMessage(from, ini_buffer, image, { quoted: freply, caption: teks })
              } catch {
              reply(`Maaf username ${query} tidak ditemukan`)
}
              break
//------------------< Sticker/Tools >-------------------

       case 'dadu': // by CHIKAA CHANTEKKXXZZ
              reply(mess.wait)
              dadu()
             .then(async (body) => {
              dadugerak = body.split('\n')
              dadugerakx = dadugerak[Math.floor(Math.random() * dadugerak.length)]
              sendWebp(from, dadugerakx)
})
             .catch(async (err) => {
              console.error(err)
              reply('Error!')
})
              break
      case 'doge':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
              case 'linkgc':
              case 'link':
              case 'linkgroup':
              linkgc = await rimuru.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
       case 'patrick':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'gura':
       case 'gawgura':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
         case 'animestick':
       case 'stickeranime':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
             .then(res => res.text())
             .then(body => {
              let todd = body.split("\n");
              let pjrr = todd[Math.floor(Math.random() * todd.length)];
              sendWebp(from, pjrr)
}
)
              break
       case 'telesticker': 
       case 'telestiker':
              if (!q) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
              reply(mess.wait)
              ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=PunyaIkyAds&url=${args[0]}`)
              ini_sticker = ini_url.result.sticker
              reply('Sending '+ ini_sticker.length +' stickers...')
              for (sticker_ in ini_sticker) {
              ini_buffer = await getBuffer(ini_sticker[sticker_])
              rimuru.sendMessage(from, ini_buffer, sticker, {})
}
              break
       case 'semoji':
       case 'emoji':
              if (args.length == 0) return reply(`Example: ${prefix + command} ðŸ˜­`)
              emoji = args[0]
              try {
              emoji = encodeURI(emoji[0])
              } catch { 
              emoji = encodeURI(emoji)
 }
              ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=PunyaIkyAds`)
              await rimuru.sendMessage(from, ini_buffer, sticker, { quoted: freply })
              break
                  case 'semoji2':
       case 'emoji2':
              if (args.length == 0) return reply(`Example: ${prefix + command} ðŸ˜­`)
              emoji = args[0]
              try {
              emoji = encodeURI(emoji[0])
              } catch { 
              emoji = encodeURI(emoji)
 }
              ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=PunyaIkyAds`)
              await rimuru.sendMessage(from, ini_buffer, sticker, { quoted: freply })
 case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${setting.lolkey}&text=${ini_txt}`)
                    await rimuru.sendMessage(from, ini_buffer, sticker, { quoted: freply })
                    break

     case 'stikertahta':
     case 'stt': 
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
ajgg = args.join(" ")
reply('wait....')
meki = `https://leyscoders-api.herokuapp.com/api/harta-tahta?text=${encodeURI(q)}&apikey=IkyOgiwara`
sendStickerUrl(from, meki, { quoted: freply})
break
    case 'attp':
              if (args.length == 0) return reply(`Example: ${prefix + command} rimuru`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              rimuru.sendMessage(from, buffer, sticker, { quoted: freply })
              break
              
             case 'sfire2': 
              
reply('Loading.... ')
 encmedia = isQuotedImage ? JSON.parse(JSON.stringify(rimuru).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rimuru
media = await rimuru.downloadAndSaveMediaMessage(encmedia)
tolink = await uptotele(media)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = await getBuffer (`https://api.zeks.xyz/api/burning-image?apikey=PunyaIkyAds&image=${tolink}`)
sendStickerUrl(from, `${anu1}`)

break
case 'tgg': 
              
reply('Loading.... ')
 encmedia = isQuotedImage ? JSON.parse(JSON.stringify(rimuru).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rimuru
media = await rimuru.downloadAndSaveMediaMessage(encmedia)
tolink = await uptotele(media)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${tolink}`
sendStickerUrl(from, `${anu1}`)

break
case 'sf':
encmedia = isQuotedImage ? JSON.parse(JSON.stringify(rimuru).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rimuru
media = await rimuru.downloadAndSaveMediaMessage(encmedia)
tolink = await uptotele(media)
ranp = getRandom('.gif')
rano = getRandom('.webp')
              reply(mess.wait)
              
              pjr = await getBuffer(`https://api.zeks.xyz/api/burning-image?apikey=PunyaIkyAds&image${encodeURI(tolink)}`)
              rimuru.sendMedsage(from , pjr , sticker, {quoted: rimuru})


              break
case 'tggg': 
              
reply('Loading.... ')
 encmedia = isQuotedImage ? JSON.parse(JSON.stringify(rimuru).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rimuru
media = await rimuru.downloadAndSaveMediaMessage(encmedia)
tolink = await uptotele(media)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.lolhuman.xyz/api/editor/triggered?apikey=PunyaIkyAds&img=${tolink}`
sendStickerUrl(from, `${anu1}`)

break
      case 'triggered3':
                    ini_url = args[0]
               
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/editor/triggered?apikey=PunyaIkyAds&img=${ini_url}`)

rimuru.sendMessage(from, ini_buffer, image, { quoted: freply })
                    break
       case 'sfiree':
       if (isImage || isQuotedImage) {
    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(rimuru).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rimuru
    let media = await rimuru.downloadAndSaveMediaMessage(encmedia)
    var tolink = await uptotele(media)
let ane = await getBuffer(`https://api.zeks.xyz/api/burning-image?apikey=PunyaIkyAds&image=${tolink}`)
fs.writeFileSync('./sticker/triggered.webp', ane)
exec(`webpmux -set exif ./sticker/data.exif ./sticker/triggered.webp -o ./sticker/triggered.webp`, async (error) => {
    if (error) return reply(mess.error.api)
    rimuru.sendMessage(from, fs.readFileSync(`./sticker/triggered.webp`), sticker, {quoted: freply})
    
    fs.unlinkSync(`./sticker/triggered.webp`)	
})
}
            
break 
   case "triggered":
   case 'tiger':
     if (isImage || isQuotedImage) {
     var lin = isQuotedImage ? JSON.parse(JSON.stringify(rimuru).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rimuru
     var dow = await rimuru.downloadAndSaveMediaMessage(rimuru)
     var tolink = await uptotele(dow)
     ranp = getRandom('.gif')
     rano = getRandom('.webp')
     var ini_buffer = `https://api.lolhuman.xyz/api/editor/triggered?apikey=PunyaIkyAds&img=${tolink}`
     exec(`wget "${ini_buffer}" -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
        fs.unlinkSync(ranp)
        rimuru.sendMessage(from, fs.readFileSync(rano), sticker, { quoted: rimuru }).then(() => {
        fs.unlinkSync(rano)
        })
      })
     } else {
       reply("only foto")
     }
      break
      case 'stickernobg': case 'stikernobg': case 'snobg': case 'removebg': case 'nobg':
                
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: rimuru
                    let media = await rimuru.downloadAndSaveMediaMessage(encmedia)
                        var file_name = getRandom('.png')
                         var file_name2 = getRandom('.webp')
                        request({
                            url: `https://api.lolhuman.xyz/api/removebg?apikey=${setting.lolkey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(media)
                            },
                            encoding: "binary"
                        }, async function(error, response, body) {
                            fs.unlinkSync(media)
                            fs.writeFileSync(file_name, body, "binary")
                            await ffmpeg(`./${file_name}`)
                                .input(file_name)
                                .on('start', function (cmd) {
							    	console.log(`Started : ${cmd}`)
				    			})
                                .on('error', function(err) {
                                    console.log(err)
                                    reply(mess.error.api)
                                    fs.unlinkSync(file_name)
                                })
                                .on('end', function() {
								console.log('Finish')
                                    exec(`webpmux -set exif ./sticker/data.exif ./${file_name2} -o ./${file_name2}`, async (error) => {
                                    if (error) return reply(mess.error.api)
									rimuru.sendMessage(from, fs.readFileSync(file_name2), sticker, {quoted: rimuru})
									
                                    fs.unlinkSync(file_name)
									fs.unlinkSync(file_name2)
                                })
							})
                                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                                .toFormat('webp')
                                .save(file_name2)
                        });
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    let media = await rimuru.downloadAndSaveMediaMessage(encmedia)
                  var ran = getRandom('.png')
				  exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
						fs.unlinkSync(media)
                       if (err) return reply('Gagal :V')   
                        var file_name = getRandom('.png')
                         var file_name2 = getRandom('.webp')
                        request({
                            url: `https://api.lolhuman.xyz/api/removebg?apikey=${setting.olkey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(ran)
                            },
                            encoding: "binary"
                        }, async function(error, response, body) {
                            fs.unlinkSync(ran)
                            fs.writeFileSync(file_name, body, "binary")
                            await ffmpeg(`./${file_name}`)
                                .input(file_name)
                                .on('start', function (cmd) {
							    	console.log(`Started : ${cmd}`)
				    			})
                                .on('error', function(err) {
                                    console.log(err)
                                    reply(mess.error.api)
                                    fs.unlinkSync(file_name)
                                })
                                .on('end', function() {
								console.log('Finish')
                                    exec(`webpmux -set exif ./sticker/data.exif ./${file_name2} -o ./${file_name2}`, async (error) => {
                                    if (error) return reply(mess.error.api)
									rimuru.sendMessage(from, fs.readFileSync(file_name2), sticker, {quoted: rimuru})
									
                                    fs.unlinkSync(file_name)
									fs.unlinkSync(file_name2)
                                })
							})
                                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                                .toFormat('webp')
                                .save(file_name2)
                        });
                })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}snobg atau tag gambar yang sudah dikirim`)
                    }
                    

                    break
                case "triggered2":
   case 'tiger2':
     if (isImage || isQuotedImage) {
     var lin = isQuotedImage ? JSON.parse(JSON.stringify(rimuru).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rimuru
     var dow = await rimuru.downloadAndSaveMediaMessage(lin)
     var tolink = await uptotele(dow)
     ranp = getRandom('.gif')
     rano = getRandom('.webp')
     var ini_buffer = `https://some-random-api.ml/canvas/triggered?avatar=${tolink}`
     exec(`wget "${ini_buffer}" -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
        fs.unlinkSync(ranp)
        rimuru.sendMessage(from, fs.readFileSync(rano), sticker, { quoted: rimuru }).then(() => {
        fs.unlinkSync(rano)
        })
      })
     } else {
       reply("only foto")
     }
      break
           case 'ttg':
           teks = args.join(' ')
mek = encodeURIComponent(teks)
if (args.length < 2) return 
let ane = await getBuffer(`https://api.lolhuman.xyz/api/attp?apikey=PunyaIkyAds&text=${mek}`)
fs.writeFileSync('./sticker/ttg.webp', ane)
exec(`webpmux -set exif ./sticker/data.exif ./sticker/ttg.webp -o ./sticker/ttg.webp`, async (error) => {
    if (error) return reply(mess.error.api)
    rimuru.sendSticker(from, fs.readFileSync(`./sticker/ttg.webp`), sticker, {quoted: freply})
    
    fs.unlinkSync(`./sticker/ttg.webp`)	
})
            
              break
       case 'loliv':
       case 'lolivid':
       case 'lolivideo':
              reply(mess.wait)
              anu = await fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt')
             .then(async (body) => {
              anu = body.split('\n')
              anu = anu[Math.floor(Math.random() * anu.length)]
              sendMediaURL(from, anu)
})
             .catch(async (err) => {
              console.error(err)
              reply(`${err}`)
})
              break
           case 's2':{
                
                
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await rimuru.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
                    await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									rimuru.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: rimuru})
									
                                    fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                } else if ((isVideo && msg.message.videoMessage.fileLength < 10000000 || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
                    let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await rimuru.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					reply(mess.wait)
                        await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									rimuru.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: rimuru})
									
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                } else {
                    reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
                }
            }
                break
       case 'gifstiker':
				case 's':
			case 'stickergif':  
				case 'sticker':
				  case 'stiker':
					     if ((isMedia && !editz.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(rimuru).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rimuru
            const media = await rimuru.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
     console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
 console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
console.log('Finish')
ikyy.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: freply})
 fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && kyy.message.videoMessage.seconds < 11 || isQuotedVideo && kyy.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(kyy).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kyy
const media = await ikyy.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            ikyy.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: freply})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
            } else {
reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break               
       case 'take':
       case 'colong':
              if (!isQuotedSticker) return reply('Stiker aja om')
              encmedia = JSON.parse(JSON.strngify(rimuru).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await rimuru.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : `${pushname}`
              dua = typeof anu[1] !== 'undefined' ? anu[1] : `UwU`
              require('./lib/fetch.js').createExif(satu, dua)
              require('./lib/fetch.js').modStick(media, ikyy, kyy, from)
              break
       case 'delwm':
              if (!isQuotedSticker) return reply('Stiker aja om')
              encmedia = JSON.parse(JSON.stringify(rimuru).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await rimuru.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : ``
              dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
              require('./lib/fetch.js').createExif(satu, dua)
              require('./lib/fetch.js').modStick(media, ikyy, kyy, from)
              break
       case 'stikerwm':
       case 'stickerwm':
       case 'swm':
              var a = arg.split("|")[0];
              var b = arg.split("|")[1];
              if (isMedia && !editz.message.videoMessage || isQuotedImage ) {
              const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(rimuru).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru
              media = await rimuru.downloadAndSaveMediaMessage(encmedia)
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              rimuru.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: freply })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              rimuru.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: freply })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out) 
              } else if ((isMedia && editz.message.videoMessage.seconds < 11 || isQuotedVideo && editz.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(rimuru).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru
              const media = await rimuru.downloadAndSaveMediaMessage(encmedia)
              pe = args.join('')
              var a = pe.split("|")[0];
              var b = pe.split("|")[1];
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              rimuru.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: freply })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              rimuru.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: freply })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out)       
              } else {
              reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
}
              break
      case 'toimg':
              if (!isQuotedSticker) return reply('reply stickernya')
              reply(mess.wait)
              encmedia = JSON.parse(JSON.stringify(rimuru).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await rimuru.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
              buffer = fs.readFileSync(ran)
              rimuru.sendMessage(from, buffer, image, {quoted: freply, caption: 'Nih'})
              fs.unlinkSync(ran)
})
              break
           case 'smeme': 
reply('Loading.... ')
top = arg.split('|')[0]
bottom = arg.split('|')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && !editz.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(rimuru).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru 
owgi = await  rimuru.downloadAndSaveMediaMessage(ger)
anu = await imgbb("bf0832d1bbee804ec793d4a830a26238", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
sendStickerUrl(from, `${anu1}`)
} else {
reply('Gunakan foto/stiker!')
}
break

       case 'memeimg':
       case 'memegen':    
              top = arg.split('|')[0]
              bottom = arg.split('|')[1]
              var imgbb = require('imgbb-uploader')
              if ((isMedia && !editz.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
              reply(mess.wait)
              ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(rimuru).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru 
              owgi = await rimuru.downloadAndSaveMediaMessage(ger)
              anu = await imgbb("f643a4d2fb9ea99221cb4a3432d6a4ba", owgi)
              teks = `${anu.display_url}`
              ranp = getRandom('.gif')
              rano = getRandom('.webp')
              anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
              sendMediaURL(from, `${anu1}`, mess.success)
              } else {
         
}
               break
        case 'togif':
               if ((isMedia && !editz.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(rimuru).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru
               mediaaa = await rimuru.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               rimuru.sendMessage(from, mp4, video, {mimetype: 'video/gif', quoted: freply, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
        case 'tovideo':
               if ((isMedia && !editz.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmedia = JSON.parse(JSON.stringify(rimuru).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
               mediaaa = await rimuru.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               rimuru.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: freply, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
        case 'tomp3':
rimuru.updatePresence(from, Presence.composing)
if (!isQuotedVideo) return reply('Itu bukan video')
encmedia = JSON.parse(JSON.stringify(rimuru).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await rimuru.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(mess.error)
buffer = fs.readFileSync(ran)
rimuru.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4'})
fs.unlinkSync(ran)
})
break

//------------------< Ingfo Bot >-------------------
      case 'runtime':
y = `
█████████
█▄█████▄█
█▼▼▼▼▼
█${runtime(process.uptime())}
█▲▲▲▲▲
█████████
 ██ ██\n`

             reply (y)
              break
        case 'donate': 
       case 'donasi':
              textImg(setting.txtDonasi)
              break
       case 'sourcecode': 
       case 'sc': 
       case 'src':
              textImg(`ʙᴏᴛ ɪɴɪ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ sᴄ ᴅᴀʀɪ ʏᴏᴜ ᴛᴜʙᴇ : https://youtu.be/byve9WuahE4`)
              break
      case 'ping':
      case 'speed':
              timestampe = speed();

              latensie = speed() - timestampe 

y = `
█████████
█▄█████▄█
█▼▼▼▼▼
█${latensie.toFixed(4)} Sec
█▲▲▲▲▲
█████████

 ██ ██\n`

             reply (y)
             break
             
          case 'botstat':
              groups = rimuru.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = rimuru.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await rimuru.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
teks = `\`\`\`BOT STATISTICS\`\`\`
\`\`\`🐥 Group Chats : ${groups.length}\`\`\`
\`\`\`🐥 Private Chats : ${privat.length}\`\`\`
\`\`\`🐥 Total Chats : ${totalChat.length}\`\`\`
\`\`\`🐥 Speed : ${latensie.toFixed(4)} _Second_\`\`\`
\`\`\`🐥 Active Time : ${kyun(uptime)}\`\`\`

\`\`\`PHONE STATISTICS\`\`\`
\`\`\`🐥 Baterai : ${baterai}% ${charger}\`\`\`
\`\`\`🐥 Ram Usage : ${ram2}\`\`\`
\`\`\`?? Platform : ${os.platform()}\`\`\`
\`\`\`🐥 Hostname : ${os.hostname()}\`\`\`
\`\`\`🐥 Uptime : ${runtime(process.uptime())}\`\`\`
\`\`\`🐥 Wa Version: ${rimuru.user.phone.wa_version}\`\`\`
\`\`\`🐥 Os Version: ${rimuru.user.phone.os_version}\`\`\`
\`\`\`🐥 Device Manufacturer: ${rimuru.user.phone.device_manufacturer}\`\`\`
\`\`\`🐥 Device Model: ${rimuru.user.phone.device_model}\`\`\`
\`\`\`🐥 Os Build Number: ${rimuru.user.phone.os_build_number}\`\`\``
             reply(teks)
             break  
//------------------< Owner >-------------------
      case 'addupdate':
             if (!isOwner) return reply(mess.only.owner)
             if (!q) return reply(`Example: ${command} update fitur`)
           _update.push(q)
             fs.writeFileSync('./database/bot/update.json', JSON.stringify(_update))
             reply(`Update fitur berhasil ditambahkan ke database!`)
             break
      case 'update':
             let updateList = `*── 「 UPDATE BOT 」 ──*\n\n\n`
             for (let i of _update) {
             updateList += `࿃ *${i.replace(_update)}*\n\n`
}
             textImg(updateList)
             break
      case 'reset':
             if (!isOwner) return reply(mess.only.owner)
             var reset = []
             glimit = reset
           _update = reset
             console.log('Hang tight, it\'s time to reset')
             fs.writeFileSync('./database/bot/glimit.json', JSON.stringify(glimit))
             fs.readFileSync('./database/bot/update.json', JSON.stringify(_update))
             textImg('Oke Desu ~')
             break
      case 'exif':
             if (!isOwner) return  reply(mess.only.owner)
             if (!q) return reply(mess.wrongFormat)
             if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
             exif.create(arg.split('|')[0], arg.split('|')[1])
             reply('sukses')
             break	
      case 'join': 
             if (!q) return reply('Linknya?')
             if (!isOwner) return reply(mess.only.owner)
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = rimuru.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('Berhasil Masuk Grup')
             break
      case 'eval':
             try {
             if (!isOwner) return
             sy = args.join(' ')
             return eval(sy)
             } catch(e) {
             reply(`${e}`)
}
             break
      case 'getquoted':
             reply(JSON.stringify(editz.message.extendedTextMessage.contextInfo, null, 3))
             break
        case 'clearall':
             if (!isOwner) return  reply(mess.only.owner)
             anu = await rimuru.chats.all()
             rimuru.setMaxListeners(25)
             for (let _ of anu) {
             rimuru.deleteChat(_.jid)
}
             reply('Sukses delete all chat :)')
             break
      case 'term':
             if (!isOwner) return
             if (!q) return
             exec(q, (err, stdout) => {
             if (err) return reply(`${err}`)
             if (stdout) {
             reply(stdout)
}
})
             break 
      case 'shutdown':
             if (!isOwner) return 
             reply(`Bye...`)
             await sleep(3000)
             process.exit()
             break
      case 'restart':
             if (!isOwner) return 
             reply(mess.wait)
             exec(`node main`)
             reply('_Restarting Bot Success_')
             break
      case 'leaveall':
             if (!isOwner) return  reply(mess.only.owner)
             let totalgroup = rimuru.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, 'Byee', null)
             await sleep(3000)
             rimuru.groupLeave(id)
}
             break
//------------------< G R U P >-------------------
      case 'kick':
             if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          if (!isGroupAdmins) return reply(mess.only.admin)
             if (!isGroup) return reply(mess.only.group)
             kick(from, mentionUser)
             break
      case 'add':
             if (editz.message.extendedTextMessage === null || editz.message.extendedTextMessage === undefined) {
             entah = arg.split("|")[0]
             entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
             entah = `${entah}@s.whatsapp.net`
             rimuru.groupAdd(from, [entah])
             } else {
             entah = editz.message.extendedTextMessage.contextInfo.participant
             rimuru.groupAdd(from, [entah])
}
             break
             case 'promote':
             reply ('sukses promote admin')
             mentioned = editz.message.extendedTextMessage.contextInfo.participant
     
       if (mentioned.length !== 0){
    rimuru.groupMakeAdmin(from, mentioned)
    .then((res) => reply(jsonformat(res)))
    .catch((err) => reply(jsonformat(err)))
} else if (isQuotedMsg) {
    rimuru.groupMakeAdmin(from, [quotedMsg.sender])
    .then((res) => reply(jsonformat(res)))
    .catch((err) => reply(jsonformat(err)))
} else if (!isNaN(args[1])) {
    rimuru.groupMakeAdmin(from, [args[1] + '@s.whatsapp.net'])
    .then((res) => reply(jsonformat(res)))
    .catch((err) => reply(jsonformat(err)))
} else {
	
    reply(`Kirim perintah ${prefix}promote @tag atau nomor atau reply pesan orang yang ingin di promote`)
}
             break
      case 'demote': case 'odemote':
reply('sukses demote admin')
if (!isGroup) return reply('GROUP ONLY')
if (command.split(prefix)[1] === 'odemote' && !isPremium) return reply('ONLY PREMIUM')
if (!isGroupAdmins && !isPremium)return reply('ONLY ADMIN')
mentioned = editz.message.extendedTextMessage.contextInfo.participant
     
if (mentioned.length !== 0){
    rimuru.groupDemoteAdmin(from, mentioned)
    .then((res) => reply(jsonformat(res)))
    .catch((err) => reply(jsonformat(err)))
} else if (isQuotedMsg) {
    if (quotedMsg.sender === ownerNumber) return reply(`Tidak bisa kick Owner`)
    rimuru.groupDemoteAdmin(from, [quotedMsg.sender])
    .then((res) => reply(jsonformat(res)))
    .catch((err) => reply(jsonformat(err)))
} else if (!isNaN(args[1])) {
    rimuru.groupDemoteAdmin(from, [args[1] + '@s.whatsapp.net'])
    .then((res) => reply(jsonformat(res)))
    .catch((err) => reply(jsonformat(err)))
} else {
	
    reply(`Kirim perintah ${prefix}demote @tag atau nomor atau reply pesan orang yang ingin di demote`)
}
break
            case 'linkgc': case 'linkgrup': case 'linkgroup':
if (!isGroup) return reply('ONLY GRUP')
if (!isBotGroupAdmins) return reply('ONLY OWNER')
rimuru.groupInviteCode(from)
.then((res) => reply('https://chat.whatsapp.com/' + res))
break
       case 'setgrupname':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return 
              if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
              rimuru.groupUpdateSubject(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setdesc':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length == 0)  return reply(`Penggunaan ${prefix}setdesc desc`)
              rimuru.groupUpdateDescription(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case "prefix":
        if (!args.length) return reply(`Opsi prefix\n\n- noprefix\n- multi\n\n- oneprefix\n\nExample : ${prefix}prefix noprefix`)
        if (args[0] === "multi") {
          multipref = true;
          noprefix = false;
          oneprefix = false;
          reply("berhasil mengubah ke multi prefix")
        } else if (args[0] === "noprefix") {
          multipref = false;
          noprefix = true;
          oneprefix = false;
          reply("berhasil mengubah ke no prefix")
        } else if (q === "oneprefix") {
          multipref = false;
          noprefix = false;
          oneprefix = true;
          reply(`One prefix untuk saat ini adalah ( ${prefix} ) untuk mengganti prefix ketik ${prefix}setprefix`)
        } else {
          reply("pilih multi, noprefix, atau one prefix")
        }
        
        break
        case "setprefix":
          if (!q) return reply("Prefix nya mau apa?")
          multipref = false;
          noprefix = false;
          oneprefix = true;
          preff = q
          break
       case 'setppgrup':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(rimuru).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rimuru
              let media = await rimuru.downloadMediaMessage(encmedia)
              rimuru.updateProfilePicture(from, media)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              } else {
              reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              break
       case 'me':
       case 'profile':
              
              rimuru.updatePresence(from, Presence.composing)
              try {
              profil = await rimuru.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
              } catch {
              profil = errorImg
}
              thu = await rimuru.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
              me = rimuru.user
              uptime = process.uptime()
              profile = `-----[ *USER INFO* ]-----\n\n➸ *Username:* ${pushname}\n➸ *Status:* ${thu.status}\n➸ *Premium*: ${isPremium ? 'Ya' : 'No'}\n➸ *Admin*: ${isGroupAdmins ? 'Ya' : 'No'}\n➸ *Prefix :* Multi Prefix\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\nYour progress:\n➸ *Level*: ${Levelnye}\n➸ *XP*: ${Xpluu} / ${requiredXplu}`
              buff = await getBuffer(profil)
              rimuru.sendMessage(from, buff, image, {quoted: freply, caption: profile})
              break
       case 'afk': 
              if (!isGroup) return reply(mess.only.group)
              if (isAfkOn) return reply('Woe Kalo Mau Afk Jangan Nimbrung di sini')
              const reason = q ? q : 'Nothing.'
              afk.addAfkUser(sender, time, reason, _afk)
              const aluty = `Fitur AFK berhasil *diaktifkan!*\n\n➸ *Ussername*: ${pushname}\n➸ *Alasan*: ${reason}`
              reply(aluty)
              break
        case 'infogrup':
       case 'infogrouup':
       case 'grupinfo':
       case 'groupinfo':
              if (!isGroup) return reply(mess.only.group)
              try {
              var pic = await rimuru.getProfilePicture(from)
              } catch {
              var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
              let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n${groupMetadata.desc}`
              rimuru.sendMessage(from, await getBuffer(pic), image, {quoted: freply, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
              break
       case 'tagall':
              if (!isGroup) return reply(mess.only.group)
              let arr = [];
              let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
              for (let i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
       case 'kickall': // Anti Banned
              for (let i of groupMembers) {
              await kickMember(from, [i.jid])
}
              break
       case 'leave':
       if (!isOwner) return 
              if (!isGroup) return reply(mess.only.group)
              setTimeout( () => {
              rimuru.groupLeave(from) 
              }, 2000)
              setTimeout( () => {
              reply('Byee...')
              }, 0)
              break
       case 'online':
       case 'listonline':
       case 'here':
             if (!isGroup) return reply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(rimuru.chats.get(ido).presences), rimuru.user.jid]
             rimuru.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: freply, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
      case 'hidetag':
             try {
             quotedText = editz.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
      case 'sider':
             if(!isGroup) return reply(mess.only.group)
             try {
             infom = await rimuru.messageInfo(from, editz.message.extendedTextMessage.contextInfo.stanzaId)
             tagg = []
             teks = `*• Dibaca oleh:*\n\n`
             for(let i of infom.reads){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             teks += `*• Tersampaikan pada:*\n\n`
             for(let i of infom.deliveries){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             mentions(teks, tagg, true)
             } catch (e) {
             console.log(color(e))
             reply('Reply chat bot!')
}
             break
//------------------< Fun >-------------------
       case 'wangy':
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(awikwok)
              break
       case 'mining':
              var mining = randomNomor(1000)
              atm.addKoinUser(sender, mining, _uang)
              await reply(`*Selamat Kamu Mendapatkan*: _Rp ${mining} 💰_`)
              break
       case 'waktu':
              reply(`Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
              break
       case 'cekmati':
              if (!q) return reply(mess.wrongFormat)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break
       case 'togel':
              reply(mess.wait)
              try {
              dataplai = await axios.get(`https://api.vhtear.com/togel&apikey=${setting.vhtearkey}`)
              dataplay = dataplai.data.result
              let tomgel = `*Huzzzzz*\n`
              for (let i = 0; i < dataplay.hasil.length; i++) {
              tomgel += `\n═════════════════\n\n*Negara* : ${dataplay.hasil[i].Negara}\n*Result* : ${dataplay.hasil[i].Senin}\n*Result* : ${dataplay.hasil[i].Selasa}\n*Result* : ${dataplay.hasil[i].Rabu}\n*Result* : ${dataplay.hasil[i].Kamis}\n*Result* : ${dataplay.hasil[i].Jumat}\n*Result* : ${dataplay.hasil[i].Sabtu}\n*Result* : ${dataplay.hasil[i].Minggu}\n`
}
              sendText(from, tomgel)
              } catch (err) {
              console.log(err)
}
              break
       case 'toxic':
              Toxic().then(toxic => {
              reply (toxic)
})
              break
        case 'citacita':
              const cita =['http://piyobot.000webhostapp.com/citacita1.mp3','http://piyobot.000webhostapp.com/citacita2.mp3','http://piyobot.000webhostapp.com/citacita3.mp3','http://piyobot.000webhostapp.com/citacita4.mp3','http://piyobot.000webhostapp.com/citacita5.mp3','http://piyobot.000webhostapp.com/citacita6.mp3','http://piyobot.000webhostapp.com/citacita7.mp3','http://piyobot.000webhostapp.com/citacita8.mp3','http://piyobot.000webhostapp.com/citacita9.mp3','http://piyobot.000webhostapp.com/citacita10.mp3','http://piyobot.000webhostapp.com/citacita11.mp3','http://piyobot.000webhostapp.com/citacita12.mp3','http://piyobot.000webhostapp.com/citacita13.mp3','http://piyobot.000webhostapp.com/citacita14.mp3','http://piyobot.000webhostapp.com/citacita15.mp3','http://piyobot.000webhostapp.com/citacita16.mp3','http://piyobot.000webhostapp.com/citacita17.mp3','http://piyobot.000webhostapp.com/citacita18.mp3','http://piyobot.000webhostapp.com/citacita19.mp3','http://piyobot.000webhostapp.com/citacita20.mp3','http://piyobot.000webhostapp.com/citacita21.mp3','http://piyobot.000webhostapp.com/citacita22.mp3','http://piyobot.000webhostapp.com/citacita23.mp3','http://piyobot.000webhostapp.com/citacita24.mp3','http://piyobot.000webhostapp.com/citacita25.mp3','http://piyobot.000webhostapp.com/citacita26.mp3','http://piyobot.000webhostapp.com/citacita27.mp3','http://piyobot.000webhostapp.com/citacita28.mp3','http://piyobot.000webhostapp.com/citacita29.mp3','http://piyobot.000webhostapp.com/citacita30.mp3','http://piyobot.000webhostapp.com/citacita31.mp3','http://piyobot.000webhostapp.com/citacita32.mp3','http://piyobot.000webhostapp.com/citacita33.mp3','http://piyobot.000webhostapp.com/citacita34.mp3','http://piyobot.000webhostapp.com/citacita35.mp3']
              const cita3 = cita[Math.floor(Math.random() * cita.length)]
              cita2 = await getBuffer(cita3)
              rimuru.sendMessage(from, cita2, audio,{mimetype: 'audio/mp4', ptt:true, quoted: freply})
              break
       case 'apakah':
              apakah = body.slice(1)
              const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
              const kah = apa[Math.floor(Math.random() * apa.length)]
              rimuru.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: freply })
              break
       case 'rate':
       case 'nilai':
              rate = body.slice(1)
              const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
              const te = ra[Math.floor(Math.random() * ra.length)]
              rimuru.sendMessage(from, '*Pertanyaan :* '+rate+'\n*Jawaban :* '+ te+'%', text, { quoted: freply })
              break
        case 'bay':
      reply('Sayonara buat yang pergi😔\n Semoga amal ibadahnya di terima :)')
      break
      case 'selamatdatang':
      reply('welcome kak jangan lupa patuhi peraturan  grup ya kaka \n Semoga betah👏')
      break
       case 'gantengcek':
       case 'cekganteng':
              ganteng = body.slice(1)
              const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const teng = gan[Math.floor(Math.random() * gan.length)]
              rimuru.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: freply })
              break
       case 'cantikcek':
       case 'cekcantik':
              cantik = body.slice(1)
              const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const tik = can[Math.floor(Math.random() * can.length)]
              rimuru.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: freply })
              break
       case 'cekwatak':
              var namao = pushname
              var prfx = await rimuru.getProfilePicture(sender)
              const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
              const wtk = watak[Math.floor(Math.random() * (watak.length))]
              const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
              const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
              const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
              const sft = sifat[Math.floor(Math.random() * (sifat.length))]
              const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Colkyy','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
              const hby = hobby[Math.floor(Math.random() * (hobby.length))]
              const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
              const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
              const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
              const typo = tipe[Math.floor(Math.random() * (tipe.length))]
              await reply(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
              break
       case 'hobby':
              hobby = body.slice(1)
              const by = hobby[Math.floor(Math.random() * hobby.length)]
              rimuru.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: freply })
              break
       case 'bisakah':
              bisakah = body.slice(1)
              const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
              const keh = bisa[Math.floor(Math.random() * bisa.length)]
              rimuru.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: freply })
              break
       case 'kapankah':
              kapankah = body.slice(1)
              const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
              const koh = kapan[Math.floor(Math.random() * kapan.length)]
              rimuru.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: freply })
              break
       case 'truth':
              const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
              const ttrth = trut[Math.floor(Math.random() * trut.length)]
              truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              rimuru.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: freply })
              break
       case 'dare':
              const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
              const der = dare[Math.floor(Math.random() * dare.length)]
              buff = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await rimuru.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:'*Dare*\n\n'+ der,buttons,headerType:4}
              prep = await rimuru.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              rimuru.relayWAMessage(prep)
               break		
       case 'jadian':
              jds = []
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length)]
              diaa = koss[Math.floor(Math.random() * koss.length)]
              teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
              jds.push(akuu.jid)
              jds.push(diaa.jid)
              mentions(teks, jds, true)
              break
       case 'cantik':
              membr = []
              const mes = groupMembers
              const msk = groupMembers
              const siaps = mes[Math.floor(Math.random() * mes.length)]
              const sips = pushname[Math.floor(Math.random() * msk.length)]
              teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
              membr.push(siaps.jid)
              mentions(teks, membr, true)
              break
       case 'ganteng':
              membr = []
              const nus = groupMembers
              const msl = groupMembers
              const siapss = nus[Math.floor(Math.random() * nus.length)]
              const sipss = pushname[Math.floor(Math.random() * msl.length)]
              teks = `*Masih Gantengan Owner Gua :* @${siapss.jid.split('@')[0]}`
              membr.push(siapss.jid)
              mentions(teks, membr, true)
              break
       case 'babi':
              membr = []
              const meg = groupMembers
              const mge = groupMembers
              const ba = meg[Math.floor(Math.random() * meg.length)]
              const bi = pushname[Math.floor(Math.random() * mge.length)]
              teks = `*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
              membr.push(ba.jid)
              mentions(teks, membr, true)
              break
       case 'beban':
              membr = []
              const nge = groupMembers
              const tod = groupMembers
              const beb = nge[Math.floor(Math.random() * nge.length)]
              const an = pushname[Math.floor(Math.random() * tod.length)]
              teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
              membr.push(beb.jid)
              mentions(teks, membr, true)
              break
//------------------< Lainnya >-------------------
       case 'getpp':
               if (editz.message.extendedTextMessage === null || editz.message.extendedTextMessage === undefined) {
               linkpp = await rimuru.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               rimuru.sendMessage(from, buffer, image, {caption: "Nih", quoted: freply })
               } else if (editz.message.extendedTextMessage.contextInfo.mentionedJid === null || editz.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
               mberr = editz.message.extendedTextMessage.contextInfo.participant
               linkpp = await rimuru.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               rimuru.sendMessage(from, buffer, image, { quoted: freply, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
               } else if (editz.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
               mberr = editz.message.extendedTextMessage.contextInfo.mentionedJid[0]
               linkpp = await rimuru.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               rimuru.sendMessage(from, buffer, image, { quoted: freply, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
}
               break
        case 'd':
        case 'del':
        case 'delete': // MR.CYSER
               try {
               if (editz.message.extendedTextMessage === undefined || editz.message.extendedTextMessage === null) return reply('Reply chat bot')
               rimuru.deleteMessage(from, {id: editz.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
               } catch (e){
               reply('Reply chat bot')
}
               break
         case 'tes':
               return sendButMessage(from, `Okeh nyala gan`, `Platfrom : *${os.platform()}*\nActive : *${runtime(process.uptime())}*`, [
            {
               "buttonId": ".menu",
               "buttonText": {
                  "displayText": "MENU"
               },
               "type": "RESPONSE"
            }
         ], {quoted:freply})
               break
        case 'info':  // Jangan Di Ubah Plise
               urlinfo = 'https://telegra.ph/file/5a8d6bf0339cc120bfb6c.jpg'
               thankslort = `┌──「 *INFORMATION* 」
│
├ *BOT TYPE* : NodeJS
├ *NAME*  : ʀɪᴍᴜʀᴜ࿐
├ *VERSION* : 1.0
├ *GITHUB* : Animeseleraku
│
├─「 *ᴛᴀɴᴋs ᴛᴏ* 」
│
├ ALLAH SWT
├ Nino Chan
├ Xinz Bot
├ ⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐
├ Kwn² Yg Bantu Gw
├ And all creator bot
│
└──「 *${botName}* 」`
             rimuru.sendMessage(from, await getBuffer(urlinfo), image, {quoted: freply, caption: thankslort })
             break
        case 'media':
if (!q) return reply('Urlnya?')
reply(mess.wait)
sendMediaURL(from, `${args[0]}`, "").catch(() => reply('Error'))
break
      case 'get':
      case 'fetch': //ambil dari nuru
             if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')
             res = await fetch(q)
             if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
             delete res
             throw `Content-Length: ${res.headers.get('content-length')}`
}
             if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)
             txtx = await res.buffer()
             try {
             txtx = util.format(JSON.parse(txtx+''))
             } catch (e) {
             txtx = txtx + ''
             } finally {
             reply(txtx.slice(0, 65536) + '')
}
             break
      case 'searchmsg': 
case 'caripesan':  //by ANU TEAM
             if (args.length < 1) return reply(`Pesan Yang Mau Dicari Apaan?\nContoh : ${prefix + command} halo|10`)
             teks = arg
             if (teks.includes("|")) { 
             try {
             var ve = teks.split("|")[0]
             var za = teks.split("|")[1]
             sampai = `${za}`
             if (isNaN(sampai)) return reply('Harus berupa Angka!')
             batas = parseInt(sampai) + 1
             if (batas > 30) return reply('Maks 30!')
             reply(mess.wait)
             cok = await rimuru.searchMessages(`${ve}`, from, batas,1) 
             if (cok.messages.length < 2) return reply('Tidak Ditemukan Pesan') 
             if (cok.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
             for (i=1;i < cok.messages.length;i++) {
             if (cok.messages[i].message) {
             rimuru.sendMessage(from, `Ditemukan!`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
}
}
             } catch (e) {
             return reply(String(e))
}
             } else {
             reply(`Format salah tod, ini contoh format yang benar : ${prefix + command} halo|10`)
}
             break
       case 'lolkey':
       case 'cekapikey':
              if (args.length < 1) return reply(`Ketik ${prefix}lolkey [Apikeynya]`) 
              anu = await fetchJson(`https://lolhuman.herokuapp.com/api/checkapikey?apikey=${q}`)
              teks = `*YOUR APIKEY*\n\n➸ Ussername= ${anu.result.username}\n➸ Request= ${anu.result.requests}\n➸ Today= ${anu.result.today}\n➸ Akun Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = https://lolhuman.herokuapp.com`
              rimuru.sendMessage(from, teks, text, {quoted: freply})
              break
       case 'bugreport':
              if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
              teks = args.join(' ')
              reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
              rimuru.sendMessage('6285215319934@s.whatsapp.net',`*Bug Report:* ${teks}`, text)
              break
       case 'readall':
              totalchat.map( async ({ jid }) => {
              await rimuru.chatRead(jid)
})
              reply(`\`\`\`Berhasil membaca ${unread.length} Chat !\`\`\``)
              console.log(totalchat.length)
              break	

//------------------< Enable/Disable >-------------------
       case 'leveling':
              if (!isGroup) return reply(mess.only.group)
              if (ar[0] === 'enable') {
              if (isLevelingOn) return reply('Fitur leveling telah diaktifkan sebelumnya.')
            _leveling.push(from)
              fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
              reply('Fitur leveling berhasil diaktifkan.')
              } else if (ar[0] === 'disable') {
              var anup = _leveling.indexOf(from)
            _leveling.splice(anup, 1)
              fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
              reply('Fitur leveling berhasil dimatikan.')
              } else {
              reply('Pilih enable atau disable!')
}
              break
       case 'antilink':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
              if (!q) return reply(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLink) return reply(`Udah aktif`)
              antilink.push(from)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
              } else if (args[0].toLowerCase() === 'disable'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI NONAKTIFKAN 」*')
              } else {
              reply(`Pilih enable atau disable`)
}
              break
       case 'welcome':
               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return reply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break
        case 'mute':
               if (!isGroup) return reply(mess.only.group)
               if (!isGroupAdmins) return reply(mess.only.admin)
               if (args.length < 1) return reply('!mute enable/disable')
               if (args[0].toLowerCase() === 'enable'){
               if (isMuted) return reply(`udah di mute`)
               mute.push(from)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
               reply(`*...:* *MUTE ON* *:...*\n\nPerhatian untuk member grup\nBot telah di mute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${botName}*_`)
               } else if (args[0].toLowerCase() === 'disable'){
               anu = mute.indexOf(from)
               mute.splice(anu, 1)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
               reply(`*...:* *𝙈𝙐𝙏𝙀 𝙊𝙁𝙁* *:...*\n\nPerhatian untuk member grup\nBot telah di unmute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${botName}*_`)
               } else {
               reply(`Pilih enable atau disable`)
}
               break
        case 'grupsetting':
        case 'groupsetting':
               if (!isGroup) return reply(mess.only.group)
               if (!isGroupAdmins) return reply(mess.only.admin)
               list = []
               com = [`group enable`,`leveling enable`,`welcome enable`,`antilink enable`,`mute enable`]
               comm = [`group disable`,`leveling disable`,`welcome disable`,`antilink disable`,`mute disable`]
               listnya = [`Group open/close`,`Leveling enable/disable`,`Welcome enable/disable`,`Antilink enable/disable`,`Mute enable/disable`]
               suruh = [`Enable`, `Disable`]
               fiturname = [`Group`,`Leveling`,`Welcome`,`Antilink`,`Mute`]
               startnum = 0; let startnu = 0; let startn = 0;let start = 0
               startnumm = 1
               for (let x of com) {
               var yy = {title: `${listnya[startnum++]}`,
    rows: [
       {
        title: `${suruh[0]}`,
        description: `\nMengaktifkan ${fiturname[startnu++]}`,
        rowId: `${prefix}${x}`
      },{
        title: `${suruh[1]}`,
        description: `\nMenonaktifkan ${fiturname[startn++]}`,
        rowId: `${prefix}${comm[start++]}`
      }
    ]
   }
        list.push(yy)
           }
             listmsg(from, `Group Setting`, `Atur Settingan Grup anda disini......`, list)
             break
      case 'group':
      case 'grup':
             if (!isGroup) return reply(mess.only.group)
             if (!isGroupAdmins) return reply(mess.only.admin)
             if (!isBotGroupAdmins) return reply(mess.only.Badmin)
             if (args.length < 1) return reply('!group enable/disable')
             if (args[0].toLowerCase() === 'enable'){
             rimuru.groupSettingChange(from, "announcement", false)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else if (args[0].toLowerCase() === 'disable'){
             rimuru.groupSettingChange(from, "announcement", true)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else if (args[0].toLowerCase() === 'close'){
             rimuru.groupSettingChange(from, "announcement", true)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else if (args[0].toLowerCase() === 'open'){
             rimuru.groupSettingChange(from, "announcement", false)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else {
             reply(`Pilih enable atau disable`)
}
       break
//------------------< Menunya Bang:v >-------------------
         case 'infoig':
             reply(`Jangan Lupa Follow Ig Owner Ya : https://www.instagram.com/ahmaad_2912/`)
             break
      case 'grub':
             reply('https://chat.whatsapp.com/DYv6sNT1LtsBKQGCcEEX2S')
             break
             
       case "jadibot": 
      function _0x115a(_0x3df1bc,_0x611d83){var _0x4577cd=_0x4577();return _0x115a=function(_0x115a16,_0x19e456){_0x115a16=_0x115a16-0x179;var _0x5d5676=_0x4577cd[_0x115a16];return _0x5d5676;},_0x115a(_0x3df1bc,_0x611d83);}var _0x1009f2=_0x115a;(function(_0x1d7159,_0x42360b){var _0x4786a7=_0x115a,_0x4f3b51=_0x1d7159();while(!![]){try{var _0x10fd28=parseInt(_0x4786a7(0x183))/0x1*(parseInt(_0x4786a7(0x17b))/0x2)+-parseInt(_0x4786a7(0x180))/0x3*(-parseInt(_0x4786a7(0x181))/0x4)+-parseInt(_0x4786a7(0x18a))/0x5*(-parseInt(_0x4786a7(0x17c))/0x6)+-parseInt(_0x4786a7(0x17e))/0x7*(-parseInt(_0x4786a7(0x187))/0x8)+parseInt(_0x4786a7(0x17f))/0x9*(-parseInt(_0x4786a7(0x188))/0xa)+parseInt(_0x4786a7(0x189))/0xb+-parseInt(_0x4786a7(0x179))/0xc*(parseInt(_0x4786a7(0x17a))/0xd);if(_0x10fd28===_0x42360b)break;else _0x4f3b51['push'](_0x4f3b51['shift']());}catch(_0x2b2ebd){_0x4f3b51['push'](_0x4f3b51['shift']());}}}(_0x4577,0xe4c50));if(!isPremium)return reply(mess[_0x1009f2(0x184)][_0x1009f2(0x186)]);if(editz[_0x1009f2(0x185)][_0x1009f2(0x17d)])return reply(_0x1009f2(0x182));jadibot(reply,rimuru,from);function _0x4577(){var _0x3f5902=['904930lyOzDL','18634juinsW','42852rhfCJc','fromMe','469504vRegBq','18aCottJ','585xTKaAo','18812UKEaHz','Tidak\x20bisa\x20jadibot\x20di\x20dalam\x20bot','55igGiVb','only','key','prem','8ShyNjX','6908890ChNfnV','17030354ErLvnv','905lAPnKK','348KydpDO'];_0x4577=function(){return _0x3f5902;};return _0x4577();}
        break; 
         
      case "stopjadibot":
        if (editz.key.fromMe)
          return reply("tidak bisa stopjadibot kecuali owner");
        stopjadibot(reply);
        break;
      case "listbot":
        function _0x256a(_0x5ade24,_0x5b6d6e){const _0x31af05=_0x31af();return _0x256a=function(_0x256ab2,_0x56d000){_0x256ab2=_0x256ab2-0xc0;let _0x1d889=_0x31af05[_0x256ab2];return _0x1d889;},_0x256a(_0x5ade24,_0x5b6d6e);}const _0xed9005=_0x256a;function _0x31af(){const _0x275012=['531340OoNkPT','518329utsUaD','\x0a\x0a*Nama*\x20:\x20','\x0a\x0a*Model*\x20:\x20','751759ezAgNd','1451560HMXdLZ','\x0a\x0a*Device*\x20:\x20','jid','5025591IWkQIA','20EOvjQX','48fNwlkK','4845234ZVJJCv','361476ZxaQEm','*Nomor*\x20:\x20','10AXfxGR','split'];_0x31af=function(){return _0x275012;};return _0x31af();}(function(_0x215ad9,_0x7a7442){const _0x52e793=_0x256a,_0x342c82=_0x215ad9();while(!![]){try{const _0x113269=-parseInt(_0x52e793(0xc1))/0x1+parseInt(_0x52e793(0xcb))/0x2*(parseInt(_0x52e793(0xc9))/0x3)+parseInt(_0x52e793(0xcd))/0x4+parseInt(_0x52e793(0xc2))/0x5+parseInt(_0x52e793(0xc8))/0x6+-parseInt(_0x52e793(0xce))/0x7*(-parseInt(_0x52e793(0xc7))/0x8)+parseInt(_0x52e793(0xc5))/0x9*(-parseInt(_0x52e793(0xc6))/0xa);if(_0x113269===_0x7a7442)break;else _0x342c82['push'](_0x342c82['shift']());}catch(_0x571afe){_0x342c82['push'](_0x342c82['shift']());}}}(_0x31af,0x63d27));let tekss='「\x20*LIST\x20JADIBOT*\x20」\x0a';for(let i of listjadibot){tekss+=_0xed9005(0xca)+i[_0xed9005(0xc4)][_0xed9005(0xcc)]('@')[0x0]+_0xed9005(0xcf)+pushname+_0xed9005(0xc3)+os['platform']+_0xed9005(0xc0)+os['platform']+'\x0a\x0a';}reply(tekss);
        break;
//------------------< default >-------------------     
default:
const _0x38ad35=_0x561f;(function(_0x4f9f57,_0x1fb1a7){const _0x4862cb=_0x561f,_0x4bf3ea=_0x4f9f57();while(!![]){try{const _0x3567f8=-parseInt(_0x4862cb(0xc1))/0x1*(-parseInt(_0x4862cb(0xae))/0x2)+-parseInt(_0x4862cb(0xa9))/0x3+parseInt(_0x4862cb(0xb0))/0x4*(parseInt(_0x4862cb(0xbf))/0x5)+parseInt(_0x4862cb(0xab))/0x6+-parseInt(_0x4862cb(0xb5))/0x7+parseInt(_0x4862cb(0xa7))/0x8+-parseInt(_0x4862cb(0xb7))/0x9*(-parseInt(_0x4862cb(0x9f))/0xa);if(_0x3567f8===_0x1fb1a7)break;else _0x4bf3ea['push'](_0x4bf3ea['shift']());}catch(_0x371357){_0x4bf3ea['push'](_0x4bf3ea['shift']());}}}(_0x2db6,0x98195));budy['includes']('assalamualaikum')&&reply(_0x38ad35(0xb3));budy[_0x38ad35(0xb8)]('#')&&reply('pake\x20(!)\x20ya');budy[_0x38ad35(0xb8)]('/')&&reply(_0x38ad35(0xb6));budy[_0x38ad35(0xb8)](_0x38ad35(0x9d))&&reply(_0x38ad35(0xa1));function _0x2db6(){const _0x2a7508=['./sticker/jget.webp','2866668diBQOD','readFileSync','ᴡᴀʟᴀɪᴋᴜᴍsᴀʟᴀᴍ\x20sᴀʏᴀɴɢ🤗','10AfwYzO','audio/mp4','4wwMLbG','Assalamualaikum','sendMessage','Waalaikumsalam\x20Sayang🤗','audio','7155505diGklb','pake\x20(!)\x20ya\x20','1331181yolzCw','includes','rimuru','./assets/rim','bohong','0@s.whatsapp.net','composing','status@broadcast','1452250DZKmJV','./assets/slime','16799WjcRoP','waalaikumsalam','anjing','./assets/numa','90DEqIdN','updatePresence','sᴀɴᴛᴀɪ\x20ᴊᴀᴍᴇᴛ\x20ᴊᴀɴɢᴀɴ\x20ɴɢᴇɢᴀs\x20ɢɪᴛᴜ','syalom','./sticker/dnsnew.webp','Numa','pembohong','./assets/araara','4693992fqbkel','https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc','3374823ljfDaT'];_0x2db6=function(){return _0x2a7508;};return _0x2db6();}budy['includes'](_0x38ad35(0xb1))&&reply(_0x38ad35(0xad));budy[_0x38ad35(0xb8)](_0x38ad35(0xa2))&&reply(_0x38ad35(0x9c));if(budy[_0x38ad35(0xb8)](_0x38ad35(0xb9))){reply('ᴀᴜᴛᴏ\x20ʀᴇsᴘᴏɴ:\x20ɪʏᴀ\x20ᴋᴇɴᴀᴘᴀ\x20ʏᴀ\x20ᴋᴀᴋ\x20ᴍᴀɴɢɢɪʟ-ᴍᴀɴɢɢɪʟ\x20ʀɪᴍᴜʀᴜ?'),rimuru[_0x38ad35(0xa0)](from,Presence['composing']);const loli=fs[_0x38ad35(0xac)](_0x38ad35(0xc0));rimuru['sendMessage'](from,loli,MessageType['audio'],{'quoted':freply,'mimetype':_0x38ad35(0xaf),'ptt':!![]});const d=fs[_0x38ad35(0xac)](_0x38ad35(0xaa));}function _0x561f(_0x134842,_0x3afe30){const _0x2db60d=_0x2db6();return _0x561f=function(_0x561fb0,_0x1a38f5){_0x561fb0=_0x561fb0-0x9c;let _0xf7821c=_0x2db60d[_0x561fb0];return _0xf7821c;},_0x561f(_0x134842,_0x3afe30);}if(budy[_0x38ad35(0xb8)](_0x38ad35(0xa4))){reply(''),rimuru[_0x38ad35(0xa0)](from,Presence[_0x38ad35(0xbd)]);const loli=fs['readFileSync'](_0x38ad35(0x9e));rimuru[_0x38ad35(0xb2)](from,loli,MessageType[_0x38ad35(0xb4)],{'quoted':freply,'mimetype':_0x38ad35(0xaf),'ptt':!![]});const d=fs[_0x38ad35(0xac)](_0x38ad35(0xaa));rimuru[_0x38ad35(0xb2)](from,d,sticker,{'quoted':{'key':{'fromMe':![],'participant':_0x38ad35(0xbc),...from?{'remoteJid':'status@broadcast'}:{}},'message':{'imageMessage':{'url':_0x38ad35(0xa8),'mimetype':'image/jpeg','caption':'song\x20:\x20dj\x20numa\x20numa\x20yei','jpegThumbnail':fs[_0x38ad35(0xac)]('./sticker/dnsnew.webp')}}}});}if(budy[_0x38ad35(0xb8)](_0x38ad35(0xbb))){reply(_0x38ad35(0xa5)),rimuru[_0x38ad35(0xa0)](from,Presence[_0x38ad35(0xbd)]);const loli=fs[_0x38ad35(0xac)](_0x38ad35(0xba));rimuru['sendMessage'](from,loli,MessageType[_0x38ad35(0xb4)],{'quoted':freply,'mimetype':_0x38ad35(0xaf),'ptt':!![]});}if(budy[_0x38ad35(0xb8)]('boong')){reply(_0x38ad35(0xa5)),rimuru[_0x38ad35(0xa0)](from,Presence[_0x38ad35(0xbd)]);const loli=fs[_0x38ad35(0xac)]('./assets/rim');rimuru[_0x38ad35(0xb2)](from,loli,MessageType[_0x38ad35(0xb4)],{'quoted':freply,'mimetype':'audio/mp4','ptt':!![]});}if(budy[_0x38ad35(0xb8)]('araara')){reply(''),rimuru[_0x38ad35(0xa0)](from,Presence[_0x38ad35(0xbd)]);const loli=fs[_0x38ad35(0xac)](_0x38ad35(0xa6));rimuru[_0x38ad35(0xb2)](from,loli,MessageType[_0x38ad35(0xb4)],{'quoted':freply,'mimetype':_0x38ad35(0xaf),'ptt':!![]});const d=fs[_0x38ad35(0xac)]('./sticker/araara.webp');rimuru['sendMessage'](from,d,sticker,{'quoted':{'key':{'fromMe':![],'participant':_0x38ad35(0xbc),...from?{'remoteJid':_0x38ad35(0xbe)}:{}},'message':{'imageMessage':{'url':_0x38ad35(0xa8),'mimetype':'image/jpeg','caption':'song\x20:\x20Araara','jpegThumbnail':fs[_0x38ad35(0xac)](_0x38ad35(0xa3))}}}});}
        if (budy.includes("#m")){
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
}
if (budy.includes("!m")){
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
}
        if (budy.includes("#a")){
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
}
if (budy.includes("!a")){
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
}
        if (budy.includes("#s")){
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
}
if (budy.includes("!s")){
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
}
const _0x288a6e=_0x410f;(function(_0x129cda,_0x12fa82){const _0x21476d=_0x410f,_0x3ba266=_0x129cda();while(!![]){try{const _0x4dc129=parseInt(_0x21476d(0x1cf))/0x1*(parseInt(_0x21476d(0x1d6))/0x2)+parseInt(_0x21476d(0x1da))/0x3+-parseInt(_0x21476d(0x1d3))/0x4+-parseInt(_0x21476d(0x1c8))/0x5*(-parseInt(_0x21476d(0x1d2))/0x6)+-parseInt(_0x21476d(0x1cd))/0x7*(parseInt(_0x21476d(0x1dc))/0x8)+-parseInt(_0x21476d(0x1ce))/0x9*(parseInt(_0x21476d(0x1db))/0xa)+parseInt(_0x21476d(0x1d7))/0xb*(parseInt(_0x21476d(0x1ca))/0xc);if(_0x4dc129===_0x12fa82)break;else _0x3ba266['push'](_0x3ba266['shift']());}catch(_0x38a1ba){_0x3ba266['push'](_0x3ba266['shift']());}}}(_0x38f4,0x8a788));function _0x410f(_0x5094eb,_0x455b4a){const _0x38f4d1=_0x38f4();return _0x410f=function(_0x410fcd,_0x2aa549){_0x410fcd=_0x410fcd-0x1c8;let _0x44112f=_0x38f4d1[_0x410fcd];return _0x44112f;},_0x410f(_0x5094eb,_0x455b4a);}function _0x38f4(){const _0x131f71=['8HyYyuG','855zcdIRR','Bot','374412hSvRey','includes','audio','149933lCdbpe','64395VnbnxR','4GkzHqG','composing','updatePresence','9186mUamRR','1507688pJYrGe','sendMessage','./assets/bot1','345070KrQCBw','297WkiMHY','bot','readFileSync','497082ePEYwq','1390zewrbU'];_0x38f4=function(){return _0x131f71;};return _0x38f4();}if(budy[_0x288a6e(0x1cb)](_0x288a6e(0x1d8))){reply(''),rimuru[_0x288a6e(0x1d1)](from,Presence[_0x288a6e(0x1d0)]);const loli=fs[_0x288a6e(0x1d9)](_0x288a6e(0x1d5));rimuru[_0x288a6e(0x1d4)](from,loli,MessageType[_0x288a6e(0x1cc)],{'quoted':freply,'mimetype':'audio/mp4','ptt':!![]});}if(budy[_0x288a6e(0x1cb)](_0x288a6e(0x1c9))){reply(''),rimuru[_0x288a6e(0x1d1)](from,Presence['composing']);const loli=fs['readFileSync']('./assets/bot');rimuru[_0x288a6e(0x1d4)](from,loli,MessageType[_0x288a6e(0x1cc)],{'quoted':freply,'mimetype':'audio/mp4','ptt':!![]});}

if (fs.existsSync(`./media/${from}.json`)) {
	gelutSkuy = setGelud(`${from}`)
	if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (gelutSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		gelutSkuy.status = true
		rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
		starGame = `👑 Gelud Game 🤙🏻 

Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
• Pemenangnya adalah [ @${winR} ] `
	   rimuru.sendMessage(from, starGame, text, {quoted: freply, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
		fs.unlinkSync("./media/" + from + ".json");
	} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		rimuru.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻
• @${gelutSkuy.Y} Menolak🤙🏻`, text, {quoted: freply, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./media/" + from + ".json");
	}
}

if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = 
`*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❎
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

   ${angka[1]}${angka[2]}${angka[3]}
   ${angka[4]}${angka[5]}${angka[6]}
   ${angka[7]}${angka[8]}${angka[9]}`
  rimuru.sendMessage(from, ucapan, text, {quoted: freply, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
rimuru.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:editz,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❎'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`*🎳Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
rimuru.sendMessage(from, ucapan1, text, {quoted: freply, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri ??👌_*`
ucapan2 = `*🎳 Result Game Tictactoe ??*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❎

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
rimuru.sendMessage(from, ucapan, text, {quoted: freply, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
rimuru.sendMessage(from, ucapan1, text, {quoted:editz, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*??Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❎
   
Giliran = @${tty.player1.split('@')[0]}

${ttt}`
 rimuru.sendMessage(from, ucapan, text, {quoted: freply, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
}
if (/^=?>/.test(budy) && (isOwner || editz.key.fromMe )){

let parse = /^=>/.test(budy) ? budy.replace(/^=>/,'return') : budy.replace(/^>/,'')

try{

let evaluate = await eval(`;(async () => {${parse} })()`).catch(e => { return e })

return reply(require('util').format(evaluate))

 } catch(e){

 return reply(require('util').format(e))

}
}
function _0x4405(_0x1cf743,_0x188d44){var _0x10418a=_0x1041();return _0x4405=function(_0x440573,_0x9ac19){_0x440573=_0x440573-0xf2;var _0x337813=_0x10418a[_0x440573];return _0x337813;},_0x4405(_0x1cf743,_0x188d44);}var _0xfe0af=_0x4405;function _0x1041(){var _0x2bee28=['21990ONqkXW','1130718ttbguf','10WyfoMG','8938013zSoSkA','1023XBZwEL','split','7110BeomhK','fromMe','393770knUHrn','Maaf\x20@','292UuGtfn','32226UeJmTO','3909556dGrxvM','11536mnAcSp','\x20tidak\x20ada\x20dalam\x20menu','ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ʀɪᴍᴜʀᴜ࿐\x20https://instabio.cc/Rimuru','key'];_0x1041=function(){return _0x2bee28;};return _0x1041();}(function(_0x268c59,_0x36129a){var _0x250a77=_0x4405,_0x4306b8=_0x268c59();while(!![]){try{var _0x48ae5e=parseInt(_0x250a77(0x100))/0x1+-parseInt(_0x250a77(0xff))/0x2*(parseInt(_0x250a77(0xf5))/0x3)+-parseInt(_0x250a77(0x101))/0x4*(parseInt(_0x250a77(0xf7))/0x5)+parseInt(_0x250a77(0xf6))/0x6+parseInt(_0x250a77(0xf8))/0x7+parseInt(_0x250a77(0x102))/0x8*(-parseInt(_0x250a77(0xfb))/0x9)+parseInt(_0x250a77(0xfd))/0xa*(parseInt(_0x250a77(0xf9))/0xb);if(_0x48ae5e===_0x36129a)break;else _0x4306b8['push'](_0x4306b8['shift']());}catch(_0x2b4830){_0x4306b8['push'](_0x4306b8['shift']());}}}(_0x1041,0xf3085));!isGroup&&isCmd&&!rimuru[_0xfe0af(0xf4)][_0xfe0af(0xfc)]&&(tek=_0xfe0af(0xf3),meki=_0xfe0af(0xfe)+senderr[_0xfe0af(0xfa)]('@')[0x0]+',\x20command\x20'+(prefix+command)+_0xfe0af(0xf2),sendButMessage(from,meki,tek,nomenu,'extendedTextMessage',{'sendEphemeral':!![],'quoted':rimuru,'mentionedJid':[senderr]}));
	} 
if (isGroup && budy != undefined) {
} else {
console.log('[',color('TEXT','teal'),']',`Pesan : ${budy} Dari`, color(pushname))
}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'cyan'))
        }
	}
}



 