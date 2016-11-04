# Tessel2_Halloween
#### Playground for creating a Tessel2+speaker+web server halloween project inside a plastic pumpkin

#### Experiments folders holds trials and working parts

#### speaking_pumpkin folder holds the lastest working prototype

## Equipment
- <a href="https://tessel.io">Tessel 2</a>
- <a href="http://www.ultimateears.com/miniboom-guide/en-us/">UE mini-boom blue-tooth</a> speakers

	- I used audio jack instead of bluetooth connection.  
	- One problem with these speakers is when connected only via audio jack and not bluetooth, the speaker would turn off if not used for 10 minutes or so. This is problematic in a way "wait for someone to trigger it" situation. 
	- In the future, I'd either connect via bluetooth or use a speaker that didn't have this feature. 
- <a href="https://www.amazon.com/gp/product/B002FI7GWK/ref=pd_sim_147_8?ie=UTF8&psc=1&refRID=CC20JZ2K25RKXNEVD5T2">USB to Audio jack adapter</a>
	- Daffodil US01 USB Sound Card 7.1 Channel / Plug and Play / Microphone (Mic) In and 3.5mm Speaker Out
- <a href="https://www.amazon.com/Conwork-2-Pack-Auxiliary-Retractable-Extension/dp/B011O8WOYQ/ref=sr_1_1?ie=UTF8&qid=1478232465&sr=8-1&keywords=male+to+male+audio+cable+retractable">male to male plug and retractable extension cord</a> 
- USB battery pack
- orange plastic pumpkin
- Cardboard to put above speaker and tessel2 in pumpkin, so you can fill the top half with candy.

## Equipment I might use on this project in the future
- Creative Live web cam
	- enable view of person approaching the pumpkin without having to look through window. 
- iRig Cast microphone
	- at time of writing the tessel-av library (that worked well for other audio visual tasks) didn't include finished audio-in code, but it was in progress. 
- PIR motion sensor
	- originally did buy this, but broke it. Ideally, the pumpkin speech could be triggered by motion sensor or web application.

## Capabilities and Basic Set-Up:

### Summary: 
#### Enables a user to press buttons on a web application that trigger different halloween-themed mp3 sounds or a message read via text-to-speech capabilities the are emitted from inside a pumpkin. Given these can be triggered from a distance, you can have your pumpkin talk and interact with trick-or-treaters without you being physically present. 


- Uses a web application served on the tessel's access waypoint to control sounds
	- I used an old phone to control the web application and either home wifi or phone hotspot to create the wifi for the tessel2.
- Plays three halloween-themed short noises in mp3 format
    - witches laughing
    - booming ghost saying booo!
    - chomping noises
    - Several other sounds are in the folder but not in the code.
- Uses text to speech capabilities of tessel-av library to say: 
    - *Hello. I am a tormented soul trapped in a plastic pumpkin. Do you want some candy. Do not be scared. I have kitkats and peanut butter cups*


### Installation (for the working prototype folder: speaking pumpkin): 
1. Get your tessel up and running and <a href="http://tessel.github.io/t2-start/">try out basic projects</a>. 
2. clone this repo onto your local machine
3. cd into the repo and then cd into speaking_pumpkin
4. run npm start. This should install tessel-av node package, which handles the audio-visual.
5. t2 run pumpkin.js or t2 push pumpkin.js
6. your terminal should give you the local address and port on which the html page is running. Turn your computer or phone wifi to the tessel2's local wifi access point name. Go to that address given to you by the terminal. You should see the index.html page rendered in your browser. Press one of the buttons. A LED should change on the tessel and the speaker should make the noise. 

### Problems to avoid:
- The code is currently set up to trigger LEDs on the tessel2, which then triggers the sounds. The benefit of this is it provides a way to make sure the triggering code is good if you have to debug speakers as well! Bad side affect is you are  limited to the same number of options as LEDs. For any options above 4, like option 9 for example, the sound will run but only once. It will run again if you refresh the page. The code can be fixed to get arond this, but this was last minute before halloween... so what worked immediately was better than clean code that cost 1 hour more. 

# Tests in Production!
*PARTY* - This worked okay but wasn't great in a loud party setting as it was hard to encourage people to get candy from the pumpkin and trigger the sounds via a web application at the same time.

*Used to give candy to trick-or-treaters.* - Sounds triggered from inside the house using the web application. The person triggering the sounds wasn't in view of anyone outside. This worked pretty well. Although only a few people got scared / surprised, most found it entertaining and several small children engaged the pumpkin in conversation. 

---- this is a work in progress, I'll upate more later -------

early photo:
![alt text](https://github.com/JustinGOSSES/Tessel2_Halloween/blob/master/images/IMG_1079.JPG "early photo of set-up")


http://justingosses.github.io/Tessel2_Halloween/

