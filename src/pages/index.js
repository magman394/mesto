import '../pages/index.css';
import Card from '../components/Card.js';
import { submitDel, popupDelImg, DelSubmit, boxCardsForm, formAutor, formCards,
   configG, firstNameContainer, lastNameContainer,
    showpopupCard, boxCards, bigImg, showForm, showFormBotton, avatarProfile } from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js';
import UserInfo from '../components/UserInfo.js';
import API from '../components/API.js';



const formAutorValidator = new FormValidator(configG, formAutor);
formAutorValidator.removeFormErrorContainer();
formAutorValidator.enableValidation();
const formCardsValidator = new FormValidator(configG, formCards);
formCardsValidator.removeFormErrorContainer();
formCardsValidator.enableValidation();

function createCard(item) {
  const card = new Card(item.name, item.link, item.likes, item.id, boxCards, () => {
    openImg.open(item);
});
return card.generateCard(item);
}
const defaultCardList = new Section({
  renderer: (item) => {

    const cardElement = createCard({
      name: item.name,
      link: item.link,
      likes: item.likes,
      id: item.owner._id
    },
    boxCards,
    () => openImg.open(item)
  )

  return cardElement
}, containerSelector: '.elements'
}
)
const api = new API({
  url: 'https://mesto.nomoreparties.co/v1/cohort-24/',
  headers: {
    authorization: 'b94e78d1-b2d6-4481-aa74-fc7e4dc8c239',
    "Content-Type": "application/json"
  }
 });

api.getAllPromise().then((arg) => {

  const [getUserInfo, getAllTasks] = arg;
  userInfo.setUserInfo(getUserInfo.name, getUserInfo.about, getUserInfo.avatar);
  defaultCardList.renderItems(getAllTasks);
console.log(getAllTasks)

}).catch((err) => alert(err));



// const defaultCardList = new Section({
//   data: initialCards,
//   renderer: (item) => {
//     const cardElement = createCard(item);

//     defaultCardList.setItem(cardElement);

//   }
// }, cardConteiner);
// defaultCardList.renderItems();
const openFormCard = new PopupWithForm(showpopupCard, (znacheniia) => {
  const item = {name: znacheniia.name, link: znacheniia.link};
  // const newCard = createCard(item);

   const newCardApi = api.addTask(item);
   newCardApi.then((item) => {
    const cardElement = createCard(item);
    defaultCardList.setItemNewCard(cardElement);

  });

   openFormCard.close();
  });
  openFormCard.setEventListeners();



const openImg = new PopupWithImage(bigImg)
openImg.setEventListeners();
const userInfo = new UserInfo(firstNameContainer, lastNameContainer, avatarProfile)

  const openFormAutor = new PopupWithForm(showForm, (znacheniia) => {
    const item = {firstName: znacheniia.firstName, lastName: znacheniia.lastName}
    api.patchUserInfo(item.firstName, item.lastName);
    userInfo.setUserInfo(item.firstName, item.lastName);
  });
  openFormAutor.setEventListeners();


 boxCardsForm.addEventListener('click', () => {
    formCardsValidator.removeFormErrorContainer();
    openFormCard.open();
   });
   showFormBotton.addEventListener('click', () => {
    formAutorValidator.removeFormErrorContainer();
    const allUserInfo = api.getUserInfo();
    allUserInfo.then((body) => {
      firstName.value = body.name
      lastName.value = body.about
      formAutorValidator.removeFormErrorContainer();
      openFormAutor.open();
    });

   });
   const delSubmit = new PopupWithSubmit(popupDelImg, DelSubmit);
   delSubmit.setEventListeners();
   submitDel.addEventListener('click', () => {
    api.delmyCard();
    delSubmit.close();
   });



