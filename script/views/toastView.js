export default class Toast {
  constructor() {}

  show(options) {
    options = Object.assign(
      {},
      {
        message: "Success",
        state: "",
      },
      options
    );

    this.hideTimeout = null;

    this.el = document.createElement("div");
    this.el.className = "toast";
    document.body.appendChild(this.el);

    clearTimeout(this.hideTimeout);

    this.el.textContent = options.message;
    this.el.className = "toast toast--visible";

    if (options.state) {
      this.el.classList.add(`toast--${options.state}`);
    }

    this.hideTimeout = setTimeout(() => {
      this.el.classList.remove("toast--visible");
    }, 3000);
  }
}
