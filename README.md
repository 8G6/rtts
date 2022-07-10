# rtts (Ryu Text to Speech)


rtts is an open source JavaScript package for text to speech conversion

example usage
```javascript
const rtts = require('rtts')
(async()=>{
    rtts.rate=2.5
    rtts.vol=100
    await rtts.talk('hi');
})()
```
Options 

## Volume
A value between 0-100
```javascript
rtts.vol
```
## Speed
A value between 0-5
```javascript
rtts.rate
```
## Export
saves output as .wav in given dir .if no dir is given it will store output as example.wav in CW
```javascript
rtts.exportWav(text,dir)
```
## Ontalk
function will repeat every intervel until speech is ended only valid after calling rtts.talk
```javascript
rtts.ontalk(callback,intervel)
```
## Kill
terminate  rtts.talk
```javascript
rtts.kill
```
## Kill
Terminate the running rtts.talk
```javascript
rtts.kill
```
## listVoices
list all available voices in current device 
options
Option | Notes 
---------|-------|
name |Name of the TTS instance
lang | language of the TTS instance
gender | Gender of the  TTS instance 
age    | Vocal age of the  TTS instance
id     | TTS instance ID
ver    |  TTS instance version
lcid   | Windows Language Code Identifier
langid |ISO Language Code

```javascript
rtts.listVoices(options) 
```
Options can be passed as strings separated by comas 

for example if you only want to list names and age of avilable voices 
```javascript
rtts.listVoices('name,age') 
```


## Features 

Platform | Speak | Export | Stop | Speed | Voice | Voloume | List 
---------|-------|--------|------|-------|-------|----- |-----
Windows | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |  :no_entry_sign:
Linux   | :no_entry_sign: | :no_entry_sign:    | :no_entry_sign: | :no_entry_sign: | :no_entry_sign: | :no_entry_sign: | :no_entry_sign:
macOS  | :no_entry_sign: | :no_entry_sign: | :no_entry_sign: | :no_entry_sign: | :no_entry_sign: | :no_entry_sign: | :no_entry_sign:

