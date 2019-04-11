import { Component, OnInit } from '@angular/core';
import { RespuestaService } from '../respuesta.service';
import { Respuesta } from '../respuesta';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-respuesta-list',
  templateUrl: './respuesta-list.component.html',
  styleUrls: ['./respuesta-list.component.css']
})
export class RespuestaListComponent implements OnInit {

  respuestas: Respuesta[];

  constructor(public respuestaService: RespuestaService) { }

  getRespuestas(){
    console.log("Entro al loggerS")
    this.respuestaService.getRespuestas().subscribe(Respuesta =>{this.respuestas = Respuesta;
    console.log(this.respuestas);
    });
  }

  getId(index): number
  {
    return this.respuestas[index].id;
  }

  ngOnInit() {
    this.getRespuestas();
  }

}
