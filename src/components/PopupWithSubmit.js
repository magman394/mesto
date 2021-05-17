import Popup from './Popup.js';
export default class PopupWithSubmit extends Popup {
  constructor(popupSelector, delSubmit){

    super(popupSelector);
    this._delSubmit = document.querySelector(delSubmit);
  }


 setEventListeners() {

  this._delSubmit.addEventListener('click', () => {
    super.close();
   });
}
}
