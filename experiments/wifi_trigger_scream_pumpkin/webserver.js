// // Import the interface to Tessel hardware
// var tessel = require('tessel');
// // Load the http module to create an http server.
// var http = require('http');

// // Configure our HTTP server to respond with "Hello from Tessel!" to all requests.
// var server = http.createServer(function (request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.end(index.html);
// });

// // Listen on port 8080, IP defaults to 192.168.1.101. Also accessible through [tessel-name].local
// server.listen(8080);

// // Put a friendly message in the terminal
// console.log("Server running at http://192.168.1.101:8080/");


  // These two dependencies remain the same
  var tessel = require('tessel');
  var http = require('http');

  // Import the interface to Tessel hardware - these are from audio.js originally
  var path = require('path');
  var os = require('os');
  var av = require('tessel-av');
  var mp3 = path.join(__dirname, 'ManiacalWitchesLaugh.mp3');
  var mp3_9 = path.join(__dirname, 'chomp_1.mp3');
  var mp3_0 = path.join(__dirname, 'boo.mp3');
  var sound = new av.Speaker(mp3);
  var sound_9 = new av.Speaker(mp3_9);
  var sound_0 = new av.Speaker(mp3_0);
  var speaker = new av.Player();
  // var sound_1 = new av.Speaker();

  // Require two other core Node.js modules
  var fs = require('fs');
  var url = require('url');

  var server = http.createServer(function (request, response) {
    // Break up the url into easier-to-use parts
    var urlParts = url.parse(request.url, true);

    // Create a regular expression to match requests to toggle LEDs
    var ledRegex = /leds/;

    if (urlParts.pathname.match(ledRegex)) {
      // If there is a request containing the string 'leds' call a function, toggleLED
      toggleLED(urlParts.pathname, request, response);
    } else {
      // All other request will call a function, showIndex
      showIndex(urlParts.pathname, request, response);
    }
  });

  // Stays the same
  server.listen(8080);

  // Stays the same
  console.log('Server running at http://192.168.1.101:8080/');

  // Respond to the request with our index.html page
  function showIndex (url, request, response) {
    // Create a response header telling the browser to expect html
    response.writeHead(200, {"Content-Type": "text/html"});

    // Use fs to read in index.html
    fs.readFile(__dirname + '/index.html', function (err, content) {
      // If there was an error, throw to stop code execution
      if (err) {
        throw err;
      }

      // Serve the content of index.html read in by fs.readFile
      response.end(content);
    });
  }

  // Toggle the led specified in the url and respond with its state
  function toggleLED (url, request, response) {
    // Create a regular expression to find the number at the end of the url
    var indexRegex = /(\d)$/;

    // Capture the number, returns an array
    var result = indexRegex.exec(url);

    // Grab the captured result from the array
    var index = result[1];

    // Use the index to refence the correct LED
    if (index == 2 || index == 3 || index == 0 || index == 1){
      var led = tessel.led[index];
      led.toggle(function (err) {
        if (err) {
          // Log the error, send back a 500 (internal server error) response to the client
          console.log(err);
          response.writeHead(500, {"Content-Type": "application/json"});
          response.end(JSON.stringify({error: err}));
        } else {
          // The led was successfully toggled, respond with the state of the toggled led using led.isOn
          response.writeHead(200, {"Content-Type": "application/json"});
          response.end(JSON.stringify({on: led.isOn}));
        }
      });
    }


    

    // test index to make sure it is what number I think it should be
    console.log("index constant = ",index)
      // sound.play();

      // sound.on('ended', function(seconds) {
      //   sound.play();
      // });

    if (index==2){
      console.log("index inside if 2 = ",index)
      sound.play();

      sound.on('ended', function(seconds) {
        sound.play();
      });
    }
    if (index==3){
      console.log("index inside if 3 = ",index)
      sound.stop()
      sound_9.stop()
      sound_0.stop()
      // sound_1.stop()
    }

    if (index==0){
      console.log("index inside if 3 = ",index)
      sound_0.play();

      sound_0.on('ended', function(seconds) {
        sound_0.play();
      });
    }

    if (index==1){
      console.log("index inside if 1 = ",index)
      // var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
      // var speaker = new av.Speaker();

      speaker.say("Hello");

      // speaker.on('ended', function() {
      //   if (alphabet.length) {
      //   this.say(alphabet.shift());
      //   }
      // });
    }


    if (index==9){
      console.log("index inside if 9 = ",index)
      sound_9.play();

      sound_9.on('ended', function(seconds) {
        sound_9.play();
      });

      // sound_9.on(function (err) {
      //   if (err) {
      //     // Log the error, send back a 500 (internal server error) response to the client
      //     console.log(err);
      //     response.writeHead(500, {"Content-Type": "application/json"});
      //     response.end(JSON.stringify({error: err}));
      //   } else {
      //     // The led was successfully toggled, respond with the state of the toggled led using led.isOn
      //     response.writeHead(200, {"Content-Type": "application/json"});
      //     response.end(JSON.stringify({on: led.isOn}));
      //   }
      // });
    }
    // if (index!==3 || index!==3){
    //   console.log("index doesn't match 2 or 3 ",index)
    //   sound.play();
    //   sound.on('ended', function(seconds) {
    //     sound.play();
    //   });
    // }
    


    // Toggle the state of the led and call the callback after that's done
    // led.toggle(function (err) {
    //   if (err) {
    //     // Log the error, send back a 500 (internal server error) response to the client
    //     console.log(err);
    //     response.writeHead(500, {"Content-Type": "application/json"});
    //     response.end(JSON.stringify({error: err}));
    //   } else {
    //     // The led was successfully toggled, respond with the state of the toggled led using led.isOn
    //     response.writeHead(200, {"Content-Type": "application/json"});
    //     response.end(JSON.stringify({on: led.isOn}));
    //   }
    // });
  }