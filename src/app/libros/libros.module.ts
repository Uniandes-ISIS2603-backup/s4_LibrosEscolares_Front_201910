import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrosListComponent } from './libros-list/libros-list.component';
import { LibrosDetailComponent } from './libros-detail/libros-detail.component';
import { LibrosService } from './libros.service';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { LibrosCreateComponent } from './../libros/libros-create/libros-create.component';

@NgModule({
  imports: [
    CommonModule,
     FormsModule,
     BrowserModule,
     AppRoutingModule,
     HttpClientModule
  ],
  declarations: [LibrosListComponent, LibrosDetailComponent,LibrosCreateComponent],
  providers: [LibrosService,LibrosCreateComponent],
 exports:[LibrosListComponent,LibrosCreateComponent]
})
export class LibrosModule { }





