"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateDescription = exports.removeList = exports.getTasklistFromDOM = exports.addNewList = void 0;

var _dynamic = require("../../dynamic");

var _list = _interopRequireDefault(require("../list"));

var _localStorageMock = _interopRequireDefault(require("./localStorageMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var addNewList = function addNewList(description) {
  if (validateDescription(description)) {
    var lists = _localStorageMock["default"].emptyTaskList();

    var task1 = new _list["default"](description, false, lists.length);
    lists.push(task1);
    console.log(task1);

    _localStorageMock["default"].setLists();

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

var removeList = function removeList(index) {
  var lists = _localStorageMock["default"].taskListTasks();

  if (index < 0 || index >= lists.length) {
    return false;
  }

  lists = lists.splice(index, 1);

  var tasklist = _dynamic.globaldocument.getElementById('Task-input');

  var taskListChildren = tasklist.children;
  var list2delete = taskListChildren[index];
  list2delete.remove();
  return _localStorageMock["default"].setLists();
};

exports.removeList = removeList;

var getTasklistFromDOM = function getTasklistFromDOM() {
  var taskList = _dynamic.globaldocument.getElementById('Task-input');

  var taskListLength = taskList.children.length;
  return taskListLength;
};

exports.getTasklistFromDOM = getTasklistFromDOM;

var validateDescription = function validateDescription(text) {
  if (text === null || text === '') {
    return false;
  }

  return true;
};

exports.validateDescription = validateDescription;