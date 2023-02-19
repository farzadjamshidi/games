import { NgModule } from '@angular/core';
import { DotsAndBoxesRoutingModule } from './dots-and-boxes-routing.module';
import { DotsAndBoxesComponent } from './dots-and-boxes.component';



@NgModule({
  declarations: [
    DotsAndBoxesComponent
  ],
  imports: [
    DotsAndBoxesRoutingModule
  ],
  exports: [
    DotsAndBoxesComponent
  ]
})
export class DotsAndBoxesModule { }
