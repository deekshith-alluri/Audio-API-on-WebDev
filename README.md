# stream audio with `new Audio()` on WebApps
while `new Audio( );` is a simple  way to play audio files, it offers limited control compared to the web Audio API. If you need more advanced audio manipulation, consider exploring the web Audio API.

Below is the breakdown of the properties and methods available for the Audio object created with `new Audio( );`
## properties :
1. `.src`: Sets or returns the URL of the sound file.
2. `.autoplay`: Sets or returns whether the sound should play automatically.
3.  `.loop` : Sets or returns whether the sound should loop.
4. `.preload`: sets or returns how the audio will be loaded (auto, metadata, none)
5.  `.volume`: Sets or returns the volume of the sound (0.0 to 1.0)
6.  `.muted`: Sets or returns whether the sound is muted;
7. `.currentTime`: Sets or returns the current playback position (in seconds)
8. `.duration`: Returns the length of the audio (in seconds).
9. `.paused`: Returns a Boolean indicating whether the audio is paused.
10. `.ended`: Returns a Boolean indicating whether the audio has finished playing. 

## methods
 1. `.play( )`: Starts playing the sound.
 2.  `.pause( )`: Pauses the sound.
 3.  `.load( )`: Reloads the audio file.
 4. `canPlayType(TYPE)`: checks if the browser can play a specific audio type.

## events
1. `play( )`: Fired when the audio starts playing.
2. `pause( )`: Fired when the audio is paused.
3. `ended( )`: Fired when the audio has finished playing.
4. `timeupdate( )`: Fired when the current playback position changes.
5. `error( )`: Fired when an error occurs.

```javascript
const audio =  new Audio("../music/akk-1.mp3");
audio.autoplay = true;
audio.loop = true;
audio.volume = 0.5;

audio.addEventListener('play', ()=>{
	console.log("audio started playing");
});
audio.addEventListener('ended', ()=>{
	console.log("audio finished playing");
});
```

## now let's learn each property step-by-step
This is a JavaScript code and one needs to install nothing to use these properties for these are inbuilt stuff in JS for web.
lets dive into the code :
```javascript
//CREATING AUDIO OBJECT
const auido = new Audio();
audio.src = "../muisic/akk-1.mp3";
//this is a way of specifying the source address of the audio file
//you can use when the Audio object is created as new Audio("../music/akk-.mp3");

//SETTING PROPERTIES
audio.autoplay  = true; //Automatically starts playing the audio
audio.loop = true; //plays the audio repeatedly
audio.volume = 0.5; //set the volume to 50%
audio.muted = false; //Unmute the Audio. (default is false)
audio.preload = 'auto'; //Preload the audio automatically

//ACCESSING INFORMATION
console.log(audio.src); //shows the source .../music/akk-1.mp3
console.log(audio.duration); //duration in secs
console.log(audio.currentTime); //current playback position in secs
console.log(audio.paused); //true if paused, false if playing
console.log(audio.ended); //true if the audio has finished playing false otherwise

//CONTROLLING PLAYBACK
audio.play(); //start or resume playback
audio.pause(); //pause the playback
audio.load(); //Reload the audio file

//CHECK IF THE BROWSER CAN PLAY
console.log(audio.canPlayType('audio/mpeg'));

//HANDLING EVENTS ASSOCIATED WITH THE AUDIO
audio.addEventListener('play', ()=>{
	console.log('audio started playing');
});
audio.addEventListener('pause', ()=>{
	console.log('audio paused');
});
audio.addEventListener(''ended, ()=>{
	console.log('audio finished playing');
});
audio.addEventListener('timeupdate', ()=>{
	console.log('current-time:', audio.currentTime);
});
audio.addEventListener('error', (error)=>{
	console.log('audio error :', error);
});
```


## note
* The preload property can also be set to 'metadata' to load only the metadata of the audio file or 'none' to not preload anything.
* For more advanced audio manipulation consider using the Web Audio API.
