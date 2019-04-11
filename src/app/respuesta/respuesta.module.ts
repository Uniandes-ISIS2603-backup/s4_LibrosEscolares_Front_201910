import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RespuestaListComponent } from './respuesta-list/respuesta-list.component';
import { DemoMaterialModule } from '../../material-module';
import { RouterModule } from '@angular/router';
import { RespuestaDetailModule } from './respuesta-detail/respuesta-detail.module';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    RouterModule,
    RespuestaDetailModule
  ],
  declarations: [ RespuestaListComponent]
})
export class RespuestaModule { }
