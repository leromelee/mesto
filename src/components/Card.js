class Card {
    constructor(cardSelector, userId, data, { zoomedImageClick, like, offlike, deleteCardClick }) {
        this._cardSelector = cardSelector;
        this._zoomedImageClick = zoomedImageClick;
        this._deleteCardClick = deleteCardClick;

        this._name = data.name;
        this._link = data.link;
        this._like = like;
        this._userId = userId;
        this._offlike = offlike;

        this._countLikes = data.likes.length;
        this._carduserId = data.owner._id;


        this._id = data._id;
        this._likes = data.likes;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
        return cardElement;
    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', () => this._likesClick());
        this._deleteButton.addEventListener('click', () => this._deleteCard());
        this._elementPhoto.addEventListener('click', () => this._zoomedImageClick(this._name, this._link));
    }

    _likeCard() {
        this._likeButton.classList.toggle('element__button_active');
    }

    _deleteCard() {
        this._deleteCardClick(this._id, this._cardElement);
    }

    _deletelikeCard() {
        this._likeButton.classList.remove('element__button_active');
    }

    _hideDeleteCard() {
        this._deleteButton.classList.add('element__button-delete-disabled');
    }

    _likesClick() {
        if (this._likeButton.classList.contains('element__button_active')) {

            this._deletelikeCard();
            this._offlike(this._id);

        } else {

            this._likeCard();
            this._like(this._id);

        }
    }
    _checkLike() {
        const search = this._likes.some(like => like._id === this._userId);
        if (search) {
            this._likeCard();
        } else
            this._deletelikeCard();
    }

    updateLike(count) {
        this._elementCounter.textContent = count;
    }

    _checkIdCard() {
        if (this._carduserId !== this._userId) {
            this._hideDeleteCard();
        } else {
            true;
        }
    }

    generateCard() {
        this._cardElement = this._getTemplate();
        this._cardElement.setAttribute('id', `${this._id}`);

        this._cardElement.querySelector('.element__title').textContent = this._name;
        this._elementPhoto = this._cardElement.querySelector('.element__photo');
        this._likeButton = this._cardElement.querySelector('.element__button');
        this._deleteButton = this._cardElement.querySelector('.element__button-delete');
        this._elementCounter = this._cardElement.querySelector('.element__like-counter');

        this._elementPhoto.src = this._link;
        this._elementPhoto.alt = this._name;

        this._checkLike();
        this._checkIdCard();
        this.updateLike(this._countLikes);
        this._setEventListeners();

        return this._cardElement;
    }
}

export { Card }
