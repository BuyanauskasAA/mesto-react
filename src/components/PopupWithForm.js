function PopupWithForm({ name, title, children, isOpened, onClose, onSubmit, textButton }) {
  return (
    <div className={`popup ${name} ${isOpened ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button
          onClick={onClose}
          className="button popup__close-button"
          type="button"
          aria-label="Закрыть"
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form onSubmit={onSubmit} className="popup__form" name={name} noValidate>
          {children}
          <button className="button popup__submit-button" type="submit">
            {textButton}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
