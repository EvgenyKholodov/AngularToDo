import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  gif = true;
  title = 'My ToDO';
  img: any = [
    'https://media.giphy.com/media/xThtadhNmxBdhfB3iM/giphy.gif',
    'https://media.giphy.com/media/12NUbkX6p4xOO4/giphy.gif',
  ];
  item: string = this.img[Math.floor(Math.random() * this.img.length)];
  ngOnInit() {

    setTimeout(() => { this.gif = false; }, 3000);
  }
}
