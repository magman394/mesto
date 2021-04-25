
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';
import { initialCards, bigImg, boxCards, cardTitleInputValue, cardLinkInputValue,
  seveCardBotton, bigImgclose, closepopupCard, formLissener, showFormBotton,
   boxCardsForm, closeFormBotton, showForm, firstName, lastName, firstNameContainer,
    lastNameContainer, showpopupCard, formAutor, formCards, configG } from './constants.js';



const formAutorValidator = new FormValidator(configG, formAutor);
formAutorValidator.enableValidation();
const formCardsValidator = new FormValidator(configG, formCards);
formCardsValidator.enableValidation();

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
  const newCard = new Card(inputTitle.value, inputLink.value, '#boxCards', () => {
    openFormCard.open(item);
    console.log(newCard)
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
 const cardFormSubmitHandler = () => {
   const inputPopup1 = input.value
   const inputPopup2 = input.value

   userInfo.setUserInfo(inputPopup1, inputPopup2);
   openFormAutor.close();
 }

 boxCardsForm.addEventListener('submit', cardFormSubmitHandler);

  document.querySelector('.profile__add-botton').addEventListener('click', () => {
    openFormCard.open();
   });
   document.querySelector('.profile__edit-botton').addEventListener('click', () => {
    openFormAutor.open();
   });

