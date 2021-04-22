export default class Popup {
  constructor(popupSelector) {
    this._section = document.querySelector(popupSelector);
  }
  open() {

    this._section.classList.add('popup_is-opened');
  }
  close() {
    this._section.remove('popup_is-opened');
  }
  _handleEscClose = (evt) => {
    const popup = document.querySelector('.popup_is-opened');
    if (evt.key === 'Escape') {
      popup.close();
    }
  }
  setEventListeners() {
    this._section.querySelector('.popup__close').addEventListener('click', () => {
          this.close();
       });
}
}

