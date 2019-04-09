import { Component, OnInit } from '@angular/core';
import {Libro} from '../../libros/Libro';
@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

  libros: Libro[];
  aux: Libro;

  constructor() { 
    this.libros = [];
  }

  addLibro(): void{

  }

  ngOnInit() {
  }

}
