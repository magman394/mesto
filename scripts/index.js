
import Card from './Card.js';
// import FormValidator from './FormValidator.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';
import { initialCards, bigImg, boxCards, cardTitleInputValue, cardLinkInputValue,
  seveCardBotton, bigImgclose, closepopupCard, formLissener, showFormBotton,
   boxCardsForm, closeFormBotton, showForm, firstName, lastName, firstNameContainer,
    lastNameContainer, showpopupCard, formAutor, formCards, configG } from './constants.js';



// const formAutorValidator = new FormValidator(configG, formAutor);
// formAutorValidator.enableValidation();
// const formCardsValidator = new FormValidator(configG, formCards);
// formCardsValidator.enableValidation();

const defaultCardList = new Section({
  data: initialCards, // принял массив с карточками
  renderer: (item) => { // отрисовал одну карточку и вставил в темпл
    const card = new Card(item.name, item.link, '#boxCards', () => {
      openImg.open(item);
      openImg.setEventListeners();
    });
    const cardElement = card.generateCard();
    defaultCardList.setItem(cardElement);

  }
}, '.elements');
defaultCardList.renderItems();
const openFormCard = new PopupWithForm('#popupCard', (znacheniia) => {
  const item = {name: znacheniia.name, link: znacheniia.link};
  const newCard = new Card(item.name, item.link, '#boxCards', () => {
    openFormCard.open(item);
  });

   defaultCardList.setItemNewCard(newCard.generateCard());

   openFormCard.close();
  });
  openFormCard.setEventListeners();

const openImg = new PopupWithImage('#popupImage')
const userInfo = new UserInfo('.profile__name', '.profile__profession')

  const openFormAutor = new PopupWithForm('#popupAutor', (znacheniia) => {
    const item = {firstName: znacheniia.firstName, lastName: znacheniia.lastName}
    userInfo.setUserInfo(item.firstName, item.lastName);


  });
  openFormAutor.setEventListeners();
 const cardFormSubmitHandler = (znacheniia) => {
   userInfo.setUserInfo(znacheniia);
   openFormAutor.close();
 }

 boxCardsForm.addEventListener('submit', cardFormSubmitHandler);

  document.querySelector('.profile__add-botton').addEventListener('click', () => {
    openFormCard.open();
   });
   document.querySelector('.profile__edit-botton').addEventListener('click', () => {
    openFormAutor.open();
   });

// function delaemCard({name, link}, popupSelector) { //создаем карточку
// const card = new Card({name, link}, popupSelector)
//   return card.generateCard();
// };


// otckImg.setEventListeners();


// function createCard(item) {
//   const card = new Card(item.name, item.link, '#boxCards');
//   return card.generateCard();
// };
// function renderCard(item, toEnd) {
//   const card = createCard(item);
//   if (toEnd === true){
//   boxCards.append(card);
// } else {
//     boxCards.prepend(card);
//   }
// }
//   initialCards.forEach((item) => {
//     renderCard(item, true)
//   })
// function cardFormSubmitHandler(event) {
//   event.preventDefault();
//   const inputTitle = cardTitleInputValue.value;
//   const inputLink = cardLinkInputValue.value;
//   renderCard({name: inputTitle, link: inputLink});

//   closePopup(showpopupCard);
// };

// function addName(evt) {
//   evt.preventDefault();
//   firstNameContainer.textContent = firstName.value;
//   lastNameContainer.textContent = lastName.value;
//     closePopup(showForm);
// }


// const handleEscPress = (evt) => {
//   const popup = document.querySelector('.popup_is-opened');
//   if (evt.key === 'Escape') {
//     closePopup(popup);
//   }
// };


// export function showPopup(popup) {
//   popup.classList.add('popup_is-opened');
//   document.addEventListener('keydown', handleEscPress);
// }

// export function closePopup(popup) {
//   popup.classList.remove('popup_is-opened');
//   document.removeEventListener('keydown', handleEscPress);
// }

// const closeAll = (evt) => {
//   if (evt.target.classList.contains('popup')) {
//     closePopup(evt.target)
//   }
// }
// showFormBotton.addEventListener('click', function () {
//   showPopup(showForm)
//   firstName.value = firstNameContainer.textContent
//   lastName.value = lastNameContainer.textContent
// });

// boxCardsForm.addEventListener('click', function () {
//   showPopup(showpopupCard)
//   cardTitleInputValue.value = inputTitle.textContent
//   cardLinkInputValue.value = inputLink.textContent
//   formCardsValidator.disableSubmitButton();

// });

// closeFormBotton.addEventListener('click', function () {
//   closePopup(showForm)
// });

// closepopupCard.addEventListener('click', function () {
//   closePopup(showpopupCard)
// });
// showForm.addEventListener('mousedown', closeAll);
// bigImgclose.addEventListener('click', function () {
//   closePopup(bigImg)
// });
// bigImg.addEventListener('mousedown', closeAll);


// showpopupCard.addEventListener('mousedown', closeAll);
// formLissener.addEventListener('submit', addName);
// seveCardBotton.addEventListener('submit', cardFormSubmitHandler);


