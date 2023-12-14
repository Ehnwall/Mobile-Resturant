/***************************************************
function that allows you to open and close the menu
***************************************************/

const togglebtn = document.querySelector('.toggle-btn');
const togglebtnIcon = document.querySelector('.toggle-btn i');
const droppdmenu = document.querySelector('.toggle-function-menu');
let isOpen = false;

togglebtn.onclick = function () {
    droppdmenu.classList.toggle('open');

    isOpen = !isOpen;

    togglebtnIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
};

/***********************************************
the end to open and close the menu function code
************************************************/
