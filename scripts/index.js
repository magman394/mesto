
const seveBotton = document.querySelector('#save')
const firstNameContainer = document.querySelector('.profile__name');
const lastNameContainer = document.querySelector('.profile__profession');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const formLissener = document.querySelector('form');
const bigImgclose = document.querySelector('.popup__close_image');
const closeImg = document.querySelector('.popup__close_image');
const closeFormBotton = document.querySelector('.popup__close');

const showFormBotton = document.querySelector('.profile__edit-botton');
const showForm = document.querySelector('#popupAutor');




function addName(evt) {
  evt.preventDefault();
  firstNameContainer.textContent = firstName.value;
  lastNameContainer.textContent = lastName.value;
    closePopup(showForm);
}

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
      showPopup(bigImg);

    const titleImg = bigImg.querySelector('.popup__title');
    const popupImg = document.querySelector('.popup__image');
    titleImg.textContent = title.textContent;
    popupImg.src = link.src;
    popupImg.alt = title.textContent;

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



const cardTitleInputValue = document.querySelector('#inputTitle');
const cardLinkInputValue = document.querySelector('#inputLink');

function cardFormSubmitHandler(event) {
	event.preventDefault();

	const inputTitle = cardTitleInputValue.value;

	const inputLink = cardLinkInputValue.value;
	const newTask = createTaskDomNode({ name: inputTitle, link: inputLink });

	boxCards.prepend(newTask);

  closePopup(showpopupCard);
}

seveCardBotton.addEventListener('submit', cardFormSubmitHandler);
formLissener.addEventListener('submit', addName);



bigImg.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(bigImg)
  }
});


showpopupCard.addEventListener('mousedown', function (evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(showpopupCard)
  }
});

showForm.addEventListener('mousedown', function (evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(showForm)
  }
});





const handleEscPress = (evt) => {
  const popup = document.querySelector('.popup_is-opened');
  if (evt.key === 'Escape') {
    closePopup(popup);
  }
};





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
bigImgclose.addEventListener('click', function () {
  closePopup(bigImg)
});
