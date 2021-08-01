import { clickEscape } from '../utils/constants.js';
class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._popupEscClose = this._closePopupEsc.bind(this);
    }

    _closePopupEsc(event) {
        if (event.key === clickEscape) {
            this.close();
        }
    }

    _closePopupOverlay(event) {
        if (event.target === event.currentTarget) {
            this.close();
        }
    }

    open() {
        this._popup.classList.add('popup_active');
        document.addEventListener('keydown', this._popupEscClose);
    }

    close() {
        this._popup.classList.remove('popup_active');
        document.removeEventListener('keydown', this._popupEscClose);
    }

    setEventListeners() {
        this._popup.querySelector('.popup__button-close').addEventListener('click', this.close.bind(this));
        this._popup.addEventListener('mousedown', this._closePopupOverlay.bind(this));
    }


}


export default Popup
