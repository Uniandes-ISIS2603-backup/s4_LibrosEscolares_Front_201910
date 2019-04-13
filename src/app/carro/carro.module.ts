import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarroComponent } from './carro-detail/carro.component';
import { CarroListComponent } from './carro-list/carro-list.component';
import { CarroCreateComponent } from './carro-create/carro-create.component';
import { DemoMaterialModule } from '../../../src/material-module';
import { RouterModule } from '@angular/router';
import { CarroDetailModule } from './carro-detail/carro-detail.module';
import { CarroUpdateComponent } from './carro-update/carro-update.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    RouterModule,
    CarroDetailModule,
    FormsModule
  ],
  declarations: [ CarroListComponent, CarroCreateComponent, CarroUpdateComponent],
  exports: [CarroDetailModule],
  entryComponents:[CarroComponent]
})
export class CarroModule { }
