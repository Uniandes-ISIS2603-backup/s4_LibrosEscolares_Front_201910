import { CanjeService } from './../../canje/canje.service';
import { Canje } from './../../canje/canje';
import { LibrosService } from './../../libros/libros.service';
import { Libro } from './../../libros/Libro';
import { CarroService } from './../../carro/carro.service';
import { Carro } from './../../carro/carro';



import { UsuarioService } from './../Usuario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioDetail } from '../UsuarioDetail';
import { ToastrService } from 'ngx-toastr';

    @Component({
    selector: 'usuarioDetail-component',
    templateUrl: './usuarioDetail.component.html',
    styleUrls: ['./usuarioDetail.component.css']
    })
    export class UsuarioDetailComponent implements OnInit {
    
    constructor(
        public usuarioService: UsuarioService,
        private route: ActivatedRoute,
        private LibrosService: LibrosService,
        private toastrService: ToastrService,
        private canjeService: CanjeService,
        private carroService: CarroService
    )
    {
    }
    usuario_id: number;
    usuario: UsuarioDetail;
    carroCompras: Carro;
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
        
        this.getCarro();

        this.er = "EN_REVISION";
 
    }   
    /**
     * Le pide al servicio el usuario
     */
    getUsuario(): void{
        this.usuarioService.getUsuarioDetail(this.usuario_id).subscribe(Usuario => this.usuario = Usuario);
    }

    /**
     * Asks the service to update the list of Libros
     */
    getLibros(): void {
        this.LibrosService.getLibros().subscribe(Libros => this.Libros = Libros);
       
    }

    /**
     * Le pide al servicio todos los canjes
     */
    getCanjes(): void{
        this.canjeService.getCanjes().subscribe(c =>{ this.canjes = c});
       // this.canjes[0].fechaDeCreacion.toString
    }
    
        getCarro(): void{
        this.carroService.getCarroUsuario(this.usuario_id).subscribe(car =>{ this.carroCompras= car});
    }
    deleteUsuario(): void{
        try
        {
            this.usuarioService.deleteUsuario(this.usuario.id).subscribe(Usuario => this.usuario = Usuario);
            this.toastrService.success("El usuario ha sido eliminado");
        }
        catch(e)
        {
            this.toastrService.success(e);
        }
    }
    
    }

    