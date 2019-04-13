import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CanjeService } from '../canje.service';
import { ToastrService } from 'ngx-toastr';
import { Canje } from '../canje';
@Component({
  selector: 'app-canje-create',
  templateUrl: './canje-create.component.html',
  styleUrls: ['./canje-create.component.css']
})
export class CanjeCreateComponent implements OnInit {

  /**
    * Constructor del componente
    * @param canjeService El servicio del canje
    * @param toastrService The toastr to show messages to the user 
    */
   constructor(
    private canjeService: CanjeService,
    private toastrService: ToastrService
) { }

  /**
* El nuervo canje
*/
canje: Canje;

/**
* La salida que dice el componente padre
* que el usuario ya no quiere crear un canje
*/
@Output() cancel = new EventEmitter();

/**
* La salida que dice el componente padre
* el usario creo el componente
*/
@Output() create = new EventEmitter();

/**
* Crea un nuevo canje
*/
createUsuario(): void {
    this.canje.fechaDeCreacion=new Date();
    this.canje.estado='Enviado';  
    this.canjeService.createCanje(this.canje)
        .subscribe(() => {
            this.create.emit();
            this.toastrService.success("El canje fue creado", "Creacion canje");
        }, err => {
            this.toastrService.error(err, "Error");
        });
}

/**
* Informa al componente padre que el usuario ya no quiere crear un canje
*/
cancelCreation(): void {
    this.cancel.emit();
}

/**
* La funcuion que inicializa el commponente
*/
ngOnInit() {
    this.canje = new Canje();
}

}
