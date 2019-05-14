import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from './Libro';
import { LibrosDetail } from './libros-detail';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const Libros = '/libros';
const Nombre = '/nombre';
const Autor = '/autor';

/**
* The service provider for everything related to Libros
*/
@Injectable()
export class LibrosService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
   /**
    * Returns the Observable object containing the list of editorials retrieved from the API
    * @returns The list of libros in real time
    */
    getLibros() : Observable<Libro[]> {
        return this.http.get<Libro[]>(API_URL + Libros);
    }

     /**
    * Returns the Observable object containing the list of editorials retrieved from the API
    * @returns The list of librosdetail in real time
    */
     getLibrosDetail(libroId): Observable<Libro> {
        return this.http.get<Libro>(API_URL + Libros + '/' + libroId);
    }
     /**
    * Creates and returns the Observable object containing the list of editorials retrieved from the API
    * @returns The list of librosdetail in real time
    */
    createLibro(libro): Observable<LibrosDetail> {
        try
        {
        return this.http.post<LibrosDetail>(API_URL + Libros, libro);
        }
        catch(e)
        {
            
        }
    
}

    /**
    * Edita un libro
    * @param libro El libro con la informacion editada
    * @returns La confirmacion de que el libro ha sido editado 
    */
   editarLibro(libro): Observable<LibrosDetail> {
    return this.http.put<LibrosDetail>(API_URL + Libros + '/' + libro.id, libro);
}

  /**
    * elimina el libro con el id indicado y lo retorna
    * @returns El libro eliminado
    */
     deleteLibro(libroId): Observable<Libro> {
        return this.http.delete<Libro>(API_URL + Libros + '/' + libroId);
    }
    
     /**
    * Returns the Observable object containing the list of editorials retrieved from the API
    * @returns The list of libros in real time
    */
    getLibrosPorNombre(nombre) : Observable<Libro[]> {
        return this.http.get<Libro[]>(API_URL + Libros+ Nombre +'/'+nombre);
    }
    
         /**
    * Returns the Observable object containing the list of editorials retrieved from the API
    * @returns The list of libros in real time
    */
    getLibrosPorAutor(nombre) : Observable<Libro[]> {
        return this.http.get<Libro[]>(API_URL + Libros+ Autor +'/'+nombre);
    }

}