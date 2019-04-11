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
     * Le pide al servicio el usuario
     */
    getCanje(): void{
        this.canjeService.getCanjeDetail(this.canjeId).subscribe(c => this.canje = c);
    }

    ngOnInit(){
      this.canjeId = + this.route.snapshot.paramMap.get('id');
      this.getCanje();
  
  }

}
