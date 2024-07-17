import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { VentaService } from '../../services/venta.service';
import { Venta } from '../../models/venta';

@Component({
  selector: 'app-venta-form',
  templateUrl: './venta-form.component.html',
  styleUrls: ['./venta-form.component.css']
})
export class VentaFormComponent implements OnChanges {
  @Input() venta: Venta | null = null;
  @Output() save = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  model: Venta = { 
    idVenta: 0, 
    idFactura: 0, 
    idProducto: 0, 
    cantidad: 0, 
    idFacturaNavigation: null, 
    idProductoNavigation: null 
  };

  constructor(private ventaService: VentaService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['venta'] && this.venta) {
      this.model = { ...this.venta };
    }
  }

  saveVenta(): void {
    if (this.model.idVenta) {
      this.ventaService.updateVenta(this.model.idVenta, this.model).subscribe(() => {
        this.save.emit();
      });
    } else {
      this.ventaService.createVenta(this.model).subscribe(() => {
        this.save.emit();
      });
    }
  }

  cancelEdit(): void {
    this.cancel.emit();
  }
}
