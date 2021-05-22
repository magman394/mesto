import Popup from './Popup.js';
export default class PopupWithSubmit extends Popup {
  constructor(popupSelector, submitDel, api){
    super(popupSelector);
    this._delSubmit = document.querySelector(submitDel);
    this._api = api
  }

  open(item) {
    super.open(item);

    this._setEventListeners(item)

  }
  _delCardClick(item) {
    this._api.delmyCard(item.cardid)

  }
 _setEventListeners(item) {
  super.setEventListeners();
  this._delSubmit.addEventListener('click', () => {
    this._delCardClick(item);
    super.close();

   });
  }

}
