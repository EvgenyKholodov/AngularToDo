import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  placeHolder = 'What do you want to find?';

  test(): void {
    alert('it doesnt work now:)');
  }
  constructor() { }

  ngOnInit() {
  }

}
