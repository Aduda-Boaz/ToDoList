"use strict";

require("./style.css");

var _setList = _interopRequireDefault(require("./setList.js"));

var _display = _interopRequireDefault(require("./display.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint no-restricted-globals: "off", curly: "error" */
var addBtn = document.getElementById('add');
var removeAll = document.getElementById('clear');
var inputField = document.getElementById('new-item');
var storage = new Storage();
var lists = storage.getList();
localStorage.setItem('list', JSON.stringify(lists));
var listCounter = 1;

if (localStorage.getItem('list') == null) {
  listCounter = 4;
}

var counterIncreament = function counterIncreament() {
  var res = listCounter;
  listCounter += 1;
  return res;
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
  localStorage.setItem('list', JSON.stringify(lists));
  var text = document.getElementById("".concat(index, "-description"));

  if (item) {
    text.classList.add('overlined');
  } else {
    text.classList.remove('overlined');
  }
};

function loadPredef(arr) {
  for (var i = 0; i < arr.length; i += 1) {
    (0, _setList["default"])(arr[i].description, arr[i].completed, counterIncreament());
  }

  localStorage.setItem('list', JSON.stringify(lists));
  var completeCheckBox = document.querySelectorAll("input[type='checkbox']");
  completeCheckBox.forEach(function (box) {
    box.addEventListener('click', function () {
      updateTask(box.checked, box.value);
    });
  });
  var completeRemovers = document.querySelectorAll('a.dropdown-remover');
  completeRemovers.forEach(function (link) {
    link.addEventListener('click', function () {
      deleteAll(link.id);
    });
  });
  var completeEditors = document.querySelectorAll('a.dropdown-editor');
  completeEditors.forEach(function (link) {
    link.addEventListener('click', function () {
      editEvent(link.id);
    });
  });
}

loadPredef(lists);
inputField.addEventListener('keypress', function (e) {
  if (e.key === 'enter') {
    var newIndex = counterIncreament();
    var description = document.getElementById('new-task').value;

    if (description === '' || description === ' ' || description == null) {
      return;
    }

    (0, _setList["default"])(description, false, newIndex);
    updateTask();
    document.getElementById('new-item').value = '';
    var newTask = new List(description, false, newIndex);
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

  (0, _setList["default"])(description, false, newIndex);
  document.getElementById('new-task').value = '';
  var newTask = new List(description, false, newIndex);
  lists.push(newTask);
  localStorage.setItem('list', JSON.stringify(lists));
  location.reload();
});
removeAll.addEventListener('click', function (e) {
  e.preventDefault();
  lists = lists.filter(function (task) {
    return task.completed === false;
  });
  localStorage.setItem('list', JSON.stringify(lists));
  location.reload();
});