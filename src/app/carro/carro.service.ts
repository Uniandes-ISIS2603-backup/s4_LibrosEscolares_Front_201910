import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarroDetail } from './carro-detail';
import { environment } from '../../environments/environment';
import { LibrosDetail } from '../libros/libros-detail';
import { Usuario } from '../usuario/usuario';
import { Libro } from '../libros/libro';

const API_URL = environment.apiURL;
const carros = '/carrosCompras';
const USUARIO = '/usuario';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor(private http: HttpClient) { }

  /**
   * Se obtienen todos los carros de compra
   */
  getCarros(): Observable<CarroDetail[]> {
    return this.http.get<CarroDetail[]>(API_URL + carros);
  }

  /**
   * Se obtiene el carro de compras con este id
   * @param carroId . Id del carro
   */
  getCarro(carroId: number): Observable<CarroDetail> {
    return this.http.get<CarroDetail>(API_URL + carros + '/' + carroId);
  }

  /**
   * Se extrae la informacion del carro de compras de este usuario
   * @param usuarioId id del usuario duenio del carro
   */
  getCarroUsuario(usuarioId: number): Observable<CarroDetail> {
    return this.http.get<CarroDetail>(API_URL + carros + '/' + USUARIO + '/' + usuarioId);
  }

  /**
   * Se crea un nuevo carro de compras
   * @param carro información del nuevo carro
   */
  createCarro(carro: CarroDetail): Observable<CarroDetail> {
    console.log(API_URL + carros);
    console.log(carro);
    return this.http.post<CarroDetail>(API_URL + carros, carro);
  }

  /**
   * Metodo que actualiza un Carro de compras
   * @param idCarro. Id del carro a actualizar
   * @param carro. Informacion nueva sobre el carro
   */
  updateCarro(idCarro: number, carro: CarroDetail): Observable<CarroDetail> {
    return this.http.put<CarroDetail>(API_URL + carros + '/' + idCarro, carro);
  }

  /**
   * Método que agrega en el back un libro a un carro de Compras
   * @param idCarro Id del carro a editar
   * @param libro Libro a agregar al carro
   */
  public addLibro(idCarro: number, libro: Libro):  Observable<CarroDetail> {
    console.log('Aniadiendo libro de id: '+libro.id+' al carro con id: '+idCarro);
    let carro = new CarroDetail();
    console.log('Sentencia a ejecutar: '+API_URL + carros + "/" + idCarro + "/libros/" + libro.id);
   return  this.http.put<CarroDetail>(API_URL + carros + "/" + idCarro + "/libros/" + libro.id, carro);
  }

  
  /**
   * Método que elimina en el back un libro a un carro de Compras
   * @param idCarro Id del carro a editar
   * @param libro Libro a eliminar al carro
   */
  public removeLibro(idCarro: number, idLibro: number):  Observable<{}>{
    console.log('Eliminando libro de id: '+idLibro+' al carro con id: '+idCarro);
    console.log('Sentencia a ejecutar: '+API_URL + carros + "/" + idCarro + "/libros/" + idLibro);
   return  this.http.delete(API_URL + carros + "/" + idCarro + "/libros/" + idLibro);
  }
}
