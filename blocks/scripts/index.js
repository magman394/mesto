let showFormBotton = document.querySelector('.profile__edit-botton')
let showForm = document.querySelector('.form');
let closeFormBotton = document.querySelector('.form__is-closed');
let seveBotton = document.querySelector('#save')
let firstNameContainer = document.querySelector('.profile__name');
firstNameContainer.textContent = 'Жак-Ив Кусто';
let lastNameContainer = document.querySelector('.profile__profession');
lastNameContainer.textContent = 'Исследователь океана';

function showPopup() {
  showForm.classList.toggle('form_is-opened');
}

showFormBotton.addEventListener('click', showPopup);

function closePopup() {
  showForm.classList.toggle('form_is-opened');
}

closeFormBotton.addEventListener('click', closePopup);

function addName(evt) {
  evt.preventDefault();
  let firstName = document.querySelector('#firstName');
  let lastName = document.querySelector('#lastName');
  firstNameContainer.textContent = '';
  firstNameContainer.insertAdjacentText('afterbegin', `
    ${firstName.value}
  `);
  lastNameContainer.textContent = '';
  lastNameContainer.insertAdjacentText('afterbegin', `
    ${lastName.value}
`);
    firstName.value = '';
    lastName.value = '';
    showForm.classList.toggle('form_is-opened');

}
seveBotton.addEventListener('submit', addName);
seveBotton.addEventListener('click', addName);
