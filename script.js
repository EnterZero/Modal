'use strict';

const open = document.querySelectorAll('.show-modal');
const close = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// open
const openFunction = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let i = 0; i < open.length; i++)
    open[i].addEventListener('click', openFunction);

// close
const closeFunction = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

close.addEventListener('click', closeFunction);
overlay.addEventListener('click', closeFunction);
document.addEventListener('keydown', function (press) {
    if (press.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeFunction();
    }
})
