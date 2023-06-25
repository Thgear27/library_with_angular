import { Injectable} from '@angular/core';
import { Venta } from '../models/venta';
import { VentaDetalle } from '../models/venta-detalle';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private ventaJSON: Venta = new Venta();

  constructor(private http: HttpClient) {
    let ventas = JSON.parse(localStorage.getItem('carrito') || '{}');
    let cliente = JSON.parse(localStorage.getItem('cliente') || '{}');

    if (JSON.stringify(cliente) == '{}') {
      localStorage.removeItem('carrito');
    }

    if (JSON.stringify(ventas) != '{}') {
      this.ventaJSON = ventas;
    }

    this.ventaJSON.cliente.idCliente = cliente.idCliente;
    this.ventaJSON.impuesto = 14.4;
  }

  printDebug() {
    console.log(this.ventaJSON);
  }

  clearCarrito() {
    localStorage.removeItem('carrito');
  }

  getVenta() {
    return this.ventaJSON;
  }

  addBook(ventaDetalle: VentaDetalle) {
    let isfound: boolean = false;
    this.ventaJSON.ventaDetalles.forEach((item) => {
      if (ventaDetalle.libro.idLibro == item.libro.idLibro) {
        item.cantidad++;
        isfound = true;
      }
    });
    if (!isfound) this.ventaJSON.ventaDetalles.push(ventaDetalle);
    this.updateTotal();
    localStorage.setItem('carrito', JSON.stringify(this.ventaJSON));
  }

  removeBook(ventaDetalle: VentaDetalle) {
    this.ventaJSON.ventaDetalles.forEach((item, index) => {
      if (ventaDetalle.libro.idLibro == item.libro.idLibro) {
        if (item.cantidad > 1) {
          item.cantidad--;
        } else {
          this.ventaJSON.ventaDetalles.splice(index, 1);
        }
      }
    });
    this.updateTotal();
    localStorage.setItem('carrito', JSON.stringify(this.ventaJSON));
  }

  updateTotal() {
    let total: number = 0;
    this.ventaJSON.ventaDetalles.forEach((item) => {
      total += item.cantidad * item.precio;
    });
    this.ventaJSON.total = total;
  }

  saveVenta() {
    const requestUrl = 'http://localhost:8080/api/ventas';
    console.log(this.ventaJSON);
    return this.http.post<any>(requestUrl, this.ventaJSON);
  }
}
