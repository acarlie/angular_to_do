import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})

export class ToDoItemComponent implements OnInit {

  @Input('todo') todo: object;
  @Input('isComplete') isComplete: boolean;

  constructor() { }

  ngOnInit() {
  }
 
  @Output() deleteEvent = new EventEmitter();
  @Output() markEvent = new EventEmitter();

  deleteToDo(todo) {
    this.deleteEvent.emit(todo);
  }

  toggleToDo(todo) {
    this.markEvent.emit(todo);
  }

}
