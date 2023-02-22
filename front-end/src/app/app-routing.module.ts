import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dots-and-boxes',
    loadChildren: () => import('@games/dots-and-boxes').then(m => m.DotsAndBoxesModule)
  },
  {
    path: '**',
    redirectTo: 'dots-and-boxes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
