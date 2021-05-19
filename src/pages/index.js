import '../pages/index.css';
import Card from '../components/Card.js';
import { DelCard, showDelPopup, submitDel, cardConteiner, delBotton, boxCardsForm, formAutor, formCards,
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

  const card = new Card(item.name, item.link, item.likes, item.id, item.cardid, boxCards, () => {
    openImg.open(item);
}, api);
return card.generateCard(item);
}

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

}).catch((err) => alert(err));

const defaultCardList = new Section({
  renderer: (item) => {

    const cardElement = createCard({
      name: item.name,
      link: item.link,
      likes: item.likes,
      id: item.owner._id,
      cardid: item._id
    },

  )
  return cardElement
}, containerSelector: '.elements'

}
)

const openFormCard = new PopupWithForm(showpopupCard, (znacheniia) => {
  const item = {name: znacheniia.name, link: znacheniia.link, id: znacheniia.id}; //Взял из формы создания карточки name и link

   const newCardApi = api.addTask(item); // Передал их в API, которая создаст объект на сервере, но не могу понять как теперь вернуть этот объект
   newCardApi.then((item) => {

    const cardElement = createCard(item); // создаю элемент, но пока тут лежит локальная карточка

    defaultCardList.setItemNewCard(cardElement); // отрисовываю карточку в начале списка





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

   const delSubmit = new PopupWithSubmit(showDelPopup, submitDel, api);


   delSubmit.setEventListeners();




