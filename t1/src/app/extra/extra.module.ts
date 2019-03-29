import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelojComponent } from './reloj/reloj.component';
import { HorariosListComponent } from './horarios-list/horarios-list.component';

@NgModule({
  declarations: [
    RelojComponent,
    HorariosListComponent
  ], 
  exports:[
  RelojComponent, 
  HorariosListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ExtraModule { }
