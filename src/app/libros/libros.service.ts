import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from './Libro';
import { LibrosDetail } from './libros-detail';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const Libros = '/libros';

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
    
  
    getLibros() : Observable<Libro[]> {
        return this.http.get<Libro[]>(API_URL + Libros);
    }
    
     getLibrosDetail(libroId): Observable<Libro> {
        return this.http.get<Libro>(API_URL + Libros + '/' + libroId);
    }
    
    createLibro(libro): Observable<LibrosDetail> {
        return this.http.post<LibrosDetail>(API_URL + Libros, libro);
    
}


}