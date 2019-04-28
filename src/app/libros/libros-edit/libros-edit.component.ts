import { Router, ActivatedRoute } from '@angular/router';
import { LibrosDetail } from './../libros-detail';
import { ToastrService } from 'ngx-toastr';
import { LibrosService } from './../libros.service';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-libros-edit',
  templateUrl: './libros-edit.component.html',
  styleUrls: ['./libros-edit.component.css']
})
export class LibrosEditComponent implements OnInit, OnChanges {
constructor(
    private libroService: LibrosService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute) {
}

id:number;

/**
    * El libro recibe el id del componente padre
    */
   libro: LibrosDetail;

   /**
   * El output que habla con el componente padre
   * que dice que ya no se quiere editar el libro
   */
   @Output() cancelar = new EventEmitter();

   /**
   * El output que habla con el componente padre
   * que dice que ha sido actualizado el libro
   */
   @Output() editar = new EventEmitter();

   /**
   * Actualiza la informacion del libro
   */
   editarLibro(): void {
        
       this.libroService.editarLibro(this.libro)
           .subscribe(() => {
            this.editar.emit();
               this.toastrService.success("La informacion del libro ha sido actualizada", "editar libro");
               this.router.navigate(['/libros/list']);
            }, err => {
                this.toastrService.error(err, "Error");
            });
    
   }

   /**
   * Emite una señal al componente padre que dice 
   * el libro ya no quiere crear un libro
   */
   cancelarEdicion(): void {
       this.cancelar.emit();
       this.router.navigate(['/libros/list']);
   }


   /**
   * Estra funcion inicializa el componente
   */
   ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.libroService.getLibrosDetail(this.id).subscribe(Libros => this.libro = Libros);
   }

   /**
   * Esta funcion sera usada cuando se elija otro libro a editar 
   */
   ngOnChanges() {
       this.ngOnInit();
   }
}