import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <>
      <div className="page__container">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>

      <PopupWithForm
        name="avatar-popup"
        title="Обновить аватар"
        isOpened={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__field">
          <input
            id="input-avatar-link"
            className="popup__input"
            type="url"
            name="avatar"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__error input-avatar-link-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name="profile-popup"
        title="Редактировать профиль"
        isOpened={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <>
          <label className="popup__field">
            <input
              id="input-profile-name"
              className="popup__input"
              type="text"
              name="name"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="popup__error input-profile-name-error"></span>
          </label>
          <label className="popup__field">
            <input
              id="input-profile-about"
              className="popup__input"
              type="text"
              name="about"
              placeholder="О себе"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popup__error input-profile-about-error"></span>
          </label>
        </>
      </PopupWithForm>

      <PopupWithForm
        name="card-popup"
        title="Новое место"
        isOpened={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <>
          <label className="popup__field">
            <input
              id="input-card-name"
              className="popup__input"
              type="text"
              name="name"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="popup__error input-card-name-error"></span>
          </label>
          <label className="popup__field">
            <input
              id="input-card-link"
              className="popup__input"
              type="url"
              name="link"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__error input-card-link-error"></span>
          </label>
        </>
      </PopupWithForm>

      <PopupWithForm
        name="confirm-popup"
        title="Вы уверены?"
        isOpened={false}
        onClose={closeAllPopups}
      />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </>
  );
}

export default App;
