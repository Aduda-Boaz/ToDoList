/*eslint import/no-cycle: [2, { maxDepth: 1 }]*/
import checkCompleted from './setList.js';
import Storage from './store.js';
import dropItems from './dragdrop.js';
import { addNewList, deleteList, clearSelection } from './add-remove.js';

function updateList() {
  const checkBoxItems = document.querySelectorAll('.checkbox');
  const descriptionItems = document.querySelectorAll('.list-description');
  const newObj = [];
  for (let i = 0; i < checkBoxItems.length; i += 1) {
    newObj.push({
      description: descriptionItems[i].value,
      completed: checkBoxItems[i].checked,
      index: i + 1,
    });
  }
  Storage(newObj);
}

export const dragDropEvents = () => {
  const elements = document.querySelectorAll('.task-item');
  const containers = document.querySelectorAll('.div-container');
  const arrElements = Array.from(elements);
  const arrContainer = Array.from(containers);

  let dragTask = null;

  arrElements.forEach((element) => {
    element.setAttribute('draggable', 'true');
    element.addEventListener('dragstart', () => {
      dragTask = element;
    });
    element.addEventListener('dragend', () => {
      dragTask = null;
    });
  });

  arrContainer.forEach((container) => {
    container.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
    container.addEventListener('dragenter', (e) => {
      e.preventDefault();
    });
    container.addEventListener('drop', () => {
      dropItems(dragTask, container.firstElementChild);
      updateList();
    });
  });
};

export const listCompleteEvents = () => {
  const checkboxes = document.querySelectorAll('.checkbox');
  const checkboxArr = Array.from(checkboxes);

  checkboxArr.forEach((inputBox) => {
    inputBox.addEventListener('change', (e) => {
      checkCompleted(e);
      updateList();
    });
  });
};

export const addNewEvents = () => {
  const input = document.querySelector('#Task-input');

  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && input.value !== '' && e.target.matches('#Task-input')) {
      addNewList();
      updateList();
    }
  });
};

export const editListEvents = () => {
  const listsInput = document.querySelectorAll('.list-description');
  const arrInput = Array.from(listsInput);

  arrInput.forEach((input) => {
    input.addEventListener('input', () => {
      updateList();
    });
  });
};

export const deleteListEvents = () => {
  const lists = document.querySelectorAll('.icon-trash');
  const listArr = Array.from(lists);

  listArr.forEach((lists) => {
    lists.addEventListener('click', (e) => {
      deleteList(e);
      updateList();
    });
  });
};

export const deleteAllEvents = () => {
  const clearLists = document.querySelector('#clear-btn');

  clearLists.addEventListener('click', () => {
    clearSelection();
    updateList();
  });
};