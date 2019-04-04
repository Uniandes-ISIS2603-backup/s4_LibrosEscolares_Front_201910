import { Libro } from './../Libro';

import { LibroService } from './../libro.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

    @Component({
    selector: 'libroDetail-component',
    templateUrl: './libroDetail.component.html'
    })
    export class LibroDetailComponent implements OnInit {
    
    constructor(
        private libroService: LibroService,
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
        //this.libroService.getLibroDetail(this.libro_id).subscribe(Libro => this.libro = Libro);
    }

    }