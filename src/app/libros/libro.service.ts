import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from './Libro';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const Libros = '/libros';

/**
* The service provider for everything related to Libros
*/
@Injectable()
export class LibroService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
  
    getLibros() : Observable<Libro[]> {
        return this.http.get<Libro[]>(API_URL + Libros);
    }
    
}