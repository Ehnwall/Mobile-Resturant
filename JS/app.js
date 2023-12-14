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
