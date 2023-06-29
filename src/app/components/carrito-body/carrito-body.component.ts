import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { Venta } from 'src/app/models/venta';
import { VentaDetalle } from 'src/app/models/venta-detalle';
import { CartService } from 'src/app/services/cart.service';
import { LibrosService } from 'src/app/services/libros.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrito-body',
  templateUrl: './carrito-body.component.html',
  styleUrls: ['./carrito-body.component.scss'],
})
export class CarritoBodyComponent {
  libros: Libro[] = [];
  venta: Venta;

  constructor(
    public cartService: CartService,
    public libroService: LibrosService
  ) {
    this.venta = cartService.getVenta();
    this.venta.ventaDetalles.forEach((item) => {
      this.libroService.getBookById(item.libro.idLibro).subscribe((data) => {
        let libro = data;
        this.libros.push(libro);
        console.log(this.libros);
      });
    });
  }

  getBookAmountById(id: number) {
    let cantidad: number = 0;
    this.venta.ventaDetalles.forEach((item) => {
      if (id == item.libro.idLibro) cantidad = item.cantidad;
    });

    return cantidad;
  }

  onPlusButton(id: number, precio: number) {
    let ventaDetalle: VentaDetalle = new VentaDetalle();
    ventaDetalle.libro.idLibro = id;
    ventaDetalle.cantidad = 1;
    ventaDetalle.precio = precio;
    this.cartService.addBook(ventaDetalle);
  }

  onMinusButton(id: number) {
    this.venta.ventaDetalles.forEach((item) => {
      if (id == item.libro.idLibro) this.cartService.removeBook(item);
    });
  }

  onRealizarVentaButton() {
    if (this.venta.ventaDetalles.length == 0) {
      Swal.fire({
        icon: 'info',
        title: 'No hay libros en el carrito',
        confirmButtonColor: '#2A2C31',
        text: 'Debe ingresar por lo menor un libro para poder hacer una compra',
      });
      window.location.reload();
      return;
    }

    this.cartService.saveVenta().subscribe((response: any) => {
      console.log(response);
    });
    Swal.fire({
      icon: 'success',
      title: 'Compra Registrada',
      confirmButtonColor: '#2A2C31',
      text: 'Su compra ha sido registrada correctamente',
    });
    this.cartService.clearCarrito();
  }
}
