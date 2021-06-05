import '../pages/index.css';
import Card from '../components/Card.js';
import { formDel, allSaveBotton, formAvatar, showbottonAvatar, showpopupAvatar, showDelPopup, submitDel, boxCardsForm, formAutor, formCards,
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
const formAvatarValidator = new FormValidator(configG, formAvatar);
formAvatarValidator.removeFormErrorContainer();
formAvatarValidator.enableValidation();
function createCard(item) {

  const card = new Card(item.name, item.link, item.likes, item.owner._id, item._id,
    boxCards, () => {openImg.open(item);},
    delSubmit, api, item.likes);
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
      owner: {_id: item.owner._id},
      _id: item._id
    },

  )

  return cardElement
}, containerSelector: '.elements'

}
)




const openImg = new PopupWithImage(bigImg)
openImg.setEventListeners();
const userInfo = new UserInfo(firstNameContainer, lastNameContainer, avatarProfile)

  const openFormAutor = new PopupWithForm(showForm, (data) => {
    const item = {firstName: data.firstName, lastName: data.lastName};

    api.patchUserInfo(item.firstName, item.lastName).then(() => {
      userInfo.addUserInfo(item.firstName, item.lastName);
      openFormAutor.close();
    })
      .catch((res) => {`Ошибка: ${res.status}`})
      .finally(() => {
        renderLoading(false);
      });
    })

    openFormAutor.setEventListeners();

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

   const delSubmit = new PopupWithSubmit(showDelPopup, formDel, api);
   delSubmit.setEventListeners();
   const openFormCard = new PopupWithForm(showpopupCard, (data) => {
    const item = {name: data.name, link: data.link, id: data.cardid};
    const newCardApi = api.addTask(item);
     newCardApi.then((item) => {
      const cardElement = createCard(item);
      defaultCardList.setItemNewCard(cardElement);
      openFormCard.close();
    })
    .catch((res) => {`Ошибка: ${res.status}`})
    .finally(() => {
      renderLoading(false);
    });
  });
    openFormCard.setEventListeners();


   const openFormAvatar = new PopupWithForm(showpopupAvatar, (data) => {
    const item = (data.avatar);
    api.patchUserAvatar(item)
    .then((item) => {
      userInfo.getUserAvatar(item.avatar);
      openFormAvatar.close();
    })
    .catch((res) => {`Ошибка: ${res.status}`})
    .finally(() => {
      renderLoading(false);
    });

  });


    showbottonAvatar.addEventListener('click', () => {

      openFormAvatar.open();

     });
    openFormAvatar.setEventListeners();

  function renderLoading(isLoading) {
    if (isLoading) {
      document.querySelectorAll('.popup__submit').forEach((input) => {
        input.textContent = 'Сохранить'
      })
      } else {
        document.querySelectorAll('.popup__submit').forEach((input) => {
          input.textContent = 'Сохранить...'

        })

    }
  }



