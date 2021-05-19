export default class API {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }
  getAllTasks() {
    return fetch(this._url + 'cards', {
      method: "GET",
      headers: this._headers }).then((res) => {
      if (res.ok) {
        return res.json();
      }
        return Promise.reject('Произошла ошибка');
    })
  }
  getUserInfo() {
    return fetch(this._url + 'users/me', {
      method: "GET",
      headers: this._headers }).then((res) => {
      if (res.ok) {
        return res.json();
      }
        return Promise.reject('Произошла ошибка');
    })
  }
  getAllPromise() {
    return Promise.all([this.getUserInfo(), this.getAllTasks()]);

  }
  addTask(item) {
    return fetch(this._url + 'cards', {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({name: item.name, link: item.link})
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
        return Promise.reject('Произошла ошибка');
    })

  }
  delmyCard(id) {
    return fetch(`${this._url + 'cards/'}${id}`,  {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();


      }

        return Promise.reject('Произошла ошибка');
    })

  }
  patchUserInfo(profileAutor, profileProff) {
    return fetch(this._url + 'users/me', {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({name: profileAutor, about: profileProff}) }).then((res) => {
      if (res.ok) {
        return res.json();
      }
        return Promise.reject('Произошла ошибка');
    })
  }
}
