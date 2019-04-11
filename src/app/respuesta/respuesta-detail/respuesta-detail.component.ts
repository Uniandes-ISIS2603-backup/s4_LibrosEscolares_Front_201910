import { Component, OnInit } from '@angular/core';
import { Respuesta } from '../respuesta';
import { RespuestaService } from '../respuesta.service';

@Component({
  selector: 'app-respuesta-detail',
  templateUrl: './respuesta-detail.component.html',
  styleUrls: ['./respuesta-detail.component.css']
})
export class RespuestaDetailComponent implements OnInit {

  respuesta: Respuesta;

  constructor(respuestaService: RespuestaService) {
    this.respuesta = new Respuesta();
   }

  ngOnInit() {
  }

}
