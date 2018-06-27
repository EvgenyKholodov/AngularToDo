import { Component, OnInit } from '@angular/core';
import { Task } from './../../models/task';
import { DataService } from '../data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  currentTask = 'currentTask';
  addTask = 'addTask';
  placeHolder = 'Add new task ...';

  constructor(public data: DataService) { }
  ngOnInit() { }

}
