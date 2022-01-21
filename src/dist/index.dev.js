"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _lodash = _interopRequireWildcard(require("lodash"));

require("./style.css");

var _list = _interopRequireDefault(require("./list.js"));

var _setList = _interopRequireDefault(require("./setList.js"));

var _store = _interopRequireDefault(require("./store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint no-restricted-globals: "off", curly: "error" */
var addBtn = document.getElementById('Task-input');
var removeAll = document.getElementById('clear');
var inputField = document.getElementById('new-item');
var storage = new _store["default"]();
var lists = storage.getList();
localStorage.setItem('list', JSON.stringify(lists));
var listCounter = 1;

if (localStorage.getItem('list') == null) {
  listCounter = 4;
}

var counterIncreament = function counterIncreament() {
  var reset = listCounter;
  listCounter += 1;
  return reset;
};

var deleteAll = function deleteAll(id) {
  var index = id.slice(7).toString() - 1;
  lists.splice(index, 1);
  localStorage.setItem('list', JSON.stringify(lists));
  location.reload();
};

var editEvent = function editEvent(id) {
  var index = id.slice(5).toString();
  var textField = document.getElementById("".concat(index, "-description"));
  textField.innerHTML = '';
  var editField = document.createElement('input');
  editField.type = 'text';
  editField.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      lists[index - 1].description = editField.value;
      localStorage.setItem('list', JSON.stringify(lists));
      textField.innerHTML = "".concat(editField.value);
    }
  });
  textField.appendChild(editField);
};

var updateTask = function updateTask(item, index) {
  lists[index - 1].completed = item;
  window.localStorage.setItem('list', JSON.stringify(lists));
  var text = document.getElementById("".concat(index, "-description"));

  if (item) {
    text.classList.add('overlined');
  } else {
    text.classList.remove('overlined');
  }
};

function loadItems(arr) {
  for (var i = 0; i < arr.length; i += 1) {
    setList(arr[i].description, arr[i].completed, counterIncreament());
  }

  localStorage.setItem('list', JSON.stringify(lists));
  var completeCheckBox = document.querySelectorAll("input[type='checkbox']");
  completeCheckBox.forEach(function (box) {
    box.addEventListener('click', function () {
      updateTask(box.checked, box.value);
    });
  });
  var completeRemovers = document.querySelectorAll('task-display');
  completeRemovers.forEach(function (link) {
    link.addEventListener('click', function () {
      deleteAll(link.id);
    });
  });
  var completeEditors = document.querySelectorAll('task-display');
  completeEditors.forEach(function (link) {
    link.addEventListener('click', function () {
      editEvent(link.id);
    });
  });
}

loadItems(lists);
inputField.addEventListener('keypress', function (e) {
  if (e.key === 'enter') {
    var newIndex = counterIncreament();
    var description = document.getElementById('new-task').value;

    if (description === '' || description === ' ' || description == null) {
      return;
    }

    setList(description, false, newIndex);
    updateTask();
    document.getElementById('new-item').value = '';
    var newTask = new _list["default"](description, completed = false, newIndex);
    lists.push(newTask);
    localStorage.setItem('list', JSON.stringify(lists));
    location.reload();
  }
});
addBtn.addEventListener('click', function (e) {
  e.preventDefault();
  var newIndex = counterIncreament();
  var description = document.getElementById('new-task').value;

  if (description === '' || description === ' ' || description == null) {
    return;
  }

  setList(description, false, newIndex);
  document.getElementById('new-task').value = '';
  var newTask = new _list["default"](description, false, newIndex);
  lists.push(newTask);
  localStorage.setItem('list', JSON.stringify(lists));
  location.reload();
});
removeAll.addEventListener('click', function (e) {
  e.preventDefault();
  lists = lists.filter(function (list) {
    return list.completed === false;
  });
  localStorage.setItem('list', JSON.stringify(lists));
  location.reload();
});