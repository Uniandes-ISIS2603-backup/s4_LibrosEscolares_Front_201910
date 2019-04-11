import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Canje } from './Canje';
import { CanjeDetail } from './CanjeDetail';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const canjes = '/canjes';
@Injectable()
export class CanjeService {
  /**
     * Contructor del servicio
     * @param http The HttpClient - Esto es necesario para hacer las request
     */
  constructor(private http: HttpClient) { }

  /**
    * Returns the Observable object containing the list of canjes retrieved from the API
    * @returns The list of canjes in real time
    */
   getCanjes():  Observable<Canje[]>
   {
       return this.http.get<Canje[]>(API_URL + canjes);
   }
   getCanjeDetail(canjeId): Observable<CanjeDetail> {
      return this.http.get<Canje>(API_URL + canjes + '/' + canjeId);
  }

       /**
    * Crea un usuario
    * @param usuario El usuario que sera crado
    * @returns La confirmacion de la creacion
    */
   createCanje(canje): Observable<CanjeDetail> {
    return this.http.post<CanjeDetail>(API_URL + canjes, canje);
}
}
