const popup = document.querySelector('.popup');
const root = document.querySelector('.root');
const main = document.querySelector('.main');
const cards = document.querySelector('.card');
const closeButton = popup.querySelector('.popup__button-close');
const saveForm = popup.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_form_name');
const popupEditProfile = document.querySelector('.popup_type_editprofile');
const discInput = document.querySelector('.popup__input_form_disc');
const profile = document.querySelector('.profile');
const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileDisc = document.querySelector('.profile__disc');
const squareButton = cards.querySelector('.element__photo')
const popupAddCard = document.querySelector('.popup_type_addcard');
const addCardTitle = popupAddCard.querySelector('.popup__input_form_title');
const addCardLink = popupAddCard.querySelector('.popup__input_form_link');
const addForm = popupAddCard.querySelector('.popup__form');
const closeButtonAdd = popupAddCard.querySelector('.popup__button-close');
const popupCloseCard = document.querySelector('.popup_type_closecard');
const closeCardName = document.querySelector('.popup__name');
const closeCardPhoto = document.querySelector('.popup__photo');
const closeButtonCard = popupCloseCard.querySelector('.popup__button-close');
const cardTemplate = document.querySelector('#card-template')
const cardTemplateElements = cardTemplate.content;

const initialCards = [{
        name: 'Манхэттен',
        link: 'https://images.unsplash.com/photo-1512850183-6d7990f42385?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
        name: 'Лондон',
        link: 'https://images.unsplash.com/photo-1534800891164-a1d96b5114e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=696&q=80'
    },
    {
        name: 'Москва',
        link: 'https://images.unsplash.com/photo-1514813621023-7a1e3fca8c1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
        name: 'Манчестер',
        link: 'https://images.unsplash.com/photo-1515586838455-8f8f940d6853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1284&q=80'
    },
    {
        name: 'Вашингтон',
        link: 'https://images.unsplash.com/photo-1501466044931-62695aada8e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1278&q=80'
    },
    {
        name: 'Санкт-Петербург',
        link: 'https://images.unsplash.com/photo-1556610961-2fecc5927173?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1520&q=80'
    }
];


function takeInputs() {
    nameInput.value = profileName.textContent;
    discInput.value = profileDisc.textContent;
}

function activePopup(popup) {
    return function() {
        popup.classList.add('popup_active');
        takeInputs();
    }
}

function closePopup(popup) {
    return popup.classList.remove('popup_active');
}

editButton.addEventListener('click', activePopup(popupEditProfile));

closeButton.addEventListener('click', function() {
    closePopup(popupEditProfile);
});

function submitForm(submit) {
    submit.preventDefault();
    profileName.textContent = nameInput.value;
    profileDisc.textContent = discInput.value;
    closePopup(popupEditProfile);
}

addButton.addEventListener('click', activePopup(popupAddCard));

closeButtonAdd.addEventListener('click', function() {
    closePopup(popupAddCard);
});

closeButtonCard.addEventListener('click', () => {
    closePopup(popupCloseCard);
});

saveForm.addEventListener('submit', submitForm);

function generCard(name, link) {
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
            closeCardName.textContent = evt.target.nextElementSibling.textContent;
            closeCardPhoto.alt = evt.target.nextElementSibling.textContent;
            closeCardPhoto.src = evt.target.src;
            activePopup(popupCloseCard)(popup);
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
    cards.prepend(generCard(addCardTitle.value, addCardLink.value));
    addForm.reset();
    closePopup(popupAddCard);
};

initialCards.forEach(function(item) {
    cards.prepend(generCard(item.name, item.link));
});

addForm.addEventListener('submit', submitFormCards);