//Play the audio when click play button
//Identify the audio play
//when the audio will playing play icon should display

const myAudioFile = document.querySelector("audio")//<audio src="audio/audio1.mp3" ></audio>
const myPlayButton = document.querySelector("#play")

//add click event
let isAudioPlaying = false

function playAudio()
{
    myAudioFile.play()
    myPlayButton.classList.replace("fa-play", "fa-pause")
    isAudioPlaying = true
}

function pauseAudio()
{
    myAudioFile.pause()
    myPlayButton.classList.replace("fa-pause", "fa-play")
    isAudioPlaying = false
}

myPlayButton.addEventListener("click", function()
{
    //console.log("hello")
    if(isAudioPlaying)
    {
        playAudio()
    }
    else
    {
        pauseAudio()
    }
   
})
