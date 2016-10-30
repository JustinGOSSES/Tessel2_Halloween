// Import the interface to Tessel hardware
var tessel = require('tessel');
// Import the interface to Tessel hardware - these are from audio.js originally
var path = require('path');
var av = require('tessel-av');
var mp3 = path.join(__dirname, 'chomp_1.mp3');
var sound = new av.Speaker(mp3);

// Turn one of the LEDs on to start.
tessel.led[2].on();

// Blink!
setInterval(function () {
  tessel.led[2].toggle();
  tessel.led[3].toggle();
}, 100);

console.log("I'm blinking! (Press CTRL + C to stop)");
