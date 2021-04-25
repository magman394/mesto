import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
  constructor(popupSelector){
    super(popupSelector);

  }
  open({name, link}) {
    const imagePopupImg = this._section.querySelector('.popup__image')
    const altPopupImg = this._section.querySelector('.popup__title')
    imagePopupImg.src = link
    imagePopupImg.alt = name
    altPopupImg.textContent = name
    super.open();
}
}
