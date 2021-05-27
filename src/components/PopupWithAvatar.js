
import Popup from './Popup.js';
import { formAvatar } from '../utils/constants.js';
export default class PopupWithAvatar extends Popup {
  constructor(popupSelector, avatar){
    super(popupSelector);
    this._avatar = avatar
    this._popupForm = this._section.querySelector('.popup__avatar-container');
  }

_getImputValues() {
  this._cardValues = {};
   this._popupForm.querySelectorAll('.popup__input').forEach((input) => {
     this._cardValues['avatar'] = input.value

   })
  return this._cardValues;


}
setEventListeners() {
  super.setEventListeners();
  this._section.addEventListener('submit', (evt) =>{
    evt.preventDefault();
    this._avatar(this._getImputValues());
    this.close();
  })
}
close() {
  formAvatar.reset();
   super.close();
 }
}
