// import { _showPopup, _closePopup } from './utils.js';
import { bigImgclose, bigImg, popupImg, popupTitle } from './constants.js'
import {showPopup, closePopup} from './index.js'
export default class Card {
  constructor(name, link, cardSelector) {
      this._title = name;
      this._link = link;
      this._cardSelector = cardSelector;
  }

  _handleOpenPopup() {
    popupImg.src = this._link;
    popupImg.alt = this._title;
    popupTitle.textContent = this._title;
    showPopup(bigImg);
  }
  _handleClosePopup() {
    closePopup(bigImg);
 }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('#cardElement')
      .cloneNode(true);

    return cardElement;
  }


  _like() {
    this._element.querySelector('.element__like').addEventListener('click', (evt) => {
          evt.target.classList.toggle('element__like_active');
          });
  }
  _delete() {
    this._element.querySelector('.element__btn').addEventListener('click', () => {
      document.querySelector('#cardElement').remove();
      });
}

  _setEventListeners() {
    this._element.querySelector('#cardLink').addEventListener('click', () => {
     this._handleOpenPopup();
    });


    }


  generateCard() {
  this._element = this._getTemplate();
  this._setEventListeners();
  this._like();
  this._delete();

  this._element.querySelector('#cardTitle').textContent = this._title;
  this._element.querySelector('#cardLink').alt = this._title;
  this._element.querySelector('#cardLink').src = this._link;
  return this._element;
    }

}


