import { Component, OnInit } from '@angular/core';
import { CarroService } from '../carro.service';
import { LibrosService } from '../../../app/libros/libros.service';
import { Usuario } from '../../../app/usuario/Usuario';
import { Libro } from '../../../app/libros/Libro';
import { CarroDetail } from '../carro-detail';

@Component({
  selector: 'app-carro-update',
  templateUrl: './carro-update.component.html',
  styleUrls: ['./carro-update.component.css']
})
export class CarroUpdateComponent implements OnInit {

  carro: CarroDetail = new CarroDetail();
  libros: Libro[];
  librosAux: Libro[] =[];

  displayedColumns: string[] = ['ISBN','titulo', 'autor', 'editorial', 'estado', 'precio', 'Crear'];
  mouseOverIndex = -1;

  constructor(public carroService: CarroService, public librosService: LibrosService) 
  {
   }

   getIndex(index:number): string {
    return Number(index + 1).toString();
    
  }

  
  getLibros()
  {
    this.librosService.getLibros().subscribe(Libros =>
      {
        this.libros = Libros;
      }
    )
  }

  update(){
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
      this.carroService.updateCarro( this.carro.id, this.carro).subscribe(Carro =>{this.carro = Carro;console.log(this.carro);})
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
