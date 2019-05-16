import { Libro } from '../Libro';
import { LibrosDetail } from '../libros-detail';
import { LibrosService } from './../libros.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../auth/auth.service';

    @Component({
  selector: 'app-libros-detail',
  templateUrl: './libros-detail.component.html',
  styleUrls: ['./libros-detail.component.css']
})
    export class LibrosDetailComponent implements OnInit {
    
    constructor(
        private librosService: LibrosService,
        private route: ActivatedRoute,
        private authService: AuthService
    )
    {
    }
    libro_id: number;
    libro: Libro;
    isLoggedIn$: Observable<boolean>;
    isLoggedOut$: Observable<boolean>;
    ngOnInit(){
        this.libro_id = + this.route.snapshot.paramMap.get('id');
        this.getLibro();
        this.isLoggedIn$ = this.authService.isLoggedIn;
        this.isLoggedOut$ = this.authService.isLoggedOut;
    
    }   
    /**
     * Le pide al servicio el libro
     */
    getLibro(): void{
        this.librosService.getLibrosDetail(this.libro_id).subscribe(Libro => this.libro = Libro);

    }

    }