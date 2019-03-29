import { UsuarioService } from './../Usuario.service';

import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Usuario';

/**
 * Este es el componente para la lista de los usuarios
 */
@Component({
selector: 'UsuariosList-component',
templateUrl: './UsuariosList.component.html',
styleUrls: ['./UsuariosList.component.css']
})
export class UsuarioslistComponent implements OnInit {

    /**
     * Costructor para el componente
     * @param usuarioService wl proveedor de servicios del usuario
     */
    constructor(private UsuarioService: UsuarioService){ }

    /**
     * La lista de todos los usuarios
     */
    usuarios: Usuario[];

    /**
     * Le pide al servicio todos los usuarios
     */
    getUsuarios(): void{
        this.UsuarioService.getUsuarios().subscribe(usuarios =>{ this.usuarios = usuarios});
    }

    /**
     * Esto va a inicializar el componente recuperando la lista de usuarios del servicio
     * Este metodo se llamara cuando el componente sea creado
     */
    ngOnInit() {
        this.getUsuarios();
        
    }


}