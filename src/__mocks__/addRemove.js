import { globaldocument } from "../../dynamic";
import { updateList } from '../events';
import List from "../list";
import Storage from "../store";

const addNewList = (description) => {
  if (updateList(description)) {
    const lists = Storage.emptyTaskList();
    const task1 = new List(description, lists.length);
    lists.push(task1);
    Storage.setLists();
    const taskList = globaldocument.getElementById('Task-input');

    const div = document.createElement('div');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = task1.checkCompleted;
    const p = document.createElement('p');
    p.textContent = task1.description;
    const span = document.createElement('span');
    span.textContent = 'delete';

    div.appendChild(checkbox);
    div.appendChild(p);
    div.appendChild(span);
    taskList.appendChild(div);

    return true;
  }
  return false;
};

const gettasklistFromDOM = () => {
  const taskList = globaldocument.getElementById('Taskinput');
  const taskListLength = taskList.children.length;
  return taskListLength;
};

export { addNewList, gettasklistFromDOM };