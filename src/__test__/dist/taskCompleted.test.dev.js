"use strict";

var _taskCompleted = require("../__mocks__/taskCompleted");

var _editTasks = require("../__mocks__/editTasks");

/* eslint-disable no-undef */
describe('Remove completed task list:', function () {
  (0, _editTasks.inicializeLists)();
  test('should returns true when called', function () {
    expect((0, _taskCompleted.removeCompleted)()).toBeTruthy();
  });
});