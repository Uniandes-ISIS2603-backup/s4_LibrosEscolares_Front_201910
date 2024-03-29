import { Libro } from '../Libro';
import { LibrosDetail } from '../libros-detail';
import { LibrosService } from './../libros.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../auth/auth.service';

import { CarroDetail } from './../../carro/carro-detail';
import { CarroService } from './../../carro/carro.service';
import { Carro } from './../../carro/carro';

import { UsuarioService } from '../../usuario/Usuario.service';
import { Router } from '@angular/router';

    @Component({
  selector: 'app-libros-detail',
  templateUrl: './libros-detail.component.html',
  styleUrls: ['./libros-detail.component.css']
})
    export class LibrosDetailComponent implements OnInit {
    /**
     * Metodo constructor
     */
    constructor(
        private librosService: LibrosService,
        private route: ActivatedRoute,
        private authService: AuthService,
        public usuarioService: UsuarioService,
        public carroService: CarroService,
        private router: Router,
    )
   {
        
   }
    /**
     * Declaracion de atributos necesarios: el libro en detalle, el id del libro, los atributos para
     * saber si esta logeado o no y la calificacion del usuario dueño del libro
     */
    libro_id: number;
    libro: Libro;
    isLoggedIn$: Observable<boolean>;
    isLoggedOut$: Observable<boolean>;
    calificacion: number;
    
    /**
     * Al iniciar carga todos los datos necesarios
     */
    ngOnInit(){
        this.libro_id = + this.route.snapshot.paramMap.get('id');
        this.getLibro();
        this.getCalificacion();
        this.isLoggedIn$ = this.authService.isLoggedIn;
        this.isLoggedOut$ = this.authService.isLoggedOut;
     
    
    }   
    /**
     * Le pide al servicio el libro
     */
    getLibro(): void{
        this.librosService.getLibrosDetail(this.libro_id).subscribe(Libro =>this.libro = Libro);

    }
     /**
     * Añade el libro al carro de compras del usuario
     */
    addLibroACarro(): void{
        
        this.carroService.addLibro(this.usuarioService.getUsuarioUsuarioActual().id,this.libro).subscribe(R=>{
            this.router.navigate(['/carro/'+this.usuarioService.getUsuarioUsuarioActual().id]);
        });
           

//        this.carroService.addLibro(1,this.libro);

    }
    
     /**
     * Consigue la calificacion del usuario dueño del libro
     */
    getCalificacion()
    {
//        var u :Usuario;
//        
//        this.usuarioService.getUsuarioByMail(this.libro.duenio.correo).subscribe(Cal => {
//        u=Cal;
//        this.calificacion=u.calificacion;
//        }
//        )
    }
    
    
    }