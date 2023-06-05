function PopupWithForm(props) {
  return (
    <div className={`popup ${props.name} ${props.isOpened && 'popup_opened'}`}>
      <div className="popup__container">
        <button
          onClick={props.onClose}
          className="button popup__close-button"
          type="button"
          aria-label="Закрыть"
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={props.name} noValidate>
          {props.children}
          <button className="button popup__submit-button" type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
