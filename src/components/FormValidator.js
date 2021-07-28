class FormValidator {

    constructor(settings, formElement) {
        this._settings = settings;
        this._formElement = formElement;
        this._submitButton = this._formElement.querySelector(this._settings.submitButtonSelector);
        this._inputList = this._formElement.querySelectorAll(settings.inputSelector);
    }

    _isValid(inputElement) {
        if (!inputElement.validity.valid) {
            this._setInputError(inputElement);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _setSubmitButtonState() {
        if (this._setAreaError()) {
            this._submitButton.classList.add(this._settings.inactiveButtonClass);
            this._submitButton.setAttribute('disabled', true);
        } else {
            this._submitButton.classList.remove(this._settings.inactiveButtonClass);
            this._submitButton.removeAttribute('disabled');
        }
    }

    _setInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._settings.inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
    }

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._settings.inputErrorClass);
        errorElement.textContent = '';
    }

    _setAreaError() {
        return Array.from(this._inputList).some((inputElement) => {
            return !inputElement.validity.valid;
        })
    }

    _setEventListeners() {
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this._setSubmitButtonState();
            });
        });
    }

    enableValidation() {
        this._setEventListeners();
    }

    resetValidation() {
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement);
        });
        this._setSubmitButtonState();
    }
}

export { FormValidator }
