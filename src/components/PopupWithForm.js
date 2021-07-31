import Popup from './Popup.js';

class PopupWithForm extends Popup {
    constructor(popupSelector, { submit, input }) {
        super(popupSelector);
        this._submit = submit;
        this._input = input;

        this._button = this._popup.querySelector('.popup__save');
        this._form = this._popup.querySelector('.popup__form');
        this._inputs = this._popup.querySelectorAll('.popup__input');


        this._buttonLoading = this._button.textContent;
    }

    _getInputValues() {
        this._formValues = {};
        this._inputs.forEach((data) => {
            this._formValues[data.name] = data.value;
        });
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submit(this._getInputValues());
        });
    }

    open() {
        super.open();
        this._input();
    }

    close() {
        super.close();
        this._form.reset();
    }

    renderLoading(loading) {
        if (loading) {
            this._button.textContent = 'Сохранение...';
        } else
            this._button.textContent = this._buttonLoading;
    }
}


export default PopupWithForm
