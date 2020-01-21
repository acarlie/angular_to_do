import { Injectable } from '@angular/core';
import {ToDo} from './to-do';


@Injectable({
  providedIn: 'root'
})
export class ToDoDataService {
  // creating ToDo ids
  lastId: number = 0;

  // placeholder for ToDos
  todos: ToDo[] = [];

  constructor() { }

  addToDo (todo: ToDo): ToDoDataService {
    if (!todo.id){
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  deleteToDo () {

  }

  updateToDo () {

  }

  toggleComplete () {

  }

  getAllToDos () {

  }
}
