import { Factura } from './factura';
import { Producto } from './producto';

export interface Venta {
  idVenta: number;
  idFactura: number;
  idProducto: number;
  cantidad: number;
  idFacturaNavigation: Factura | null;
  idProductoNavigation: Producto | null;
}
