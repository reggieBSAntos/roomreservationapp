"use strict";

import * as model from "./model.js";
import * as utils from "./utilities.js";
import * as config from "./config.js";
import ReservationForm from "./views/formView.js";
import Navigation from "./views/navView.js";
import Calendar from "./views/calendarView.js";
import Filter from "./views/filterView.js";
import Others from "./views/othersView.js";
import FullScreen from "./views/fullScreenView.js";
import Loader from "./views/loadingView.js";
import Toast from "./views/toastView.js";
/* POLIFILLING */
import "core-js/stable";
/* POLIFILLING ASYNC FUCCTION */
import "regenerator-runtime/runtime";

let state, calendar, filter, others, reservation, fullscreen, loader, toast;

document.querySelector("h1").innerHTML = new Date().toDateString();

/* ASYNC CALLBACKS */
const getData = async function () {
  loader.show();
  try {
    state = await model.importData();
    updateViews();
  } catch (error) {
    toast.show({ message: error.message, state: "error" });
  } finally {
    setTimeout(() => {
      loader.remove();
    }, 1000);
  }
};

const sendData = async (param) => {
  loader.show();
  try {
    state = await model.exportData(param);
    const { roomReservations } = updateState();
    calendar.update(roomReservations);
    toast.show({ message: "Room reserved", state: "success" });
  } catch (error) {
    toast.show({ message: error.message, state: "error" });
  } finally {
    setTimeout(() => {
      loader.remove();
    }, 1000);
  }
};

/* LOAD DEFAULT VIEWS */
const loadViews = function () {
  loader = new Loader();
  toast = new Toast();
  fullscreen = new FullScreen(document.querySelector(".fullscreen"));

  calendar = new Calendar({
    container: document.querySelector("section"),
    callback: calendarCallback,
  });

  filter = new Filter({
    container: document.querySelector("menu"),
    changeCallback: filterCallback,
  });

  reservation = new ReservationForm({
    container: document.querySelector("aside"),
    saveCallback: sendData,
    deleteCallback: (param) => console.log(param),
  });

  others = new Others({
    container: document.querySelector("menu"),
  });
};

/* UPDATE VIEWS */
const updateViews = function (e) {
  const {
    level,
    type,
    roomNumber,
    roomReservations,
    results,
    roomReservation,
    rooms,
  } = updateState();

  calendar.update(roomReservations);
  filter.update(rooms);
  others.update({ results, type, level });
  reservation.update({ level, type, roomNumber, roomReservation });
};

const updateState = function () {
  const { data, level, type, roomNumber } = state;
  const { roomReservations, rooms, results, roomReservation } = data;

  return {
    level,
    type,
    roomReservations,
    rooms,
    results,
    roomReservation,
    roomNumber,
  };
};

/* CALLBACKS */
const filterCallback = (obj) => {
  state = model.updateState(obj);

  const {
    level,
    type,
    roomNumber,
    roomReservations,
    results,
    roomReservation,
  } = updateState();

  calendar.update(roomReservations);
  others.update({ results, type, level });
  reservation.update({ level, type, roomNumber, roomReservation });
};

const calendarCallback = (obj) => {
  state = model.updateState(obj);
  const {
    level,
    type,
    roomNumber,
    roomReservations,
    results,
    roomReservation,
  } = updateState();

  calendar.update(roomReservations);
  others.update({ results, type, level });
  reservation.update({ level, type, roomNumber, roomReservation });
};

loadViews();
document.addEventListener("DOMContentLoaded", getData);
