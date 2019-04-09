import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarroComponent } from './carro-detail/carro.component';
import { CarroListComponent } from './carro-list/carro-list.component';
import { CarroCreateComponent } from './carro-create/carro-create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CarroComponent, CarroListComponent, CarroCreateComponent]
})
export class CarroModule { }
