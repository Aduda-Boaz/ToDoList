/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */
import LocalStorage from "../__mocks__/localStorageMock";
import List from "../__mocks__/addRemove";

global.localStorage = new LocalStorage();
const lists = new List();

describe('Add list of tasks', () => {
  test('Add list index', () => {
    lists.addList('Good');
    expect(lists.list[1]).toBe('Good');
  });

  test('should check available description', () => {
    lists.addList('Go for vacation');
    expect(lists.list[1].description).toBe('Go for vacation');
  });
});

describe('remove list from todo', () => {
  it('should remove todo list', () => {
    const index = 1;
    lists.deleteList(index);
    expect(lists.list.length).toBe(1);
  });
});