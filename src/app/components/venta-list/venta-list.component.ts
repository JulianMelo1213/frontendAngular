import { Component, OnInit } from '@angular/core';
import { VentaService } from '../../services/venta.service';
import { Venta } from '../../models/venta';

@Component({
  selector: 'app-venta-list',
  templateUrl: './venta-list.component.html',
  styleUrls: ['./venta-list.component.css']
})
export class VentaListComponent implements OnInit {
  ventas: Venta[] = [];
  selectedVenta: Venta | null = null;

  constructor(private ventaService: VentaService) {}

  ngOnInit(): void {
    this.loadVentas();
  }

  loadVentas(): void {
    this.ventaService.getVentas().subscribe(data => {
      this.ventas = data;
    });
  }

  selectVenta(venta: Venta): void {
    this.selectedVenta = { ...venta };
  }

  deleteVenta(id: number): void {
    this.ventaService.deleteVenta(id).subscribe(() => {
      this.loadVentas();
    });
  }

  clearSelection(): void {
    this.selectedVenta = null;
  }

  createVenta(): void {
    this.selectedVenta = { idVenta: 0, idFactura: 0, idProducto: 0, cantidad: 0, idFacturaNavigation: null, idProductoNavigation: null };
  }
}
