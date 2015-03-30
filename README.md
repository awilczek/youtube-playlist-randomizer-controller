# youtube-playlist-randomizer-controller
Scripts allow controlling your youtube-playlist-randomizer.info page from your Android phone!

# Requirements
- node.js installed

# Installation
1. run 'node /path/to/server/server.js' (ideally, add to startup apps)
2. open port 9995 (just for local network) by `sudo iptables -A INPUT -p tcp --dport 9995 -j ACCEPT` if you are on linux, or find out yourself how to do it in you OS (ideally, save iptables permanently)
3. install chrome extension
- enter 'extensions'
- enable developer mode
- click 'load extension without packet'
- point to /path/to/chrome-plugin directory and clik 'open'
4. open your youtube-playlist-randomizer.info page
4. install [REST Client for Android](https://play.google.com/store/apps/details?id=com.sourcestream.android.restclient)
5. enjoy! by sending POST (next) or PUT (prev) to your computer's IP on port 9995