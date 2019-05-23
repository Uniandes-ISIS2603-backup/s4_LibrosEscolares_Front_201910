import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { CanjeCreateComponent } from './canje-create/canje-create.component';
import { CanjeGetComponent } from './canje-get/canje-get.component';
import { CanjeGetListComponent } from './canje-get-list/canje-get-list.component';
import { CanjeUpdateComponent } from './canje-update/canje-update.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import{DemoMaterialModule} from '../../../src/material-module'


import { CanjeService } from './canje.service';
import { from } from 'rxjs';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    DemoMaterialModule
  ],
  declarations: [CanjeCreateComponent, CanjeGetComponent, CanjeGetListComponent, CanjeUpdateComponent],
  exports: [CanjeCreateComponent, CanjeGetComponent, CanjeGetListComponent, CanjeUpdateComponent],
  providers: [CanjeService]
})
export class CanjeModule { }
