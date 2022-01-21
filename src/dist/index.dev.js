"use strict";

require("./style.css");

var _store = _interopRequireDefault(require("./store.js"));

var _addRemove = require("./add-remove.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint no-restricted-globals: "off", curly: "error" */
var taskList = [];

if (localStorage.getItem('lists')) {
  taskList = JSON.parse(localStorage.getItem('lists'));
  (0, _addRemove.displayList)(taskList);
  (0, _addRemove.setEventListeners)();
} else {
  (0, _store["default"])(taskList);
  (0, _addRemove.displayList)(taskList);
  (0, _addRemove.setEventListeners)();
}