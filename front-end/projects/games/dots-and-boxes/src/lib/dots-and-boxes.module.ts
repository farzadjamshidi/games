import { NgModule } from '@angular/core';
import { DotsAndBoxesRoutingModule } from './dots-and-boxes-routing.module';
import { DotsAndBoxesComponent } from './dots-and-boxes.component';
import { PagesModule } from './pages/pages.module';



@NgModule({
  declarations: [
    DotsAndBoxesComponent
  ],
  imports: [
    PagesModule,
    DotsAndBoxesRoutingModule
  ],
  exports: [
    DotsAndBoxesComponent
  ]
})
export class DotsAndBoxesModule { }
