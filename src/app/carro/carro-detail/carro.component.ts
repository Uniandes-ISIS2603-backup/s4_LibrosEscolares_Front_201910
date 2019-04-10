import { Component, OnInit, Input } from '@angular/core';
import {Libro} from '../../libros/Libro';
import { CarroService } from '../carro.service';
import { ActivatedRoute } from '@angular/router';
import { CarroDetail } from '../carro-detail';
import { Usuario } from '../../usuario/usuario';
import { Carro } from '../carro';
@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

  @Input() 
  id: number;

  carro: CarroDetail;
  libros: Libro[];
  comprador: string;

  displayedColumns: string[] = ['titulo', 'ISBN'];

  constructor(public carroService: CarroService, public route: ActivatedRoute) { 
    this.libros = [];
    this.comprador = "";
  }

  addLibro(): void{

  }

  deleteLibro(index: number)
  {
    this.libros.splice(index);
    this.carro.libros = this.libros;
    this.carroService.updateCarro(this.id, this.carro);
  }

  actualizar(){
    this.carroService.getCarro(this.id).subscribe(Carro =>
        {
         this.carro = Carro;
         this.comprador = this.carro.nombreU;
         this.libros = this.carro.libros;
         console.log(this.carro);
        } 
    );
    
  }

  ngOnInit() {
    if(this.id == 0){
      this.id = + this.route.snapshot.paramMap.get('id');
    }
    this.carro = new CarroDetail();
    this.actualizar();
    
  }

}
