'use strict';
console.log('--- loading listeners: listeners.js');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSoundWithKey);
window.addEventListener('click', playSound);