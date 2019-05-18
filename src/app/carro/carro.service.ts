import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarroDetail } from './carro-detail';
import { environment } from '../../environments/environment';
import { LibrosDetail } from '../libros/libros-detail';

const API_URL = environment.apiURL;
const carros = '/carrosCompras';
const USUARIO = '/usuario';

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
  
  getCarroUsuario(usuarioId: number): Observable<CarroDetail>
  {
    return this.http.get<CarroDetail>(API_URL+carros+'/'+USUARIO+'/'+usuarioId);
  }

  createCarro(carro: CarroDetail): Observable<CarroDetail>
  {
    console.log(API_URL+carros);
    console.log(carro);
    return this.http.post<CarroDetail>(API_URL+carros, carro);
  }

  updateCarro(idCarro: number, carro: CarroDetail): Observable<CarroDetail>
  {
    return this.http.put<CarroDetail>(API_URL+carros+'/'+idCarro, carro);
  }

  public addLibro(id: number, libro: LibrosDetail): void
  {
    let carro = new CarroDetail();
    let libros: LibrosDetail[] = [];
    carro.id = id;
    this.getCarro(id).subscribe(Carro => {
      carro = Carro;
      libros = Carro.libros;
    });
    libros.push(libro);
    carro.libros = libros;
    this.updateCarro(id, carro);
  }
}
