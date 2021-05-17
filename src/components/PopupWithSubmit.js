import Popup from './Popup.js';
import { submitDel } from '../utils/constants.js';
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
