import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-input-line',
  template: `
    <input [(ngModel)]="data[model]" (keydown)="data[key]($event)" placeholder="{{placeHolder}}">
  `,
  styleUrls: ['./input-line.component.css']
})
export class InputLineComponent implements OnInit {

  constructor(public data: DataService) { }
  @Input() placeHolder;
  @Input() model;
  @Input() key;


  ngOnInit() {
  }

}
