export default class API {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }
  _getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }
  getAllTasks() {
    return fetch(this._url + 'cards', {
      method: "GET",
      headers: this._headers }).then(res => this._getResponseData(res))
  }
  getUserInfo() {
    return fetch(this._url + 'users/me', {
      method: "GET",
      headers: this._headers }).then(res => this._getResponseData(res))
  }
  getAllPromise() {
    return Promise.all([this.getUserInfo(), this.getAllTasks()]);
  }
  addTask(item) {
    return fetch(this._url + 'cards', {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({name: item.name, link: item.link})
    }).then(res => this._getResponseData(res))
  }
  delmyCard(id) {
    return fetch(`${this._url + 'cards/'}${id}`,  {
      method: "DELETE",
      headers: this._headers,
    }).then(res => this._getResponseData(res))
  }
  likeCard(id) {
    return fetch(`${this._url + 'cards/likes/'}${id}`,  {
      method: "PUT",
      headers: this._headers,
    }).then(res => this._getResponseData(res))
  }
  dellikeCard(id) {
    return fetch(`${this._url + 'cards/likes/'}${id}`,  {
      method: "DELETE",
      headers: this._headers,
    }).then(res => this._getResponseData(res))
  }
  patchUserInfo(profileAutor, profileProff) {
    return fetch(this._url + 'users/me', {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({name: profileAutor, about: profileProff}) }).then(res => this._getResponseData(res))
  }
  patchUserAvatar(profileAvatar) {
    return fetch(this._url + 'users/me/avatar', {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({avatar: profileAvatar}) }).then(res => this._getResponseData(res))
}

}
