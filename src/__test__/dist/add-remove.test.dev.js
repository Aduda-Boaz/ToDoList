"use strict";

var _localStorageMock = _interopRequireDefault(require("../__mocks__/localStorageMock"));

var _addRemove = _interopRequireDefault(require("../__mocks__/addRemove"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable no-undef */

/**
 * @jest-environment jsdom
 */
global.localStorage = new _localStorageMock["default"]();
var lists = new _addRemove["default"]();
describe('Add list of tasks', function () {
  test('Add list index', function () {
    lists.addList('Good');
    expect(lists.list[1]).toBe(1);
  });
  test('should check available description', function () {
    lists.addList('Go for vacation');
    expect(lists.list[1].description).toBe('Go for vacation');
  });
});
describe('remove list from todo', function () {
  it('should remove todo list', function () {
    var index = 1;
    lists.deleteList(index);
    expect(lists.list.length).toBe(1);
  });
});