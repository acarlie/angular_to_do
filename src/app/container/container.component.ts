import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  @Input() public title: string;
  @Input() public padding: boolean;
  @Input() public ariaLabel: string;

  constructor() { }

  ngOnInit() {
  }

}
