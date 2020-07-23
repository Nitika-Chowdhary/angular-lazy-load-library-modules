import {NgModule} from '@angular/core';
import {TimeComponent} from './time.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: TimeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [TimeComponent],
  exports: [TimeComponent]
})
export class TimeModule {
}
