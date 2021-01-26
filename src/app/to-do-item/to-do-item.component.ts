import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})

export class ToDoItemComponent implements OnInit {

  constructor() { }

  @Input() public todo: any = {};
  @Input() public isComplete: boolean;

  public id: string;

  @Output() deleteEvent = new EventEmitter();
  @Output() markEvent = new EventEmitter();

  ngOnInit() {
    this.id = this.idGenerator();
  }

  deleteToDo(todo) {
    this.deleteEvent.emit(todo);
  }

  toggleToDo(todo) {
    this.markEvent.emit(todo);
  }

  idGenerator() {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000)).toString(16).substring(1);
    };

    return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
  }

}
