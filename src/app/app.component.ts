import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from './usuario/Usuario.service';
import { Libro } from './libros/Libro';
import { LibrosService } from './libros/libros.service';
import { forEach } from '@angular/router/src/utils/collection';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';



/**
 * The app component. This component is the base of s4_libros-Front
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    /**
     * The title that appears on the NavBar and the web browser
     */
    title: String;
    select: boolean = false;
    isLoggedIn$: Observable<boolean>;
    isLoggedOut$: Observable<boolean>;


    @ViewChild('libroTitulo') libroTitulo;
    @ViewChild('libroAutor') libroAutor;
    Libros: Libro[];
    parametroBuscar: String;
    ngOnInit(): void {
        this.title = "s4_libros-Front";
        this.authService.start();
        this.isLoggedIn$ = this.authService.isLoggedIn;
        this.isLoggedOut$ = this.authService.isLoggedOut;
    }
    /**
  * @ignore
  */
    constructor(private authService: AuthService, public us: UsuarioService, private LibrosService: LibrosService, private _sanitizer: DomSanitizer) { }

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

    selected(): void {
        this.select = true;
    }

    diselected(): void {
        this.select = false;
        this.Libros.length = 0;
    }

    getSelect(): boolean {
        return this.select;
    }

    logout(): void {
        this.us.usuarioActual = null;
        this.authService.logout()
    }

    getLibros(): void {
        let titulo = this.libroTitulo.nativeElement.value;
        if (titulo != '') {
            this.parametroBuscar = titulo;
            this.buscar(1);
        }
        else {
            titulo = this.libroAutor.nativeElement.value;
            this.parametroBuscar = titulo;
            this.buscar(2);
        }
    }
    /**
    * Busca los libros acorde a la barra de busqueda, si la de titulo no esta vacia, usa esa, de lo contrario, usa la de autor
    */
    buscar(caso: number): void {
        switch (caso) {
            case 1: this.LibrosService.getLibrosPorNombre(this.parametroBuscar).subscribe(Libros => this.Libros = Libros, () => {
                this.create.emit();
            });
                break;
            case 2: this.LibrosService.getLibrosPorAutor(this.parametroBuscar).subscribe(Libros => this.Libros = Libros, () => {
                this.create.emit();
            });
                break;
        }

    }




}





