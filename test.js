
const rtts = require('./index')
num = []

for(i=0;i<101;i++){
  num.push(i)
}
let words = ["cynical",
"bait",
"ruthless",
"tasteless",
"probable",
"observant",
"nifty",
"obedient",
"borrow",
"colossal",
"earthy",
"productive",
"effect",
"window",
"oval",
"letter",
"apparel",
"depressed",
"pets",
"lumpy",
"raise",
"save",
"card",
"three",
"violent",
"nine",
"fretful",
"screeching",
"untidy",
"smelly",
"compare",
"basketball",
"leather",
"swing",
"zealous",
"butter",
"fortunate",
"spade",
"dam",
"list",
"chickens",
"gifted",
"knock",
"calendar",
"cruel",
"invincible",
"gaudy",
"seed",
"wool",
"run",
"supply",
"seashore",
"things",
"vulgar",
"change",
"enter",
"obsolete",
"breath",
"repeat",
"sturdy",
"haircut",
"protest",
"billowy",
"nose",
"time",
"trucks",
"shirt",
"guess",
"bleach",
"bath",
"growth",
"neck",
"porter",
"lock",
"horses",
"discussion",
"week",
"cool",
"railway",
"aggressive",
"dark",
"adjustment",
"unused",
"itchy",
"halting",
"fanatical",
"easy",
"decisive",
"heavenly",
"irritating",
"military",
"closed",
"finger",
"taste",
"uninterested",
"manage",
"agreeable",
"drunk",
"troubled",
"toes",
"plot",
"breakable",
"provide",
"hard",
"profuse",
"flow",
"magnificent",
"mean",
"jelly",
"sharp",
"miscreant",
"scarce",
"wholesale",
"crash",
"cause",
"mind",
"successful",
"fish",
"shaky",
"bored"
]
voices=[
  "Microsoft David Desktop",
  "Microsoft James Mobile",
  "Microsoft Matilda Mobile",
  "Microsoft Eva Desktop",
  "Microsoft Linda Desktop",
  "Microsoft Richard Desktop",
  "Microsoft George Desktop",
  "Microsoft Hazel Desktop",
  "Microsoft Sarah Desktop",
  "Microsoft Sean Desktop",
  "Microsoft Heera Mobile",
  "Microsoft Koyal Mobile",
  "Microsoft Ravi Mobile",
  "Microsoft Catherine Mobile",
  "Microsoft Eva Mobile",
  "Microsoft Mark Desktop",
  "Microsoft Zira Desktop"
  ]


rtts.listVoices()

let rand        = (a)=>a[Math.floor(Math.random()*a.length)]

async function run(a){
    rtts.voice=rand(voices)
    rtts.rate=rand(num)
    rtts.vol=100
    await rtts.talk(rand(words));
}

setInterval(async()=>{await run()},1000)


//rtts.vol = set a valur b/w 1-100
//rtts.rate= set a value b/w 0-5 (fastness)
//rtts.ontalk(callback,intervel) function will repeat ever intervel untill speech is ended only valid after calling rtts.talk
//rtts.kill() kill the child process
//rtts.exportWav(text,dir) saves output as .wav in given dir .if no dir is given it will store output as example.wav in cwd
//rtts.listVoices(options) list all aviable voices in current device options = 'name,lang,gender,age,id,ver,lcid,langid'


