import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Respuesta } from './respuesta';
import { environment } from '../../environments/environment';
import { Canje } from '../canje/canje';

const API_URL = environment.apiURL;
const respuestas = "/respuestas";

@Injectable({
  providedIn: 'root'
})
export class RespuestaService {

  constructor(private http: HttpClient) { }

    getRespuestas(): Observable<Respuesta[]>
    {
      return this.http.get<Respuesta[]>(API_URL+respuestas);
    }

    getRespuesta(id: number): Observable<Respuesta>
    {
      console.log(API_URL+respuestas+'/'+id);
      return this.http.get<Respuesta>(API_URL+respuestas+'/'+id);
    }

    createRespuesta(respuesta: Respuesta): Observable<Respuesta>
    {
      return this.http.post<Respuesta>(API_URL+respuestas, respuesta);
    }

    updateRespuesta(idRespuesta: number, respuesta: Respuesta): Observable<Respuesta>
    {
      return this.http.put<Respuesta>(API_URL+respuestas+'/'+idRespuesta, respuesta);
    }

    getCanje(id: number): Observable<Canje>
    {
      return this.http.get<Canje>(API_URL+'/canjes/'+id);
    }

    getCanjesOfrecidos(id: number): Observable<Canje[]>
    {
      return this.http.get<Canje[]>(API_URL+'canjes/ofrecidos/'+id);
    }

    getCanjesRecibidos(id: number): Observable<Canje[]>
    {
      return this.http.get<Canje[]>(API_URL+'canjes/recibidos/'+id);
    }

    getCanjes(): Observable<Canje[]>
    {
      return this.http.get<Canje[]>(API_URL+'/canjes');
    }
  
}
