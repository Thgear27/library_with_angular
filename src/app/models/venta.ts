import { VentaDetalle } from "./venta-detalle";

export class Venta {
  cliente: { idCliente: number };
  impuesto: number;
  total: number;
  ventaDetalles: VentaDetalle[];

  constructor() {
    this.cliente = { idCliente: -1 };
    this.impuesto = 0;
    this.total = 0;
    this.ventaDetalles = [];
  }
}
