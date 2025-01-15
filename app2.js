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

let songIndex = 0
myForwardIcon.addEventListener("click",function()
{

        if(songIndex > songData.length - 1 )
    {
        songIndex = 0
    }

    loadSong(songData[songIndex])
    playAudio()
    songIndex++

})

myBackwardIcon.addEventListener("click",function()
{
   
    loadSong(songData[songIndex])
    

})

//get exact duration for the audion of current time and total duration time
const myTotalDuration = document.querySelector(".totalduration")
const myCurrentTimee = document.querySelector(".currenttime")
const myProgressChild = document.querySelector(".progresschaild")

myAudioFile.addEventListener("timeupdate", function(output){
    let myCurrentTime = output.srcElement.currentTime
    let myDurationTime = output.srcElement.Duration

    let audioPlayerPercentage = myCurrentTime/myDurationTime * 100
     myProgressChild.style.width = `${audioPlayerPercentage}%`

    //convert duration time into minutes from seconds
    let myDurationInMinutes = Math.floor(myDurationTime / 60) //minuts
    let myDurationRemainInSeconds = Math.floor(myDurationTime % 60)

    let totalDuration = `${myDurationInMinutes}:${myDurationRemainInSeconds}`
   

     myTotalDuration.textContent = totalDuration

     let myCurrentInMinutes = Math.floor(myCurrentTime / 60) //minuts
    let myCurrentRemainInSeconds = Math.floor(myCurrentTime % 60)

    if(myCurrentRemainInSeconds < 10)
    {
        myCurrentRemainInSeconds = `0${myCurrentRemainInSeconds}`
    }

    let actualCurrentTimee = `${myCurrentInMinutes}:${myCurrentRemainInSeconds}`

    myCurrentTime.textContent = actualCurrentTimee



    //console.log(totalDuration)
})





