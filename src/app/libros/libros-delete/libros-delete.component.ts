import { Libro } from '../Libro';
import { LibrosDetail } from '../libros-detail';
import { LibrosService } from './../libros.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-libros-delete',
  templateUrl: './libros-delete.component.html',
  styleUrls: ['./libros-delete.component.css']
})
export class LibrosDeleteComponent implements OnInit {

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

    /**
     * Le pide al servicio que elimine el libro
     */
    deleteLibro(): void{
        this.librosService.deleteLibro(this.libro_id).subscribe(Libro => this.libro = Libro);
    }
    }
