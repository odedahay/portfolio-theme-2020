function onClickMenu(){
   document.getElementById("menu").classList.toggle("change");
   document.getElementById("nav").classList.toggle("change");
}


// modal
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');


// Show modal
open.addEventListener('click', () => modal.classList.add('show-modal'));

// Hide modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));

