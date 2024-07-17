import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ProveedoreService } from '../../services/proveedore.service';
import { Proveedore } from '../../models/proveedore';

@Component({
  selector: 'app-proveedore-form',
  templateUrl: './proveedore-form.component.html',
  styleUrls: ['./proveedore-form.component.css']
})
export class ProveedoreFormComponent implements OnChanges {
  @Input() proveedore: Proveedore | null = null;
  @Output() save = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  model: Proveedore = { 
    idProveedor: 0, 
    nombre: '', 
    direccion: '', 
    telefono: '', 
    productos: [] 
  };

  constructor(private proveedoreService: ProveedoreService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['proveedore'] && this.proveedore) {
      this.model = { ...this.proveedore };
    }
  }

  saveProveedore(): void {
    if (this.model.idProveedor) {
      this.proveedoreService.updateProveedore(this.model.idProveedor, this.model).subscribe(() => {
        this.save.emit();
      });
    } else {
      this.proveedoreService.createProveedore(this.model).subscribe(() => {
        this.save.emit();
      });
    }
  }

  cancelEdit(): void {
    this.cancel.emit();
  }
}
