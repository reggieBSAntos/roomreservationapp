"use strict";

import * as config from "./config.js";
import * as utils from "./utilities.js";

let state;

class State {
  constructor(data) {
    this.data = Object.assign(
      {},
      {
        reservations: {
          1: {
            deluxe: {
              1: [
                {
                  date: "2024-10-04T02:00:00.000Z",
                  time: "pm",
                  level: 1,
                  type: "deluxe",
                  roomNumber: 3,
                  guestName: "Ige Santos",
                  companyName: "Gymie",
                  contactNumber: "0916 905 0927",
                  email: "igeonlinepro@gmail.com",
                },
                {
                  date: "2024-10-04T14:00:00.000Z",
                  time: "am",
                  level: 1,
                  type: "deluxe",
                  roomNumber: 3,
                  guestName: "Ige Santos",
                  companyName: "Gymie",
                  contactNumber: "0916 905 0927",
                  email: "igeonlinepro@gmail.com",
                },
                {
                  date: "2024-10-05T02:00:00.000Z",
                  time: "pm",
                  level: 1,
                  type: "deluxe",
                  roomNumber: 3,
                  guestName: "Ige Santos",
                  companyName: "Gymie",
                  contactNumber: "0916 905 0927",
                  email: "igeonlinepro@gmail.com",
                },
                {
                  date: "2024-10-05T14:00:00.000Z",
                  time: "am",
                  level: 1,
                  type: "deluxe",
                  roomNumber: 3,
                  guestName: "Ige Santos",
                  companyName: "Gymie",
                  contactNumber: "0916 905 0927",
                  email: "igeonlinepro@gmail.com",
                },
                {
                  date: "2024-10-07T02:00:00.000Z",
                  time: "pm",
                  level: 1,
                  type: "deluxe",
                  roomNumber: 3,
                  guestName: "Ige Santos",
                  companyName: "Gymie",
                  contactNumber: "0916 905 0927",
                  email: "igeonlinepro@gmail.com",
                },
                {
                  date: "2024-10-07T14:00:00.000Z",
                  time: "am",
                  level: 1,
                  type: "deluxe",
                  roomNumber: 3,
                  guestName: "Ige Santos",
                  companyName: "Gymie",
                  contactNumber: "0916 905 0927",
                  email: "igeonlinepro@gmail.com",
                },
              ],
            },
            standard: {
              1: [
                {
                  date: "2024-10-04T02:00:00.000Z",
                  time: "pm",
                  level: 1,
                  type: "deluxe",
                  roomNumber: 1,
                  guestName: "Ige Santos",
                  companyName: "Gymie",
                  contactNumber: "0916 905 0927",
                  email: "igeonlinepro@gmail.com",
                },
                {
                  date: "2024-10-04T14:00:00.000Z",
                  time: "am",
                  level: 1,
                  type: "deluxe",
                  roomNumber: 1,
                  guestName: "Ige Santos",
                  companyName: "Gymie",
                  contactNumber: "0916 905 0927",
                  email: "igeonlinepro@gmail.com",
                },
                {
                  date: "2024-10-05T02:00:00.000Z",
                  time: "pm",
                  level: 1,
                  type: "deluxe",
                  roomNumber: 1,
                  guestName: "Ige Santos",
                  companyName: "Gymie",
                  contactNumber: "0916 905 0927",
                  email: "igeonlinepro@gmail.com",
                },
                {
                  date: "2024-10-05T14:00:00.000Z",
                  time: "am",
                  level: 1,
                  type: "deluxe",
                  roomNumber: 1,
                  guestName: "Ige Santos",
                  companyName: "Gymie",
                  contactNumber: "0916 905 0927",
                  email: "igeonlinepro@gmail.com",
                },
                {
                  date: "2024-09-13T02:00:00.000Z",
                  time: "pm",
                  level: 1,
                  type: "deluxe",
                  roomNumber: 1,
                  guestName: "Ige Santos",
                  companyName: "Gymie",
                  contactNumber: "0916 905 0927",
                  email: "igeonlinepro@gmail.com",
                },
                {
                  date: "2024-09-13T14:00:00.000Z",
                  time: "am",
                  level: 1,
                  type: "deluxe",
                  roomNumber: 1,
                  guestName: "Ige Santos",
                  companyName: "Gymie",
                  contactNumber: "0916 905 0927",
                  email: "igeonlinepro@gmail.com",
                },
              ],
              3: [
                {
                  date: "2024-10-06T02:00:00.000Z",
                  time: "pm",
                  level: 1,
                  type: "standard",
                  roomNumber: 3,
                  guestName: "Ige Santos",
                  companyName: "Gymie",
                  contactNumber: "0916 905 0927",
                  email: "igeonlinepro@gmail.com",
                },
                {
                  date: "2024-10-06T14:00:00.000Z",
                  time: "am",
                  level: 1,
                  type: "standard",
                  roomNumber: 3,
                  guestName: "Ige Santos",
                  companyName: "Gymie",
                  contactNumber: "0916 905 0927",
                  email: "igeonlinepro@gmail.com",
                },
              ],
            },
          },
          2: {
            suite: {
              2: [
                {
                  date: "2024-10-05T02:00:00.000Z",
                  time: "pm",
                  level: 2,
                  type: "standard",
                  roomNumber: 6,
                  guestName: "Siu Chua",
                  companyName: "Gymie",
                  contactNumber: "0916 905 0927",
                  email: "igeonlinepro@gmail.com",
                },
                {
                  date: "2024-10-05T14:00:00.000Z",
                  time: "am",
                  level: 2,
                  type: "standard",
                  roomNumber: 6,
                  guestName: "Siu Chua",
                  companyName: "Gymie",
                  contactNumber: "0916 905 0927",
                  email: "igeonlinepro@gmail.com",
                },
                {
                  date: "2024-10-06T02:00:00.000Z",
                  time: "pm",
                  level: 2,
                  type: "standard",
                  roomNumber: 6,
                  guestName: "Siu Chua",
                  companyName: "Gymie",
                  contactNumber: "0916 905 0927",
                  email: "igeonlinepro@gmail.com",
                },
                {
                  date: "2024-10-06T14:00:00.000Z",
                  time: "am",
                  level: 2,
                  type: "standard",
                  roomNumber: 6,
                  guestName: "Siu Chua",
                  companyName: "Gymie",
                  contactNumber: "0916 905 0927",
                  email: "igeonlinepro@gmail.com",
                },
                {
                  date: "2024-10-07T02:00:00.000Z",
                  time: "pm",
                  level: 2,
                  type: "standard",
                  roomNumber: 6,
                  guestName: "Siu Chua",
                  companyName: "Gymie",
                  contactNumber: "0916 905 0927",
                  email: "igeonlinepro@gmail.com",
                },
                {
                  date: "2024-10-07T14:00:00.000Z",
                  time: "am",
                  level: 2,
                  type: "standard",
                  roomNumber: 6,
                  guestName: "Siu Chua",
                  companyName: "Gymie",
                  contactNumber: "0916 905 0927",
                  email: "igeonlinepro@gmail.com",
                },
              ],
            },
            deluxe: {
              1: [
                {
                  date: "2024-10-05T02:00:00.000Z",
                  time: "pm",
                  level: 2,
                  type: "standard",
                  roomNumber: 6,
                  guestName: "Siu Chua",
                  companyName: "Gymie",
                  contactNumber: "0916 905 0927",
                  email: "igeonlinepro@gmail.com",
                },
                {
                  date: "2024-10-05T14:00:00.000Z",
                  time: "am",
                  level: 2,
                  type: "standard",
                  roomNumber: 6,
                  guestName: "Siu Chua",
                  companyName: "Gymie",
                  contactNumber: "0916 905 0927",
                  email: "igeonlinepro@gmail.com",
                },
                {
                  date: "2024-10-06T02:00:00.000Z",
                  time: "pm",
                  level: 2,
                  type: "standard",
                  roomNumber: 6,
                  guestName: "Siu Chua",
                  companyName: "Gymie",
                  contactNumber: "0916 905 0927",
                  email: "igeonlinepro@gmail.com",
                },
                {
                  date: "2024-10-06T14:00:00.000Z",
                  time: "am",
                  level: 2,
                  type: "standard",
                  roomNumber: 6,
                  guestName: "Siu Chua",
                  companyName: "Gymie",
                  contactNumber: "0916 905 0927",
                  email: "igeonlinepro@gmail.com",
                },
                {
                  date: "2024-10-07T02:00:00.000Z",
                  time: "pm",
                  level: 2,
                  type: "standard",
                  roomNumber: 6,
                  guestName: "Siu Chua",
                  companyName: "Gymie",
                  contactNumber: "0916 905 0927",
                  email: "igeonlinepro@gmail.com",
                },
                {
                  date: "2024-10-07T14:00:00.000Z",
                  time: "am",
                  level: 2,
                  type: "standard",
                  roomNumber: 6,
                  guestName: "Siu Chua",
                  companyName: "Gymie",
                  contactNumber: "0916 905 0927",
                  email: "igeonlinepro@gmail.com",
                },
              ],
            },
          },
        },
        rooms: {
          1: { standard: [1, 2, 3], deluxe: [1, 2, 3, 4], suite: [1, 2] },
          2: {
            standard: [1, 2, 3, 4, 5, 6],
            deluxe: [1, 2, 3, 4],
            suite: [1, 2],
          },
          3: { standard: [1, 2, 3], suite: [1, 2] },
          4: { standard: [1, 2, 3], deluxe: [1, 2, 3, 4] },
        },
      },
      data
    );

    this.date = new Date(utils.dateFormat.format(new Date())).getTime();
  }
}

