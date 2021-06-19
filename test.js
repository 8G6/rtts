
const rtts = require('./index')
rtts.rate=0
rtts.vol=5
k=[
    'Microsoft Matilda Mobile',
    'Microsoft Eva Desktop',
    'Microsoft Linda Desktop',
    'Microsoft Hazel Desktop',
    'Microsoft Sarah Desktop',
    'Microsoft Heera Mobile',
    'Microsoft Koyal Mobile',
    'Microsoft Catherine Mobile',
    'Microsoft Eva Mobile',
    'Microsoft Zira Desktop'
  ]
rtts.listVoices()


async function run(a){
    rtts.voice=a
    await rtts.talk('helllo');
}
i=0
setInterval(async()=>{await run(k[i]);i++;},1000)
//rtts.vol = set a valur b/w 1-100
//rtts.rate= set a value b/w 0-5 (fastness)
//rtts.ontalk(callback,intervel) function will repeat ever intervel untill speech is ended only valid after calling rtts.talk
//rtts.kill() kill the child process
//rtts.exportWav(text,dir) saves output as .wav in given dir .if no dir is given it will store output as example.wav in cwd
//rtts.listVoices(options) list all aviable voices in current device options = 'name,lang,gender,age,id,ver,lcid,langid'


