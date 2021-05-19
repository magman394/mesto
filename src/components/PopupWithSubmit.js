import Popup from './Popup.js';

export default class PopupWithSubmit extends Popup {
  constructor(popupSelector, submitDel, api){
    super(popupSelector);
    this._delSubmit = document.querySelector(submitDel);
    this._api = api


  }
  _delCardClick() {
    this._api.delmyCard(this._cardid)
    .then(() => {
      this._element.remove();
    }).catch((err) => alert(err));
   }
 setEventListeners() {

  super.setEventListeners();
  this._delSubmit.addEventListener('click', () => {
    this._delCardClick();

   });
  }
}