export const importData = async function () {
  try {
    const response = await fetch(
      `https://script.google.com/macros/s/${config.saveURL}/exec`
    );
    const data = await response.json();
    if (data.result == "failed") {
      throw Error(error);
    }

    state = new State({ reservations: data.data });

    setDefaultInfo();
    getRoomReservations();
    getRoomReservation();
    getCurrentRooms();
    return state;
  } catch (error) {
    throw Error(error);
  }
};

export const exportData = async function (param) {
  let formData = new FormData();
  formData.append("data", JSON.stringify(param));

  try {
    const response = await fetch(
      `https://script.google.com/macros/s/${config.saveURL}/exec`,
      { method: "POST", body: formData }
    );

    const data = await response.json();

    if (data.result == "failed") {
      throw Error(data.message);
    }

    // localStorage.setItem("params", JSON.stringify(data));
    state.level = param.level;
    state.type = param.type;
    state.roomNumber = param.roomNumber;
    state.data.reservations = data.data;
    getRoomReservations();
    getCurrentRooms();
    return state;
  } catch (error) {
    throw Error(error);
  }
};

export const updateState = function (obj) {
  state = Object.assign({}, state, obj);
  getCurrentRooms();
  getRoomReservations();
  getRoomReservation();

  return state;
};

const getDateTime = function (d) {
  return new Date(utils.dateFormat.format(new Date(d))).getTime();
};

