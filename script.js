'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);


for (let i = 0 ; i < btnsOpenModal.length ; i++)
  btnsOpenModal[i].addEventListener('click' , function(){
    // console.log('button clicked' , [i]);
    // document.querySelector('.hidden').style.display = 'block' ;
    // document.body.style.filter = 'blur(4px)';
    // document.querySelector('.hidden').style.filter = 'none' ;
    // document.querySelector('.close-modal').addEventListener('click' , function(){
    //   document.querySelector('.hidden').style.display = 'none' ;
    //   document.querySelector('.hidden').style.fliter = 'none' ;
    //   document.body.style.filter = 'none' ;
    // });
    // document.querySelector('.close-modal').style.fliter = 'none' ;

    console.log('button clicked' , [i]);
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    model.style.display = 'block';

  });

  const closeModel = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
  btnCloseModel.addEventListener('click' , closeModel);

  overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function(event){
  console.log(event.key);

  if (event.key == 'Escape' && !modal.classList.contains('hidden')){
    // modal.classList.add('hidden');
    // overlay.classList.add('hidden');
    closeModel();
  }
});
