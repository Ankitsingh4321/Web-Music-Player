console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('english/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "In The End [Linkin Park]", filePath: "english/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Mann Mera X Arcade [Gajendra Verma, Duncan Laurence]", filePath: "english/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Panda [Desiigner]", filePath: "english/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Arcade [Duncan Laurence]", filePath: "english/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Shape of You [Ed Sheeran]", filePath: "english/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Eshay [Gucci Dassy]", filePath: "english/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Everyday Normal Guy [Jon Lajoie]", filePath: "english/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Believer [Imagine Dragons]", filePath: "english/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Yummy [Justin Bieber]", filePath: "english/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Industry Baby [Lil Nas X ft. Jack Harlow]", filePath: "english/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "Old Town Road [Lil Nas X ft. Billy Ray Cyrus]", filePath: "english/11.mp3", coverPath: "covers/11.jpg"},
    {songName: "Beggin [Måneskin]", filePath: "english/12.mp3", coverPath: "covers/12.jpg"},
    {songName: "Rockstar [Post Malone ft. 21 Savage]", filePath: "english/13.mp3", coverPath: "covers/13.jpg"},
    {songName: "Rockstar Remix [Post Malone ft. 21 Savage]", filePath: "english/14.mp3", coverPath: "covers/14.jpg"},
    {songName: "Everybody Dies in Their Nightmares [Guitar Version]", filePath: "english/15.mp3", coverPath: "covers/15.jpg"},
    {songName: "Falling [Trevor Daniel]", filePath: "english/16.mp3", coverPath: "covers/16.jpg"},
    {songName: "Everybody Dies in Their Nightmares [XXXTENTACION]", filePath: "english/17.mp3", coverPath: "covers/17.jpg"},
    {songName: "Everybody Dies in Their Nightmares Music [XXXTENTACION]", filePath: "english/18.mp3", coverPath: "covers/19.jpg"},
    // {songName: "Industry Baby [Lil Nas X ft. Jack Harlow]", filePath: "english/19.mp3", coverPath: "covers/19.jpg"},
    // {songName: "Industry Baby [Lil Nas X ft. Jack Harlow]", filePath: "english/20.mp3", coverPath: "covers/20.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `english/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=17){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `english/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `english/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})