import { Component, OnInit, Inject, Output, EventEmitter   } from '@angular/core';
import { CarroService } from '../carro.service';
import { LibrosService } from '../../libros/libros.service';
import { Libro } from '../../libros/Libro';
import { CarroDetail } from '../carro-detail';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../../../app/usuario/usuario';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';



@Component({
  selector: 'app-carro-create',
  templateUrl: './carro-create.component.html',
  styleUrls: ['./carro-create.component.css']
})
export class CarroCreateComponent implements OnInit {

  carro: CarroDetail;
  libros: Libro[];
  librosAux: Libro[] =[];

  displayedColumns: string[] = ['ISBN','titulo', 'autor', 'editorial', 'estado', 'precio', 'Crear'];
  mouseOverIndex = -1;

  constructor(public carroService: CarroService, public librosService: LibrosService, private toastrService: ToastrService) {
    this.carro = new CarroDetail();
   }

   /**
* La salida que dice el componente padre
* que el usuario ya no quiere crear un Carrro
*/
@Output() cancel = new EventEmitter();

/**
* La salida que dice el componente padre
* el usario creo el carro
*/
@Output() create = new EventEmitter();

  getLibros()
  {
    this.librosService.getLibros().subscribe(Libros =>
      {
        this.libros = Libros;
      }
    )
  }

  getIndex(index:number): string {
    return Number(index + 1).toString();
    
  }

  crear(){
    this.carro.valorAPagar = 3.0;
   // this.carro.libros = this.libros;
    this.carro.nombreU = 'User de prueba';
    this.carro.libros = this.librosAux;
    let user = new Usuario();
    user.id = 1;
    user.correo= 'oubdo@hotmail.com';
    user.calificacion = 3;
    user.nombreUsuario = 'User de prueba';
    this.carro.dueno = user;
    if(this.carro!=undefined){
      console.log('creando');
      this.carroService.createCarro(this.carro).subscribe(Carro =>{this.carro = Carro;console.log(this.carro);})
      console.log(this.carro);
      console.log('creado');
    }
  }

  public onMouseOver(index) {
    // console.log(index)
    if(this.mouseOverIndex!= index){
      this.mouseOverIndex = index;
    }
    else{
      this.mouseOverIndex =-1;
    }
  }

  public doubleClick(){
    this.mouseOverIndex = -1;
  }

  public deselect(): boolean
  {
    return this.mouseOverIndex==-1;
  }

  ngOnInit(){
    console.log("entro")
    this.getLibros();
  }

  addLibro(index): void{
    let libro : Libro;
    libro = this.libros[index-1];
    this.libros.slice(index-1, 1);

  }

}




