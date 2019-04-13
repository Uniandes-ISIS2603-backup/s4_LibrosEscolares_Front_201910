import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RespuestaListComponent } from './respuesta-list/respuesta-list.component';
import { DemoMaterialModule } from '../../material-module';
import { RouterModule } from '@angular/router';
import { RespuestaDetailModule } from './respuesta-detail/respuesta-detail.module';
import { RespuestaUpdateComponent } from './respuesta-update/respuesta-update.component';
import { RespuestaCreateComponent } from './respuesta-create/respuesta-create.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    RouterModule,
    RespuestaDetailModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [ RespuestaListComponent, RespuestaUpdateComponent, RespuestaCreateComponent]
})
export class RespuestaModule { }
