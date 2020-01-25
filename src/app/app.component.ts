import { Component } from '@angular/core';
import { ToDo } from './to-do/to-do';
import { ToDoDataService } from './to-do/to-do-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ToDoDataService]
})

export class AppComponent {
  newToDo: ToDo = new ToDo();

  constructor(private toDoDataService: ToDoDataService) {
  }
  
  addToDo() {
    this.toDoDataService.addToDo(this.newToDo);
    this.newToDo = new ToDo();
  }

  toggleComplete(todo) {
    this.toDoDataService.toggleComplete(todo);
  }

  deleteToDo(todo) {
    this.toDoDataService.deleteToDo(todo.id);
  }

  get todos() {
    const todos = this.toDoDataService.getAllToDos();
    return todos.filter(x => x.complete === false);
  }

  get completed() {
    const todos = this.toDoDataService.getAllToDos();
    return todos.filter(x => x.complete === true);
  }

}
