
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
  _setEventListeners() {
    this._imageCard.addEventListener('click', () => {
     this._handleCardClick();
    });
    this._cardLike.addEventListener('click', () => {
      this._like();
     });
     this._cardDel.addEventListener('click', () => {
      this._delete();
     });

    }
  _like() {
    this._cardLike.classList.toggle('element__likes_active');
  }
  _delete() {
      this._element.remove();
  }

  generateCard() {
    this._element = this._getTemplate();
    this._imageCard = this._element.querySelector('#cardLink');
    this._imageTitle = this._element.querySelector('#cardTitle');
    this._cardLike = this._element.querySelector('.element__likes_like-btn');
    this._cardDel = this._element.querySelector('.element__btn');
    this._setEventListeners();

    this._imageTitle.textContent = this._title;
    this._imageCard.alt = this._title;
    this._imageCard.src = this._link;
    return this._element;

      }

}







