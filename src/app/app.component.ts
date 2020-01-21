import { Component } from '@angular/core';
import { ToDo } from './to-do';
import { ToDoDataService } from './to-do-data.service';

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

  get todos() {
    return this.toDoDataService.getAllToDos();
  }

}
