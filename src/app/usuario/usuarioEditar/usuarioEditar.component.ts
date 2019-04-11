import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioDetail } from './../UsuarioDetail';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from './../Usuario.service';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
selector: 'usuarioEditar-component',
templateUrl: './usuarioEditar.component.html',
styleUrls: ['./usuarioEditar.component.css']
})
export class UsuarioeditarComponent implements OnInit, OnChanges {

constructor(private authorService: UsuarioService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute) {
}

id:number;

/**
    * El usuario recibe el id del componente padre
    */
   usuario: UsuarioDetail;

   /**
   * El output que habla con el componente padre
   * que dice que ya no se quiere editar el usuario
   */
   @Output() cancel = new EventEmitter();

   /**
   * El output que habla con el componente padre
   * que dice que ha sido actualizado el usuario
   */
   @Output() update = new EventEmitter();

   /**
   * Actualiza la informacion del usuario
   */
   editUser(): void {
        
       this.authorService.updateUsuario(this.usuario)
           .subscribe(() => {
            this.update.emit();
               this.toastrService.success("La informacion del usuario ha sido actualizada", "Author edition");
            }, err => {
                this.toastrService.error(err, "Error");
            });
    
   }

   /**
   * Emite una señal al componente padre que dice 
   * el usuario ya no quiere crear un usuario
   */
   cancelEdition(): void {
       this.cancel.emit();
   }


   /**
   * Estra funcion inicializa el componente
   */
   ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.authorService.getUsuarioDetail(this.id).subscribe(Usuario => this.usuario = Usuario);
   }

   /**
   * Esta funcion sera usada cuando se elija otro usuario a editar 
   */
   ngOnChanges() {
       this.ngOnInit();
   }
}