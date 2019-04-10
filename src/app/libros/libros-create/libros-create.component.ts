import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Libro } from '../libro';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

import { LibrosService } from '../libros.service';

@Component({
  selector: 'app-libros-create',
  templateUrl: './libros-create.component.html',
  styleUrls: ['./libros-create.component.css']
})
export class LibrosCreateComponent implements OnInit {

  constructor(
        private librosService: LibrosService,
        private toastrService: ToastrService,
        private router: Router) { }
   /**
    * Atributo que representa el nuevo libro
    */
    libro: Libro;
    
/**
* La salida que dice el componente padre
* que el usuario ya no quiere crear un libro
*/
@Output() cancel = new EventEmitter();

/**
* La salida que dice el componente padre
* el usuario creo el libro
*/
@Output() create = new EventEmitter();
    
    

 /**
    * Cancels the creation of the new libro
    * Redirects to the libros' list page
    */
   cancelCreation(): void {
    this.cancel.emit();
}


   /**
    * Crea un nuevo libro
    */
    createLibro(): void {   
    
    this.librosService.createLibro(this.libro)
        .subscribe(() => {
            this.create.emit();
            this.toastrService.success("El libro fue creado", "Creacion libro");
        }, err => {
            this.toastrService.error(err, "Error");
        });
    }

    
  ngOnInit() {
     this.libro = new Libro();
     
  }

}
