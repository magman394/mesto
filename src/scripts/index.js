import '../pages/index.css';
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';
import { initialCards, formAutor, formCards, configG, boxCardsForm } from './constants.js';





const defaultCardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card(item.name, item.link, '#boxCards', () => {
      openImg.open(item);
    });
    const cardElement = card.generateCard();
    defaultCardList.setItem(cardElement);

  }
}, '.elements');
defaultCardList.renderItems();
const openFormCard = new PopupWithForm('#popupCard', (znacheniia) => {
  const item = {name: znacheniia.name, link: znacheniia.link};
  const newCard = new Card(item.name, item.link, '#boxCards', () => {
    openImg.open(item);
  });

   defaultCardList.setItemNewCard(newCard.generateCard());

   openFormCard.close();
  });
  openFormCard.setEventListeners();


const openImg = new PopupWithImage('#popupImage')
openImg.setEventListeners();
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
    const formCardsValidator = new FormValidator(configG, formCards);
    formCardsValidator.enableValidation();
    formCardsValidator.disableSubmitButton();
    formCardsValidator.removeFormErrorContainer();
    openFormCard.open();
   });
   document.querySelector('.profile__edit-botton').addEventListener('click', () => {
    const formAutorValidator = new FormValidator(configG, formAutor);
    formAutorValidator.enableValidation();
    formAutorValidator.disableSubmitButton();
    formAutorValidator.removeFormErrorContainer();
    openFormAutor.open();
   });

