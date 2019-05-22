import { Canje } from './../../canje/canje';
import { Component, OnInit, Input } from '@angular/core';
import { Respuesta } from '../respuesta';
import { RespuestaService } from '../respuesta.service';
import { ActivatedRoute } from '@angular/router';
import { Libro } from '../../../app/libros/Libro';


@Component({
  selector: 'app-respuesta-detail',
  templateUrl: './respuesta-detail.component.html',
  styleUrls: ['./respuesta-detail.component.css']
})
export class RespuestaDetailComponent implements OnInit {

  respuesta: Respuesta;

  canjes: Array<Canje> = [];

  route: ActivatedRoute;

  libroOfrecido: Libro;

  libroPedido: Libro;
;

  @Input()
  id: number;

  constructor(public respuestaService: RespuestaService) {
    this.respuesta = new Respuesta();
  }

  actualizar() {
    console.log("Entró actualizar");
    this.respuestaService.getRespuesta(this.id).subscribe(Respuesta => {
      this.respuesta = Respuesta;
      console.log(this.respuesta);
      console.log('Kelly pero que monda')
      this.respuestaService.getCanjes().subscribe(Canje => {
        this.canjes = Canje;
        console.log(Canje);
        console.log(this.canjes);
        let canjeActual: Canje = this.getCanje();
        this.libroOfrecido = canjeActual.libroOfrecido;
        this.libroPedido = canjeActual.libroPedido;
        console.log(this.libroOfrecido.portada);
        console.log('Kelly pero que monda 2')
      });
    });
    console.log("Salio actualizar");
  }

  ngOnInit() {
    console.log("heeelp");
    if (this.id == undefined) {
      this.id = + this.route.snapshot.paramMap.get('id');
      console.log("Es indefinido, ruta: " + this.id);
    }
    else {
      console.log("No es indefinido " + this.id);
    }
    this.actualizar();
    console.log(this.canjes)
    console.log("heeelp2");
    console.log(this.canjes)

  }

  getCanje(): Canje {
    console.log('Geteando canje')
    console.log(this.respuesta.id);

    for (var i = 0; i < this.canjes.length; i++) {
      if (this.canjes[i].id == this.respuesta.id) {
        console.log('Bingo');
        console.log(this.canjes[i]);
        return this.canjes[i];
      }
      else {
        console.log('Not Bingo');
      }
    }
  }

}
