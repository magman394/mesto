export default class FormValidator {
  constructor(item, validElement) {
    this._inputSelector = item.inputSelector;
    this._submitButtonSelector = item.submitButtonSelector;
    this._inactiveButtonClass = item.inactiveButtonClass;
    this._inputErrorClass = item.inputErrorClass;
    this._errorClass = item.errorClass;
    this._validElement = validElement;

}
_allInputEmpty() {
  return !this._inputList.some(inputElement => inputElement.value.length > 0)
}

_hasInvalidInput() {
return this._inputList.some(inputElement => !inputElement.validity.valid);
}

_showInputError(inputElement) {
  this.errorElement = this._validElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(this._inputErrorClass);
  this.errorElement.textContent = inputElement.validationMessage;
  this.errorElement.classList.add(this._errorClass);
}
_hideInputError(inputElement) {
  this.errorElement = this._validElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(this._inputErrorClass);
  this.errorElement.classList.remove(this._errorClass);
}
_checkInput(inputElement) {
 if (inputElement.validity.valid) {
  this._hideInputError(inputElement);
} else {
  this._showInputError(inputElement);
  }
};
disableSubmitButton() {
  this._buttonElement.classList.add(this._inactiveButtonClass);
  this._buttonElement.disbaled = true;
}
_toggleButtonState() {

  if (this._hasInvalidInput() || this._allInputEmpty()) {
    this.disableSubmitButton();
    this._buttonElement.classList.add(this._inactiveButtonClass);
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');

    }

}
removeFormErrorContainer() {
  const formErrors = this._validElement.querySelectorAll('.popup__error');
  formErrors.forEach((error) => {
    error.classList.remove(this._errorClass);
  });
  const inputErrors = this._validElement.querySelectorAll(this._inputSelector);
  inputErrors.forEach((error) => {
    error.classList.remove(this._errorClass);
  });
}
_setInputListeners() {
   this._inputList = Array.from(this._validElement.querySelectorAll(this._inputSelector));
   this._buttonElement = this._validElement.querySelector(this._submitButtonSelector);
   this._inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      this._checkInput(inputElement);
      this._toggleButtonState();
    });

})
}


enableValidation() {
  this._validElement.addEventListener('submit', (event) => {
    event.preventDefault();
    });
    this._setInputListeners();
}
}

