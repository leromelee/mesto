/* IMPORTS */

import './index.css';
import { Card } from './../components/Card.js';
import Section from './../components/Section.js';
import UserInfo from './../components/UserInfo.js';
import PopupWithImage from './../components/PopupWithImage.js';
import PopupWithForm from './../components/PopupWithForm.js';
import { FormValidator } from './../components/FormValidator.js';
import Api from './../components/Api.js';
import PopupWithSubmit from './../components/PopupWithSubmit.js';

import {
    openPopupEditProfileBtn,
    formEditProfile,
    openPopupAddCardBtn,
    addCardForm,
    containerSelector,
    settings,
    nameInput,
    discInput,
    openPopupEditAvatarBtn,
    formEditAvatar
} from './../utils/constants.js';

/* VARIABLES AND FUNCTION */

let userId = null;

function fillEditProfileFormInputs() {
    nameInput.value = userInfo.getUserInfo().profileName;
    discInput.value = userInfo.getUserInfo().profileDisc;
}

/* CLASSES AND EVENTS*/

const call = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-26/',
    headers: {
        authorization: 'e343e8e1-608e-40c1-bda2-485b4f9fb449',
        'Content-Type': 'application/json'
    }
});

const userInfo = new UserInfo({
    nameSelector: '.profile__name',
    discSelector: '.profile__disc',
    avatarSelector: '.profile__avatar'
});

call.getUserInfo()
    .then((res) => {
        userInfo.setUserInfo(res);
        userId = res._id;
    })
    .catch((err) => {
        console.log(err);
    })
    .then(() => {
        call.getInitialCards()
            .then((data) => {
                defaultCardList.renderItems(data, 'init');
            })
            .catch((err) => {
                console.log(err);
            });
    })


const popupImage = new PopupWithImage('.popup_type_closecard');
popupImage.setEventListeners();

const addCardPopup = new PopupWithForm('.popup_type_addcard', {
    submit: (data) => {
        addCardPopup.renderLoading(true);
        call.postAddCard(data)
            .then((res) => {
                defaultCardList.setItem(res, 'other');
            })
            .then(() => {
                addCardPopup.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                addCardPopup.renderLoading(false);
            })

    },
    input: () => {
        cardForm.resetValidation();
    }
});
addCardPopup.setEventListeners();

const editProfilePopup = new PopupWithForm('.popup_type_editprofile', {
    submit: (data) => {
        editProfilePopup.renderLoading(true);
        call.patchUserInfo(data)
            .then((res) => {
                userInfo.setUserInfo(res);
            })
            .then(() => {
                editProfilePopup.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                editProfilePopup.renderLoading(false);
            })
    },
    input: () => {
        fillEditProfileFormInputs();
        profileForm.resetValidation();
    }
});

editProfilePopup.setEventListeners();

const avatarFormPopup = new PopupWithForm('.popup_type_editavatar', {
    submit: (data) => {
        avatarFormPopup.renderLoading(true);
        call.editAvatar(data)
            .then((res) => {
                userInfo.editAvatar(res);
            })
            .then(() => {
                avatarFormPopup.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                avatarFormPopup.renderLoading(false);
            })
    },
    input: () => {
        avatarForm.resetValidation();
    }
});
avatarFormPopup.setEventListeners();

const popupSubmit = new PopupWithSubmit('.popup_type_submit', {
    call: (id, data) => {
        call.deletePhoto(id)
            .then(() => {
                data.remove();
            })
            .then(() => {
                popupSubmit.close();
            })
            .catch((err) => {
                console.log(err);
            })
    }

});

const defaultCardList = new Section({
        renderer: (data) => {
            const card = new Card('.template-card', userId, data, {
                zoomedImageClick: () => {
                    popupImage.open(data.name, data.link);
                },
                like: (id) => {
                    call.setLike(id)
                        .then((data) => {
                            return data.likes.length
                        })
                        .then((data) => {
                            card.updateLike(data);
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                },
                offlike: (id) => {
                    call.deleteLike(id)
                        .then((data) => {
                            return data.likes.length
                        })
                        .then((data) => {
                            card.updateLike(data);
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                },
                deleteCardClick: (id, data) => {
                    popupSubmit.open(id, data);
                }
            })
            const cardElement = card.generateCard();
            return cardElement;
        }
    },
    containerSelector);





/* BUTTONS */

openPopupAddCardBtn.addEventListener('click', () => { addCardPopup.open(); });

openPopupEditProfileBtn.addEventListener('click', () => { editProfilePopup.open(); });

openPopupEditAvatarBtn.addEventListener('click', () => { avatarFormPopup.open(); });


/* VALIDATION */

const cardForm = new FormValidator(settings, addCardForm);
const profileForm = new FormValidator(settings, formEditProfile);
const avatarForm = new FormValidator(settings, formEditAvatar);

[profileForm, cardForm, avatarForm].forEach(formValidator => formValidator.enableValidation());
