import * as utils from "../utilities.js";

export default class Others {
  constructor(options) {
    this.options = Object.assign(
      {},
      {
        container: document.body,
        data: {},
      },
      options
    );

    this.form = document.createElement("ul");
    this.form.classList.add("others");
    this.form.innerHTML = this._addHTML();
    this.options.container.insertAdjacentElement("beforeend", this.form);
  }

  _addHTML() {
    const arr = this.options.data.results ?? [];
    const level = this.options.data.level ?? "";
    const type = utils.toProperCase(this.options.data.type ?? "Type");

    return `
    <li>
      <span>
        <strong style="color:#40807e;">Level ${level} - ${type}</strong>
      </span>
      <ul class="others__item">
      ${arr
        .map((datum) => {
          return `<li>
        <span>Room ${datum[0]}</span>
        <span class="${datum[1]}">am</span>
        <span class="${datum[2]}">pm</span>
      </li>`;
        })
        .join("")}  
      </ul>
    </li>`;
  }

  _refresh() {
    const newMarkup = this._addHTML();
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElement = newDOM.querySelector("li");
    const currentElement = this.options.container.querySelector("li");

    if (!newElement.isEqualNode(currentElement)) {
      currentElement.innerHTML = newElement.innerHTML;
      // currentElement.className = newElement.className;
      Array.from(newElement.attributes).forEach((attr) =>
        currentElement.setAttribute(attr.name, attr.value)
      );
    }
  }

  update(data) {
    this.options.data = data;
    this._refresh();
  }
}
