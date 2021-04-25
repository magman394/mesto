
export default class Card {
  constructor(name, link, cardSelector, handleCardClick) {
      this._title = name;
      this._link = link;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('#cardElement')
      .cloneNode(true);
    return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._like();
    this._delete();

    this._element.querySelector('#cardTitle').textContent = this._title;
    this._element.querySelector('#cardLink').alt = this._title;
    this._element.querySelector('#cardLink').src = this._link;
    return this._element;

      }
  _setEventListeners() {
    this._element.querySelector('#cardLink').addEventListener('click', () => {
     this._handleCardClick();
    });
    this._element.querySelector('#cardLink').addEventListener('click', () => {
      this._like();
     });
     this._element.querySelector('#cardLink').addEventListener('click', () => {
      this._delete();
     });

    }
  _like() {
    this._element.querySelector('.element__like').addEventListener('click', (evt) => {
      evt.target.classList.toggle('element__like_active');
    });
  }
  _delete() {
    this._element.querySelector('.element__btn').addEventListener('click', () => {
    document.querySelector('#cardElement').remove();
  });
  }
}







