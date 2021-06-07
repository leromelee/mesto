let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__button-close');
let profileName = document.querySelector('.profile__name');
let profileDisc = document.querySelector('.profile__disc');
let saveForm = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__name');
let discInput = document.querySelector('.popup__disc');



function activePopup() {
    popup.classList.add('popup_active');
    nameInput.value = profileName.textContent;
    discInput.value = profileDisc.textContent;
}

function closePopup() {
    popup.classList.remove('popup_active');
}

function submitForm(submit) {
    submit.preventDefault();
    profileName.textContent = nameInput.value;
    profileDisc.textContent = discInput.value;
    closePopup();
}

editButton.addEventListener('click', activePopup);
closeButton.addEventListener('click', closePopup);
saveForm.addEventListener('submit', submitForm);