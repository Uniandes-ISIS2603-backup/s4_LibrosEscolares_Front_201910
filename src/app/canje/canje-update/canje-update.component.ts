import { Router, ActivatedRoute } from '@angular/router';
import { CanjeDetail } from './../canjeDetail';
import { ToastrService } from 'ngx-toastr';
import { CanjeService } from './../canje.service';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-canje-update',
  templateUrl: './canje-update.component.html',
  styleUrls: ['./canje-update.component.css']
})
export class CanjeUpdateComponent implements OnInit, OnChanges {

  constructor(private canjeService: CanjeService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute) { }

    id:number;
    canje: CanjeDetail;
    
       /**
       * El output que habla con el componente padre
       * que dice que ya no se quiere editar el canje
       */
       @Output() cancel = new EventEmitter();
    
       /**
       * El output que habla con el componente padre
       * que dice que ha sido actualizado el canje
       */
       @Output() update = new EventEmitter();
    
       /**
       * Actualiza la informacion del canje
       */
       editUser(): void {
            
           this.canjeService.updateCanje(this.canje)
               .subscribe(() => {
                this.update.emit();
                   this.toastrService.success("La informacion del usuario ha sido actualizada", "Author edition");
                }, err => {
                    this.toastrService.error(err, "Error");
                });
        
       }
    
       /**
       * Emite una señal al componente padre que dice 
       * el usuario ya no quiere crear un usuario
       */
       cancelEdition(): void {
           this.cancel.emit();
       }
    
    
       /**
       * Estra funcion inicializa el componente
       */
       ngOnInit() {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.canjeService.getCanjeDetail(this.id).subscribe(c => this.canje = c);
       }
    
       /**
       * Esta funcion sera usada cuando se elija otro canje a editar 
       */
       ngOnChanges() {
           this.ngOnInit();
       }

}
