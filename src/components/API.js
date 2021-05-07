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
  addTask(data) {
    return fetch(this._url + 'cards', {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data)
    }).then((res) => {
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
}
