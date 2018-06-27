import {Injectable} from '@angular/core';
import {Task} from '../models/task';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  items: Task[] = localStorage.todo ? JSON.parse(localStorage.todo) : [];
  currentTask = '';
  currentTaskName: string;
  isCheckAll: boolean;
  regExp = /[a-z][a-z0-9]*>/gi;
  error: string;

  addTask(event): void {
    this.error = '';
    if (event.keyCode !== 13) { return; }
    if (this.currentTask !== '' && this.currentTask.match(this.regExp) === null) {
      this.items.push({
        id: Date.now(),
        name: this.currentTask,
        isReady: false,
        edit: false,
      });
      this.currentTask = '';
      this.addToStorage();
    } else {
      if (this.currentTask === '') {
        this.error = 'Please use furking keys';
      }
      if (this.currentTask.match(this.regExp) !== null) {
        this.error = 'Please dont use it';
      }
    }
  }

  changeCondition(task): void {
    task.isReady = !task.isReady;
    this.addToStorage();
  }

  removeItem(id: number): void {
    const index: number = this.items.indexOf(this.items.find(item => item.id === id));
    this.items.splice(index, 1);
    this.addToStorage();
  }

  addToStorage(): void {
    const localData: string = JSON.stringify(this.items);
    localStorage.setItem('todo', localData);
  }

  edit(event, task): void {
    this.currentTaskName = task.name;
    this.items.forEach((item) => {
      item.edit = false;
    });
    task.edit = !task.edit;

    this.addToStorage();
  }

  changeTask(event, task): void {
    if (event.keyCode === 13) {
      task.edit = !task.edit;
      this.addToStorage();
    }
  }

  closeEdit(task): void {
    if (task.edit) {
      task.name = this.currentTaskName;
      this.items.forEach((item) => {
        item.edit = false;
      });
      this.addToStorage();
    }
  }

  checkAll(): void {
    this.items.forEach((item) => {
      item.isReady = this.isCheckAll;
    });
  }

  constructor() {
  }
}
