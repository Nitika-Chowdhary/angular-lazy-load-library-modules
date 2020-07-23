import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-time',
  template: `<h1>Time Component</h1>`
})
export class TimeComponent implements OnInit {
  time: string;
  ngOnInit(): void {
  }
}
