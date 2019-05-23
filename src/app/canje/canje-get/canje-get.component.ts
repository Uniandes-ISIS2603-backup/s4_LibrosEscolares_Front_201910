import { CanjeService } from './../canje.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CanjeDetail } from '../canjeDetail';
@Component({
  selector: 'app-canje-get',
  templateUrl: './canje-get.component.html',
  styleUrls: ['./canje-get.component.css']
})
export class CanjeGetComponent implements OnInit {

  constructor(private canjeService: CanjeService,
    private route: ActivatedRoute) { }

    canjeId: number;
    canje: CanjeDetail;   
    /**
     * Le pide al servicio el canjes
     */
    getCanje(): void{
      let canjes: CanjeDetail[] = [];
      this.canjeService.getCanjes().subscribe(c => 
        {
          canjes = c;
          for (var i = 0; i < canjes.length; i++) {
            if (canjes[i].id == this.canjeId) {
              console.log('Bingo');
              console.log(canjes[i]);
              this.canje = canjes[i];
            }
          }
        }
        );
    }

    ngOnInit(){
      this.canjeId = + this.route.snapshot.paramMap.get('id');
      this.getCanje();
  
  }

}
