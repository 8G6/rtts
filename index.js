const {Win} = require('./sys/win')
const {platform} = require('process')

if(platform=='win32'){
    module.exports=new Win()
}