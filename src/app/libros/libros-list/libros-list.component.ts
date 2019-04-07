import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';
import { LibrosService } from '../libros.service';

/**
 * The component for the list of Libros in the BookStore
 */
@Component({
  selector: 'app-libros-list',
  templateUrl: './libros-list.component.html',
  styleUrls: ['./libros-list.component.css']
})
export class LibrosListComponent implements OnInit {

    /**
     * Constructor for the component
     * @param LibroService The author's services provider
     */
    constructor(private LibrosService: LibrosService) { }
    
    /**
     * The list of Libros which belong to the BookStore
     */
    Libros: Libro[];

    /**
     * Asks the service to update the list of Libros
     */
    getLibros(): void {
        this.LibrosService.getLibros().subscribe(Libros => this.Libros = Libros);
    }

    /**
     * This will initialize the component by retrieving the list of Libros from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getLibros();
    }
}