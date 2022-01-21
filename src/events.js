import checkCompleted from './setList.js';
import Storage from './store.js';

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

