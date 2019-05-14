import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Libro } from './libros/Libro';
import { LibrosService } from './libros/libros.service';

/**
 * The app component. This component is the base of s4_libros-Front
 */
@Component({
    selector: 'app-inicio',
    templateUrl: './app.inicio.html',
    styleUrls: ['./app.inicio.css']
})



export class AppInicio implements OnInit {
    @ViewChild('libroTitulo') libroTitulo;
    @ViewChild('libroAutor') libroAutor;
    /**
     * The title that appears on the NavBar and the web browser
     */
    title: String;
    select: boolean = false;
    Libros: Libro[];
    parametroBuscar: String;
    

       /**
     * @ignore
     */
    constructor(private LibrosService: LibrosService) { }

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

    selected(): void
    {
        this.select = true;
    }

    diselected(): void
    {
         this.select = false;
    }

    getSelect(): boolean
    {
        return this.select;
    }

    logout(): void {
    }
     ngOnInit() {
       
    }
    /**
* Revisa que barra de busqueda esta siendo utilizada y busca en ella
*/
    getLibros(): void {
       let titulo=this.libroTitulo.nativeElement.value;
       if(titulo!='')
       {
       this.parametroBuscar =titulo;
       this.buscar(1);
       }
       else 
        {
            titulo=this.libroAutor.nativeElement.value;
            this.parametroBuscar =titulo;
            this.buscar(2);
        }
    }
/**
* Busca los libros acorde a la barra de busqueda, si la de titulo no esta vacia, usa esa, de lo contrario, usa la de autor
*/ 
    buscar(caso: number): void
    {
        switch(caso){
        case 1:this.LibrosService.getLibrosPorNombre(this.parametroBuscar).subscribe(Libros => this.Libros = Libros,() => {
            this.create.emit(); 
             }); 
             break;
        case 2:this.LibrosService.getLibrosPorAutor(this.parametroBuscar).subscribe(Libros => this.Libros = Libros,() => {
            this.create.emit(); 
             }); 
             break;
        }
      
    }

}





