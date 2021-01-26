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

  public notification = '';

  constructor(private toDoDataService: ToDoDataService) {
  }

  addToDo() {
    this.toDoDataService.addToDo(this.newToDo);
    this.notification = `${this.newToDo.title} added to task list`;
    this.newToDo = new ToDo();
  }

  onSubmit(value) {
    console.log(this.newToDo);
  }

  toggleComplete(todo) {
    if (todo.complete) {
      this.notification = `Task ${todo.title} marked incomplete`;
    } else {
      this.notification = `Task ${todo.title} marked complete`;
    }
    this.toDoDataService.toggleComplete(todo);
  }

  deleteToDo(todo) {
    this.notification = `Task ${todo.title} deleted`;
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
