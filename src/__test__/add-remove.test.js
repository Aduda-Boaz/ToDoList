import { addNewList, getTasklistFromDOM, removeList } from '../__mocks__/addRemove';

describe('Add task list and storgae:', () => {
  test("test if description is invalid with ''.", () => {
    expect(addNewList('')).toBeFalsy();
  });
  test('should check if new task has been stored.', () => {
    expect(addNewList('Go home')).toBeTruthy();
  });
  test('should test for task added in DOM', () => {
    expect(getTasklistFromDOM()).toBe(1);
  });
});

describe('Remove task list from DOM and storage:', () => {
  test('should return false when index is greater than length of stored list', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(removeList(3)).toBeFalsy;
  });

  test('should return false when index is less than length of stored list', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(removeList(-1)).toBeFalsy;
  });
});