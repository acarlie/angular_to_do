import { Injectable } from '@angular/core';
import { ToDo } from './to-do';


@Injectable({
  providedIn: 'root'
})

export class ToDoDataService {
  // creating ToDo ids
  lastId: number = 0;

  // placeholder for ToDos
  todos: ToDo[] = [];

  constructor() { }

  addToDo(todo: ToDo): ToDoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    console.log(this.todos);
    return this;
  }

  // deleteToDo () {

  // }

  // updateToDo () {

  // }

  // toggleComplete (todo) {

  // }

  getAllToDos(): ToDo[] {
    return this.todos;
  }
}
