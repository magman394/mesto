
const seveBotton = document.querySelector('#save')
const firstNameContainer = document.querySelector('.profile__name');
const lastNameContainer = document.querySelector('.profile__profession');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const formLissener = document.querySelector('form');
const bigImgclose = document.querySelector('.popup__close_image');
const closeImg = document.querySelector('.popup__close_image');
const closeFormBotton = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const showFormBotton = document.querySelector('.profile__edit-botton');
const showForm = document.querySelector('#popupAutor');




function addName(event) {
  event.preventDefault();
  firstNameContainer.textContent = firstName.value;
  lastNameContainer.textContent = lastName.value;
    firstName.value = '';
    lastName.value = '';
    showForm.classList.toggle(closePopup(popup));
    firstName.value = firstNameContainer.textContent
    lastName.value = lastNameContainer.textContent
}



formLissener.addEventListener('submit', addName);


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const boxCards = document.querySelector('.elements');
const boxCardsForm = document.querySelector('.profile__add-botton');
const templateElement = document.querySelector('#boxCards');
const showpopupCard = document.querySelector('#popupCard');
const seveCardBotton = document.querySelector('#formCards')
const closepopupCard = document.querySelector('#closeCard');


const bigImg = document.querySelector('#popupImage');

function createTaskDomNode(item){
	const newItem = templateElement.content.cloneNode(true);
	const title = newItem.querySelector('#cardTitle');
	title.textContent = item.name;
  const link = newItem.querySelector('#cardLink');
  link.src = item.link;
  link.alt = item.name;

  const deleteButton = newItem.querySelector('.element__btn_delete');
  deleteButton.addEventListener('click', deleteCardHandler);
  function deleteCardHandler(evt) {
    const target = evt.target;
    const currentTask = target.closest('#cardElement');
    currentTask.remove();
  }

      newItem.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
    });

  link.addEventListener('click', function () {
    bigImg.classList.toggle('popup_is-opened');
    const titleImg = document.querySelector('.popup__title');
    const popupImg = document.querySelector('.popup__image');
    titleImg.textContent = title.textContent;
    popupImg.src = link.src;
    popupImg.alt = title.textContent;

    closeImg.addEventListener('click', closePopup(popup));
  });
	return newItem;
}

function renderList() {
	const result = initialCards.map(function(item) {
		const newTask = createTaskDomNode(item);
		return newTask;
	});
	boxCards.append(...result);
}
renderList();






function cardFormSubmitHandler(event) {
	event.preventDefault();
	const cardTitleInputValue = document.querySelector('#inputTitle');
	const inputTitle = cardTitleInputValue.value;
  const cardLinkInputValue = document.querySelector('#inputLink');
	const inputLink = cardLinkInputValue.value;
	const newTask = createTaskDomNode({ name: inputTitle, link: inputLink });

	boxCards.prepend(newTask);

	cardTitleInputValue.value = '';
  cardLinkInputValue.value = '';
  closePopup(showpopupCard);
}

seveCardBotton.addEventListener('submit', cardFormSubmitHandler);



function showPopup(popup) {
  popup.classList.add('popup_is-opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
}

showFormBotton.addEventListener('click', function () {
  showPopup(showForm)
});

boxCardsForm.addEventListener('click', function () {
  showPopup(showpopupCard)
});

closeFormBotton.addEventListener('click', function () {
  closePopup(showForm)
});

closepopupCard.addEventListener('click', function () {
  closePopup(showpopupCard)
});
bigImgclose.addEventListener('click', function () {
  closePopup(bigImg)
});
