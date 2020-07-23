import {NgModule} from '@angular/core';
import {NameComponent} from './name.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: NameComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [NameComponent],
  exports: [NameComponent]
})
export class NameModule {
}
