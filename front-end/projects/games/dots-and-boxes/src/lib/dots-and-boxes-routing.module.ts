import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DotsAndBoxesComponent } from './dots-and-boxes.component';

const routes: Routes = [
  {
    path: '',
    component: DotsAndBoxesComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DotsAndBoxesRoutingModule { }
