

import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './Usuario';
import { UsuarioDetail } from './UsuarioDetail';
import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const usuarios = '/usuarios';



@Injectable()
export class UsuarioService {

    usuarioActual: UsuarioDetail

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

    getUsuarioDetail(usuarioId): Observable<UsuarioDetail> {
        return this.http.get<Usuario>(API_URL + usuarios + '/' + usuarioId);
    }

     /**
    * Actualiza un usuario
    * @param author El autor con la informacion actualizada
    * @returns La confirmacion de que el autor a sido actualizado 
    */
   updateUsuario(usuario): Observable<UsuarioDetail> {
    return this.http.put<UsuarioDetail>(API_URL + usuarios + '/' + usuario.id, usuario);
}

     /**
    * Crea un usuario
    * @param usuario El usuario que sera crado
    * @returns La confirmacion de la creacion
    */
   createUsuario(usuario): Observable<UsuarioDetail> {
    return this.http.post<UsuarioDetail>(API_URL + usuarios, usuario);
}

    getUsuarioByMail(usuarioMail):  Observable<UsuarioDetail> {
       
    return this.http.get<UsuarioDetail>(API_URL + usuarios+'/mail/'+usuarioMail);
    }

    getUsuarioUsuarioActual() 
    {
        return this.usuarioActual;
    }
}