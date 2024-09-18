export default class Loader {
  constructor() {}

  show() {
    this.loader = document.createElement("div");
    this.loader.classList.add("loader");
    document.body.insertAdjacentElement("afterbegin", this.loader);
  }

  remove() {
    this.loader.classList.add("loader--hidden");

    this.loader.addEventListener("transitionend", () => {
      this.loader.remove();
    });
  }
}
