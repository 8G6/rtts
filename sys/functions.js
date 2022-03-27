
class functions{   
    
    
    AfterTold(err,stderr,stdout,nodata,start) {
        let s=stderr.split('"')
        let pserr=s
        if(nodata==false){
            err    == null  ?  console.log('Ended Speaking') : console.log('Node err '+err)
            stderr == ''    ?  console.log('No errors')      : console.log(pserr);
            let output=stdout.replace('\n','').replace('\r','')
            console.log('Your text : '+output)
            let time  = (((new Date().getTime()-start)/1000)).toFixed(4)
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
    ranger(rate){return (0.2*rate)-10}
}

module.exports = new functions()