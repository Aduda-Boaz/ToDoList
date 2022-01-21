"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setEventListeners = setEventListeners;
exports.addNewList = addNewList;
exports.deleteList = deleteList;
exports.clearSelection = clearSelection;
exports.displayList = exports.createList = void 0;

var _events = require("./events.js");

var _list = _interopRequireDefault(require("./list.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createList = function createList(list) {
  var divContainer = document.createElement('div');
  var li = document.createElement('li');
  var checkValue = list.completed === true ? 'checked' : '';
  var checkClass = list.completed === true ? 'marked' : '';
  divContainer.classList.add('div-container');
  li.classList.add('task-item');
  li.innerHTML = "\n        <label class=\"task-label\">\n          <input class=\"checkbox\" ".concat(checkValue, " type=\"checkbox\">\n          <input class=\"list-description ").concat(checkClass, "\" type=\"text\" value=\"").concat(list.description, "\">\n          <input type=\"hidden\" class=\"\" value=\"").concat(list.index, "\">\n        </label>\n        <i class=\"icon-ellipsis-vertical\"></i>\n        <i class=\"icon-trash\"></i>");
  divContainer.appendChild(li);
  return divContainer;
};

exports.createList = createList;

function setEventListeners() {
  (0, _events.dragDropEvents)();
  (0, _events.listCompleteEvents)();
  (0, _events.addNewEvents)();
  (0, _events.editListEvents)();
  (0, _events.deleteListEvents)();
  (0, _events.deleteAllEvents)();
}

var displayList = function displayList(taskList) {
  var listUl = document.querySelector('.task-display');
  taskList.forEach(function (element) {
    var div = createList(element);
    listUl.appendChild(div);
  });
};

exports.displayList = displayList;

function addNewList() {
  var input = document.querySelector('#tasks-placeholder');
  var listUl = document.querySelector('.task-display');
  var listArr = [];

  if (localStorage.getItem('lists')) {
    listArr = JSON.parse(localStorage.getItem('lists'));
  }

  listArr.push(new _list["default"](input.value, false, listArr.length + 1));
  input.value = '';
  listUl.innerHTML = '';
  displayList(listArr);
  setEventListeners();
}

function deleteList(event) {
  var listUl = document.querySelector('.task-display');
  var removeDiv = event.target.parentNode.parentNode;
  listUl.removeChild(removeDiv);
}

function clearSelection() {
  var listUl = document.querySelector('.task-display');
  var removeTasks = document.querySelectorAll('.marked');
  removeTasks.forEach(function (element) {
    var removeDiv = element.parentElement.parentElement.parentElement;
    listUl.removeChild(removeDiv);
  });
}