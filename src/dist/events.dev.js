"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteAllEvents = exports.deleteListEvents = exports.editListEvents = exports.addNewEvents = exports.listCompleteEvents = exports.dragDropEvents = void 0;

var _setList = _interopRequireDefault(require("./setList.js"));

var _store = _interopRequireDefault(require("./store.js"));

var _dragdrop = _interopRequireDefault(require("./dragdrop.js"));

var _addRemove = require("./add-remove.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function updateList() {
  var checkBoxItems = document.querySelectorAll('.checkbox');
  var descriptionItems = document.querySelectorAll('.list-description');
  var newObj = [];

  for (var i = 0; i < checkBoxItems.length; i += 1) {
    newObj.push({
      description: descriptionItems[i].value,
      completed: checkBoxItems[i].checked,
      index: i + 1
    });
  }

  (0, _store["default"])(newObj);
}

var dragDropEvents = function dragDropEvents() {
  var elements = document.querySelectorAll('.task-item');
  var containers = document.querySelectorAll('.div-container');
  var arrElements = Array.from(elements);
  var arrContainer = Array.from(containers);
  var dragTask = null;
  arrElements.forEach(function (element) {
    element.setAttribute('draggable', 'true');
    element.addEventListener('dragstart', function () {
      dragTask = element;
    });
    element.addEventListener('dragend', function () {
      dragTask = null;
    });
  });
  arrContainer.forEach(function (container) {
    container.addEventListener('dragover', function (e) {
      e.preventDefault();
    });
    container.addEventListener('dragenter', function (e) {
      e.preventDefault();
    });
    container.addEventListener('drop', function () {
      (0, _dragdrop["default"])(dragTask, container.firstElementChild);
      updateList();
    });
  });
};

exports.dragDropEvents = dragDropEvents;

var listCompleteEvents = function listCompleteEvents() {
  var checkboxes = document.querySelectorAll('.checkbox');
  var checkboxArr = Array.from(checkboxes);
  checkboxArr.forEach(function (inputBox) {
    inputBox.addEventListener('change', function (e) {
      (0, _setList["default"])(e);
      updateList();
    });
  });
};

exports.listCompleteEvents = listCompleteEvents;

var addNewEvents = function addNewEvents() {
  var input = document.querySelector('#Task-input');
  input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && input.value !== '' && e.target.matches('#Task-input')) {
      (0, _addRemove.addNewList)();
      updateList();
    }
  });
};

exports.addNewEvents = addNewEvents;

var editListEvents = function editListEvents() {
  var listsInput = document.querySelectorAll('.list-description');
  var arrInput = Array.from(listsInput);
  arrInput.forEach(function (input) {
    input.addEventListener('input', function () {
      updateList();
    });
  });
};

exports.editListEvents = editListEvents;

var deleteListEvents = function deleteListEvents() {
  var lists = document.querySelectorAll('.icon-trash');
  var listArr = Array.from(lists);
  listArr.forEach(function (lists) {
    lists.addEventListener('click', function (e) {
      (0, _addRemove.deleteList)(e);
      updateList();
    });
  });
};

exports.deleteListEvents = deleteListEvents;

var deleteAllEvents = function deleteAllEvents() {
  var clearLists = document.querySelector('#clear-btn');
  clearLists.addEventListener('click', function () {
    (0, _addRemove.clearSelection)();
    updateList();
  });
};

exports.deleteAllEvents = deleteAllEvents;