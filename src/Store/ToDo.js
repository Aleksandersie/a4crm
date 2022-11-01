const { makeAutoObservable } = require("mobx");

export default class ToDoStore {
  constructor() {
    this._toDoList = [];
    makeAutoObservable(this);
  }

  setToDoList(toDo) {
    this._toDoList = toDo;
  }

  get toDoList() {
    return this._toDoList;
  }
}
