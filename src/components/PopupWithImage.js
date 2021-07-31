import Popup from './Popup.js';

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this.__zoomedImage = this._popup.querySelector('.popup__photo');
        this.__zoomedImageTitle = this._popup.querySelector('.popup__name');
    }

    open(name, link) {
        this.__zoomedImage.setAttribute('src', link);
        this.__zoomedImage.setAttribute('alt', name);
        this.__zoomedImageTitle.textContent = name;
        super.open();

    }
}

export default PopupWithImage
