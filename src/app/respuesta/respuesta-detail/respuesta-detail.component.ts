import { Component, OnInit, Input } from '@angular/core';
import { Respuesta } from '../respuesta';
import { RespuestaService } from '../respuesta.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-respuesta-detail',
  templateUrl: './respuesta-detail.component.html',
  styleUrls: ['./respuesta-detail.component.css']
})
export class RespuestaDetailComponent implements OnInit {

  respuesta: Respuesta;

  @Input() 
  id: number;

  constructor(public respuestaService: RespuestaService) {
    this.respuesta = new Respuesta();
   }

   actualizar(){
     this.respuestaService.getRespuesta(this.id).subscribe(Respuesta=>
      {
        this.respuesta = Respuesta;
        console.log(this.respuesta);
      })
   }

  ngOnInit() {
    this.actualizar();
  }

}
