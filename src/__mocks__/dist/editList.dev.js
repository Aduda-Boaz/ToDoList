"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inicializelists = void 0;

var _dynamic = require("../../dynamic");

var _localStorageMock = _interopRequireDefault(require("./localStorageMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var inicializelists = function inicializelists() {
  var tasklist = _dynamic.globaldocument.getElementById('Task-input');

  tasklist.innerHTML = '';

  var todos = _localStorageMock["default"].taskListTasks();

  todos.forEach(function (task) {
    // create li and appends it
    var li = document.createElement('li');
    var checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = task.isCompleted;
    var p = document.createElement('p');
    p.textContent = task.description;
    var span = document.createElement('span');
    span.textContent = 'delete';
    li.appendChild(checkbox);
    li.appendChild(p);
    li.appendChild(span);
    tasklist.appendChild(li);
  });
};

exports.inicializelists = inicializelists;