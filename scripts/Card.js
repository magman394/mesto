// import { _showPopup, _closePopup } from './utils.js';
import { bigImgclose, bigImg, popupImg, popupTitle } from './constants.js'

export default class Card {
  constructor(name, link) {
      this._title = name;
      this._link = link;
  }

  _handleOpenPopup() {
  popupImg.src = this._link;
  popupImg.alt = this._title;
  popupTitle.textContent = this._title;
  bigImg.classList.add('popup_is-opened');
  }
  _handleClosePopup() {
   bigImg.classList.remove('popup_is-opened');
 }

  _getTemplate() {
  // забираем размеку из HTML и клонируем элемент
    const cardElement = document.querySelector('#boxCards').content.cloneNode(true);

  // вернём DOM-элемент карточки
    return cardElement;
  }
  _like() {
    this._element.querySelector('.element__like').addEventListener('click', (evt) => {

          });
  }
  _delete() {
    this._element.querySelector('.element__btn_delete').addEventListener('click', (evt) => {
    evt.target.this._element.remove();

      });
}

  _setEventListeners() {
    this._element.querySelector('#cardLink').addEventListener('click', () => {
     this._handleOpenPopup();
    });

    bigImgclose.addEventListener('click', () => {
      this._handleClosePopup();
    });
    bigImg.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup')) {
        this._handleClosePopup();
      }
    });

  }

  generateCard() {
  this._element = this._getTemplate();
  this._setEventListeners();
  this._like();
  this._element.querySelector('#cardTitle').textContent = this._title;
  this._element.querySelector('#cardLink').alt = this._title;
  this._element.querySelector('#cardLink').src = this._link;
  return this._element;
    }

}


