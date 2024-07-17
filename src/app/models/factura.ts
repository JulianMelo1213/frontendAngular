import { Cliente } from './cliente';
import { Venta } from './venta';

export interface Factura {
  idFactura: number;
  fecha: string;
  idCliente: number;
  idClienteNavigation: Cliente | null;
  venta: Venta[];
}
