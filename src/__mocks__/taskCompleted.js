import { globaldocument } from '../../dynamic';
import Storage from './localStorageMock';

const populateListDOM = (ls) => {
  const tasklist = globaldocument.getElementById('Task-input');
  tasklist.innerHTML = '';
  ls.forEach((list) => {
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

const returnsUncompleted = (list) => !list.checkCompleted;

function removeCompleted() {
  const lists = Storage.taskListTasks();
  const unCompletedTask = lists.filter(returnsUncompleted);

  populateListDOM(unCompletedTask);

  return Storage.setLists();
}

export default removeCompleted;