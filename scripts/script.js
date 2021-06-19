const popups = document.querySelectorAll('.popup');
const cards = document.querySelector('.card');
const closePopupEditProfileBtn = document.querySelector('.popup__button-close');
const formEditProfile = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_form_name');
const popupEditProfile = document.querySelector('.popup_type_editprofile');
const discInput = document.querySelector('.popup__input_form_disc');
const profile = document.querySelector('.profile');
const openPopupAddCardBtn = document.querySelector('.profile__add-button');
const openPopupEditProfileBtn = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileDisc = document.querySelector('.profile__disc');
const popupAddCard = document.querySelector('.popup_type_addcard');
const inputCardName = popupAddCard.querySelector('.popup__input_form_title');
const inputCardLink = popupAddCard.querySelector('.popup__input_form_link');
const formAddCard = popupAddCard.querySelector('.popup__form');
const closePopupAddCardBtn = popupAddCard.querySelector('.popup__button-close');
const popupImage = document.querySelector('.popup_type_closecard');
const popupSubmitBtn = popupAddCard.querySelector('.popup__save');
const zoomedImageTitle = document.querySelector('.popup__name');
const zoomedImage = document.querySelector('.popup__photo');
const closePopupImageBtn = popupImage.querySelector('.popup__button-close');
const cardTemplate = document.querySelector('.template-card');
const cardTemplateElements = cardTemplate.content;

function fillEditProfileFormInputs() {
    nameInput.value = profileName.textContent;
    discInput.value = profileDisc.textContent;
}

function openPopup(popup) {
    popup.classList.add('popup_active');
    document.addEventListener("keydown", closePopupEsc);
}

function closePopup(popup) {
    popup.classList.remove('popup_active');
    document.removeEventListener("keydown", closePopupEsc);
}

const closePopupEsc = (evt) => {
    if (evt.key === "Escape") {
        const activePopup = document.querySelector(".popup_active");
        closePopup(activePopup);
    }
};

openPopupEditProfileBtn.addEventListener('click',
    function() {
        openPopup(popupEditProfile);
        fillEditProfileFormInputs();
    });

openPopupAddCardBtn.addEventListener('click', function() {
    openPopup(popupAddCard);
});

function submitEditProfileForm(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDisc.textContent = discInput.value;
    closePopup(popupEditProfile);
}

formEditProfile.addEventListener('submit', submitEditProfileForm);

function createCard(name, link) {
    const cardElement = cardTemplateElements.cloneNode(true);
    const cardName = cardElement.querySelector('.element__title');
    const cardElementPhoto = cardElement.querySelector('.element__photo');
    cardElement.querySelector('.element__button')
        .addEventListener('click', function(evt) {
            evt.target.classList.toggle('element__button_active');

        });
    cardElement.querySelector('.element__button-delete')
        .addEventListener('click', function(evt) {
            const deleteElement = evt.target.closest('.element');
            deleteElement.remove();
        });
    cardElementPhoto.addEventListener('click', function(evt) {
        zoomedImageTitle.textContent = name
        zoomedImage.alt = evt.target.nextElementSibling.textContent;
        zoomedImage.src = evt.target.src;
        openPopup(popupImage);
    });
    cardElementPhoto.alt = name;
    cardElementPhoto.src = link;
    cardName.innerText = name;

    return cardElement;

}

function submitFormCards(evt) {
    evt.preventDefault();
    cards.prepend(createCard(inputCardName.value, inputCardLink.value));
    formAddCard.reset();
    closePopup(popupAddCard);
    popupSubmitBtn.classList.add('popup__save_disabled');
    popupSubmitBtn.disabled = true;
};

initialCards.forEach(function(item) {
    cards.prepend(createCard(item.name, item.link));
});

formAddCard.addEventListener('submit', submitFormCards);

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
