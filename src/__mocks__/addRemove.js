export default class List {
  list = [];
  
  addList = (description) => {
    const index = this.list.length + 1;
    const completed = false;
    this.list.push({ description, completed, index });
    localStorage.setItem('list', JSON.stringify(this.list));
  };

  setIndex = () => {
    let i = 0;
    this.list.forEach((item) => {
      i += 1;
      item.index = i;
    });
  }

  deleteList = (index) => {
    this.list = this.list.filter((item) => {
      Number(index) !== item.index
    });
    return this.list;
  }

  listCompleted = (index) => {
    const lists = this.list.find((item) => Number(index) === item.index);
    if (lists.completed === true) {
      lists.completed = false;
    } else {
      lists.completed = true;
    }
    localStorage.setItem('list', JSON.stringify(this.list));
  };
}