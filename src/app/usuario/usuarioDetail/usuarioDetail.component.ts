


import { UsuarioService } from './../Usuario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioDetail } from '../UsuarioDetail';

    @Component({
    selector: 'usuarioDetail-component',
    templateUrl: './usuarioDetail.component.html'
    })
    export class UsuarioDetailComponent implements OnInit {
    
    constructor(
        private UsuarioService: UsuarioService,
        private route: ActivatedRoute
    )
    {
    }
    usuario_id: number;
    usuario: UsuarioDetail;
    ngOnInit(){
        this.usuario_id = + this.route.snapshot.paramMap.get('id');
        //this.usuario = new Usuario();
        this.getUsuario();
    
    }   
    /**
     * Le pide al servicio el usuario
     */
    getUsuario(): void{
        this.UsuarioService.getUsuarioDetail(this.usuario_id).subscribe(Usuario => this.usuario = Usuario);
    }

    }