export default class FormValidator {
  constructor(item, validElement) {
    this._formSelector = item.formSelector;
    this._inputSelector = item.inputSelector;
    this._submitButtonSelector = item.submitButtonSelector;
    this._inactiveButtonClass = item.inactiveButtonClass;
    this._inputErrorClass = item.inputErrorClass;
    this._errorClass = item.errorClass;
    this._validElement = validElement;

}
_allInputEmpty() {
  return !this.inputList.some(inputElement => inputElement.value.length > 0)
}

_hasInvalidInput() {
return this._inputList.some(inputElement => !inputElement.validity.valid);
}

_showInputError() {
  this.errorElement = this._validElement.querySelector(`#${this._inputSelector}-error`);
  this._inputSelector.classList.add(this._inputErrorClass);
  this.errorElement.textContent = this._inputSelector.validationMessage;
  this.errorElement.classList.add(this._errorClass);
}
_hideInputError() {
  this.errorElement = this._validElement.querySelector(`#${this._inputSelector}-error`);
  this._inputSelector.classList.remove(this._inputErrorClass);
  this.errorElement.classList.remove(this._errorClass);
}
_checkInput() {
this._inputElement = this._validElement.querySelector(this._inputSelector)
 if (this._inputElement.validity.valid) {
  _hideInputError();
} else {
  _showInputError();
  }
};

_toggleButtonState() {
  if (hasInvalidInput(this._inputList) || allInputEmpty(this._inputList)) {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', 'disabled');
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    }
}

_setInputListeners() {
   this._inputList = Array.from(this._validElement.querySelectorAll(this._inputSelector));
   console.log(this._inputList)
   this._buttonElement = this._validElement.querySelector(this._submitButtonSelector);
   console.log(this._buttonElement)
   this._inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      this._checkInput();
      this._toggleButtonState();
    });
    this._toggleButtonState();
  }
  );
};

enableValidation() {
  this._validElement.addEventListener('submit', (event) => {
    event.preventDefault();
    });
    this._setInputListeners();
}
}
