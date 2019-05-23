import { Libro } from '../Libro';
import { LibrosDetail } from '../libros-detail';
import { LibrosService } from './../libros.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router, RouterModule, Routes} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-libros-delete',
  templateUrl: './libros-delete.component.html',
  styleUrls: ['./libros-delete.component.css']
})
export class LibrosDeleteComponent implements OnInit {
    /**
     * Metodo constructor
     */
 constructor(
        private librosService: LibrosService,
        private route: ActivatedRoute,
         private toastrService: ToastrService,
         private router: Router
    )
    {
    }
    /**
     * Se declaran los atributos necesarios : el libro a eliminar y su id
     */
    libro_id: number;
    libro: Libro;
    ngOnInit(){
        this.libro_id = + this.route.snapshot.paramMap.get('id');
        this.getLibro();
    
    }   
    /**
     * Evento que avisa cuando se elimina el libro
     */
    @Output() create = new EventEmitter();
    
   
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
        this.librosService.deleteLibro(this.libro_id)
            .subscribe(() => {
            Libro => this.libro = Libro;
            this.create.emit();
            this.toastrService.success("El libro fue eliminado", "Eliminar libro");
            window.location.assign('/libros/list');
        }, err => {
                   this.toastrService.error(err, "Error");
        });
    }
    }






















