import { Component } from '@angular/core';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-mypurchases-body',
  templateUrl: './mypurchases-body.component.html',
  styleUrls: ['./mypurchases-body.component.scss']
})
export class MypurchasesBodyComponent {
  ventas: any[] = [];

  constructor(public ventasService: VentasService) {
    let cliente = JSON.parse(localStorage.getItem('cliente') || '{}');
    this.ventasService.getVentaByClientId(cliente.idCliente).subscribe((data) => {
      this.ventas = data;
      console.log(this.ventas);
    });
  }
}
