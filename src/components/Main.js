import React from 'react';
import Card from './Card';
import api from '../utils/Api';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()]).then(([data, initialCards]) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
      setCards([...initialCards]);
    });
  }, []);

  return (
    <main className="content">
      <section className="profile content__profile">
        <div className="profile__avatar">
          <img className="profile__avatar-image" src={userAvatar} alt="Аватар" />
          <div onClick={props.onEditAvatar} className="profile__avatar-overlay"></div>
        </div>
        <div className="profile__info">
          <div className="profile__edit-container">
            <h1 className="profile__name">{userName}</h1>
            <button
              onClick={props.onEditProfile}
              className="button profile__edit-button"
              type="button"
              aria-label="Редактировать"
            ></button>
          </div>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button
          onClick={props.onAddPlace}
          className="button profile__add-button"
          type="button"
          aria-label="Добавить"
        ></button>
      </section>
      <section className="cards content__cards">
        <ul className="cards__container">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={props.onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
