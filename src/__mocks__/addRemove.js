import { globaldocument } from "../../dynamic";
import List from "../list";
import Storage from "./localStorageMock";

const addNewList = (description) => {
  if (validateDescription(description)) {
    const lists = Storage.emptyTaskList();
    const task1 = new List(description, false, lists.length);
    lists.push(task1);
    console.log(task1);
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

const removeList = (index) => {
  let lists = Storage.taskListTasks();

  if (index < 0 || index >= lists.length) {
    return false;
  }
  lists = lists.splice(index, 1);

  const tasklist = globaldocument.getElementById('Task-input');
  const taskListChildren = tasklist.children;
  const list2delete = taskListChildren[index];
  list2delete.remove();

  return Storage.setLists();
};

const getTasklistFromDOM = () => {
  const taskList = globaldocument.getElementById('Task-input');
  const taskListLength = taskList.children.length;
  return taskListLength;
};

const validateDescription = (text) => {
  if (text === null || text === '') {
    return false;
  }
  return true;
};

export { addNewList, getTasklistFromDOM, removeList, validateDescription };