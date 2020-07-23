import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-name',
  template: `<h1>Name Component</h1>`
})
export class NameComponent {
  @Input() name: string;
}
