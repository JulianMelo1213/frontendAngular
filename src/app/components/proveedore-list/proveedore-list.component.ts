import { Component, OnInit } from '@angular/core';
import { ProveedoreService } from '../../services/proveedore.service';
import { Proveedore } from '../../models/proveedore';

@Component({
  selector: 'app-proveedore-list',
  templateUrl: './proveedore-list.component.html',
  styleUrls: ['./proveedore-list.component.css']
})
export class ProveedoreListComponent implements OnInit {
  proveedores: Proveedore[] = [];
  selectedProveedore: Proveedore | null = null;

  constructor(private proveedoreService: ProveedoreService) {}

  ngOnInit(): void {
    this.loadProveedores();
  }

  loadProveedores(): void {
    this.proveedoreService.getProveedores().subscribe(data => {
      this.proveedores = data;
    });
  }

  selectProveedore(proveedore: Proveedore): void {
    this.selectedProveedore = { ...proveedore };
  }

  deleteProveedore(id: number): void {
    this.proveedoreService.deleteProveedore(id).subscribe(() => {
      this.loadProveedores();
    });
  }

  clearSelection(): void {
    this.selectedProveedore = null;
  }

  createProveedore(): void {
    this.selectedProveedore = { idProveedor: 0, nombre: '', direccion: '', telefono: '', productos: [] };
  }
}
