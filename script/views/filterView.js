export default class FilterRooms {
  constructor(options) {
    this.options = Object.assign(
      {},
      {
        container: document.body,
        data: {},
        changeCallback: () => {},
      },
      options
    );

    this.levelSelected = "";
    this.typeSelected = "";
    this.roomSelected = "";
    this.levels = [];
    this.types = [];
    this.rooms = [];
    this.form = document.createElement("form");
    this.form.classList.add("selects");
    this.form.innerHTML = this._addHTML();
    this.options.container.insertAdjacentElement("beforeend", this.form);

    this._change();
  }

  _addHTML() {
    return ` <label for="levelSelect" class="select-label">
      <span>Level</span>
      <select id="levelSelect" class="select">
           ${
             this.levels.length != 0
               ? this._addOptions(this.levels, "level")
               : ""
           }
      </select>
    </label>
    <label for="typeSelect" class="select-label">
      <span>Type</span>
      <select id="typeSelect" class="select">
         ${this.types.length != 0 ? this._addOptions(this.types) : ""}
      </select>
    </label>
    <label for="roomNumberSelect" class="select-label">
      <span>Room</span>
      <select id="roomNumberSelect" class="select">
        ${this.rooms.length != 0 ? this._addOptions(this.rooms, "room") : ""}
      </select>
    </label>
          `;
  }

  _addOptions(arr, str = "") {
    return arr
      .map((r, i) => {
        let txt = `${str} ${r}`.trim();
        txt = txt.charAt(0).toUpperCase() + txt.slice(1);
        return `<option value="${r}" >${txt}</option>`;
      })
      .join("");
  }

  _change() {
    const [levelSelect, typeSelect, roomNumberSelect] =
      this.form.querySelectorAll(
        "#levelSelect, #typeSelect, #roomNumberSelect"
      );

    [levelSelect, typeSelect, roomNumberSelect].forEach((el) => {
      el.addEventListener("change", (e) => {
        e.preventDefault();
        const target = e.target;
        const id = target.id;

        if (id == "levelSelect") {
          this.levelSelected = target.value;
          this.types = Object.keys(this.options.data[this.levelSelected]);
          this.typeSelected = this.types[0];
          this.rooms = this.options.data[this.levelSelected][this.typeSelected];

          typeSelect.innerHTML =
            this.types.length != 0 ? this._addOptions(this.types) : "";

          roomNumberSelect.innerHTML =
            this.rooms.length != 0 ? this._addOptions(this.rooms, "room") : "";
        }

        if (id == "typeSelect") {
          this.levelSelected = levelSelect.value;
          this.typeSelected = target.value;
          this.rooms = this.options.data[this.levelSelected][this.typeSelected];

          roomNumberSelect.innerHTML =
            this.rooms.length != 0 ? this._addOptions(this.rooms, "room") : "";
        }

        this.options.changeCallback({
          level: this.levelSelected,
          type: this.typeSelected,
          roomNumber: roomNumberSelect.value,
        });
      });
    });
  }

  _callback() {
    const [levelSelect, typeSelect, roomNumberSelect] =
      this.form.querySelectorAll(
        "#levelSelect, #typeSelect, #roomNumberSelect"
      );

    this.options.changeCallback({
      level: levelSelect.value,
      type: typeSelect.value,
      roomNumber: roomNumberSelect.value,
    });
  }

  _refresh() {
    const newMarkup = this._addHTML();
    const newDOM = document.createRange().createContextualFragment(newMarkup);

    const newElements = Array.from(newDOM.querySelectorAll("select"));

    const currentElements = Array.from(this.form.querySelectorAll("select"));

    newElements.forEach((newElement, index) => {
      const currentElement = currentElements[index];

      if (!newElement.isEqualNode(currentElement)) {
        currentElement.innerHTML = newElement.innerHTML;
        // currentElement.className = newElement.className;
        Array.from(newElement.attributes).forEach((attr) =>
          currentElement.setAttribute(attr.name, attr.value)
        );
      }
    });
  }

  update(data) {
    this.options.data = data;
    this.levels = Object.keys(this.options.data);
    this.levelSelected = Object.keys(this.options.data)[0];
    this.types = Object.keys(this.options.data[this.levelSelected]);
    this.typeSelected = this.types[0];
    this.rooms = this.options.data[this.levelSelected][this.typeSelected];

    this._refresh();
  }
}
