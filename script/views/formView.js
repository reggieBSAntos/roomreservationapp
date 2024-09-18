import * as utils from "../utilities.js";

export default class ReservationForm {
  constructor(options) {
    this.options = Object.assign(
      {},
      {
        container: document.body,
        saveCallback: () => {},
        deleteCallback: () => {},
      },
      options
    );

    this.form = document.createElement("form");
    this.form.innerHTML = `
        <label for="inpRoom" class="label">
          <span>Room</span>
         <input name="roomDescription" id="inpRoom" type="text" class="input" disabled>
        </label>
        <label for="inpGuest" class="label">
          <span>Guest Name</span>
          <input name="guestName" id="inpGuest" type="text" class="input" autocomplete="off"/>
        </label>
        <label for="inpCompany" class="label">
          <span>Company Name</span>
          <input name="companyName" id="inpCompany" type="text" class="input" autocomplete="off" />
        </label>
        <label for="inpPhone" class="label">
          <span>Phone or Mobile</span>
          <input name="contactNumber" id="inpPhone" type="text" class="input" autocomplete="off"/>
        </label>
        <label for="inpEmail" class="label">
          <span>Email</span>
          <input name="email" id="inpEmail" type="email" class="input" autocomplete="off" />
        </label>
        <label for="inpFrom" class="label">
          <span>Check In</span>
          <input name="checkin" id="inpFrom" type="date" class="input" />
        </label>
        <label for="inpTo" class="label">
          <span>Check Out</span>
          <input name="checkout" id="inpTo" type="date" class="input" />
        </label>
        <div class="buttons-row">
          <button type="button" data-button="save" class="button-save">
            Save
          </button>
          <button type="button" class="button-refresh">
            Clear
          </button>
          <button type="button" class="button-delete">
            Delete
          </button>
        </div>`;

    this.inputs = this.form.querySelectorAll(".input");
    this.options.container.insertAdjacentElement("beforeend", this.form);

    const [btnSave, btnClear, btnDelete] = this.form.querySelectorAll(
      ".button-save,button-clear,button-delete"
    );

    btnSave.addEventListener("click", (e) => {
      e.preventDefault();

      this._save(e.target.dataset.button);
    });
  }

  update(obj) {
    const { level, type, roomNumber, roomReservation } = obj;
    this.form.dataset.level = level;
    this.form.dataset.type = type;
    this.form.dataset.roomNumber = roomNumber;

    this.inputs.forEach((input) => {
      input.value = roomReservation[input.name];
    });
  }

  _save(str) {
    const { level, type, roomNumber } = this.form.dataset;
    if (level == undefined || type == undefined || roomNumber == undefined)
      return;

    // const inputs = Array.from(this.form.querySelectorAll("input"));
    const obj = {
      reservation: str,
      level: level,
      type: type,
      roomNumber: roomNumber,
    };

    this.inputs.forEach((input) => (obj[input.name] = input.value));
    this.options.saveCallback(obj);
  }
}
