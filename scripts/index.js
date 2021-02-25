let showFormBotton = document.querySelector('.profile__edit-botton')
let showForm = document.querySelector('.popup');
let closeFormBotton = document.querySelector('.popup__close');
let seveBotton = document.querySelector('#save')
let firstNameContainer = document.querySelector('.profile__name');
let lastNameContainer = document.querySelector('.profile__profession');
let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');
let formLissener = document.querySelector('form');

function showPopup() {
  firstName.value = firstNameContainer.textContent
  lastName.value = lastNameContainer.textContent
  showForm.classList.toggle('popup_is-opened');
}

function closePopup() {
  showForm.classList.toggle('popup_is-opened');
}


function addName(event) {
  event.preventDefault();
  firstNameContainer.textContent = firstName.value;
  lastNameContainer.textContent = lastName.value;
    firstName.value = '';
    lastName.value = '';
    showForm.classList.toggle(closePopup());

}

closeFormBotton.addEventListener('click', closePopup);
showFormBotton.addEventListener('click', showPopup);

formLissener.addEventListener('submit', addName);

