
// 'use strict';

/**
 * Handle mobile menu functionality to hide/reveal sidebar on mobile layouts
 */
const body = document.querySelector('body');
let headerBtnClicked = false;

document.querySelector('#menu-icon').addEventListener('click', e => {
  !headerBtnClicked ? body.style.transform = 'translateX(300px)' : body.style.transform = 'translateX(0px)';
  return headerBtnClicked = !headerBtnClicked;
});

/**
 * Handle modal form interactivity
 */

 const modal = document.getElementById('modal');
 const skip = document.getElementById('close');
 //sets height of modal to page height
 modal.style.height = document.getElementsByTagName('body')[0].innerHTML.length + 'px';
// displays modal only when cookie is not set
 if ( !document.cookie ) {
   modal.classList.replace('hide', 'open')
 }

 skip.addEventListener('click', () => {
   modal.classList.replace('open', 'hide');
 })
