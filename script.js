

let songs =[
    {
        title:"Dil to jan to",
        description:"lorem sdlij ldvkjn dfkjnd ;kdjn fv;kjrdn ",
        thumbnail:"https://i.scdn.co/image/ab67616d00001e02f8f636b6478d4ba9bd85e339",
        audio:"./music/dil_to.mp3",

    },
    {
        title:"Marjana",
        description:"lorem sdlij ldvkjn dfkjnd ;kdjn fv;kjrdn ",
        thumbnail:"https://i.scdn.co/image/ab67616d00001e02727d531901c07a499498c544",
        audio:"./music/song1.mp3",

    },
    {
        title:"Jugrafiya",
        description:"lorem sdlij ldvkjn dfkjnd ;kdjn fv;kjrdn ",
        thumbnail:"https://i.scdn.co/image/ab67616d00001e02e76275da5828d6f937c3bcf3",
        audio:"./music/jugrafiya.mp3",

    },
    {
        title:"Ye javani hai diwani",
        description:"lorem sdlij ldvkjn dfkjnd ;kdjn fv;kjrdn ",
        thumbnail:"https://i.scdn.co/image/ab67616d00001e02707ea5b8023ac77d31756ed4",
        audio:"./music/ye-javani.mp3",

    },
    {
        title:"Koi vi nahi",
        description:"lorem sdlij ldvkjn dfkjnd ;kdjn fv;kjrdn ",
        thumbnail:"https://i.scdn.co/image/ab67616d00001e02a74ee9f7c37f9233dd3e8366",
        audio:"./music/koi-vi-nahi.mp3",

    }
]

const play = document.getElementById("play")
const pause = document.getElementById("pause")
const backword = document.getElementById("backword")
const  forward = document.getElementById("forward")
const thumbnail = document.getElementById("thumbnail")
const title = document.getElementById("title")
const description = document.getElementById("description")
const audio = document.getElementById("audio")
const currentTime = document.getElementById("currentTime")
const duration = document.getElementById("duration")
const playedPath = document.getElementById("Played-path")



let current = 0;

const playMusic = ()=>{
    audio.play()
    play.style.display = 'none'
    pause.style.display = 'block'
}

const pauseMusic = ()=>{
    audio.pause()
    pause.style.display = 'none'
    play.style.display = 'block'
}

const musicLoader = async (song)=>{
    pause.style.display = 'none'
    play.style.display = 'block'
     playedPath.style.width = 0
    title.innerText=song.title;
    description.innerText = song.description;
    thumbnail.src = song.thumbnail;
    audio.src=song.audio;
    
  
}


const forwardSong = ()=>{
   
    songs.length-1 > current ? current ++ : current =0;
    musicLoader(songs[current])
    setTimeout(()=>{
        
        playMusic()
    },100)

}
const previousSong = ()=>{
    songs.length-1 > current ? current -- : current =0;
    musicLoader(songs[current])
    setTimeout(()=>{
        
        playMusic()
    },100)
}

document.addEventListener("onload",musicLoader(songs[current]))



setInterval(()=>{
    playedPath.style.width = `${audio.currentTime/audio.duration*100}%`
    currentTime.innerText = formatTime(audio.currentTime)
    duration.innerText= formatTime(audio.duration)
    
},1000)


const skip = (e)=>{
    console.log(e.style)
}


function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');
  return `${formattedMinutes}:${formattedSeconds}`;
}