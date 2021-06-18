function enableValidation(settings) {
    const formElement = Array.from(document.querySelectorAll(settings.formElement));
    formElement.forEach(function(item) {
        item.addEventListener('submit', (evt) => handleFormSubmit(evt, settings));
        item.addEventListener('input', (evt) => handleFormInput(evt, settings));
    });
}

function setSubmitButtonState(formElement, settings) {
    const submitButton = formElement.querySelector(settings.submitButtonSelector);
    const isValid = formElement.checkValidity();

    if (isValid) {
        submitButton.classList.remove(settings.inactiveButtonClass);
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.classList.add(settings.inactiveButtonClass);
        submitButton.setAttribute('disabled', true);
    }
}

function setInputError(inputElement, settings) {
    const InputValidition = inputElement.checkValidity();
    if (InputValidition) {
        inputElement.classList.remove(settings.inputErrorClass);
    } else {
        inputElement.classList.add(settings.inputErrorClass);
    }
}

function handleFormInput(evt, settings) {
    const inputElement = evt.target;
    const formElement = evt.currentTarget;

    setAreaError(inputElement);
    setInputError(inputElement, settings);
    setSubmitButtonState(formElement, settings);
}

function setAreaError(inputElement) {
    const p = document.querySelector(`#${inputElement.id}-error`);
    p.textContent = inputElement.validationMessage;
}



enableValidation({
    formElement: '.popup__form',
    inputElement: '.popup__input',
    inputErrorClass: 'popup__input_type_error',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    errorClass: '.popup__error'
});
