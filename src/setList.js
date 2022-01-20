import List from './list.js';
import Storage from './store.js';

export default class setList {
  constractor() {
    this.lists = Storage.load();
  }

  getLists = () => this.lists.sort((x, y) => x.index - y.index);

  addList = (description, completed = false) => {
    const newList = new List(this.lists.length + 1, description, completed);
    this.lists.push(newList);
    Storage.save(this.lists);
    return newList;
  };
  deleteList = (index) => {
    const newLists = [];
    const listIndex = index - 1;

    this.lists.forEach((j, i) => {
      if (i < listIndex) {
        newLists.push(j);
      } else if (i > listIndex) {
        j.index = i;
        newLists.push(j);
      }
    });
    this.lists = newLists;
    Storage.save(this.lists);
  };
  updateList = (index, description, completed) => {
    this.lists[index - 1].description = description;
    this.lists[index - 1].completed = completed;
    Storage.save(this.lists);

    return this.lists[index - 1];
  };
}