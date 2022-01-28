"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LocalStorage =
/*#__PURE__*/
function () {
  function LocalStorage() {
    _classCallCheck(this, LocalStorage);

    this.storage = {};
  }

  _createClass(LocalStorage, [{
    key: "getItem",
    value: function getItem(key) {
      return this.storage[key] || null;
    }
  }, {
    key: "setItem",
    value: function setItem(key, value) {
      this.storage[key] = value.toString();
    }
  }, {
    key: "removeItem",
    value: function removeItem(key) {
      delete this.storage[key];
    }
  }, {
    key: "reset",
    value: function reset() {
      this.storage = {};
    }
  }]);

  return LocalStorage;
}();

exports["default"] = LocalStorage;