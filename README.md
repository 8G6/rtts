## rtts (Ryu Text to Speech)


How to use 
```
rtts.vol //= set a value b/w 1-100
rtts.rate//= set a value b/w 0-5 (fastness)
rtts.ontalk(callback,intervel) function will repeat ever intervel untill speech is ended only valid after calling rtts.talk
rtts.kill() kill the child process
rtts.exportWav(text,dir) saves output as .wav in given dir .if no dir is given it will store output as example.wav in cwd
rtts.listVoices(options) list all aviable voices in current device options = 'name,lang,gender,age,id,ver,lcid,langid'
```
## Features 
Platform | Speak | Export | Stop | Speed | Voice | List 
---------|-------|--------|------|-------|-------|-----
Windows | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :no_entry_sign:
Linux   | :no_entry_sign: | :no_entry_sign:    | :no_entry_sign: | :no_entry_sign: | :no_entry_sign: | :no_entry_sign:
macOS  | :no_entry_sign: | :no_entry_sign: | :no_entry_sign: | :no_entry_sign: | :no_entry_sign: | :no_entry_sign:

