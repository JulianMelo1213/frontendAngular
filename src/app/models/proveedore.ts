import { Producto } from './producto';

export interface Proveedore {
  idProveedor: number;
  nombre: string;
  direccion: string;
  telefono: string;
  productos: Producto[];
}
