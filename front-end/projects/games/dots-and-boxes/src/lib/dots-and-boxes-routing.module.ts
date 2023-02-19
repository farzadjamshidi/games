import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DotsAndBoxesComponent } from './dots-and-boxes.component';

const routes: Routes = [
  {
    path: '',
    component: DotsAndBoxesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DotsAndBoxesRoutingModule { }
