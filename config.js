//davidthegod

const fs = require('fs')
const { color } = require('./lib/myfunc')

//owner
global.owner = '2347043759577'
global.nomerowner = ["2349121530876"]

// Apikey 

global.skizo = 'David Cyril'
global.casterix = 'DeeCeeXxx'
//watermark 
global.packname = '*DAVID CYRIL*'
global.author = 'QUEEN_ANITA-V3'

// cpanel 
global.domain = 'https://' // deeceexxx
global.apikey2 = 'ptlc' // I love anita
global.capikey2 = 'ptla' // david x anita 
global.eggsnya = '15' // The id eggs used if the id is 5, just leave it, don't change it
global.location = '1' // id location


global.apilinode = ''// apikey vps account linode
global.apitokendo = ''

//database 
global.urldb = '{"noiseKey":{"private":{"type":"Buffer","data":"yNTgxZE0pPipTgFkU/ZC/HR8knQBc4dHAetQvupQLWc="},"public":{"type":"Buffer","data":"ftiJe4/ghcQN1/JeCKWL8Uq8igKMY2A+mcQ9qNhy9go="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"eA7r9uVy6in/S3V+DxWlIBvce+o6hNgxM15Ye6MIM0M="},"public":{"type":"Buffer","data":"IH9+o1augRlshfEgY5WpSTrKVK02EDqvIeTLZ9DYomA="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"kFPVIFo6Ha8Kr+Z8q4zTodQCfgXTI1eoAovHsPpTtHA="},"public":{"type":"Buffer","data":"VVokMHWOed0Du+ITbwFXky3Uqt62NnaBekZiTb3WOD4="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"kABxVUWDmnwupmqQWkfIc1fC+93O/WtTpsymdWsqflI="},"public":{"type":"Buffer","data":"tnw6bRd53t4nCrCN6Pue3tHL+8O6Vh3HOT3qamXOJjU="}},"signature":{"type":"Buffer","data":"i4UMOq7QruJ64AnywNbWo02MDVsJr8P5UprkujNW4SYTxr83hYk2wN7WC2S4f3r//n3IGM4BX2kwWUwVLbbdgw=="},"keyId":1},"registrationId":165,"advSecretKey":"xwxVNraaPDWIQRvOHqvYIvfWZJFZR3xzfAMMJ6d0CKI=","processedHistoryMessages":[{"key":{"remoteJid":"2349121530876@s.whatsapp.net","fromMe":true,"id":"47DBF5C5DA8BF4B449CF1B465CAAF9A8"},"messageTimestamp":1731391785}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"Y_kd5PoBRuiGIgFF742MEg","phoneId":"a59d39fc-fc3f-4881-88f4-1283829bdb85","identityId":{"type":"Buffer","data":"fP14uWlggYHmCwKoEQ8aUW7s+g0="},"registered":true,"backupToken":{"type":"Buffer","data":"ZD5/GiSXVKPXYWrbKOyfs1WQ1KY="},"registration":{},"pairingCode":"E44WPBXH","me":{"id":"2349121530876:10@s.whatsapp.net","lid":"118962490748980:10@lid","name":"Jesse Emmanuel 2"},"account":{"details":"CIXO1AkQnuLLuQYYAyAAKAA=","accountSignatureKey":"6TngoHvoIF4GARz3ybWFWJqcLHxirZaOgVohhM1mDEU=","accountSignature":"DNjXeMZeSqfxx4631SPOexoqdBOxY17BetsVndn8yCXzJjNHTLe+USgCQR74F6yIBQT94BracEtknjK5Bex3BA==","deviceSignature":"69hf8vUH+zZXyn5ovGOte6+21ojVIKdvcQvIz5mvFyw2+6G8gUVhR6wcBr4bl1GZyCvt/4qhutI+aV7yPhCPjQ=="},"signalIdentities":[{"identifier":{"name":"2349121530876:10@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Bek54KB76CBeBgEc98m1hVianCx8Yq2WjoFaIYTNZgxF"}}],"platform":"android","lastAccountSyncTimestamp":1731391777,"myAppStateKeyId":"AAAAAPON"}'; // just leave it blank but if you want to use the mongo database, fill in the mongo url

global.limitawal = {
    premium: "Infinity",
    monayawal: 0,
    free: 100
}

//rpg
global.buruan = {
   ikan: 5,
   ayam: 5,
   kelinci: 5,
   domba: 5,
   sapi: 5,
   gajah: 5
}
global.rpg = {
   darahawal: 100,
   energyawal: 252,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}

//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = false;                //make true to enable auto recording
global.autoViewStatus = true;       //make true to view statuses
global.unavailable = true;     
//to show your real presence  
global.available = false;   
// to show always online  
global.autoreadmessages = false;   
///To always read messages
global.chatbot = false;
global.autoreact = false;

global.welcome = false;

global.prefix = '.';

global.autobio = false;

global.antilink = false;

global.antilinkkick = false;

global.antilinkwarn = false;

//_____________//
// Don't change it
global.antibot = false
//—————「 Deadline 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
