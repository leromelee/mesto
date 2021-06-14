const root = document.querySelector('.root');
const main = document.querySelector('.main');
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
const closePopupImageBtn = popupImage.querySelector('.popup__button-close');
const cardTemplate = document.querySelector('#card-template');
const cardTemplateElements = cardTemplate.content;




/* function fillEditProfileFormInputs() {
    nameInput.value = profileName.textContent;
    discInput.value = profileDisc.textContent;
} */


/* Если убираю замыкание, то поп-апы начинаются сами открываться при загрузке страницы, не понимаю почему. */
function openPopup(popup) {
    return function() {
        popup.classList.add('popup_active');
    }
}


function closePopup(popup) {
    return popup.classList.remove('popup_active');
}

openPopupEditProfileBtn.addEventListener('click', openPopup(popupEditProfile));

closePopupEditProfileBtn.addEventListener('click', function() {
    closePopup(popupEditProfile);
});

function submitEditProfileForm(submit) {
    submit.preventDefault();
    profileName.textContent = nameInput.value;
    profileDisc.textContent = discInput.value;
    formEditProfile.reset();
    closePopup(popupEditProfile);
}

openPopupAddCardBtn.addEventListener('click', openPopup(popupAddCard));

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
            zoomedImageTitle.textContent = evt.target.nextElementSibling.textContent;
            zoomedImage.alt = evt.target.nextElementSibling.textContent;
            zoomedImage.src = evt.target.src;
            openPopup(popupImage)();
        });
    const cardElementPhoto = cardElement.querySelector('.element__photo');
    cardElement.querySelector('.element__title')
        .textContent = name;
    cardElementPhoto.alt = name;
    cardElementPhoto.src = link;


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
