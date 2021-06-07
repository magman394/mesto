import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit){
    super(popupSelector);
    this._formSubmit = formSubmit;
    this._popupForm = this._section.querySelector('.popup__container');
    this._form = this._section.querySelector('form');

  }

 _getImputValues() {
   this._cardValues = {};
    this._popupForm.querySelectorAll('.popup__input').forEach((input) => {
      this._cardValues[input.name] = input.value
      this._cardValues['avatar'] = input.value
    })
   return this._cardValues;

 }
 setEventListeners() {
   super.setEventListeners();
   this._section.addEventListener('submit', (evt) =>{
     evt.preventDefault();
     this._formSubmit(this._getImputValues());
   })
 }

 close() {
  this._form.reset();
   super.close();
 }
}
