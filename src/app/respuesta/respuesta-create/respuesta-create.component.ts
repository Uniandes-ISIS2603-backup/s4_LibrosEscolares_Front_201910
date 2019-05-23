import { Component, OnInit } from '@angular/core';
import { Respuesta } from '../respuesta';
import { RespuestaService } from '../respuesta.service';

@Component({
  selector: 'app-respuesta-create',
  templateUrl: './respuesta-create.component.html',
  styleUrls: ['./respuesta-create.component.css']
})
export class RespuestaCreateComponent implements OnInit {

  respuesta: Respuesta = new Respuesta();

  constructor(public respuestaService: RespuestaService) { }

  crear()
  {
    
  }

  ngOnInit() {
  }

}
