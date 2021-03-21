const allInputEmpty = (inputList) => {
  return !inputList.some(inputElement => inputElement.value.length > 0)
};


const hasInvalidInput = (inputList) => {
  return inputList.some(inputElement => !inputElement.validity.valid);
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList) || allInputEmpty(inputList)) {
    buttonElement.classList.add('popup__submit_invalid');
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    buttonElement.classList.remove('popup__submit_invalid');
    buttonElement.removeAttribute('disabled');
  }
};

const showInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add('popup__error_visible');

};
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__error_visible');
};

const checkInput = (formElement, inputElement) => {
 if (inputElement.validity.valid) {
  hideInputError(formElement, inputElement);
} else {
  showInputError(formElement, inputElement);
  }
};



const setInputListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__submit');
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkInput(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
    toggleButtonState(inputList, buttonElement);
  }
  );
};

const enableValidation = () => {
  const formList =
  Array.from(document.querySelectorAll('[name="popup-profile"]'));
  formList.forEach(
    formElement => {
      formElement.addEventListener('submit', (event) => {
        event.preventDefault();
      });
      setInputListeners(formElement);
    }
  );
};

enableValidation();
