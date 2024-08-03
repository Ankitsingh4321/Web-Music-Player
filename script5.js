console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('rap/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Best Nai [Karma]", filePath: "rap/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Bhokali [Dino James, Girish Nakod]", filePath: "rap/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Bohot Sahi [J Trix, KR$NA]", filePath: "rap/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Chamkeele Chuze [Dino James, Girish Nakod]", filePath: "rap/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Gang Wale Munde [Paradox]", filePath: "rap/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Gangster [Karma, King]", filePath: "rap/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Desi Dan Bilzerian [King]", filePath: "rap/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "I Guess [KR$NA]", filePath: "rap/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Machayenge 4 [KR$NA]", filePath: "rap/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "No Cap [KR$NA]", filePath: "rap/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "10 pe 10 [KR$NA ft. French Kid]", filePath: "rap/11.mp3", coverPath: "covers/11.jpg"},
    {songName: "Saza-e-Maut [KR$NA, Raftaar]", filePath: "rap/12.mp3", coverPath: "covers/12.jpg"},
    {songName: "Move [Raftaar]", filePath: "rap/13.mp3", coverPath: "covers/13.jpg"},
    {songName: "Swag Mera Desi [Raftaar ft. Manj Musik]", filePath: "rap/14.mp3", coverPath: "covers/14.jpg"},
    {songName: "Naachne Ka Shaunq [Raftaar, Brodha V]", filePath: "rap/15.mp3", coverPath: "covers/15.jpg"},
    {songName: "Jashn-e-Hip-Hop [Raftaar , Faris Saifi]", filePath: "rap/16.mp3", coverPath: "covers/16.jpg"},
    {songName: "36 [Raftaar, Karma]", filePath: "rap/17.mp3", coverPath: "covers/17.jpg"},
    {songName: "No China [Raftaar, KR$NA]", filePath: "rap/18.mp3", coverPath: "covers/5.jpg"},
    {songName: "Gall Goriye [Manindar Buttar, Raftaar]", filePath: "rap/19.mp3", coverPath: "covers/19.jpg"},
    {songName: "Mantoniyat [Raftaar]", filePath: "rap/20.mp3", coverPath: "covers/20.jpg"},
    {songName: "F16 [Sikander Kahlon, Raftaar]", filePath: "rap/21.mp3", coverPath: "covers/1.jpg"},
    {songName: "Satya [Divine]", filePath: "rap/22.mp3", coverPath: "covers/12.jpg"},
    {songName: "Nahi Hai Woh [ Shah RuLe ft.  Raftaar, MC Altaf]", filePath: "rap/23.mp3", coverPath: "covers/14.jpg"},
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
        audioElement.src = `rap/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=22){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `rap/${songIndex+1}.mp3`;
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
    audioElement.src = `rap/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})