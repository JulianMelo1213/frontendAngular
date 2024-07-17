import { Component, OnInit } from '@angular/core';
import { FacturaService } from '../../services/factura.service';
import { Factura } from '../../models/factura';

@Component({
  selector: 'app-factura-list',
  templateUrl: './factura-list.component.html',
  styleUrls: ['./factura-list.component.css']
})
export class FacturaListComponent implements OnInit {
  facturas: Factura[] = [];
  selectedFactura: Factura | null = null;

  constructor(private facturaService: FacturaService) {}

  ngOnInit(): void {
    this.loadFacturas();
  }

  loadFacturas(): void {
    this.facturaService.getFacturas().subscribe(data => {
      this.facturas = data;
    });
  }

  selectFactura(factura: Factura): void {
    this.selectedFactura = { ...factura };
  }

  deleteFactura(id: number): void {
    this.facturaService.deleteFactura(id).subscribe(() => {
      this.loadFacturas();
    });
  }

  clearSelection(): void {
    this.selectedFactura = null;
  }

  createFactura(): void {
    this.selectedFactura = { idFactura: 0, fecha: '', idCliente: 0, idClienteNavigation: null, venta: [] };
  }
}
