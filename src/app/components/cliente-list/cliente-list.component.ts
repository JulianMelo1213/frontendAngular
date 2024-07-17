import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  clientes: Cliente[] = [];
  selectedCliente: Cliente | null = null;

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.loadClientes();
  }

  loadClientes(): void {
    this.clienteService.getClientes().subscribe(data => {
      this.clientes = data;
    });
  }

  selectCliente(cliente: Cliente): void {
    this.selectedCliente = { ...cliente };
  }

  deleteCliente(id: number): void {
    this.clienteService.deleteCliente(id).subscribe(() => {
      this.loadClientes();
    });
  }

  clearSelection(): void {
    this.selectedCliente = null;
  }

  createCliente(): void {
    this.selectedCliente = { idCliente: 0, nombre: '', direccion: '', telefono: '' };
  }
}
