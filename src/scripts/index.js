import '../pages/index.css';
import Card from './Card.js';
import { initialCards, boxCardsForm, formAutor, formCards,
   configG, firstNameContainer, lastNameContainer,
    showpopupCard, boxCards, bigImg, showForm, showFormBotton, cardConteiner } from './constants.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';




const formAutorValidator = new FormValidator(configG, formAutor);
formAutorValidator.removeFormErrorContainer();
formAutorValidator.enableValidation();
const formCardsValidator = new FormValidator(configG, formCards);
formCardsValidator.removeFormErrorContainer();
formCardsValidator.enableValidation();

const defaultCardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item);

    defaultCardList.setItem(cardElement);

  }
}, cardConteiner);
defaultCardList.renderItems();
const openFormCard = new PopupWithForm(showpopupCard, (znacheniia) => {
  const item = {name: znacheniia.name, link: znacheniia.link};
  const newCard = createCard(item);

   defaultCardList.setItemNewCard(newCard);

   openFormCard.close();
  });
  openFormCard.setEventListeners();

function createCard(item) {
  const card = new Card(item.name, item.link, boxCards, () => {
    openImg.open(item);
});
return card.generateCard(item);
}

const openImg = new PopupWithImage(bigImg)
openImg.setEventListeners();
const userInfo = new UserInfo(firstNameContainer, lastNameContainer)

  const openFormAutor = new PopupWithForm(showForm, (znacheniia) => {
    const item = {firstName: znacheniia.firstName, lastName: znacheniia.lastName}
    userInfo.setUserInfo(item.firstName, item.lastName);


  });
  openFormAutor.setEventListeners();
 const cardFormSubmitHandler = () => {
   const profileAutor = input.value
   const profileProff = input.value

   userInfo.setUserInfo(profileAutor, profileProff);
   openFormAutor.close();
 }

 boxCardsForm.addEventListener('submit', cardFormSubmitHandler);

 boxCardsForm.addEventListener('click', () => {
    formCardsValidator.removeFormErrorContainer();
    openFormCard.open();
   });
   showFormBotton.addEventListener('click', () => {
    formAutorValidator.removeFormErrorContainer();
    const allUserInfo = userInfo.getUserInfo();
    firstName.value = allUserInfo.firstName
    lastName.value = allUserInfo.lastName
    formAutorValidator.removeFormErrorContainer();
    openFormAutor.open();
   });

