function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <>
      <button className="button card__delete-button" type="button" aria-label="Удалить"></button>
      <img onClick={handleClick} className="card__image" src={card.link} alt={card.name} />
      <div className="card__title-section">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button className="button card__like-button" type="button" aria-label="Лайк"></button>
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
