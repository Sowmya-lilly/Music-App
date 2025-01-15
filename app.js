//Play the audio when click play button
//Identify the audio play
//when the audio will playing play icon should display

const myAudioFile = document.querySelector("audio")//<audio src="audio/audio1.mp3" ></audio>
//console.log(myAudioFile)
const myPlayButton = document.querySelector("#play")

let isAudioPlaying = false
function playAudio()
{
    myAudioFile.play()
    //logic for change click button from play to pause
    myPlayButton.classList.replace("fa-play", "fa-pause")
    isAudioPlaying = true

}

function pauseAudio()
{
    myAudioFile.pause()
    //logic for change click button from pause to play
    myPlayButton.classList.replace("fa-pause", "fa-play")
    isAudioPlaying = false
}

//add click event
myPlayButton.addEventListener("click", function()
{
   // console.log("hello")
   //myAudioFile.play()
   if(isAudioPlaying)
   {
    pauseAudio()
   }
   else
   {
    playAudio()
   }
})

//click forward or backward button should change
//audio file, song name, singer name, image

const songData = [
    {
    imageName : "image2.jpg",
    audioName : "audio2.mp3",
    songName : "SOng222",
    singerName : "singer222"
    },
    {
        imageName : "image3.jpg",
        audioName : "audio3.mp3",
        songName : "SOng333",
        singerName : "singer333"
        },
        {
            imageName : "image4.jpg",
            audioName : "audio4.mp3",
            songName : "SOng444",
            singerName : "singer444"
            }
]

const myImage = document.querySelector("img")
const mySongName = document.querySelector("h2")
const mySingerName = document.querySelector("h3")
const myForwardIcon = document.querySelector("#forward")
const myBackwardIcon = document.querySelector("#backward")


function loadSong(info)
{
    myImage.src = `images/${info.imageName}`
    myAudioFile.src = `audio/${info.audioName}`
    mySongName.textContent = `${info.songName}`
    mySingerName.textContent = `${info.singerName}`
    
}

let songIndex = 0;

myForwardIcon.addEventListener("click", function() {
    // Increase songIndex first
    songIndex++;

    // If songIndex goes beyond the last song, wrap around to the first song
    if (songIndex >= songData.length) {
        songIndex = 0;
    }

    // Load and play the new song
    loadSong(songData[songIndex]);
    playAudio();
});

myBackwardIcon.addEventListener("click", function() {
    // Decrease songIndex first
    songIndex--;

    // If songIndex goes below 0, wrap around to the last song
    if (songIndex < 0) {
        songIndex = songData.length - 1;
    }

    // Load and play the new song
    loadSong(songData[songIndex]);
    playAudio();
});

//get exact duration for the audion of current time and total duration time
const myTotalDuration = document.querySelector(".totalduration");
const setCurrentTimee = document.querySelector(".currenttime");
const myProgressChild = document.querySelector(".progresschaild");
const myProgressParent = document.querySelector(".progressparent"); // Parent of the progress bar


// Update the progress and time as the audio plays
myAudioFile.addEventListener("timeupdate", function(output) {
    let myCurrentTime = output.srcElement.currentTime;
    let myDurationTime = output.srcElement.duration;

    let audioPlayerPercentage = (myCurrentTime / myDurationTime) * 100;
    myProgressChild.style.width = `${audioPlayerPercentage}%`;

    // Convert duration time into minutes from seconds
    let durationInMinutes = Math.floor(myDurationTime / 60); // minutes
    let durationRemainInSeconds = Math.floor(myDurationTime % 60);

    let totalDuration = `${durationInMinutes}:${durationRemainInSeconds < 10 ? '0' + durationRemainInSeconds : durationRemainInSeconds}`;
    myTotalDuration.textContent = totalDuration;

    // Convert current time into minutes from seconds
    let myCurrentInMinutes = Math.floor(myCurrentTime / 60); // minutes
    let myCurrentRemainInSeconds = Math.floor(myCurrentTime % 60);

    if (myCurrentRemainInSeconds < 10) {
        myCurrentRemainInSeconds = `0${myCurrentRemainInSeconds}`;
    }

    let actualCurrentTimee = `${myCurrentInMinutes}:${myCurrentRemainInSeconds}`;
    setCurrentTimee.textContent = actualCurrentTimee;
});

// Seek audio when clicking on the progress bar
myProgressParent.addEventListener("click", function(event) {
    // Get the total width of the progress parent
    const progressBarWidth = myProgressParent.offsetWidth;
    
    // Get the position of the click relative to the progress parent
    const clickPosition = event.offsetX;
    
    // Calculate the percentage based on where the click occurred
    const clickPercentage = (clickPosition / progressBarWidth) * 100;
    
    // Set the new audio time based on the click percentage
    const newTime = (clickPercentage / 100) * myAudioFile.duration;
    myAudioFile.currentTime = newTime;

    // Update the progress bar and current time after seeking
    myProgressChild.style.width = `${clickPercentage}%`;
});

 //create shuffle button function

 const myShuffleButton = document.querySelector("#shuffle")
 myShuffleButton.addEventListener("click", function(){

    //let randomSongIndex = Math.ceil(Math.random() * 2)
    let randomSongIndex = Math.floor(Math.random() * 3)
    loadSong(songData[randomSongIndex]) //loading the song randomly
    playAudio()

    console.log(randomSongIndex)

 })

 const myHeart = document.querySelector("#heart")
 myHeart.style.color = "red" //just change the color

 //stores in local storage which click on heart as favorate 
 // store the data as key-value pairs that is javascript objects songName is key and singerName is value

 let songName = mySongName.textContent
 let singerName = mySingerName.textContent







