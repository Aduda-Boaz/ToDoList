"use strict";

var _addRemove = require("../__mocks__/addRemove");

/* eslint-disable no-undef */
describe('Add task list and storgae:', function () {
  test("test if description is invalid with ''.", function () {
    expect((0, _addRemove.addNewList)('')).toBeFalsy();
  });
  test('should check if new task has been stored.', function () {
    expect((0, _addRemove.addNewList)('Go home')).toBeTruthy();
  });
  test('should test for task added in DOM', function () {
    expect((0, _addRemove.getTasklistFromDOM)()).toBe(1);
  });
});
describe('Remove task list from DOM and storage:', function () {
  test('should return false when index is greater than length of stored list', function () {
    expect((0, _addRemove.removeList)(3)).toBeFalsy;
  });
  test('should return false when index is less than length of stored list', function () {
    expect((0, _addRemove.removeList)(-1)).toBeFalsy;
  });
});