instructions for how to use the code in this folder:

https://tessel.github.io/t2-start/webserver.html

also - the terminal text = 

JustinGosses_per:nodebots_Day justingosses$ cd tessel_router
JustinGosses_per:tessel_router justingosses$ ls
JustinGosses_per:tessel_router justingosses$ t2 init
INFO Initializing new Tessel project for JavaScript...
INFO Created package.json.
INFO Created .tesselinclude.
INFO Wrote "Hello World" to index.js
JustinGosses_per:tessel_router justingosses$ ls
index.js	package.json
JustinGosses_per:tessel_router justingosses$ subl *
JustinGosses_per:tessel_router justingosses$ t2 run index.js
INFO Looking for your Tessel...
INFO Connected to DorfTheTessel.
INFO Building project.
INFO Writing project to RAM on DorfTheTessel (3.072 kB)...
INFO Deployed.
INFO Running index.js...
I'm blinking! (Press CTRL + C to stop)
  JustinGosses_per:tessel_router justingosses$ t2 run webserver.js
INFO Looking for your Tessel...
INFO Connected to DorfTheTessel.
INFO Building project.
INFO Writing project to RAM on DorfTheTessel (3.072 kB)...
INFO Deployed.
INFO Running webserver.js...
Server running at http://192.168.1.101:8080/
  JustinGosses_per:tessel_router justingosses$ touch index.html
JustinGosses_per:tessel_router justingosses$ subl *
JustinGosses_per:tessel_router justingosses$ t2 run webserver.js
INFO Looking for your Tessel...
INFO Connected to DorfTheTessel.
INFO Building project.
INFO Writing project to RAM on DorfTheTessel (3.072 kB)...
INFO Deployed.
INFO Running webserver.js...
Server running at http://192.168.1.101:8080/
  JustinGosses_per:tessel_router justingosses$ t2 run webserver.js
INFO Looking for your Tessel...
INFO Connected to DorfTheTessel.
INFO Building project.
INFO Writing project to RAM on DorfTheTessel (3.072 kB)...
INFO Deployed.
INFO Running webserver.js...
Server running at http://192.168.1.101:8080/
  JustinGosses_per:tessel_router justingosses$ t2 run webserver.js
INFO Looking for your Tessel...
INFO Connected to DorfTheTessel.
INFO Building project.
INFO Writing project to RAM on DorfTheTessel (3.584 kB)...
INFO Deployed.
INFO Running webserver.js...
Server running at http://192.168.1.101:8080/
/tmp/remote-script/webserver.js:1
(function (exports, require, module, __filename, __dirname) { function e(e,n,t){t.writeHead(200,{"Content-Type":"text/html"}),i.readFile(__dirname+"/index.html",function(e,n){if(e)throw e;t.end(n)})}function n(e,n,r){var i=/(\d)$/,a=i.exec(e),o=a[1],l=t.led[o];l.toggle(function(e){e?(console.log(e),r.writeHead(500,{"Content-Type":"application/json"}),r.end(JSON.stringify({error:e}))):(r.writeHead(200,{"Content-Type":"application/json"}),r.end(JSON.stringify({on:l.isOn})))})}var t=require("tessel"),r=require("http"),i=require("fs"),a=require("url"),o=r.createServer(function(t,r){var i=a.parse(t.url,!0),o=/leds/;i.pathname.match(o)?n(i.pathname,t,r):e(i.pathname,t,r)});o.listen(8080),console.log("Server running at http://192.168.1.101:8080/");
                                                                                                                                                                                    ^

Error: ENOENT: no such file or directory, open '/tmp/remote-script/index.html'
    at Error (native)
JustinGosses_per:tessel_router justingosses$ t2 init
INFO Initializing new Tessel project for JavaScript...
INFO Created package.json.
JustinGosses_per:tessel_router justingosses$ defaults write com.apple.finder AppleShowAllFiles YES
JustinGosses_per:tessel_router justingosses$ subl *
JustinGosses_per:tessel_router justingosses$ t2 run webserver.js
INFO Looking for your Tessel...
INFO Connected to DorfTheTessel.
INFO Building project.
INFO Writing project to RAM on DorfTheTessel (6.144 kB)...
INFO Deployed.
INFO Running webserver.js...
Server running at http://192.168.1.101:8080/
  JustinGosses_per:tessel_router justingosses$ touch ReadMe.md
JustinGosses_per:tessel_router justingosses$ subl ReadMe.md
JustinGosses_per:tessel_router justingosses$ 