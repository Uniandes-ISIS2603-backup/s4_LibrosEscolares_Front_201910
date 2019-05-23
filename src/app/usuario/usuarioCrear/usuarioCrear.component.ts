import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from '../Usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../usuario';
import { CarroService } from '../../../app/carro/carro.service';
import { CarroDetail } from '../../../app/carro/carro-detail';

@Component({
selector: 'usuarioCrear-component',
templateUrl: './usuarioCrear.component.html',
styleUrls: ['./usuarioCrear.component.css']
})
export class UsuariocrearComponent implements OnInit {  

/**
    * Constructor del componente
    * @param usuarioService El servicio del usuario
    * @param toastrService The toastr to show messages to the user 
    */
   constructor(
    private usuarioService: UsuarioService,
    private toastrService: ToastrService,
    private router: Router,
    private carroService: CarroService
) { }

/**
* El nuervo usuario
*/
usuario: Usuario;

/**
* La salida que dice el componente padre
* que el usuario ya no quiere crear un usuario
*/
@Output() cancel = new EventEmitter();

/**
* La salida que dice el componente padre
* el usario creo el componente
*/
@Output() create = new EventEmitter();

/**
* Crea un nuevo usuario
*/
createUsuario(): void {
    this.usuario.calificacion = 3;
    console.log(this.usuario.id);
    this.usuarioService.createUsuario(this.usuario)
        .subscribe(Usuario => {
            this.usuario = Usuario;
            let carro: CarroDetail = new CarroDetail();
            carro.id = this.usuario.id;
            carro.nombreU = this.usuario.nombreUsuario;
            console.log(carro);
            this.carroService.createCarro(carro).subscribe( Carro=>{
                carro = Carro;
                console.log(carro);
                this.carroService.addDueno(carro.id, this.usuario.id).subscribe(Carro=> {
                    carro = Carro;
                    this.create.emit();
                    this.toastrService.success("El usuario fue creado, por favor, inicie sesion", "Creacion usuario");
                    this.router.navigate(['/auth/login']);
                })
            }
                
            );
        }, err => {
            this.toastrService.error(err, "Error");
        });
}

/**
* Informa al componente padre que el usuario ya no quiere crear un usuario
*/
cancelCreation(): void {
    this.cancel.emit();
    this.router.navigate(['/home']);
}

/**
* La funcuion que inicializa el commponente
*/
ngOnInit() {
    this.usuario = new Usuario();
}
}