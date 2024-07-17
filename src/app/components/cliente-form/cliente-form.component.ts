import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnChanges {
  @Input() cliente: Cliente | null = null;
  @Output() save = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  model: Cliente = { idCliente: 0, nombre: '', direccion: '', telefono: '' };

  constructor(private clienteService: ClienteService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cliente'] && this.cliente) {
      this.model = { ...this.cliente };
    }
  }

  saveCliente(): void {
    if (this.model.idCliente) {
      this.clienteService.updateCliente(this.model.idCliente, this.model).subscribe(() => {
        this.save.emit();
      });
    } else {
      this.clienteService.createCliente(this.model).subscribe(() => {
        this.save.emit();
      });
    }
  }

  cancelEdit(): void {
    this.cancel.emit();
  }
}
