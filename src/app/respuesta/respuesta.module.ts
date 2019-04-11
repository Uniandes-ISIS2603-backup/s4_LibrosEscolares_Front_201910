import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RespuestaDetailComponent } from './respuesta-detail/respuesta-detail.component';
import { RespuestaListComponent } from './respuesta-list/respuesta-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RespuestaDetailComponent, RespuestaListComponent]
})
export class RespuestaModule { }
