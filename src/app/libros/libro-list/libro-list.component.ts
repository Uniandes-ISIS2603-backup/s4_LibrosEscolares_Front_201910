import { Component, OnInit } from '@angular/core';
import { Libro } from '../Libro';
import { LibroService } from '../Libro.service';

/**
 * The component for the list of Libros in the BookStore
 */
@Component({
    selector: 'list-Libro',
    templateUrl: './Libro-list.component.html', 
})
export class LibroListComponent implements OnInit {

    /**
     * Constructor for the component
     * @param LibroService The author's services provider
     */
    constructor(private LibroService: LibroService) { }
    
    /**
     * The list of Libros which belong to the BookStore
     */
    Libros: Libro[];

    /**
     * Asks the service to update the list of Libros
     */
    getLibros(): void {
        this.LibroService.getLibros().subscribe(Libros => this.Libros = Libros);
    }

    /**
     * This will initialize the component by retrieving the list of Libros from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getLibros();
    }
}