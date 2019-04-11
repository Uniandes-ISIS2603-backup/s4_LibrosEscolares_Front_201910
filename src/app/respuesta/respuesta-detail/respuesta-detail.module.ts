import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../../../material-module';
import { RouterModule } from '@angular/router';
import { RespuestaDetailComponent } from './respuesta-detail.component';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    RouterModule
  ],
  declarations: [RespuestaDetailComponent],
  exports:[RespuestaDetailComponent]
})
export class RespuestaDetailModule { }
