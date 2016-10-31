var tessel = require('tessel');
var os = require("os");
var av = require("tessel-av");

var alphabet = "hello there i am the pumpkin".split(" ");
var speaker = new av.Speaker();

speaker.say(`
  Hello
`);
// speaker.say(`
//   I am a pumpkin
// `);

alphabet.forEach(letter => speaker.say(letter));

speaker.on("lastword", function() {
  // this.say("I am the pumpkin");
  this.say("do you want some candy");
  this.say("do not be scared");
  this.say("there are kitkats and peanut butter cups");
});