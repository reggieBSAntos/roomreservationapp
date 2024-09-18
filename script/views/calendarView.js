import * as utils from "../utilities.js";

export default class Calendar {
  constructor(options) {
    this.options = Object.assign(
      {},
      {
        container: document.body,
        data: [],
        callback: () => {},
      },
      options
    );

    this.days = [];
    const d = new Date();
    this.today = utils.setDate(d.getFullYear(), d.getMonth(), 1);

    this.dateToday = new Date();
    this._getDays();
    this._appendBody();
    this.element = this._appendBody();
    this.options.container.insertAdjacentHTML("afterbegin", this.element);
    this._addListener();
    // this._renderMonth();
  }

  _getDays() {
    // lastDay
    this.currentMonthEnd = utils.setDate(
      this.dateToday.getFullYear(),
      this.dateToday.getMonth() + 1,
      0
    );

    // firstDay
    this.currentMonthStart = utils.setDate(
      this.dateToday.getFullYear(),
      this.dateToday.getMonth(),
      1
    );

    // prevLastDay
    this.lastMonthEnd = utils.setDate(
      this.dateToday.getFullYear(),
      this.dateToday.getMonth(),
      0
    );

    this.days = Array.from(
      { length: this.currentMonthStart.getDay() },
      (_, i) => new Date(this.currentMonthStart).setDate(-i)
    ).reverse();

    this.days = this.days.concat(
      Array.from({ length: this.currentMonthEnd.getDate() }, (_, i) =>
        new Date(this.currentMonthStart).setDate(i + 1)
      )
    );

    this.days = this.days.concat(
      Array.from({ length: 42 - this.days.length }, (_, i) =>
        new Date(this.currentMonthEnd).setDate(
          this.currentMonthEnd.getDate() + i + 1
        )
      )
    );
  }

  _appendBody() {
    const today = new Date(
      utils.dateFormat.format(new Date(this.dateToday))
    ).getTime();

    return ` <div class="buttons-row">
    <button class="month__prev"></button>
    <h2 class="month__current">${utils.monthFormat.format(this.dateToday)}</h2>
    <button class="month__next"></button>
  </div>
  <div class="calendar">
    <div class="days">
      <div class="day"><span class="weekday">SUN</span></div>
      <div class="day"><span class="weekday">MON</span></div>
      <div class="day"><span class="weekday">TUE</span></div>
      <div class="day"><span class="weekday">WED</span></div>
      <div class="day"><span class="weekday">THU</span></div>
      <div class="day"><span class="weekday">FRI</span></div>
      <div class="day"><span class="weekday">SAT</span></div>
      ${this.days
        .map((day, dayIndex) => {
          const newDate = new Date(day);
          const currentDate = newDate.getDate();
          const currentMonth =
            newDate < this.currentMonthStart
              ? "day--previous"
              : newDate > this.currentMonthEnd
              ? "day--next"
              : "";
          const currentDay = today === day ? "day--today" : "";
          const { am, pm } = this.options.data.reduce(
            (a, c) => {
              const time1 = new Date(day).getTime();
              const time2 = new Date(
                utils.dateFormat.format(new Date(c.date))
              ).getTime();

              if (time1 - time2 != 0) return a;

              if (c.time.match("am"))
                a.am = `<strong>AM:&nbsp</strong><u>${c.guestName}</u>`;

              if (c.time.match("pm"))
                a.pm = `<strong>PM:&nbsp</strong><u>${c.guestName}</u>`;

              return a;
            },
            { am: "", pm: "" }
          );

          return `<div class="day">
        <div class="${currentMonth}">
        <span class="day__date ${currentDay} " data-date=${newDate.getTime()}>${
            currentDate == 1 ? utils.dayFormat.format(newDate) : currentDate
          }</span>
        <span class="day__am">${am}</span>
        <span class="day__pm">${pm}</span>
        </div>
      </div>`;
        })
        .join("")}
    </div>
  </div>`;
  }

  _addListener() {
    this.options.container.addEventListener("click", (e) => {
      if (
        e.target.closest(".month__prev") ||
        e.target.closest(".month__next")
      ) {
        const newDate = new Date(this.dateToday);

        if (e.target.closest(".month__next")) {
          this.dateToday = utils.setDate(
            this.dateToday.getFullYear(),
            this.dateToday.getMonth() + 1,
            1
          );
          // this.options.dateToday = new Date(
          //   newDate.setMonth(newDate.getMonth() + 1)
          // );
        }

        if (e.target.closest(".month__prev")) {
          this.dateToday = utils.setDate(
            this.dateToday.getFullYear(),
            this.dateToday.getMonth() - 1,
            1
          );
        }

        this._getDays();

        this._refresh();

        this.options.callback(this.dateToday.getTime());

        return;
      }

      if (e.target.closest(".day__date")) {
        const selectedDate = parseInt(e.target.dataset.date);
        this.dateToday = new Date(selectedDate);
        this._refresh();
        this.options.callback({ date: selectedDate });
        return;
      }
    });
  }

  _refresh() {
    const newMarkup = this._appendBody();
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll("h2, .day"));
    const currentElements = Array.from(
      this.options.container.querySelectorAll("h2, .day")
    );

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
    this.options.data = {};
    this.options.data = data;

    // this.options.dateToday = new Date();
    this._getDays();
    this._refresh();
  }
}
