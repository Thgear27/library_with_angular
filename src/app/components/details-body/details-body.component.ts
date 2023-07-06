import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from 'src/app/models/libro';
import { VentaDetalle } from 'src/app/models/venta-detalle';
import { CartService } from 'src/app/services/cart.service';
import { LibrosService } from 'src/app/services/libros.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
import * as AOS from 'aos';

@Component({
  selector: 'app-details-body',
  templateUrl: './details-body.component.html',
  styleUrls: ['./details-body.component.scss'],
})
export class DetailsBodyComponent implements OnInit {
  libro!: Libro;
  anioPublicacion?: string;

  constructor(
    private route: ActivatedRoute,
    private libroService: LibrosService,
    private cartService: CartService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh);

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.libroService.getBookById(id).subscribe((data) => {
      this.libro = data;
      this.anioPublicacion = this.libro?.añoPublicacion;
    });
  }

  addBookToCart() {
    if (!this.loginService.isLogged()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        confirmButtonColor: '#24292E',
        text: 'Debe iniciar sesion',
      });
      return;
    }
    let ventaDetalle: VentaDetalle = new VentaDetalle();
    ventaDetalle.cantidad = 1;
    ventaDetalle.libro.idLibro = this.libro?.idLibro || -1;
    ventaDetalle.precio = this.libro?.precio || -1;

    this.cartService.addBook(ventaDetalle);
    Swal.fire({
      title: 'Añadido al carrito',
      text: 'Producto agregado al carrito !!',
      icon: 'success',
      confirmButtonColor: '#24292E',
    });
    this.cartService.printDebug();
  }
}
