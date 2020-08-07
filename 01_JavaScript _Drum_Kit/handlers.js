'use strict';
console.log('--- loading handler: handlers.js');

function playSoundWithKey (e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); 
    const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
    if(!audio) return; //stop the function from running
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');
};

function playSound (e){
    const target = e.target.parentElement.dataset.key;
    const audio = document.querySelector(`audio[data-key="${target}"]`); 
    const key = document.querySelector(`.key[data-key="${target}"`);
    if(!audio) return; //stop the function from running
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing'); 
};

function removeTransition (e){
    if(e.propertyName !== 'transform') return; // stop it if its not a transform
    this.classList.remove('playing');
};