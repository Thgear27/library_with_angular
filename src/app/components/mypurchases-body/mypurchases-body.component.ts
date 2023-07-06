import { Component, OnInit } from '@angular/core';
import { VentasService } from 'src/app/services/ventas.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-mypurchases-body',
  templateUrl: './mypurchases-body.component.html',
  styleUrls: ['./mypurchases-body.component.scss']
})
export class MypurchasesBodyComponent implements OnInit {
  ventas: any[] = [];

  constructor(public ventasService: VentasService) {
    let cliente = JSON.parse(localStorage.getItem('cliente') || '{}');
    this.ventasService.getVentaByClientId(cliente.idCliente).subscribe((data) => {
      this.ventas = data;
      console.log(this.ventas);
    });
  }
  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }
}
