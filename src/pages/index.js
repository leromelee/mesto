import './index.css';

import { initialCards } from '../utils/initial-cards.js'
import { Card } from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js'
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js"

import {
    settings,
    formEditProfile,
    nameInput,
    discInput,
    openPopupAddCardBtn,
    openPopupEditProfileBtn,
    profileName,
    profileDisc,
    inputCardName,
    inputCardLink,
    formAddCard
} from '../utils/constants.js'

const userInfo = new UserInfo(
    '.profile__name',
    '.profile__disc'
);

const popupImage = new PopupWithImage('.popup_type_closecard');
popupImage.setEventListeners();

const addCardPopup = new PopupWithForm('.popup_type_addcard', (data) => {
    submitFormCards(data);
});
addCardPopup.setEventListeners();

const editProfilePopup = new PopupWithForm('.popup_type_editprofile', (data) => {
    submitEditProfileForm(data);
});
editProfilePopup.setEventListeners();

const cardSection = new Section({
        data: initialCards,
        renderer: (item) => prependCard(item)
    },
    '.card');

cardSection.renderItems();

function createCard(item, cardTemplate = '.template-card') {
    const card = new Card(item, cardTemplate, () => { popupImage.open(item.link, item.name) });
    const cardElement = card.generateCard();
    return cardElement;
}

function prependCard(cardElement) {
    const newCard = createCard(cardElement);
    cardSection.setItem(newCard);
}


function fillEditProfileFormInputs() {
    nameInput.value = profileName.textContent;
    discInput.value = profileDisc.textContent;
}


openPopupEditProfileBtn.addEventListener('click',
    function() {
        editProfilePopup.open();
        fillEditProfileFormInputs();
        formEditProfileValidator.resetValidation();
    });

openPopupAddCardBtn.addEventListener('click', function() {
    addCardPopup.open();
    formAddCardValidator.resetValidation();
});

function submitEditProfileForm(data) {
    userInfo.setUserInfo(data);
    editProfilePopup.close();
}

function submitFormCards() {
    const item = {
        name: inputCardName.value,
        link: inputCardLink.value
    }
    prependCard(item);
    addCardPopup.close();
    formAddCardValidator.resetValidation();
}

const formEditProfileValidator = new FormValidator(settings, formEditProfile);
const formAddCardValidator = new FormValidator(settings, formAddCard);

[formEditProfileValidator, formAddCardValidator].forEach(formValidator => formValidator.enableValidation());
