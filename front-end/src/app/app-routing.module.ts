import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dots-and-boxes',
    loadChildren: () => import('@games/dots-and-boxes').then(m => m.DotsAndBoxesModule)
  },
  {
    path: '**',
    loadChildren: () => import('@games/dots-and-boxes').then(m => m.DotsAndBoxesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
