const formInputContact = document.querySelector('.container-contact-form');
const contact = document.querySelector('.contact');

contact.addEventListener('click', function () {
    formInputContact.classList.toggle('hidden-form');
});
