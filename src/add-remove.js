import { } from './events.js';
import List from './list.js';

export const createList = (list) => {
  const divContainer = document.createElement('div');
  const li = document.createElement('li');
  const checkValue = (list.completed === true) ? 'checked' : '';
  const checkClass = (list.completed === true) ? 'marked' : '';
  divContainer.classList.add('div-container');
  li.classList.add('task-item');

  li.innerHTML = `
        <label class="task-label">
          <input class="checkbox" ${checkValue} type="checkbox">
          <input class="task-description ${checkClass}" type="text" value="${list.description}">
          <input type="hidden" class="" value="${list.index}">
        </label>
        <i class="icon-ellipsis-vertical"></i>
        <i class="icon-trash"></i>`;

  divContainer.appendChild(li);

  return divContainer;
};