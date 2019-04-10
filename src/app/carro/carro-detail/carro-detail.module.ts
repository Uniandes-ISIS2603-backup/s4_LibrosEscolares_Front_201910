import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../../../../src/material-module';
import { RouterModule } from '@angular/router';
import { CarroComponent } from './carro.component';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    RouterModule
  ],
  declarations: [CarroComponent],
  exports: [CarroComponent]
})
export class CarroDetailModule { }
