
const {AfterTold,ranger} = require('./functions.js');
const util = require('util');
const exe = util.promisify(require('child_process').execFile);
const exec = require('child_process').exec
print  = (a)=> console.log(a)
Kill = () => {process.kill(process.pid)}
class  Windows{
    constructor(){
        this.ps=    'Add-Type -AssemblyName System.speech;$ss = New-Object System.Speech.Synthesis.SpeechSynthesizer;'
        this.nodata=false
        this.text=  'only works after calling talk'
        this.voice= 'Microsoft David Desktop'
        this.rate=  2.5
        this.vol=   100
    }    
        talk = async function (text='no input'){
            text=='no input' ? this.nodata = true : 0
            this.text={text:text,rate:this.rate}
            this.rate=ranger(this.rate)
            this.vol==undefined ? this.vol=100 : 0
            let cmd=this.ps+`$ss.Rate=${this.rate};$ss.SelectVoice('${this.voice}');$ss.Volume=${this.vol};$ss.Speak('${text}');'${text}';`
            let k='not set'
            this.ontalk = (callback,intervel=100) => {setTimeout(()=>{k=setInterval(()=>{callback()},intervel);print('Started Speaking');this.start = new Date().getTime();}),1500}
            await exe('powershell.exe',[cmd],(err,stdout,stderr)=>{clearInterval(k);AfterTold(err,stderr,stdout,this.nodata,this.start);});
        }
        
        listVoices = async function (options='name,lang,gender,age'){
            let n        = '$n="`n";$i=0;$s="               ";'
            let list     = '$n+$s+"    List All of Aviable Voices"+$n;$s+"====================================="+$n;'
            let name     =  options.match(/name/g)    ?  '$n+$s+"Name         :    "+$v.VoiceInfo.Name'                     : '""'
            let lang     =  options.match(/lang/g)    ?  '$n+$s+"Langauge     :    "+$v.VoiceInfo.Culture.DisplayName'      : '""' 
            let age      =  options.match(/age/g)     ?  '$n+$s+"Age          :    "+$v.VoiceInfo.Age'                      : '""'   
            let gender   =  options.match(/gender/g)  ?  '$n+$s+"Gender       :    "+$v.VoiceInfo.AdditionalInfo.Gender'    : '""'
            let id       =  options.match(/id/g)      ?  '$n+$s+"ID           :    "+$v.VoiceInfo.Id'                       : '""'
            let version  =  options.match(/ver/g)     ?  '$n+$s+"Version      :    "+$v.VoiceInfo.AdditionalInfo.Version'   : '""' 
            let lcid     =  options.match(/lcid/g)    ?  '$n+$s+"LCID         :    "+$v.VoiceInfo.Culture.LCID'             : '""'
            let langid   =  options.match(/langid/g)  ?  '$n+$s+"Langauge ID  :    "+$v.VoiceInfo.AdditionalInfo.Language'  : '""'

            let cmd=this.ps+`${n}${list}Foreach ($v in $ss.GetInstalledVoices()){$i+=1;$s+"            Voice "+$i+$n+$s+"\
            -------"+$n+${name}+${lang}+${gender}+${age}+${id}+${version}+${lcid}+${langid}+$n};`
                        
            const {stdout,err,stderr}  = await exe('powershell.exe',[cmd]);
            console.log(stdout)
        }
        exportWav = async function (text='No text Given',dir='.\\example.wav')  {
            dir = dir.match(/.wav/g) ? dir : dir+='.wav'
            const {cwd} = require('process')
            dir=='.\\example' ? dir=dir.replace('.\\',cwd()+'\\') : dir=dir.replace(/\//g,'\\').replace('.\\',cwd()+'\\')
            const {stdout}=await exe('powershell.exe',[this.ps+`$ss.SetOutputToWaveFile('${dir}');$ss.Rate=${this.rate};$ss.SelectVoice('${this.voice}');$ss.Volume=${this.vol};$ss.Speak('${text}');exit;`])
            print("File saved in "+dir)
        }
        getMoreVoice = async function ()  {
            exec('start ms-settings:speech')
        }

        kill=()=>{Kill()}   
}
module.exports = {
    Win:Windows,
    print:print,
}

