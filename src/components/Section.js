export default class Section {
  constructor({ renderer, containerSelector }, api) {

    this._renderer = renderer;
    this._section = document.querySelector(containerSelector);
    this._api = api;
  }

  setItem(item) {
    this._section.append(item);
  }
  setItemNewCard(item) {
    this._section.prepend(item);
  }

  renderItems(array) {
    array.forEach(item => {
      this.setItem(this._renderer(item));
    });
  }
}
