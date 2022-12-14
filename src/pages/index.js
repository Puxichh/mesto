import './index.css';
// переменные и функции
import {
  buttonAdd, 
  buttonEdit,
  fieldName,
  fieldDesc,
  cardsContainer,
  buttonAvatarEdit,
  dataUser
} from '../utils/constants.js';
import { renderLoading } from '../utils/utils.js';

// классы
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithDelete } from '../components/PopupWithDelete.js';
import { Api } from '../components/Api.js';

// API OOP
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-56',
  headers: {
    authorization: '69da42e9-c870-41de-9737-f87ee868307d',
    'Content-Type': 'application/json'
  }
});

// Функции для взаимодействия с сервером

// Информация профиля и создание карточек
Promise.all([
  api.infoProfile(),
  api.getInitialCards()
])
.then(([user, cards]) => {
  setUserInfo(user);
  userProfile.setUserAvatar(user.avatar);
  dataUser.userInfo = user;
  cardsSection.renderItems(cards);
})
.catch(err => console.log(err));
// функция редактирования профиля
const editProfile = fieldObj => {
  api.editProfile(fieldObj)
  .then(res => {
    setUserInfo(res);
    popupFormEdit.close();
  })
  .catch(err => console.log(err))
  .finally(() => {
    renderLoading(false, {text: 'Сохранить', popup: '.popup_type_edit'});
  });
}
// функция добавления карточки
const addCard = fieldObj => {
  api.addCard(fieldObj)
  .then(res => {
    cardsSection.addItem(createCard(res));
    popupFormAdd.close();
  })
  .catch(err => console.log(err))
  .finally(() => {
    renderLoading(false, {text: 'Создать', popup: '.popup_type_add'});
  });
}
// функция удаления карточки
const deleteCard = card => {
  api.deleteCard(card.cardId)
  .then(() => {
    card._element.remove();
    popupDeleteCard.close();
  })
  .catch(err => console.log(err));
}
// лайк карточки
const likeCard = card => {
  api.likeCard(card.cardId)
  .then(res => {
    card.setLikes(res);
  })
  .catch(err => console.log(err));
}
// удаление лайка с карточки
const deleteLikeCard = card => {
  api.deleteLikeCard(card.cardId)
  .then(res => {
    card.setLikes(res);
  })
  .catch(err => console.log(err));
}
// функция изменения аватара
const editAvatar = fieldObj => {
  api.editAvatar(fieldObj.edit)
  .then(() => {
    userProfile.setUserAvatar(fieldObj.edit);
    popupFormAvatar.close();
  })
  .catch(err => console.log(err))
  .finally(() => {
    renderLoading(false, {text: 'Сохранить', popup: '.popup_type_edit-avatar'});
  });
}


// popup open/close
const userProfile = new UserInfo({
  userName: '.profile__name', 
  userDesc: '.profile__description',
  avatar: '.profile__avatar'
});
const setUserInfo = obj => {
  userProfile.setUserInfo(obj);
}

const openPopupEdit = () => {
  popupFormEdit.open();

  const userInfo = userProfile.getUserInfo();

  fieldName.value = userInfo.name;
  fieldDesc.value = userInfo.desc;
}
const openPopupAdd = () => {
  popupFormAdd.open();
}
const openFormAvatar = () => {
  popupFormAvatar.open();
}

// profile edit
const popupFormEdit = new PopupWithForm('.popup_type_edit', {submit: fieldObj => {
  editProfile(fieldObj);

  renderLoading(true, {popup: '.popup_type_edit'});
}});
popupFormEdit.setEventListeners();

// все, что связано с карточками
const popupOpenImage = new PopupWithImage('.popup_type_expansion');
popupOpenImage.setEventListeners();
const popupDeleteCard = new PopupWithDelete('.popup_type_delete', {deleteCard: card => {
  deleteCard(card);
}});
popupDeleteCard.setEventListeners();

const createCard = item => {
  const card = new Card(item, '.pattern-card', {dataUser, handleCardClick: (link, title) => {
    popupOpenImage.open(link, title);
  },
  handleDeleteClick: () => {
    popupDeleteCard.open();
    popupDeleteCard.setCardDelete(card);
  },
  likeCardApi: () => {
    if(!card.isLiked()) {
      likeCard(card);
    } else {
      deleteLikeCard(card);
    }
  }
});

  const cardElement = card.generateCard();
  
  return cardElement;
}

const cardsSection = new Section({renderer: cardItem => {
  cardsSection.addItem(createCard(cardItem));
}}, cardsContainer);


// popup добавления карточки пользователем
const popupFormAdd = new PopupWithForm('.popup_type_add', {submit: fieldObj => {  
  addCard(fieldObj);

  renderLoading(true, {popup: '.popup_type_add'});
}});
popupFormAdd.setEventListeners();

// avatar edit
const popupFormAvatar = new PopupWithForm('.popup_type_edit-avatar', {submit: fieldObj => {
  editAvatar(fieldObj);

  renderLoading(true, {popup: '.popup_type_edit-avatar'});
}});
popupFormAvatar.setEventListeners();

// валидация форм
const enableValidation = config => {
  const formsList = Array.from(document.querySelectorAll(config.formSelector));

  formsList.forEach(form => {
    const validate = new FormValidator(config, form);
    validate.enableValidation();
  });
}
// селекторы для валидации
enableValidation({
  formSelector: '.form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__field_error'
});

// события
buttonEdit.addEventListener('click', openPopupEdit);
buttonAdd.addEventListener('click', openPopupAdd);
buttonAvatarEdit.addEventListener('click', openFormAvatar);