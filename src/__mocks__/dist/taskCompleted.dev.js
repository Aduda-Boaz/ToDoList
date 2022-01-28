"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeCompleted = removeCompleted;

var _dynamic = require("../../dynamic");

var _localStorageMock = _interopRequireDefault(require("./localStorageMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var populateListDOM = function populateListDOM(ls) {
  var tasklist = _dynamic.globaldocument.getElementById('Task-input');

  tasklist.innerHTML = '';
  ls.forEach(function (list) {
    var li = document.createElement('li');
    var checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = list.checkCompleted;
    var p = document.createElement('p');
    p.textContent = list.description;
    var span = document.createElement('span');
    span.textContent = 'delete';
    li.appendChild(checkbox);
    li.appendChild(p);
    li.appendChild(span);
    tasklist.appendChild(li);
  });
};

var returnsUncompleted = function returnsUncompleted(list) {
  return !list.checkCompleted;
};

function removeCompleted() {
  var lists = _localStorageMock["default"].taskListTasks();

  var unCompletedTask = lists.filter(returnsUncompleted);
  populateListDOM(unCompletedTask);
  return _localStorageMock["default"].setLists();
}