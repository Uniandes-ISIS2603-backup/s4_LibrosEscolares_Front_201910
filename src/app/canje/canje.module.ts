import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { CanjeCreateComponent } from './canje-create/canje-create.component';
import { CanjeGetComponent } from './canje-get/canje-get.component';
import { CanjeGetListComponent } from './canje-get-list/canje-get-list.component';
import { CanjeUpdateComponent } from './canje-update/canje-update.component';
import { CanjeDeleteComponent } from './canje-delete/canje-delete.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [CanjeCreateComponent, CanjeGetComponent, CanjeGetListComponent, CanjeUpdateComponent, CanjeDeleteComponent],
  exports: [CanjeCreateComponent, CanjeGetComponent, CanjeGetListComponent, CanjeUpdateComponent, CanjeDeleteComponent]
})
export class CanjeModule { }
