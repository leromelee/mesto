import { Popup } from "./Popup.js";

class PopupWithForm extends Popup {
    constructor(popupSelector, submit) {
        super(popupSelector);
        this._submit = submit;
        this._form = this._popup.querySelector('.popup__form');
        this._input = this._popup.querySelectorAll('.popup__input');
    }
    _getInputValues() {
        this._formValues = {};
        this._input.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    close() {
        super.close();
        this._form.reset();
    }
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submit(this._getInputValues());
        });
    }
}

export { PopupWithForm }
