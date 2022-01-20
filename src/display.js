export default class DisplayLists {
  reset = (element) => {
    element.innerHTML = '';
  };

  displayList = (parent, task) => {
    const listDiv = DisplayLists.createHtml(parent, div, list);
    const listInput = DisplayLists.createHtml(listDiv, 'div', 'list_input');

    const input = DisplayLists.createHtml(listInput, 'input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('class', `list_${list.index}_checkbox checkbox_list`);

    const inputList = DisplayLists.createHtml(listInput, 'input');
    inputList.setAttribute('type', 'text');
    inputList.setAttribute('class', `list_${list.index} input_list`);
    inputList.dataset.id = list.index;
    inputList.value = list.description;
    inputList.id = `input_list_${list.index}`;

    const li = DisplayLists.createHtml(listDiv, 'li', 'icon-ellipsis-vertical');
    li.setAttribute('class', 'icon-trash');
    li.id = `list_${list.index}`;
    li.dataset.id = list.index;
  };

}