import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarroComponent } from './carro/carro.component';
import { CarroDetailComponent } from './carro/carro-detail/carro-detail.component';
import { CarroListComponent } from './carro-list/carro-list.component';
import { CarroCreateComponent } from './carro-create/carro-create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CarroComponent, CarroDetailComponent, CarroListComponent, CarroCreateComponent]
})
export class CarroModule { }
