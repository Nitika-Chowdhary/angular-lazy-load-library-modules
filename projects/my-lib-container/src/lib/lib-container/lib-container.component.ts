import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-lib-container',
  template: `
    <h1>Lib Container Component</h1>
    <router-outlet></router-outlet>
  `
})
export class LibContainerComponent {
  @Input() name: string;
}
