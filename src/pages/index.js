import '../pages/index.css';
import Card from '../components/Card.js';
import { initialCards, boxCardsForm, formAutor, formCards,
   configG, firstNameContainer, lastNameContainer,
    showpopupCard, boxCards, bigImg, showForm, showFormBotton, avatarProfile } from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import API from '../components/API.js';



const formAutorValidator = new FormValidator(configG, formAutor);
formAutorValidator.removeFormErrorContainer();
formAutorValidator.enableValidation();
const formCardsValidator = new FormValidator(configG, formCards);
formCardsValidator.removeFormErrorContainer();
formCardsValidator.enableValidation();

function createCard(item) {
  const card = new Card(item.name, item.link, boxCards, () => {
    openImg.open(item);
});
return card.generateCard(item);
}
const defaultCardList = new Section({
  renderer: (item) => { //беру все карточки

    const cardElement = createCard({ //создаю новую карточку
      name: item.name,
      link: item.link
    },
    boxCards, //нахожу темплейт с разметкой для каждой карточки
    () => openImg.open(item) //навешиваю слушатели для открытия
  )

  return cardElement // возвращаю функцию создания карточки с данными из новой карточки
}, containerSelector: '.elements' //передаю разметку куда сложить карточки
}
)
const api = new API({
  url: 'https://mesto.nomoreparties.co/v1/cohort-23/',
  headers: {
    authorization: '9909f88d-db44-41c1-8317-0551a3588138',
    "Content-Type": "application/json"
  }
 });

api.getAllPromise().then((arg) => {
  const [getUserInfo, getAllTasks] = arg;
  userInfo.setUserInfo(getUserInfo.name, getUserInfo.about, getUserInfo.avatar);

  defaultCardList.renderItems(getAllTasks);


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
    const allUserInfo = api.getUserInfo();
    allUserInfo.then((body) => {
      firstName.value = body.name
      lastName.value = body.about
      formAutorValidator.removeFormErrorContainer();
      openFormAutor.open();
    });

   });
