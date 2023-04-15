'use strict';
const  modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosemodal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const closeModal = function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

const openModel = function(){
    console.log("button click");
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
    }

for( let i = 0; i < btnsShowModal.length; i++ )
btnsShowModal[i].addEventListener('click', openModel );


btnClosemodal.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);


document.addEventListener('keydown', function(e){
    console.log(e.key);
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
    closeModal()     
    }
})





