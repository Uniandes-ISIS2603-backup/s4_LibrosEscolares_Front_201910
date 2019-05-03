import { UsuarioService } from './../../usuario/Usuario.service';
import { Usuario } from './../../usuario/usuario';
import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../auth.service';

import { User } from '../user';

import { ToastrService } from 'ngx-toastr';
import { UsuarioDetail } from '../../usuario/UsuarioDetail';

@Component({
    selector: 'app-auth-login',
    templateUrl: './auth-login.component.html',
    styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

    /**
    * Constructor for the component
    * @param authService Auth service provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private authService: AuthService,
        private toastrService: ToastrService,
        private us: UsuarioService
    ) { }

    user: Usuario;

    user2: UsuarioDetail;

    roles: String[];

    

    /**
    * Logs the user in with the selected role
    */
    login(): void {
        this.us.getUsuarioByMail(this.user.correo).subscribe(usuarios =>{ this.user2= usuarios});
        this.user2.role=this.user.role;
        this.authService.login(this.user2.role);
        //this.toastrService.success('Logged in')
        this.us.usuarioActual = this.user2;
        this.toastrService.success(this.us.getUsuarioUsuarioActual().id+'');
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.user = new Usuario();
        this.roles = ['Administrator', 'Client'];
    }

}
