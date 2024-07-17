import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {
  productos: Producto[] = [];
  selectedProducto: Producto | null = null;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.loadProductos();
  }

  loadProductos(): void {
    this.productoService.getProductos().subscribe(data => {
      this.productos = data;
    });
  }

  selectProducto(producto: Producto): void {
    this.selectedProducto = { ...producto };
  }

  deleteProducto(id: number): void {
    this.productoService.deleteProducto(id).subscribe(() => {
      this.loadProductos();
    });
  }

  clearSelection(): void {
    this.selectedProducto = null;
  }

  createProducto(): void {
    this.selectedProducto = { idProducto: 0, descripcion: '', precio: 0, idCategoria: 0, idProveedor: 0, idCategoriaNavigation: null, idProveedorNavigation: null, venta: [] };
  }
}
