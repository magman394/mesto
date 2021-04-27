import Popup from './Popup.js';
import { formCards } from './constants.js';
export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit){
    super(popupSelector);
    this._formSubmit = formSubmit;
    this._popupForm = this._section.querySelector('.popup__container');
  }
 _getImputValues() {
   this._cardValues = {};
    this._popupForm.querySelectorAll('.popup__input').forEach((input) => {
      this._cardValues[input.name] = input.value
    })
   return this._cardValues;

 }
 setEventListeners() {
   super.setEventListeners();
   this._section.addEventListener('submit', (evt) =>{
     evt.preventDefault();
     this._formSubmit(this._getImputValues());
     this.close();
   })
 }
 close() {
  formCards.reset();
   super.close();
 }
}
