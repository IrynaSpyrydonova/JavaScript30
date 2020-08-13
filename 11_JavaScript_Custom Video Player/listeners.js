video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button=> button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e)=> mousedown && scrub(e));
progress.addEventListener('mousedown', ()=> mousedown = true);
progress.addEventListener('mouseup', ()=> mousedown = false);
fullScreenBtn.addEventListener('click', fullScreen);
window.addEventListener('keypress', keyToPlay);

