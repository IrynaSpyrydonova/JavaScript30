const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
const checkAll = document.querySelector('#checkAll');
const uncheck = document.querySelector('#uncheck');
const countSelection = document.querySelector('span');

let lastChecked;
let count = 0;

function handleCheck(e){
    //  checked if they had the shift key down
    // and check that they are checking it

    let inBetween = false;
    if(e.shiftKey && this.checked){
      checkboxes.forEach(checkbox=>{
        if (checkbox === this || checkbox === lastChecked){
          inBetween= !inBetween;
        }
        if(inBetween){
          checkbox.checked = true;
        }
      })
    }
      lastChecked = this;
      countAll();
};

function checkItems(){
    checkboxes.forEach(checkbox=>{
      checkbox.checked = true;
      countAll();
    });
  
}

function uncheckItems(){
    checkboxes.forEach(checkbox=>{checkbox.checked = false;
      countAll();
    });
}


function countAll(){
  let checked = document.querySelectorAll('input:checked').length;
  countSelection.innerHTML = checked;
}



