import { Usuario } from './../../usuario/usuario';
import { UsuarioService } from './../../usuario/Usuario.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Libro } from '../Libro';

import { Router, RouterModule, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LibrosService } from '../libros.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-libros-create',
  templateUrl: './libros-create.component.html',
  styleUrls: ['./libros-create.component.css']
})
export class LibrosCreateComponent implements OnInit {
  /**
       * Metodo constructor
       */
  constructor(
    private librosService: LibrosService,
    private toastrService: ToastrService,
    private router: Router,
    private http: HttpClient,
    private us: UsuarioService) { }
  /**
   * Atributo que representa el nuevo libro
   */
  libro: Libro;
  dueno: Usuario;

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
    this.router.navigate(['/libros/list']);
  }


  /**
   * Crea un nuevo libro
   */
  createLibro(): void {
    this.dueno = this.us.getUsuarioUsuarioActual();
    if (this.dueno == null) {
      this.toastrService.error("Porfavor, inicie sesion antes de agregar un libro", "Error");
    }
    else {
      this.libro.duenio = this.dueno;
      this.librosService.createLibro(this.libro)
        .subscribe(() => {
          this.create.emit();
          this.toastrService.success("El libro fue creado", "Creacion libro");
          this.router.navigate(['/libros/list']);
        }, err => {
          this.toastrService.error(err, "Error");
        });
    }

  }



  ngOnInit() {
    this.libro = new Libro();

  }

}
