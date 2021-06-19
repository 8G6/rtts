class functions{   

    constructor (){
        this.base=2.5
        this.data=10
    }
    
    
    AfterTold(err,stderr,stdout,nodata,start) {
        if(nodata==false){
            err    == null  ?  console.log('Ended Speaking') : console.log(err)
            stderr == ''    ?  console.log('No errors')      : console.log(stderr)
            let output=stdout.replace('\n','').replace('\r','')
            console.log('Your text : '+output)
            let time  = (((new Date().getTime()-start)/1000)-1).toFixed(4)
            let chars = output.split('').length
            let wps   = (chars/time).toFixed(4)
            console.log({
                time_taken:time+' seconds',
                Total_Number_of_chars:chars,
                chars_per_second:wps
            })
            }
            else{
                console.log('Ended Speaking')
            }
        
    }
    ranger(rate){let a=(Math.log(rate)/Math.log(2.5));return ((rate<5 && rate>0) ?  ((rate>2.5) ? ((a**3.1895)*1.658) : ((a-1)*1.658)) : rate==0 ? -10 : rate==5 ? 10 :  'Range Error Invalid Range (0<=Rate<=5)\nSpeaking in default rate')}
}

module.exports = new functions()