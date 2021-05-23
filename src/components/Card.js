
export default class Card {
  constructor(name, link, likes, _id, cardid, cardSelector, handleCardClick, delSubmit, api, mylike) {
      this._title = name;
      this._link = link;
      this._likes = likes;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
      this._cardid = cardid;
      this._id = _id;
      this._api = api;
      this._popupopen = delSubmit;
      this._myLike = mylike;


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
        this.delCardClick();

     });

    }
  _mylike() {

    this._myLike.forEach(item => {
      if (item._id === '2f7202266f3b347a05adda12') {

        this._cardLike.classList.add('element__likes_active');
      } else {

        this._cardLike.classList.remove('element__likes_active');
      }
    });

  }

  _like() {
    this._cardLike.classList.toggle('element__likes_active');

    this._myLike.forEach(item => {
      this._myLikeID = item._id
    });

      if (this._myLikeID !== '2f7202266f3b347a05adda12') {
        this._allLikes.textContent = this._likes.length + 1;
        this._api.likeCard(this._cardid)
        .then(() => {
        }).catch((err) => alert(err));
      } else {
        this._allLikes.textContent = this._likes.length - 1;
        this._api.dellikeCard(this._cardid)
        .then(() => {
        }).catch((err) => alert(err));

      }

      return this._element;
}


  _whatiscard() {
    this._cardDel = this._element.querySelector('.element__btn_delete');
    this._bottonDel = this._cardDel.querySelector('#bottonDel')
    if (this._id === '2f7202266f3b347a05adda12') {

      this._cardDel.classList.remove('element__btn');
      this._cardDel.classList.add('element__btn_delete');
      this._bottonDel.classList.add('element__btn_delete-active');
    } else {
      this._cardDel.classList.remove('element__btn_delete');
      this._bottonDel.classList.add('element__btn_delete-active');
    }
  }
  delCardClick() {

    this._popupopen.open(() => {
    this._api.delmyCard(this._cardid)
    .then(() => {
      this._element.remove();

    }).catch((err) => alert(err));
  })
   }
  generateCard() {

    this._element = this._getTemplate();
    this._imageCard = this._element.querySelector('#cardLink');
    this._imageTitle = this._element.querySelector('#cardTitle');
    this._cardLike = this._element.querySelector('.element__likes_like-btn');
    this._mylike();
    this._whatiscard();

    this._setEventListeners();

    this._allLikes = this._element.querySelector('.element__likes_like-count');
    this._imageTitle.textContent = this._title;
    this._allLikes.textContent = this._likes.length;
    this._imageCard.alt = this._title;
    this._imageCard.src = this._link;
    return this._element;

      }

}







