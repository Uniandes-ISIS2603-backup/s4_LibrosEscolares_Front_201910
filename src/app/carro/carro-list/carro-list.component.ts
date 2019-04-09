import { Component, OnInit } from '@angular/core';
import { CarroService } from '../carro.service';
import { CarroDetail } from '../carro-detail';

@Component({
  selector: 'app-carro-list',
  templateUrl: './carro-list.component.html',
  styleUrls: ['./carro-list.component.css']
})
export class CarroListComponent implements OnInit {
  

  carros: CarroDetail[]

  constructor(public carroService: CarroService) { }

  getCarros()
  {
    this.carroService.getCarros().subscribe(carros =>{this.carros = carros});
  }

  getNombreUsuario(index: number): String
  {
    return this.carros[index].comprador.nombreUsuario;
  }

  ngOnInit() 
  {
    this.getCarros();
  }

}
