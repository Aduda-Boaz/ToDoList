"use strict";

var _editTasks = require("../__mocks__/editTasks");

/* eslint-disable no-undef */
describe('Edit list description:', function () {
  (0, _editTasks.inicializeLists)();
  test('should return error message when new task description is invalid', function () {
    expect((0, _editTasks.editList)('', 0)).toBe('No empty task description');
  });
  test('should return error message for invalid index', function () {
    expect((0, _editTasks.editList)('get ready', -1)).toBe('Index to be between 0 and list length stored');
  });
  test('should return true when for valid descrip and index', function () {
    expect((0, _editTasks.editList)('get ready', 2)).toBeTruthy();
  });
  test('should return true when the descrip from previous test was updated in the DOM.', function () {
    expect((0, _editTasks.verifyEdits)('get ready', 2)).toBeTruthy();
  });
});