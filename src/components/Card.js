function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="card">
      <button className="button card__delete-button" type="button" aria-label="Удалить"></button>
      <img onClick={handleClick} className="card__image" src={props.card.link} alt={props.card.name} />
      <div className="card__title-section">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-container">
          <button className="button card__like-button" type="button" aria-label="Лайк"></button>
          <p className="card__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
