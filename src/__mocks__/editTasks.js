import { globaldocument } from '../../dynamic';

import Storage from './localStorageMock';
import { validateDescription } from './addRemove';

const editList = (descrip, index) => {
  if (validateDescription(descrip)) {
    const lists = Storage.taskListTasks();
    if (index >= 0 && index < lists.length) {
      const list2edit = lists[index];
      list2edit.description = descrip;

      // in the DOM

      const taskList = globaldocument.getElementById('Task-input');
      const liToEdit = taskList.children[index];
      const pToEdit = liToEdit.children[1];
      pToEdit.textContent = descrip;

      return Storage.setLists(); // always return true
    }
    return 'Index to be between 0 and list length stored';
  }
  return 'No empty task description';
};

const verifyEdits = (descrip, index) => {
  const taskList = globaldocument.getElementById('Task-input');
  const liToEdit = taskList.children[index];
  const pToEdit = liToEdit.children[1];
  const actualText = pToEdit.textContent;
  if (descrip === actualText) {
    return true;
  }
  return false;
};

const inicializeLists = () => {
  const tasklist = globaldocument.getElementById('Task-input');
  tasklist.innerHTML = '';
  const lists = Storage.taskListTasks();
  lists.forEach((list) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = list.checkCompleted;
    const p = document.createElement('p');
    p.textContent = list.description;
    const span = document.createElement('span');
    span.textContent = 'delete';

    li.appendChild(checkbox);
    li.appendChild(p);
    li.appendChild(span);
    tasklist.appendChild(li);
  });
};

export { editList, verifyEdits, inicializeLists };