import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div class="page__container">
        <header class="header page__header">
          <a class="logo header__logo" href="/"></a>
        </header>
        <main class="content">
          <section class="profile content__profile">
            <div class="profile__avatar">
              <img class="profile__avatar-image" src="/" alt="Аватар" />
              <div class="profile__avatar-overlay"></div>
            </div>
            <div class="profile__info">
              <div class="profile__edit-container">
                <h1 class="profile__name"></h1>
                <button class="button profile__edit-button" type="button" aria-label="Редактировать"></button>
              </div>
              <p class="profile__about"></p>
            </div>
            <button class="button profile__add-button" type="button" aria-label="Добавить"></button>
          </section>
          <section class="cards content__cards">
            <ul class="cards__container"></ul>
          </section>
        </main>
        <footer class="footer page__footer">
          <p class="footer__copyright">&copy; 2023 Mesto Russia</p>
        </footer>
      </div>

      <div class="popup profile-popup">
        <div class="popup__container">
          <button class="button popup__close-button" type="button" aria-label="Закрыть"></button>
          <h2 class="popup__title">Редактировать профиль</h2>
          <form class="popup__form" name="profile-form" novalidate>
            <label class="popup__field">
              <input
                id="input-profile-name"
                class="popup__input"
                type="text"
                name="name"
                placeholder="Имя"
                minlength="2"
                maxlength="40"
                required
              />
              <span class="popup__error input-profile-name-error"></span>
            </label>
            <label class="popup__field">
              <input
                id="input-profile-about"
                class="popup__input"
                type="text"
                name="about"
                placeholder="О себе"
                minlength="2"
                maxlength="200"
                required
              />
              <span class="popup__error input-profile-about-error"></span>
            </label>
            <button class="button popup__submit-button" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div class="popup avatar-popup">
        <div class="popup__container">
          <button class="button popup__close-button" type="button" aria-label="Закрыть"></button>
          <h2 class="popup__title">Обновить аватар</h2>
          <form class="popup__form" name="avatar-form" novalidate>
            <label class="popup__field">
              <input
                id="input-avatar-link"
                class="popup__input"
                type="url"
                name="avatar"
                placeholder="Ссылка на картинку"
                required
              />
              <span class="popup__error input-avatar-link-error"></span>
            </label>
            <button class="button popup__submit-button" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div class="popup card-popup">
        <div class="popup__container">
          <button class="button popup__close-button" type="button" aria-label="Закрыть"></button>
          <h2 class="popup__title">Новое место</h2>
          <form class="popup__form" name="card-form" novalidate>
            <label class="popup__field">
              <input
                id="input-card-name"
                class="popup__input"
                type="text"
                name="name"
                placeholder="Название"
                minlength="2"
                maxlength="30"
                required
              />
              <span class="popup__error input-card-name-error"></span>
            </label>
            <label class="popup__field">
              <input
                id="input-card-link"
                class="popup__input"
                type="url"
                name="link"
                placeholder="Ссылка на картинку"
                required
              />
              <span class="popup__error input-card-link-error"></span>
            </label>
            <button class="button popup__submit-button" type="submit">
              Создать
            </button>
          </form>
        </div>
      </div>

      <div class="popup image-popup">
        <figure class="image-popup__container">
          <button class="button popup__close-button" type="button" aria-label="Закрыть"></button>
          <img class="image-popup__image" src="/" alt="" />
          <figcaption class="image-popup__caption"></figcaption>
        </figure>
      </div>

      <div class="popup confirm-popup">
        <div class="popup__container">
          <button class="button popup__close-button" type="button" aria-label="Закрыть"></button>
          <h2 class="popup__title">Вы уверены?</h2>
          <form class="popup__form" name="confirm-form" novalidate>
            <button class="button popup__submit-button" type="submit">
              Да
            </button>
          </form>
        </div>
      </div>

      <template id="card-template">
        <li class="card">
          <button class="button card__delete-button" type="button" aria-label="Удалить"></button>
          <img class="card__image" />
          <div class="card__title-section">
            <h2 class="card__title"></h2>
            <div class="card__like-container">
              <button class="button card__like-button" type="button" aria-label="Лайк"></button>
              <p class="card__like-counter"></p>
            </div>
          </div>
        </li>
      </template>
    </>
  );
}

export default App;
