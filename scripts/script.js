import { initialCards } from './initial-cards.js'
import { Card } from './Card.js'
import { FormValidator } from './FormValidator.js'
const popups = document.querySelectorAll('.popup');
const cards = document.querySelector('.card');
const formEditProfile = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_form_name');
const popupEditProfile = document.querySelector('.popup_type_editprofile');
const discInput = document.querySelector('.popup__input_form_disc');
const openPopupAddCardBtn = document.querySelector('.profile__add-button');
const openPopupEditProfileBtn = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileDisc = document.querySelector('.profile__disc');
const popupAddCard = document.querySelector('.popup_type_addcard');
const inputCardName = popupAddCard.querySelector('.popup__input_form_title');
const inputCardLink = popupAddCard.querySelector('.popup__input_form_link');
const formAddCard = popupAddCard.querySelector('.popup__form');
const popupImage = document.querySelector('.popup_type_closecard');
const zoomedImageTitle = document.querySelector('.popup__name');
const zoomedImage = document.querySelector('.popup__photo');

const settings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error'
};

const formEditProfileValidator = new FormValidator(settings, formEditProfile);
const formAddCardValidator = new FormValidator(settings, formAddCard);


function fillEditProfileFormInputs() {
    nameInput.value = profileName.textContent;
    discInput.value = profileDisc.textContent;
}

function openPopup(popup) {
    popup.classList.add('popup_active');
    document.addEventListener('keydown', closePopupEsc);
}

function closePopup(popup) {
    popup.classList.remove('popup_active');
    document.removeEventListener('keydown', closePopupEsc);
}

const closePopupEsc = (evt) => {
    if (evt.key === 'Escape') {
        const activePopup = document.querySelector('.popup_active');
        closePopup(activePopup);
    }
};

openPopupEditProfileBtn.addEventListener('click',
    function() {
        openPopup(popupEditProfile);
        fillEditProfileFormInputs();
        formEditProfileValidator.enableValidation();
    });

openPopupAddCardBtn.addEventListener('click', function() {
    openPopup(popupAddCard);
    formAddCardValidator.resetValidation();
});


function createCard(item, cardTemplate = '.template-card') {
    const card = new Card(item, cardTemplate, cardElementPhoto);
    const cardElement = card.generateCard();
    return cardElement;
}

function cardElementPhoto(name, link) {
    zoomedImage.src = link;
    zoomedImage.alt = name;
    zoomedImageTitle.textContent = name;
    openPopup(popupImage);
}

function prependCard(cardElement) {
    cards.prepend(cardElement);
}

initialCards.forEach(function(item) {
    const cardElement = createCard(item);
    prependCard(cardElement);
});

function submitFormCards(evt) {
    evt.preventDefault();
    const item = {
        name: inputCardName.value,
        link: inputCardLink.value
    };
    const card = createCard(item);
    prependCard(card);
    formAddCard.reset();
    closePopup(popupAddCard);
}


function submitEditProfileForm(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDisc.textContent = discInput.value;
    closePopup(popupEditProfile);
}


popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_active')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__button-close')) {
            closePopup(popup)
        }
    })
})

formEditProfile.addEventListener('submit', submitEditProfileForm);
formAddCard.addEventListener('submit', submitFormCards);

[formEditProfileValidator, formAddCardValidator].forEach(formValidator => formValidator.enableValidation());
