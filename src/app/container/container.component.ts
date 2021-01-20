import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  @Input('title') title: string;
  @Input('padding') padding: boolean;
  @Input('ariaLabel') ariaLabel: string;
  
  constructor() { }

  ngOnInit() {
  }

}
