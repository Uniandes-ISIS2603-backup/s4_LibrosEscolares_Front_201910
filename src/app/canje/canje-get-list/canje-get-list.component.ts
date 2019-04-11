import { Component, OnInit } from '@angular/core';
import { Canje } from '../canje';
import { CanjeService } from './../canje.service';


/**
 * Este es el componente para la lista de los canjes
 */
@Component({
  selector: 'app-canje-get-list',
  templateUrl: './canje-get-list.component.html',
  styleUrls: ['./canje-get-list.component.css']
})
export class CanjeGetListComponent implements OnInit {

    /**
     * Costructor para el componente
     * @param canjeService el proveedor de servicios del canje
     */
  constructor(private canjeService: CanjeService) { }

    /**
     * La lista de todos los canjes
     */
    canjes: Canje[];

  /**
     * Le pide al servicio todos los canjes
     */
    getCanjes(): void{
      this.canjeService.getCanjes().subscribe(c =>{ this.canjes = c});
  }

  /**
   * Esto va a inicializar el componente recuperando la lista de canjes del servicio
   * Este metodo se llamara cuando el componente sea creado
   */
  ngOnInit() {
      this.getCanjes();
      
  }

}
