import Popup from './Popup.js';
export default class PopupWithSubmit extends Popup {
  constructor(popupSelector, submitDel, api){
    super(popupSelector);
    this._delSubmit = document.querySelector(submitDel);
    this._api = api
  }

  open(fn) {
    super.open();
    this._actionFn = fn;
    this.setEventListeners()

  }

 setEventListeners() {
  super.setEventListeners();

  this._delSubmit.addEventListener('click', () => {

    this._actionFn();

    super.close();

   });
  }

}
