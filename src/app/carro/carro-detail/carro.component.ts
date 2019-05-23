import { Component, OnInit, Input } from '@angular/core';
import { Libro } from '../../libros/Libro';
import { CarroService } from '../carro.service';
import { ActivatedRoute } from '@angular/router';
import { CarroDetail } from '../carro-detail';
import { Usuario } from '../../usuario/usuario';
import { Carro } from '../carro';
import { CanjeService } from '../../../app/canje/canje.service';
import { LibrosService } from './../../libros/libros.service';
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
  allLibros: Libro[] = [];
  comprador: String;
  libroSolo: Libro;

  displayedColumns: string[] = ['ISBN', 'titulo', 'autor', 'editorial', 'estado', 'precio', 'Crear'];
  mouseOverIndex = -1;

  constructor(public carroService: CarroService, public route: ActivatedRoute, canjeService: CanjeService, private LibrosService: LibrosService) {
    this.libros = [];
    this.comprador = "";
  }

  addLibro(libroId: number): void {
    this.LibrosService.getLibrosDetail(libroId).subscribe(libroSolo => this.libroSolo = libroSolo);
    this.carroService.addLibro(this.id, this.libroSolo);
  }

  deleteLibro(index: number) {
    this.libros.splice(index);
    this.carro.libros = this.libros;
    this.carroService.updateCarro(this.id, this.carro);
  }

  actualizar() {
    console.log(this.id);
    this.carroService.getCarro(this.id).subscribe(Carro => {
      this.carro = Carro;
      this.comprador = this.carro.nombreU;
      this.libros = this.carro.libros;
      console.log(this.carro);
    }
    );

  }

  public onMouseOver(index) {
    // console.log(index)
    if (this.mouseOverIndex != index) {
      this.mouseOverIndex = index;
    }
    else {
      this.mouseOverIndex = -1;
    }
  }

  public doubleClick() {
    this.mouseOverIndex = -1;
  }

  public deselect(): boolean {
    return this.mouseOverIndex == -1;
  }

  public crearCanje() {

  }

  /**
   * Elimina el libro seleccionado de la lista de libros del carro y actualiza el carro de compras en el back
   */
  public eliminarLibro() {
    console.log('Antes')
    console.log(this.libros);
    console.log(' Id de libro a eliminar fue: ' +this.libros[this.mouseOverIndex ].id);
    this.carroService.removeLibro(this.id, this.libros[this.mouseOverIndex ].id).subscribe();
    this.actualizar();
    console.log('Después');
    console.log(this.libros);
  }

      /**
     * Actualiza lista de todos los libros
     */
    getLibros(): void {
      this.LibrosService.getLibros().subscribe(Libros => this.allLibros = Libros);
     
  }

  ngOnInit() {
    console.log("entro al carro")
    console.log(this.id);
    if (this.id == undefined) {
      this.id = + this.route.snapshot.paramMap.get('id');
    }
    this.carro = new CarroDetail();
    this.actualizar();

  }

}
