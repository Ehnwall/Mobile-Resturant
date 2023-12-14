

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

    togglebtnIcon.className = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars';
};

/***********************************************
the end to open and close the menu function code
************************************************/

/***************************************************
Contact oss js 
***************************************************/
const formInputContact = document.querySelector('.container-contact-form');
const contact = document.querySelector('.contact');
const sentForm = document.querySelector('.container-sendt');
const btnSend = document.getElementById('skicka-form');
const formDisabled = document.querySelector('.form-disabled');

contact.addEventListener('click', function () {
    formInputContact.classList.toggle('hidden-form');
});

btnSend.addEventListener('click', function () {
    sentForm.classList.remove('hidden-sent');
    formInputContact.classList.add('hidden-form');
});

// function enableSubmit() {
//     let inputs = document.getElementsByClassName('required');
//     let btn = document.querySelector('input[type="submit"]');
//     let isValid = true;
//     for (let i = 0; i < inputs.length; i++) {
//         let changedInput = inputs[i];
//         if (changedInput.value.trim() === '' || changedInput.value === null) {
//             isValid = false;
//             break;
//         }
//     }
//     btn.disabled = !isValid;
// }
