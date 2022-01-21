"use strict";

var _setList = _interopRequireDefault(require("./setList.js"));

var _store = _interopRequireDefault(require("./store.js"));

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