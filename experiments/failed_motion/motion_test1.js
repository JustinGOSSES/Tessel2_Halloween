
var five = require("johnny-five");
var Tessel = require("tessel-io");
var board = new five.Board({
  io: new Tessel()
});

// board.on("ready", function() {
//   var led = new five.Led("a0");
//   led.blink(500);
// });


// board.on("ready", function() {

//   // Create a new `motion` hardware instance.
//   var motion = new five.Motion("a7");

//   // "calibrated" occurs once, at the beginning of a session,
//   motion.on("calibrated", function() {
//     console.log("calibrated", Date.now());
//   });

//   // "motionstart" events are fired when the "calibrated"
//   // proximal area is disrupted, generally by some form of movement
//   motion.on("motionstart", function() {
//     console.log("motionstart", Date.now());
//   });

//   // "motionend" events are fired following a "motionstart" event
//   // when no movement has occurred in X ms
//   motion.on("motionend", function() {
//     console.log("motionend", Date.now());
//   });
// });


board.on("ready", function() {

  // Create a new `motion` hardware instance.
  var motion = new five.Motion("a7");

  // "calibrated" occurs once, at the beginning of a session,
  motion.on("calibrated", function() {
    console.log("calibrated");
  });

  // "motionstart" events are fired when the "calibrated"
  // proximal area is disrupted, generally by some form of movement
  motion.on("motionstart", function() {
    console.log("motionstart");
  });

  // "motionend" events are fired following a "motionstart" event
  // when no movement has occurred in X ms
  motion.on("motionend", function() {
    console.log("motionend");
  });

  // "data" events are fired at the interval set in opts.freq
  // or every 25ms. Uncomment the following to see all
  // motion detection readings.
  // motion.on("data", function(data) {
  //   console.log(data);
  // });
});
