import { removeCompleted } from "../__mocks__/taskCompleted";
import { inicializeLists } from '../__mocks__/editTasks';

describe('Remove completed task list:', () => {
  inicializeLists();

  test('should returns true when called', () => {
    expect(removeCompleted()).toBeTruthy();
  });
  
})