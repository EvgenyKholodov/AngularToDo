import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {

  constructor(public data: DataService) { }
  tasks: Task[] = this.data.items;
  ngOnInit() {
  }

}
