import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrosListComponent } from './libros-list/libros-list.component';
import { LibrosDetailComponent } from './libros-detail/libros-detail.component';
import { LibrosService } from './libros.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
     FormsModule
  ],
  declarations: [LibrosListComponent, LibrosDetailComponent],
  providers: [LibrosService],
 exports:[LibrosListComponent]
})
export class LibrosModule { }





