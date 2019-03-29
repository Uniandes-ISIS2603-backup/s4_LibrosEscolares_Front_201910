
import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

const API_URL = "../../assets/";
const usuarios = '/usuarios.json';

@Injectable()
export class UsuarioService {

    /**
     * Contructor del servicio
     * @param http The HttpClient - Esto es necesario para hacer las request
     */
    constructor(private http: HttpClient) { }

      /**
    * Returns the Observable object containing the list of editorials retrieved from the API
    * @returns The list of books in real time
    */
    getUsuarios():  Observable<Usuario[]>
    {
        return this.http.get<Usuario[]>(API_URL + usuarios);
    }
}