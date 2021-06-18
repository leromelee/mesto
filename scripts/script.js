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
const zoomedImageTitle = document.querySelector('.popup__name');
const zoomedImage = document.querySelector('.popup__photo');
const elementTitle = document.querySelector('.element__title');
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
    popup.addEventListener('mousedown', function(evt) {
        if (evt.target === evt.currentTarget) {
            closePopup(popup);
        }
    });
}

function closePopup(popup) {
    popup.classList.remove('popup_active');
    document.removeEventListener("keydown", closePopupEsc);
    popup.removeEventListener('mousedown', function(evt) {
        if (evt.target === evt.currentTarget) {
            closePopup(popup);
        }
    });
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

closePopupEditProfileBtn.addEventListener('click', function() {
    closePopup(popupEditProfile);
});

function submitEditProfileForm(submit) {
    submit.preventDefault();
    profileName.textContent = nameInput.value;
    profileDisc.textContent = discInput.value;
    closePopup(popupEditProfile);
}

openPopupAddCardBtn.addEventListener('click', function() {
    openPopup(popupAddCard);
});

closePopupAddCardBtn.addEventListener('click', function() {
    closePopup(popupAddCard);
});

closePopupImageBtn.addEventListener('click', () => {
    closePopup(popupImage);
});

formEditProfile.addEventListener('submit', submitEditProfileForm);

function createCard(name, link) {
    const cardElement = cardTemplateElements.cloneNode(true);
    cardElement.querySelector('.element__button')
        .addEventListener('click', function(evt) {
            evt.target.classList.toggle('element__button_active');
        });
    cardElement.querySelector('.element__button-delete')
        .addEventListener('click', function(evt) {
            const deleteElement = evt.target.closest('.element');
            deleteElement.remove();
        });
    cardElement.querySelector('.element__photo')
        .addEventListener('click', function(evt) {
            zoomedImage.alt = evt.target.nextElementSibling.textContent;
            zoomedImage.src = evt.target.src;
            openPopup(popupImage);
        });
    const cardElementPhoto = cardElement.querySelector('.element__photo');
    cardElement.querySelector('.element__title').textContent = name;
    cardElementPhoto.alt = name;
    cardElementPhoto.src = link;
    zoomedImageTitle.innerText = inputCardName.value;
    zoomedImageTitle.innerText = name;

    return cardElement;

}

function submitFormCards(evt) {
    evt.preventDefault();
    cards.prepend(createCard(inputCardName.value, inputCardLink.value));
    formAddCard.reset();
    closePopup(popupAddCard);
};

initialCards.forEach(function(item) {
    cards.prepend(createCard(item.name, item.link));
});

formAddCard.addEventListener('submit', submitFormCards);