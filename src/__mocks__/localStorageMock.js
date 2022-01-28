import List from '../list';

export default class Storage {
  static emptyTaskList() {
    return [];
  }

  static taskListTasks() {
    const lists = [];
    const task1 = new List('go out', false, 0);
    const task2 = new List('prepare breakfast', true, 1);
    const task3 = new List('go to gym', false, 2);

    lists.push(task1);
    lists.push(task2);
    lists.push(task3);

    return lists;
  }

  static setLists() {
    return true;
  }
}