import { Component, OnInit, Input } from '@angular/core';
import { Libro } from '../../libros/Libro';
import { CarroService } from '../carro.service';
import { ActivatedRoute } from '@angular/router';
import { CarroDetail } from '../carro-detail';
import { Usuario } from '../../usuario/usuario';
import { Carro } from '../carro';
import { CanjeService } from '../../../app/canje/canje.service';
import { LibrosService } from './../../libros/libros.service';
import { UsuarioService } from '../../usuario/Usuario.service';
import { Respuesta } from '../../respuesta/respuesta';
import { RespuestaService } from '../../respuesta/respuesta.service';
import { Canje } from '../../canje/canje';
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
  /**
   * Libro Escogido para canjear
   */
  libroEscogido: Libro = new Libro();
  /**
   * Indica si hay un canje en proceso de creacion
   */
  creandoCanje: Boolean = false;
  /**
   * Indica si se ha seleccionado unos de los libros del usuario para canjearlo
   */
  haySeleccion: Boolean = false;
  /**
   * Indica el indice del libro seleccionado para canjear
   */
  indiceSeleccionado: number;

  displayedColumns: string[] = ['ISBN', 'titulo', 'autor', 'editorial', 'estado', 'precio', 'Crear'];
  mouseOverIndex = -1;

  constructor(
    public carroService: CarroService,
    public route: ActivatedRoute,
    public canjeService: CanjeService,
    private LibrosService: LibrosService,
    public usuarioService: UsuarioService,
    public respuestaService: RespuestaService) {
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

  public empezarCanje(i: number) {
    this.creandoCanje = true;
    console.log("Indice escogido: " + i)
    this.libroEscogido = this.libros[i];

  }

  /**
   * Crea un canje con el libro previamente seleccionado
   * @param libroMio. El libro mio para intercambiar
   */
  public crearCanje(libroMio: Libro) {
    //llamadas de control en consola
    console.log("Libro Mio");
    console.log(libroMio);
    console.log("Libro suyo");
    console.log(this.libroEscogido);
    let canje: Canje = new Canje();
    //Se ingresa la información del canje a un objeto
    canje.estado = "Pendiente";
    canje.fechaDeCreacion = new Date();
    console.log("Canje inicial");
    console.log(canje);

    //Se crea un canje 
    this.canjeService.createCanje(canje).subscribe(Canje => {
      canje = Canje;
      console.log("Canje creado");
      console.log(canje);
      let respuesta: Respuesta = new Respuesta();
      respuesta.id = canje.id;
      respuesta.razon = "";
      console.log("Respuesta previa");
      console.log(respuesta);
      //Se crea una respuesta con el mismo id del canje
      this.respuestaService.createRespuesta(respuesta).subscribe(Respuesta => {
        respuesta = Respuesta;
        console.log("Respuesta creada");
        console.log(respuesta);
        //Relacion de canje, libro ofrecido, implementada
        this.canjeService.addLibroOfrecido(canje.id, libroMio.id).subscribe(Canje2 => {
          canje = Canje2;
          console.log("Canje con relacion a libros ofrecido añadida");
          console.log(canje);
          //Relacion de canje, libro pedido, implementada
          this.canjeService.addLibroPedido(canje.id, this.libroEscogido.id).subscribe(Canje3 => {
            canje = Canje3;
            console.log("Canje con relacion a libros añadida");
            console.log(canje);
            //Relacion de canje, respuesta, implementada
            this.canjeService.addRespuesta(canje.id, respuesta.id).subscribe(CanjeFinal => {
              canje = CanjeFinal;
              console.log("Canje final");
              console.log(canje);
            })
          })
        })

      })

    })


  }

  /**
   * Elimina el libro seleccionado de la lista de libros del carro y actualiza el carro de compras en el back
   */
  public eliminarLibro() {
    console.log('Antes')
    console.log(this.libros);
    console.log(' Id de libro a eliminar fue: ' + this.libros[this.mouseOverIndex].id);
    this.carroService.removeLibro(this.id, this.libros[this.mouseOverIndex].id).subscribe();
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

  seleccionarLibro(index: number): void {
    this.haySeleccion = true;
    this.indiceSeleccionado = index;
  }

  cancelarSeleccion(): void {
    this.haySeleccion = false;
    this.indiceSeleccionado = -1;
  }

  ngOnInit() {
    console.log("entro al carro")
    console.log(this.id);
    if (this.id == undefined) {
      this.id = + this.route.snapshot.paramMap.get('id');
    }
    this.carro = new CarroDetail();
    this.actualizar();
    this.getLibros();

  }

}
