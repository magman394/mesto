export default class Section {
  constructor({ renderer, containerSelector }) {

    this._renderer = renderer;
    this._section = document.querySelector(containerSelector);

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
