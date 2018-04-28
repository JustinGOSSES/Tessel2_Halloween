# Talking Pumpkin Version 2

## Project Goal
A battery powered talking pumpkin to put outside to have conversations with trick-or-treaters. It has a video feed so the user can see who is approaching from inside the house and text-to-speech, so the user can direct the pumpkin to utter any phrase. 

## Style
Previous talking pumpkin was controlled via a web application. This one is done via command line (remote ssh from my laptop to a raspberry pi inside the plastic pumpkin), which, hopefully, will give me more flexibility in terms of what the pumpkin says and let me change camera lighting levels as necessary. 

## Materials
- Plastic pumpkin
- Portable Speakers
- Male-to-male headphone jack code 
- Small webcam that is USB powered
- Battery Pack

## Optional Instructions You Might Have Already Done Before
#### How to remote into your Raspberry Pi:
	- Generic instructions - https://www.raspberrypi.org/documentation/remote-access/ssh/
	- What is the default password - https://www.raspberrypi.org/documentation/linux/usage/users.md
	- ssh pi@<insert-ip-of-pi>

## Instructions You Likely Haven't Done

#### Streaming Video (Without Audio)
	- The Link http://www.instructables.com/id/How-to-Make-Raspberry-Pi-Webcam-Server-and-Stream-/
	- Lessons Learned: Don't forget to restart the service again if you missed changing something in the config file and had to go backwards in the instructions
	- Starting
		- sudo service motion start
		- sudo motion start
	- Go to browser on any computer on same network:
		- <IP>:8081
	- Stopping 
		- sudo service motion stop
		- sudo motion stop
	- Options Settings:
		- A 
		- B
		- C
	- THINGS TO FIGURE OUT
		- Improve peformance
		- Test low light
		- Get stop and start to work better???? perhaps problem is trying to do it from 2 termianls?
		

#### Text-to-Speech
	- Article that summarizes several options: https://elinux.org/RPi_Text_to_Speech_(Speech_Synthesis)
	- I initially had the audio going only through HDMI and it wouldn't got through audio jack even after I unplugged HDMI. I was able to get it to go through the audio jack by forcing it using the command:
		- sudo amixer cset numid=3 1
			- this was docuemnted in an answer already here: https://www.raspberrypi.org/forums/viewtopic.php?t=40872
			- you'll have to do it any time you restart
	- Option A: Pico Text to Speech:
		- Examples:
			- pico2wave -w hw.wav "hmm that's a nice ghost costume." && aplay hw.wav
	- Commands to run 





## Links to Similar Projects Found During Research
#### Options for Video/Audio:
##### TOOLS
##### Motion
	- Option A (moderate to easy) http://www.instructables.com/id/How-to-Make-Raspberry-Pi-Webcam-Server-and-Stream-/
	- Option B (short maybe too short?) http://www.instructables.com/id/How-to-Make-Raspberry-Pi-Webcam-Server-and-Stream-/
	- Motion Security System With Motion Tracking http://www.techradar.com/how-to/computing/use-a-raspberry-pi-to-remotely-watch-your-home-1314466
##### Gstreamer
##### UV4L
##### FFMPEG 
	- Installation https://www.jeffreythompson.org/blog/2014/11/13/installing-ffmpeg-for-raspberry-pi/
	- Capturing Audio https://trac.ffmpeg.org/wiki/Capture/ALSA

##### PROJECTS
##### Security Motion Tracking 
	- Motion Security System With Motion Tracking http://www.techradar.com/how-to/computing/use-a-raspberry-pi-to-remotely-watch-your-home-1314466
	- motion activated camera - https://programmaticponderings.com/2013/01/01/remote-motion-activated-web-based-video-surveillance-with-raspberry-pi/
##### Baby Monitors with IR for Night Vision
	- Popular baby monitor project
	- Built around night vision set-up
	- https://github.com/jasaw/bbPiCam
##### PiCam (full featured day/night streaming webcam project)
	- This is a github page
	- Has a large number of options to simplify things like changing exposure settings for different lighting conditions
	- comes as complete OS with all tools on Card
	- https://github.com/iizukanao/picam


