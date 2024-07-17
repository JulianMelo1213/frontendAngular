import { Categoria } from './categoria';
import { Proveedore } from './proveedore';
import { Venta } from './venta';

export interface Producto {
  idProducto: number;
  descripcion: string;
  precio: number;
  idCategoria: number;
  idProveedor: number;
  idCategoriaNavigation: Categoria | null;
  idProveedorNavigation: Proveedore | null;
  venta: Venta[];
}
