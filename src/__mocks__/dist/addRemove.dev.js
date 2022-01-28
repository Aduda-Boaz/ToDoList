"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gettasklistFromDOM = exports.addNewList = void 0;

var _dynamic = require("../../dynamic");

var _events = require("../events");

var _list = _interopRequireDefault(require("../list"));

var _store = _interopRequireDefault(require("../store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var addNewList = function addNewList(description) {
  if ((0, _events.updateList)(description)) {
    var lists = _store["default"].emptyTaskList();

    var task1 = new _list["default"](description, lists.length);
    lists.push(task1);

    _store["default"].setLists();

    var taskList = _dynamic.globaldocument.getElementById('Task-input');

    var div = document.createElement('div');
    var checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = task1.checkCompleted;
    var p = document.createElement('p');
    p.textContent = task1.description;
    var span = document.createElement('span');
    span.textContent = 'delete';
    div.appendChild(checkbox);
    div.appendChild(p);
    div.appendChild(span);
    taskList.appendChild(div);
    return true;
  }

  return false;
};

exports.addNewList = addNewList;

var gettasklistFromDOM = function gettasklistFromDOM() {
  var taskList = _dynamic.globaldocument.getElementById('Taskinput');

  var taskListLength = taskList.children.length;
  return taskListLength;
};

exports.gettasklistFromDOM = gettasklistFromDOM;