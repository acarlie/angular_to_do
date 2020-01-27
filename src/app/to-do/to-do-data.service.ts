import { Injectable } from '@angular/core';
import { ToDo } from './to-do';

const exampleToDos = [
  {id: 0, title: '← Mark this example task complete using the checkbox.', complete: false},
  {id: 1, title: 'Walk the cat.', complete: false}, 
  {id: 2, title: 'Mow the lawn.', complete: false}, 
  {id: 3, title: 'This is a completed task, delete it using the delete button →', complete: true}
];

@Injectable({
  providedIn: 'root'
})

export class ToDoDataService {
  // creating ToDo ids
  todos: ToDo[] = JSON.parse(localStorage.getItem('todos')) || [];
  lastId: number = 0;

  constructor() { 
    this.setId();
    this.setTodos();
  }
  
  setId(): ToDoDataService {
    this.lastId = this.todos.length;
    return this;
  }

  setTodos(): ToDoDataService {
    if (this.todos.length === 0) {
      exampleToDos.forEach(x => this.todos.push(x));
    } else {
      this.todos.map((x, i) => {
        x.id = i;
      });
    }
    return this;
  }

  addToDo(todo: ToDo): ToDoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    this.saveToLocal(this.todos);
    return this;
  }

  deleteToDo(id): ToDoDataService {
    setTimeout(() => {
      this.todos = this.todos.filter(x => x.id !== id);
      this.saveToLocal(this.todos);
    }, 250)
    return this;
  }

  toggleComplete (todo): ToDoDataService {
    setTimeout(() => {
      todo.complete = todo.complete ? false : true;
      this.saveToLocal(this.todos);
    }, 700);
    return todo;
  }

  saveToLocal(todos){
    localStorage.setItem('todos', JSON.stringify(todos));
  }


  getAllToDos(): ToDo[] {
    return this.todos;
  }
}
