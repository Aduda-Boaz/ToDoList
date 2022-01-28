import { editList, verifyEdits, inicializeLists } from '../__mocks__/editTasks.js';

describe('Edit list description:', () => {
  inicializeLists();

  test('should return error message when new task description is invalid', () => {
    expect(editList('', 0)).toBe('No empty task description');
  });
  test('should return error message for invalid index', () => {
    expect(editList('get ready', -1)).toBe('Index to be between 0 and list length stored');
  });

  test('should return true when for valid descrip and index', () => {
    expect(editList('get ready', 2)).toBeTruthy();
  });

  test('should return true when the descrip from previous test was updated in the DOM.', () => {
    expect(verifyEdits('get ready', 2)).toBeTruthy();
  });
});