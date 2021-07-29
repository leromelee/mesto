class Card {

    constructor(data, cardSelector, zoomedImageClick) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._zoomedImageClick = zoomedImageClick;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
        return cardElement;
    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', () => this._likeCard());
        this._cardElement.querySelector('.element__button-delete').addEventListener('click', () => this._deleteCard())
        this._elementPhoto.addEventListener('click', () => this._zoomedImageClick(this._name, this._link));
    }

    _likeCard() {
        this._likeButton.classList.toggle('element__button_active');
    }

    _deleteCard() {
        this._cardElement.remove();
    }

    generateCard() {
        this._cardElement = this._getTemplate();
        this._elementPhoto = this._cardElement.querySelector('.element__photo');
        this._elementTitle = this._cardElement.querySelector('.element__title');
        this._likeButton = this._cardElement.querySelector('.element__button');
        this._elementPhoto.src = this._link;
        this._elementPhoto.alt = this._name;
        this._elementTitle.textContent = this._name;
        this._setEventListeners();
        return this._cardElement;
    }

}


export { Card }
