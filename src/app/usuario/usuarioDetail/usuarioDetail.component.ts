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
    
        /**
         * Constructor del component
         * @param usuarioService 
         * @param route 
         * @param LibrosService 
         * @param toastrService 
         * @param canjeService 
         * @param carroService 
         */
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
    /**
    Id de usuario actual
     */
    usuario_id: number;

    /**
    Usuario actual
    */
    usuario: UsuarioDetail;

    /**
    Carro de compras del usuario
    */
    carroCompras: Carro;

    /**
    String para un canje en revision
    */
    er: String;

    /**
    String para un canje aceptado por el vendedor
    */
    aceptado: String;

    /**
     * The list of Libros which belong to this usuario
     */
    Libros: Libro[];

    /**
    Lista de canjes del usuario
    */

    canjes: Canje[];

    /**
     * Metodo inicial que pide el usuario, sus libtros, cajes y carro compars a sus respectivos servicios
     */
    ngOnInit(){
        this.usuario_id = + this.route.snapshot.paramMap.get('id');
        //this.usuario = new Usuario();
        
        this.getUsuario();
        
        this.getLibros();

        this.getCanjes();
        
        this.getCarro();

        this.er = "EN_REVISION";

        this.aceptado = "ACEPTADO_POR_EL_VENDEDOR";
 
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
    
        /**
         * Obtiene el carro compras del usuario
         */
        getCarro(): void{
        this.carroService.getCarro(this.usuario_id).subscribe(car =>{ this.carroCompras= car});
    }

    /**
    Elimina el usuario actual
    */
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

    /**
    Acepta el canje sobre el que se la da click alterando su estado
    */
    aceptarCanje(canjeId)
    {
        this.canjes.forEach(element =>
         {
             if(element.id==canjeId)
             {
                 element.estado = "ACEPTADO_POR_EL_VENDEDOR";

                 this.canjeService.updateCanje(element).subscribe(can =>{ element = can});
                 return;
             }
            
        });
    }

    /**
    Deniega el canje sobre el que se la da click alterando su estado
    */

    denegarCanje(canjeId)
    {
        this.canjes.forEach(element =>
         {
             if(element.id==canjeId)
             {
                 element.estado = "NO_ACEPTADO";

                 this.canjeService.updateCanje(element).subscribe(can =>{ element = can});;
                 return;
             }
            
        });
    }
    
    
    }

    