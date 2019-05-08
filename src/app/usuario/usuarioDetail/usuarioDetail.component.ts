import { CanjeService } from './../../canje/canje.service';
import { Canje } from './../../canje/canje';
import { LibrosService } from './../../libros/libros.service';
import { Libro } from './../../libros/Libro';



import { UsuarioService } from './../Usuario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioDetail } from '../UsuarioDetail';
import { ToastrService } from 'ngx-toastr';

    @Component({
    selector: 'usuarioDetail-component',
    templateUrl: './usuarioDetail.component.html'
    })
    export class UsuarioDetailComponent implements OnInit {
    
    constructor(
        private UsuarioService: UsuarioService,
        private route: ActivatedRoute,
        private LibrosService: LibrosService,
        private toastrService: ToastrService,
        private canjeService: CanjeService
    )
    {
    }
    usuario_id: number;
    usuario: UsuarioDetail;

    er: String;

    /**
     * The list of Libros which belong to this usuario
     */
    Libros: Libro[];

    canjes: Canje[];

    ngOnInit(){
        this.usuario_id = + this.route.snapshot.paramMap.get('id');
        //this.usuario = new Usuario();
        
        this.getUsuario();
        
        this.getLibros();

        this.getCanjes();

        this.er = "EN_REVISION";
 
    }   
    /**
     * Le pide al servicio el usuario
     */
    getUsuario(): void{
        this.UsuarioService.getUsuarioDetail(this.usuario_id).subscribe(Usuario => this.usuario = Usuario);
    }

    /**
     * Asks the service to update the list of Libros
     */
    getLibros(): void {
        this.LibrosService.getLibros().subscribe(Libros => this.Libros = Libros);
        /*
        for(var i =0; i <this.Libros.length; i++){
            if(this.Libros[i].duenio.id==this.usuario.id)
            {
                this.Libros[i] = null;
            }
        }*/
    }

    /**
     * Le pide al servicio todos los canjes
     */
    getCanjes(): void{
        this.canjeService.getCanjes().subscribe(c =>{ this.canjes = c});
    }

    }