
import { popupAll } from './constants.js';
export default class Popup {
  constructor(popupSelector) {
    this._section = document.querySelector(popupSelector);

  }
  open() {
    this._section.classList.add('popup_is-opened');

  }
  close() {
    this._section.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', this._handleEscClose.bind(this))

  }
  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }
  setEventListeners() {
    document.addEventListener('keydown', this._handleEscClose.bind(this))
    this._section.querySelector('.popup__close').addEventListener('click', () => {
      this.close();
     });
     this._section.querySelector('.popup__close').addEventListener('mousedown', () => {
      this.close();
     });
  }
}

