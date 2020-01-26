import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  @Input('message') message: string;
  @Input('condition') condition: boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
