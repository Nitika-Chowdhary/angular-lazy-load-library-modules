import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibContainerComponent } from './lib-container.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@my-lib/src/lib/name').then(m => m.NameModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [LibContainerComponent],
  exports: [LibContainerComponent]
})
export class LibContainerModule {
}
