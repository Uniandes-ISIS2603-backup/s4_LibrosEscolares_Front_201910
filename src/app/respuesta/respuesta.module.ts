import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RespuestaListComponent } from './respuesta-list/respuesta-list.component';
import { DemoMaterialModule } from '../../material-module';
import { RouterModule } from '@angular/router';
import { RespuestaDetailModule } from './respuesta-detail/respuesta-detail.module';
import { RespuestaUpdateComponent } from './respuesta-update/respuesta-update.component';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    RouterModule,
    RespuestaDetailModule
  ],
  declarations: [ RespuestaListComponent, RespuestaUpdateComponent]
})
export class RespuestaModule { }
