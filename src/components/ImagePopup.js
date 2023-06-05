function ImagePopup({ card, onClose }) {
  const isEmptyCard = Object.keys(card).length === 0;

  return (
    <div className={`popup image-popup ${isEmptyCard ? '' : 'popup_opened'}`}>
      <figure className="image-popup__container">
        <button
          onClick={onClose}
          className="button popup__close-button"
          type="button"
          aria-label="Закрыть"
        ></button>
        <img className="image-popup__image" src={card && card.link} alt={card && card.name} />
        <figcaption className="image-popup__caption">{card && card.name}</figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
