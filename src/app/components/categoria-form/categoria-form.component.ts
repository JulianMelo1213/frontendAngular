import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../models/categoria';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnChanges {
  @Input() categoria: Categoria | null = null;
  @Output() save = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  model: Categoria = { idCategoria: 0, descripcion: '' };

  constructor(private categoriaService: CategoriaService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['categoria'] && this.categoria) {
      this.model = { ...this.categoria };
    }
  }

  saveCategoria(): void {
    if (this.model.idCategoria) {
      this.categoriaService.updateCategoria(this.model.idCategoria, this.model).subscribe(() => {
        this.save.emit();
      });
    } else {
      this.categoriaService.createCategoria(this.model).subscribe(() => {
        this.save.emit();
      });
    }
  }

  cancelEdit(): void {
    this.cancel.emit();
  }
}
