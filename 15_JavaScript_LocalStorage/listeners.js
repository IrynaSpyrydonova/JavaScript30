'use strict';
console.log('--- loading listeners: listeners.js');

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
clearBtn.addEventListener('click', clearAll);
checkAllBtn.addEventListener('click', checkAll);
uncheckAllBtn.addEventListener('click', uncheckAll);