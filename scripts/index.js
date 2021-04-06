const bigImg = document.querySelector('#popupImage');

import Card from './Card.js';
import { initialCards } from './constants.js';
initialCards.forEach((item) => {
  const card = new Card(item.name, item.link);
  const cardElement = card.generateCard();

  // Добавляем в DOM
  document.querySelector('.elements').append(cardElement);
});

const cardTitleInputValue = document.querySelector('#inputTitle');
const cardLinkInputValue = document.querySelector('#inputLink');
const seveCardBotton = document.querySelector('#formCards')
const boxCards = document.querySelector('.elements');

function cardFormSubmitHandler(event) { // функция обработки формы для создания карточки
	event.preventDefault(); // сборсил перезагрузку страницы

	const inputTitle = cardTitleInputValue.value; // запомнил значение введенное в титул
	const inputLink = cardLinkInputValue.value; // запомнил значение введенное в ссылку

	const newTask = new Card({ name: inputTitle, link: inputLink }); //создал экземпляр класса с значениями из титула и ссылки

	boxCards.prepend(newTask.generateCard()); // создал экземлпяру разметку и поставил первым

  closePopup(showpopupCard); // закрыл форму
};

seveCardBotton.addEventListener('submit', cardFormSubmitHandler); //по кнопки сохранить вызвал функцию обработки формы



// сохранение формы Жак-ив

const formLissener = document.querySelector('form');

function addName(evt) {
  evt.preventDefault();
  firstNameContainer.textContent = firstName.value;
  lastNameContainer.textContent = lastName.value;
    closePopup(showForm);
}
formLissener.addEventListener('submit', addName);

// сохранение формы Жак-ив



// const seveBotton = document.querySelector('#save')



const bigImgclose = document.querySelector('.popup__close_image');
// const closeImg = document.querySelector('.popup__close_image');










// const templateElement = document.querySelector('#boxCards');


const closepopupCard = document.querySelector('#closeCard');



// function createTaskDomNode(item){
// 	const newItem = templateElement.content.cloneNode(true);
// 	const title = newItem.querySelector('#cardTitle');
// 	title.textContent = item.name;
//   const link = newItem.querySelector('#cardLink');
//   link.src = item.link;
//   link.alt = item.name;

//   const deleteButton = newItem.querySelector('.element__btn_delete');
//   deleteButton.addEventListener('click', deleteCardHandler);
//   function deleteCardHandler(evt) {
//     const target = evt.target;
//     const currentTask = target.closest('#cardElement');
//     currentTask.remove();
//   }


//     link.addEventListener('click', function () {
//       showPopup(bigImg);

//     const titleImg = bigImg.querySelector('.popup__title');
//     const popupImg = document.querySelector('.popup__image');
//     titleImg.textContent = title.textContent;
//     popupImg.src = link.src;
//     popupImg.alt = title.textContent;

//   });
// 	return newItem;
// }

// function renderList() {
// 	const result = initialCards.map(function(item) {
// 		const newTask = createTaskDomNode(item);
// 		return newTask;
// 	});
// 	boxCards.append(...result);
// }
// renderList();




// initialCards.forEach((item) => {
//   const card = new Card(item.name, item.link);
//   const cardElement = card.generateCard();

//   // Добавляем в DOM
//   document.querySelector('.elements').append(cardElement);
// });

// function renderList() {
// 	const result = initialCards.map(function(item) {
// 		const newTask = new Card(item.name, item.link);
// 		return newTask;
// 	});
// 	boxCards.append(...result);
// }
// renderList();







const handleEscPress = (evt) => {
  const popup = document.querySelector('.popup_is-opened');
  if (evt.key === 'Escape') {
    closePopup(popup);
  }
};



const showFormBotton = document.querySelector('.profile__edit-botton');
const boxCardsForm = document.querySelector('.profile__add-botton');
const closeFormBotton = document.querySelector('.popup__close');
const showForm = document.querySelector('#popupAutor');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const firstNameContainer = document.querySelector('.profile__name');
const lastNameContainer = document.querySelector('.profile__profession');
const showpopupCard = document.querySelector('#popupCard');


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
