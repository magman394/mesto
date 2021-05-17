
export default class Card {
  constructor(name, link, likes, id, cardSelector, handleCardClick) {
      this._title = name;
      this._link = link;
      this._likes = likes;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
      this._id = id;
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

      document.querySelector('#popupDelCard').classList.add('popup_is-opened');

  }
  _whatiscard() {
    this._bottonDel = this._cardDel.querySelector('#bottonDel')
    if (this._id === '2f7202266f3b347a05adda12') {
      this._cardDel.classList.remove('element__btn');
      this._cardDel.classList.add('element__btn_delete');
      this._bottonDel.classList.add('element__btn_delete-active');
    } else {
      this._cardDel.classList.add('element__btn_delete');
      this._bottonDel.classList.add('element__btn_delete-active');
    }
  }

  generateCard() {
    this._element = this._getTemplate();
    this._imageCard = this._element.querySelector('#cardLink');
    this._imageTitle = this._element.querySelector('#cardTitle');
    this._cardLike = this._element.querySelector('.element__likes_like-btn');
    this._cardDel = this._element.querySelector('.element__btn');
    this._whatiscard();
    this._allLikes = this._element.querySelector('.element__likes_like-count');
    this._setEventListeners();
    this._imageTitle.textContent = this._title;
    this._allLikes.textContent = this._likes.length;
    this._imageCard.alt = this._title;
    this._imageCard.src = this._link;
    return this._element;

      }

}







