import { Libro } from '../Libro';

import { LibrosService } from './../libros.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

    @Component({
  selector: 'app-libros-detail',
  templateUrl: './libros-detail.component.html',
  styleUrls: ['./libros-detail.component.css']
})
    export class LibrosDetailComponent implements OnInit {
    
    constructor(
        private librosService: LibrosService,
        private route: ActivatedRoute
    )
    {
    }
    libro_id: number;
    libro: Libro;
    ngOnInit(){
        this.libro_id = + this.route.snapshot.paramMap.get('id');
        this.getLibro();
    
    }   
    /**
     * Le pide al servicio el libro
     */
    getLibro(): void{
        this.librosService.getLibrosDetail(this.libro_id).subscribe(Libro => this.libro = Libro);
    }

    }