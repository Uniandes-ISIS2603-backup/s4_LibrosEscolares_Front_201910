import { Component, OnInit } from '@angular/core';
import { Respuesta } from '../respuesta';
import { RespuestaService } from '../respuesta.service';

@Component({
  selector: 'app-respuesta-update',
  templateUrl: './respuesta-update.component.html',
  styleUrls: ['./respuesta-update.component.css']
})
export class RespuestaUpdateComponent implements OnInit {

  respuesta: Respuesta = new Respuesta();

  constructor(public respuestaService: RespuestaService) { }

  actualizar()
  {
    this.respuestaService.updateRespuesta(this.respuesta.id,this.respuesta)
  }

  ngOnInit() {
  }

}
