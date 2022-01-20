"use strict";

require("./style.css");

/* eslint-disable no-unused-vars */
var listItems = [{
  description: 'Go to the gym',
  completed: false,
  index: 0
}, {
  description: 'Prepare breakfast',
  completed: false,
  index: 1
}, {
  description: 'Wash dishes',
  completed: false,
  index: 2
}];

function createList(taskList) {
  return "\n    <div class=\"task\">\n      <input type=\"checkbox\">\n      <p>".concat(taskList.description, "</p>\n      <i class=\"icon-ellipsis-vertical\"></i>\n    </div>\n  ");
}

var taskUl = document.querySelector('.task-display');
listItems.forEach(function (taskList) {
  var list = document.createElement('list');
  list.innerHTML = createList(taskList);
  taskUl.appendChild(list);
});