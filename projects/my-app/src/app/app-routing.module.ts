import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'name',
    loadChildren: () => import('@my-lib/src/lib/name').then(m => m.NameModule)
  },
  {
    path: 'time',
    loadChildren: () => import('@my-lib/src/lib/time').then(m => m.TimeModule)
  },
  {
    path: 'nested-lib',
    loadChildren: () => import('@my-lib-container').then(m => m.LibContainerModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
