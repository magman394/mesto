export default class Section {
  constructor({ data, renderer }, containerSelector, api) {
    this._renderedItems = data;
    this._renderer = renderer;
    this._api = api;
    this._section = document.querySelector(containerSelector);
  }

  setItem(element) {
    this._section.append(element);
  }
  setItemNewCard(element) {
    this._section.prepend(element);
  }
  _saveItem = znacheniia => {
    this._api
    .addTask({name: znacheniia.name, link: znacheniia.link})
    .then((data) => this.setItemNewCard(data.name, data.link))
    .catch((err) => console.log(err));
  }
  renderItems() {
    this._renderedItems.forEach(item => {
      this._renderer(item);
    });
  }
}

