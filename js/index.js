const forward = document.querySelector('#forward');
const backward = document.querySelector('#backward');
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const video = document.querySelector('#video');

forward.addEventListener('click', ()=>{
    video.currentTime += 10;
});
backward.addEventListener('click', ()=>{
    video.currentTime -= 10;
});
play.addEventListener('click', ()=>{
    video.play();
    play.hidden = true;
    pause.hidden = false;
});
pause.addEventListener('click', ()=>{
    video.pause();
    pause.hidden = true;
    play.hidden = false;
});
const progressBar = document.querySelector('#progress-bar');
video.addEventListener('loadedmetadata', ()=>{
    let duration = video.duration;
    
    progressBar.max =  duration;
});
video.addEventListener('timeupdate', ()=>{
    progressBar.value = video.currentTime;
});

progressBar.addEventListener('input', ()=>{
    video.currentTime = progressBar.value;
})
