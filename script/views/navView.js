export default class ReservationFrom {
  constructor(callback) {
    // ADD BUTTON
    this.button = document.createElement("button");
    this.button.classList.add("toggle-button");

    document.body.append(this.button);

    this.nav = document.createElement("nav");
    this.nav.classList.add("nav__buttons");
    this.nav.innerHTML = `<div class="nav__buttons">
        <a href="#" class="navbar__button room-standard">Standard 1</a>
        <a href="#" class="navbar__button room-standard">Standard 2</a>
        <a href="#" class="navbar__button room-standard">Standard 3</a>
        <a href="#" class="navbar__button room-deluxe">Deluxe 1</a>
        <a href="#" class="navbar__button room-deluxe">Deluxe 2</a>
        <a href="#" class="navbar__button room-deluxe">Deluxe 3</a>
        <a href="#" class="navbar__button room-suite">Suite 1</a>
        <a href="#" class="navbar__button room-suite">Suite 2</a>
      </div>`;

    document.body.append(this.nav);

    this.button.addEventListener("click", (e) => {
      e.preventDefault();

      this._toogle();
    });

    document.addEventListener("click", this._test);
    this.nav.addEventListener("click", (e) => {
      e.preventDefault();

      const el = e.target.closest(".navbar__button");

      if (!el) return;

      // callback(el.textContent);
      this._toogle();
    });
  }

  _test() {
    console.log("test");
  }

  _toogle() {
    this.nav.classList.toggle("navbar--open");
    this.button.classList.toggle("toggle-button--open");
  }
}
