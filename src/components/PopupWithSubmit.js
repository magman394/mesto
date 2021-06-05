import Popup from './Popup.js';
export default class PopupWithSubmit extends Popup {
  constructor(popupSelector, submitDel, api){
    super(popupSelector);
    this._delSubmit = submitDel;
    this._api = api
  }

  open(fn) {
    super.open();
    this._actionFn = fn;
    document.querySelector('#deleteCard').textContent = 'Да'

  }

 setEventListeners() {
  super.setEventListeners();
  this._delSubmit.addEventListener('submit', (evt) => {
    evt.preventDefault();
    this._actionFn();
    super.close();
   });
  }

}
