import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FacturaService } from '../../services/factura.service';
import { Factura } from '../../models/factura';

@Component({
  selector: 'app-factura-form',
  templateUrl: './factura-form.component.html',
  styleUrls: ['./factura-form.component.css']
})
export class FacturaFormComponent implements OnChanges {
  @Input() factura: Factura | null = null;
  @Output() save = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  model: Factura = { idFactura: 0, fecha: '', idCliente: 0, idClienteNavigation: null, venta: [] };

  constructor(private facturaService: FacturaService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['factura'] && this.factura) {
      this.model = { ...this.factura };
    }
  }

  saveFactura(): void {
    if (this.model.idFactura) {
      this.facturaService.updateFactura(this.model.idFactura, this.model).subscribe(() => {
        this.save.emit();
      });
    } else {
      this.facturaService.createFactura(this.model).subscribe(() => {
        this.save.emit();
      });
    }
  }

  cancelEdit(): void {
    this.cancel.emit();
  }
}
