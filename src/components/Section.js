export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    this._renderer = renderer;

    this._section = document.querySelector(containerSelector);
  }

  setItem(element) {
    this._section.append(element);
  }
  setItemNewCard(element) {
    this._section.prepend(element);
  }

  renderItems() {
    this._renderedItems.forEach(item => {
      this._renderer(item);
    });
  }
}
