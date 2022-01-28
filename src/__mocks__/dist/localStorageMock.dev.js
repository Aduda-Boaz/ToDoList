"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _list = _interopRequireDefault(require("../list"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Storage =
/*#__PURE__*/
function () {
  function Storage() {
    _classCallCheck(this, Storage);
  }

  _createClass(Storage, null, [{
    key: "emptyTaskList",
    value: function emptyTaskList() {
      return [];
    }
  }, {
    key: "taskListTasks",
    value: function taskListTasks() {
      var lists = [];
      var task1 = new _list["default"]('go out', false, 0);
      var task2 = new _list["default"]('prepare breakfast', true, 1);
      var task3 = new _list["default"]('go to gym', false, 2);
      lists.push(task1);
      lists.push(task2);
      lists.push(task3);
      return lists;
    }
  }, {
    key: "setLists",
    value: function setLists() {
      return true;
    }
  }]);

  return Storage;
}();

exports["default"] = Storage;