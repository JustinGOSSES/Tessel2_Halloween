
var five = require("johnny-five");
var Tessel = require("tessel-io");
var board = new five.Board({
  io: new Tessel()
});

// board.on("ready", function() {
//   var led = new five.Led("a0");
//   led.blink(500);
// });


board.on("ready", function() {

  // Create a new `motion` hardware instance.
  var motion = new five.IR.Motion("a7");

  // "calibrated" occurs once, at the beginning of a session,
  motion.on("calibrated", function() {
    console.log("calibrated", Date.now());
  });

  // "motionstart" events are fired when the "calibrated"
  // proximal area is disrupted, generally by some form of movement
  motion.on("motionstart", function() {
    console.log("motionstart", Date.now());
  });

  // "motionend" events are fired following a "motionstart" event
  // when no movement has occurred in X ms
  motion.on("motionend", function() {
    console.log("motionend", Date.now());
  });
});