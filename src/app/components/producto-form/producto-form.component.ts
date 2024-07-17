import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnChanges {
  @Input() producto: Producto | null = null;
  @Output() save = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  model: Producto = { 
    idProducto: 0, 
    descripcion: '', 
    precio: 0, 
    idCategoria: 0, 
    idProveedor: 0, 
    idCategoriaNavigation: null, 
    idProveedorNavigation: null, 
    venta: [] 
  };

  constructor(private productoService: ProductoService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['producto'] && this.producto) {
      this.model = { ...this.producto };
    }
  }

  saveProducto(): void {
    if (this.model.idProducto) {
      this.productoService.updateProducto(this.model.idProducto, this.model).subscribe(() => {
        this.save.emit();
      });
    } else {
      this.productoService.createProducto(this.model).subscribe(() => {
        this.save.emit();
      });
    }
  }

  cancelEdit(): void {
    this.cancel.emit();
  }
}
