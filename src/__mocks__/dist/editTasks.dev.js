"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inicializeLists = exports.verifyEdits = exports.editList = void 0;

var _dynamic = require("../../dynamic");

var _localStorageMock = _interopRequireDefault(require("./localStorageMock"));

var _addRemove = require("./addRemove");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var editList = function editList(descrip, index) {
  if ((0, _addRemove.validateDescription)(descrip)) {
    var lists = _localStorageMock["default"].taskListTasks();

    if (index >= 0 && index < lists.length) {
      var list2edit = lists[index];
      list2edit.description = descrip;
      lists[index] - list2edit; // in the DOM

      var taskList = _dynamic.globaldocument.getElementById('Task-input');

      var liToEdit = taskList.children[index];
      var pToEdit = liToEdit.children[1];
      pToEdit.textContent = descrip;
      return _localStorageMock["default"].setLists(); // always return true
    }

    return 'Index to be between 0 and list length stored';
  }

  return 'No empty task description';
};

exports.editList = editList;

var verifyEdits = function verifyEdits(descrip, index) {
  var taskList = _dynamic.globaldocument.getElementById('Task-input');

  var liToEdit = taskList.children[index];
  var pToEdit = liToEdit.children[1];
  var actualText = pToEdit.textContent;

  if (descrip === actualText) {
    return true;
  }

  return false;
};

exports.verifyEdits = verifyEdits;

var inicializeLists = function inicializeLists() {
  var tasklist = _dynamic.globaldocument.getElementById('Task-input');

  tasklist.innerHTML = '';

  var lists = _localStorageMock["default"].taskListTasks();

  lists.forEach(function (list) {
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

exports.inicializeLists = inicializeLists;