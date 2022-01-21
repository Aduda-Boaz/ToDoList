"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createList = void 0;

require("./events.js");

var _list = _interopRequireDefault(require("./list.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createList = function createList(list) {
  var divContainer = document.createElement('div');
  var li = document.createElement('li');
  var checkValue = list.completed === true ? 'checked' : '';
  var checkClass = list.completed === true ? 'marked' : '';
  divContainer.classList.add('div-container');
  li.classList.add('task-item');
  li.innerHTML = "\n        <label class=\"task-label\">\n          <input class=\"checkbox\" ".concat(checkValue, " type=\"checkbox\">\n          <input class=\"task-description ").concat(checkClass, "\" type=\"text\" value=\"").concat(list.description, "\">\n          <input type=\"hidden\" class=\"\" value=\"").concat(list.index, "\">\n        </label>\n        <i class=\"icon-ellipsis-vertical\"></i>\n        <i class=\"icon-trash\"></i>");
  divContainer.appendChild(li);
  return divContainer;
};

exports.createList = createList;