const getCurrentRooms = function () {
  const { level, type, roomNumber, date } = state;
  state.data.results = state.data.rooms[level][type].reduce((a, c, i) => {
    const levels = state.data.reservations[level] ?? {};
    const types = levels[type] ?? {};
    const rooms = types[c] ?? [];

    const reserved = rooms.filter((f) => {
      return date === getDateTime(f?.date);
    });
    const am = reserved?.find((r) => r.time == "am") ? "item--reserved" : "";
    const pm = reserved?.find((r) => r.time == "pm") ? "item--reserved" : "";
    a.push([c, am, pm]);

    return a;
  }, []);
};

const filterReservedRoom = function () {
  const { level, type, roomNumber, data } = state;
  const levels = data.reservations[parseInt(level)] ?? {};
  const types = levels[type] ?? {};

  return types[parseInt(roomNumber)] ?? [];
};
const getRoomReservations = function () {
  state.data.roomReservations = filterReservedRoom();
};
const getRoomReservation = function () {
  const { data, date, level, type, roomNumber } = state;
  const time = new Date(
    utils.dateFormat.format(new Date(date).setHours(12))
  ).getTime();

  const reservation =
    data.roomReservations.find((r, i) => {
      const current = new Date(
        utils.dateFormat.format(
          new Date(r.date).setHours(r.time == "am" ? 0 : 12)
        )
      ).getTime();

      return time == current;
    }) ?? {};

  let checkout = new Date(date);

  data.roomReservation = {
    level: level,
    type: type,
    roomNumber: roomNumber,
    roomDescription: `Level ${level} ${utils.toProperCase(
      type
    )} Room ${roomNumber}`,
    guestName: reservation.guestName ?? "",
    companyName: reservation.companyName ?? "",
    contactNumber: reservation.contactNumber ?? "",
    email: reservation.email ?? "",
    checkin: utils.inputFormat.format(date),
    checkout: utils.inputFormat.format(
      checkout.setDate(checkout.getDate() + 1)
    ),
  };
};

const setDefaultInfo = function () {
  state.level = Object.keys(state.data.rooms)[0];
  state.type = Object.keys(state.data.rooms[state.level])[0];
  state.roomNumber = Object.values(
    state.data.rooms[state.level][state.type]
  )[0];
};
