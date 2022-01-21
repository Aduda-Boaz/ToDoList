/* eslint no-restricted-globals: "off", curly: "error" */
import _, { create } from 'lodash';
import './style.css';
import Storage from './store.js';
import { displayList, setEventListeners } from './add-remove';

let taskList = [];

if (localStorage.getItem('lists')) {
  taskList = JSON.parse(localStorage.getItem('lists'));
  displayList(taskList);
  setEventListeners();
} else {
  Storage(taskList);
  displayList(taskList);
  setEventListeners();
}