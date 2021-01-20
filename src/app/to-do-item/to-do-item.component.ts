import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})

export class ToDoItemComponent implements OnInit {

  @Input('todo') todo: any = {};
  @Input('isComplete') isComplete: boolean;

  public id: string;

  constructor() { }

  ngOnInit() {
    this.id = this.idGenerator();
  }
 
  @Output() deleteEvent = new EventEmitter();
  @Output() markEvent = new EventEmitter();

  deleteToDo(todo) {
    this.deleteEvent.emit(todo);
  }

  toggleToDo(todo) {
    this.markEvent.emit(todo);
  }

  idGenerator() {
    const S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };

    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

}
