import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarroDetail } from './carro-detail';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const carros = '/carrosCompras';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor(private http: HttpClient) { }

  getCarros(): Observable<CarroDetail[]>
  {
    return this.http.get<CarroDetail[]>(API_URL + carros);
  }

  getCarro(carroId: number): Observable<CarroDetail>
  {
    return this.http.get<CarroDetail>(API_URL+carros+'/'+carroId);
  }

  createCarro(carro: CarroDetail): Observable<CarroDetail>
  {
    return this.http.post<CarroDetail>(API_URL+carros, carro);
  }

  updateCarro(idCarro: number, carro: CarroDetail): Observable<CarroDetail>
  {
    return this.http.put<CarroDetail>(API_URL+carros+'/'+idCarro, carro);
  }
}
