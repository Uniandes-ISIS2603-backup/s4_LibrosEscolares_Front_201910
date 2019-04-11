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


import { CanjeService } from './canje.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [CanjeCreateComponent, CanjeGetComponent, CanjeGetListComponent, CanjeUpdateComponent],
  exports: [CanjeCreateComponent, CanjeGetComponent, CanjeGetListComponent, CanjeUpdateComponent],
  providers: [CanjeService]
})
export class CanjeModule { }
