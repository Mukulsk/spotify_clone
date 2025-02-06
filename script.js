console.log("welcome to the spotify");

let songIndex =0;
let audioElement = new Audio('songs/1.mp3');
let masterplay=document.getElementById('mastarplay');
let progressbar=document.getElementById('proggressBar');
let gif=document.getElementById('gif');
let songNam=document.getElementsByClassName('songName')
let songs=[
   {songName:"let-me-love-you", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
   {songName:"kabira-yeh jawani hai deewani", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
   {songName:"azaad hai tu-azaad", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
   {songName:"let-me-love-you", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
   {songName:"let-me-love-you", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
   {songName:"let-me-love-you", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
   {songName:"let-me-love-you", filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
   {songName:"let-me-love-you", filePath:"songs/8.mp3", coverPath:"covers/8.jpg"},
   {songName:"let-me-love-you", filePath:"songs/9.mp3", coverPath:"covers/9.jpg"},
   {songName:"let-me-love-you", filePath:"songs/10.mp3", coverPath:"covers/10.jpg"},
]




masterplay.addEventListener('click',()=>{
     if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play')
        masterplay.classList.add('fa-circle-pause')
        gif.style.opacity=1
     }
     else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause')
        masterplay.classList.add('fa-circle-play')
        gif.style.opacity=0

     }
})

audioElement.addEventListener('timeupdate',()=> {
    console.log("timeupadate")
    progress =((audioElement.currentTime/audioElement.duration)*100)
    progressbar.value=progress
})
// audioElement.play()

progressbar.addEventListener('change', ()=>{
   audioElement.currentTime=((progressbar.value*audioElement.duration)/100)
})
