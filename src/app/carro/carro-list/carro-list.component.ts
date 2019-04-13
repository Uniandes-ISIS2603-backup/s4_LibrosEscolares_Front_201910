import { Component, OnInit } from '@angular/core';
import { CarroService } from '../carro.service';
import { CarroDetail } from '../carro-detail';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-carro-list',
  templateUrl: './carro-list.component.html',
  styleUrls: ['./carro-list.component.css']
})
export class CarroListComponent implements OnInit { 

  public ruta = "";
  carros: CarroDetail[]

  constructor(public carroService: CarroService) { }

  getCarros()
  {
    this.carroService.getCarros().subscribe(carros =>{this.carros = carros});
  }

  getNombreUsuario(index: number): String
  {
    return this.carros[index].dueno.nombreUsuario;
  }

  updateRuta(index): string
  {
    this.ruta = "/carro/"+index;
    return this.ruta;
  }

  getIndex(index:number): string {
    return Number(index + 1).toString();
    
  }

  ngOnInit() 
  {
    this.getCarros();
  }

}
