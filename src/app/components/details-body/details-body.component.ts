import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from 'src/app/models/libro';
import { VentaDetalle } from 'src/app/models/venta-detalle';
import { CartService } from 'src/app/services/cart.service';
import { LibrosService } from 'src/app/services/libros.service';
import Swal from 'sweetalert2';

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
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.libroService.getBookById(id).subscribe((data) => {
      this.libro = data;
      this.anioPublicacion = this.libro?.añoPublicacion;
    });
  }

  addBookToCart() {
    let ventaDetalle: VentaDetalle = new VentaDetalle();
    ventaDetalle.cantidad = 1;
    ventaDetalle.libro.idLibro = this.libro?.idLibro || -1;
    ventaDetalle.precio = this.libro?.precio || -1;

    this.cartService.addBook(ventaDetalle);
    Swal.fire("Añadido al carrito", "Producto agregado al carrito !!", "success")
    this.cartService.printDebug();
  }
}
