

export default class Popup {
  constructor(popupSelector) {
    this._section = document.querySelector(popupSelector);


  }
  open() {
    this._section.classList.add('popup_is-opened');
    document.addEventListener('keydown', this._handleEscClose)
    this._section.addEventListener('mousedown', (event) => {
      if (event.target === this._section)
      this._section.classList.remove('popup_is-opened');
     });
  }
  close() {
    this._section.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', this._handleEscClose)

  }
  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }
  setEventListeners() {
    this._section.querySelector('.popup__close').addEventListener('click', () => {
      this.close();
     });


  }
}

