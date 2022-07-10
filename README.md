# rtts (Ryu Text to Speech)


rtts is an open source JavaScript package for text to speech conversion

Options 

## Volume
A value between 0-100
```
rtts.vol
```
## Speed
A value between 0-5
```
rtts.rate
```
## Export
saves output as .wav in given dir .if no dir is given it will store output as example.wav in CW
```
rtts.exportWav(text,dir)
```
## Ontalk
function will repeat every intervel until speech is ended only valid after calling rtts.talk
```
rtts.ontalk(callback,intervel)
```
## Kill
terminate  rtts.talk
```
rtts.kill
```
## Kill
Terminate the running rtts.talk
```
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

```
rtts.listVoices(options) 
```
Options can be passed as strings separated by comas 


## Features 
Platform | Speak | Export | Stop | Speed | Voice | Voloume | List 
---------|-------|--------|------|-------|-------|-----
Windows | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |  :no_entry_sign:
Linux   | :no_entry_sign: | :no_entry_sign:    | :no_entry_sign: | :no_entry_sign: | :no_entry_sign: | :no_entry_sign: | :no_entry_sign:
macOS  | :no_entry_sign: | :no_entry_sign: | :no_entry_sign: | :no_entry_sign: | :no_entry_sign: | :no_entry_sign: | :no_entry_sign:

