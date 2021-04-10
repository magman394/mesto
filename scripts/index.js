
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { initialCards, bigImg, boxCards, cardTitleInputValue, cardLinkInputValue,
  seveCardBotton, bigImgclose, closepopupCard, formLissener, showFormBotton,
   boxCardsForm, closeFormBotton, showForm, firstName, lastName, firstNameContainer,
    lastNameContainer, showpopupCard, formAutor, formCards, configG } from './constants.js';
initialCards.forEach((item) => {
  const card = new Card(item.name, item.link, '#boxCards');
  const cardElement = card.generateCard();
  boxCards.append(cardElement);
});


const formAutorValidator = new FormValidator(configG, formAutor);
formAutorValidator.enableValidation();
const formCardsValidator = new FormValidator(configG, formCards);
formCardsValidator.enableValidation();




function cardFormSubmitHandler(event) {
	event.preventDefault();

	const inputTitle = cardTitleInputValue.value;
	const inputLink = cardLinkInputValue.value;
	const newTask = new Card(inputTitle, inputLink, '#boxCards');
	boxCards.prepend(newTask.generateCard());

  closePopup(showpopupCard);
};

function addName(evt) {
  evt.preventDefault();
  firstNameContainer.textContent = firstName.value;
  lastNameContainer.textContent = lastName.value;
    closePopup(showForm);
}


const handleEscPress = (evt) => {
  const popup = document.querySelector('.popup_is-opened');
  if (evt.key === 'Escape') {
    closePopup(popup);
  }
};


function showPopup(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', handleEscPress);
}

function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', handleEscPress);
}


showFormBotton.addEventListener('click', function () {
  showPopup(showForm)
  firstName.value = firstNameContainer.textContent
  lastName.value = lastNameContainer.textContent
});

boxCardsForm.addEventListener('click', function () {
  showPopup(showpopupCard)
  cardTitleInputValue.value = inputTitle.textContent
  cardLinkInputValue.value = inputLink.textContent

});

closeFormBotton.addEventListener('click', function () {
  closePopup(showForm)
});

closepopupCard.addEventListener('click', function () {
  closePopup(showpopupCard)
});
showForm.addEventListener('mousedown', function (evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(showForm)
  }
});
bigImgclose.addEventListener('click', function () {
  closePopup(bigImg)
});
showpopupCard.addEventListener('mousedown', function (evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(showpopupCard)
  }
});
formLissener.addEventListener('submit', addName);
seveCardBotton.addEventListener('submit', cardFormSubmitHandler);

