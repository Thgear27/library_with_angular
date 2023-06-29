export class VentaDetalle {
  cantidad: number;
  libro: { idLibro: number };
  precio: number;

  constructor() {
    this.cantidad = 0;
    this.libro = { idLibro: 0 };
    this.precio = 0;
  }
}
