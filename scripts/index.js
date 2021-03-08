let showFormBotton = document.querySelector('.profile__edit-botton')
let showForm = document.querySelector('#popupAutor');
let closeFormBotton = document.querySelector('.popup__close');
let seveBotton = document.querySelector('#save')
let firstNameContainer = document.querySelector('.profile__name');
let lastNameContainer = document.querySelector('.profile__profession');
let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');
let formLissener = document.querySelector('form');

function showPopup() {
  firstName.value = firstNameContainer.textContent
  lastName.value = lastNameContainer.textContent
  showForm.classList.toggle('popup_is-opened');
}

function closePopup() {
  showForm.classList.toggle('popup_is-opened');
}


function addName(event) {
  event.preventDefault();
  firstNameContainer.textContent = firstName.value;
  lastNameContainer.textContent = lastName.value;
    firstName.value = '';
    lastName.value = '';
    showForm.classList.toggle(closePopup());

}

closeFormBotton.addEventListener('click', closePopup);
showFormBotton.addEventListener('click', showPopup);

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

function deleteTaskHandler(evt) {
	const target = evt.target;
	const currentTask = target.closest('#cardElement');

	currentTask.remove();
}

function duplicateTaskHandler(evt) {
	//найти дом ноду задачи
	const target = evt.target;
	const currentTask = target.closest('#cardElement');

	//создать новую дом ноду задачи передав найденный текст
	const newTask = currentTask.cloneNode(true);

	//навесить на новую задачу обработчики события
	addTaskListeners(newTask);

	//вставить на страницу
	boxCards.prepend(newTask);


}



function addTaskListeners(task) {
	const deleteButton = task.querySelector('.element__btn_delete');
	deleteButton.addEventListener('click', deleteTaskHandler);

}

function createTaskDomNode(item){
	const newItem = templateElement.content.cloneNode(true);
	const title = newItem.querySelector('#cardTitle');
	title.textContent = item.name;
  const link = newItem.querySelector('#cardLink');
  link.src = item.link;
  link.alt = item.name;

  link.addEventListener('click',function showPopupImg() {
    bigImg.classList.toggle('popup-image_is-opened');
    const titleImg = document.querySelector('.popup-image__title');
    const popupImg = document.querySelector('.popup-image__image');
    const closeImg = document.querySelector('.popup-image__close');
    titleImg.textContent = title.textContent;
    popupImg.src = link.src;
    popupImg.alt = title.textContent;

    closeImg.addEventListener('click', closePopupImg);
  });
	return newItem;
}

function renderList() {
	const result = initialCards.map(function(item) {
		const newTask = createTaskDomNode(item);
		addTaskListeners(newTask);

    newTask.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
    });
		return newTask;


	});

	boxCards.append(...result);

}

renderList();


function showPopupCard() {
  showpopupCard.classList.toggle('popup_is-opened');
}
function closePopupCard() {
  showpopupCard.classList.toggle('popup_is-opened');
}

boxCardsForm.addEventListener('click', showPopupCard);

function addTaskFormListener(event) {
	event.preventDefault();
	const input = document.querySelector('#imputTitle');
	const inputTitle = input.value;
  const input2 = document.querySelector('#imputLink');
	const inputLink = input2.value;
	const newTask = createTaskDomNode({ name: inputTitle, link: inputLink });

	addTaskListeners(newTask);
  newTask.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
    });
	boxCards.prepend(newTask);

	input.value = '';
  input2.src = '';
  closePopupCard();
}
seveCardBotton.addEventListener('submit', addTaskFormListener);
closepopupCard.addEventListener('click', closePopupCard);



const bigImg = document.querySelector('.popup-image');
const bigImgclose = document.querySelector('.popup-image__close');


function closePopupImg() {
  bigImg.classList.toggle('popup-image_is-opened');
}
