import { Popup } from "./Popup.js";

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._zoomedImage = this._popup.querySelector('.popup__photo');
        this._zoomedImageTitle = this._popup.querySelector('.popup__name');
    }


    open(link, name) {
        super.open();
        this._zoomedImage.src = link;
        this._zoomedImage.alt = name;
        this._zoomedImageTitle.textContent = name;
    }
}


export { PopupWithImage }
