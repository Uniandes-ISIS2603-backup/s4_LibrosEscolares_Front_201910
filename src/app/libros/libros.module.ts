import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrosListComponent } from './libros-list/libros-list.component';
import { LibrosDetailComponent } from './libros-detail/libros-detail.component';
import { LibrosService } from './libros.service';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
     FormsModule,
     BrowserModule,
     AppRoutingModule,
     HttpClientModule
  ],
  declarations: [LibrosListComponent, LibrosDetailComponent],
  providers: [LibrosService],
 exports:[LibrosListComponent]
})
export class LibrosModule { }





