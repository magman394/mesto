import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit){
    super(popupSelector);
    this._formSubmit = formSubmit;
    this._popupTitle = document.querySelector('#inputTitle');
    this._popupImg = document.querySelector('#inputLink');
  }
 _getImputValues() {
   this._cardValues = {};
    this._cardValues.name = this._popupTitle.value;
    this._cardValues.link = this._popupImg.value;
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
   super.close();

 }
}
