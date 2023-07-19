import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpened, onClose, onUpdateAvatar }) {
  const avatar = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();

    onUpdateAvatar({
      avatar: avatar.current.value,
    });

    event.target.reset();
  }

  return (
    <PopupWithForm
      name="avatar-popup"
      title="Обновить аватар"
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          id="input-avatar-link"
          className="popup__input"
          type="url"
          name="avatar"
          placeholder="Ссылка на картинку"
          required
          ref={avatar}
        />
        <span className="popup__error input-avatar-link-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
