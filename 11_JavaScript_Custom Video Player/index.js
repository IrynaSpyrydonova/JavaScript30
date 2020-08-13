const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const fullScreenBtn = player.querySelector('[data-toggle]');
console.log(fullScreenBtn);
const ranges = player.querySelectorAll('.player__slider');
const timestamp = document.querySelector('#timestamp');
let mousedown = false;

function togglePlay(){
    const method = video.paused ? 'play' : 'pause';
    video[method]();
};

function updateButton(){
    const icon = this.paused ?  '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
    video[this.name]=this.value;
}

function handleProgress(){
   const percent = (video.currentTime / video.duration) * 100;
   progressBar.style.flexBasis = `${percent}%`;

    // Get minutes
    let mins = Math.floor(video.currentTime / 60);
    if(mins < 10){
        mins = '0'+ String(mins);
    }

    // Get seconds
    let secs = Math.floor(video.currentTime % 60);
    if(secs < 10){
        secs = '0'+ String(secs);
    }

    timestamp.innerHTML = `${mins}: ${secs}`;

}

function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function fullScreen(){
    debugger;
    if (!document.fullscreenElement) {
		player.requestFullscreen();
    } 
    
    if(document.fullscreenElement) {
    document.exitFullscreen();
        
	}
}

function keyToPlay(e) {

    if(e.keyCode === 32){ togglePlay();}
}




