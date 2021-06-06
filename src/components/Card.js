
export default class Card {
  constructor(name, link, likes, _id, cardid, cardSelector, handleCardClick, delSubmit, api, arrlikes, myid) {
      this._title = name;
      this._link = link;
      this._likes = likes;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
      this._cardid = cardid;
      this._id = _id;
      this._api = api;
      this._popupopen = delSubmit;
      this._arrLikes = arrlikes;
      this._myid = myid._myid;

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
      this._arrLikes.forEach(item => {
        this._arrLikeID = item._id
      });
      this._botton = this._element.querySelector('#likebutton');

      if (this._botton.classList.contains('element__likes_active'))
      { this._api.dellikeCard(this._cardid).then(() => {
        this._dellike();
      }).catch((err) => alert(err));

      } else {
        this._api.likeCard(this._cardid).then(() => {
          this._addlike();
        }).catch((err) => alert(err));

      }
     });
      this._cardDel.addEventListener('click', () => {
        this.delCardClick();
     });

    }
  _mylike() {
    this._arrLikes.forEach(item => {
      if (item._id === this._myid) {
        this._cardLike.classList.add('element__likes_active');
      } else {
        this._cardLike.classList.remove('element__likes_active');
      }
    });
  }
  _dellike() {
        this._cardLike.classList.toggle('element__likes_active');
        this._allLikes.textContent = this._likes.length -= 1;
}
  _addlike() {
    this._cardLike.classList.toggle('element__likes_active');
    this._allLikes.textContent = this._likes.length += 1;


  }
  _whatiscard() {
    this._cardDel = this._element.querySelector('.element__btn_delete');
    this._bottonDel = this._cardDel.querySelector('#bottonDel')
    if (this._id === this._myid) {

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
      this._popupopen.close();
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







