export default class LocalStorage {
  constructor() {
    this.storage = {};
  } 

  getItem(key) {
    return this.storage[key] || null;
  }

  setItem(key, value) {
    this.storage[key] = value.toString();
  }

  removeItem(key) {
    delete this.storage[key];
  }

  reset() {
    this.storage = {};
  }
}