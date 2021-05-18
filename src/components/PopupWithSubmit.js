import Popup from './Popup.js';

export default class PopupWithSubmit extends Popup {
  constructor(popupSelector, submitDel, defaultCardList){
    super(popupSelector);
    this._delSubmit = document.querySelector(submitDel);
    this._defaultCardList = defaultCardList

  }
  open() {
    this._section.classList.add('popup_is-opened');
    document.addEventListener('keydown', this._handleEscClose)

  }

 setEventListeners() {
  super.setEventListeners();
  // this._delSubmit.addEventListener('click', () => {
  //   // api.delmyCard();
  //   this.close();
  //  });
  }
}
