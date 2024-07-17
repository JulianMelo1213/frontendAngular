import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../models/categoria';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {
  categorias: Categoria[] = [];
  selectedCategoria: Categoria | null = null;

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.loadCategorias();
  }

  loadCategorias(): void {
    this.categoriaService.getCategorias().subscribe(data => {
      this.categorias = data;
    });
  }

  selectCategoria(categoria: Categoria): void {
    this.selectedCategoria = { ...categoria };
  }

  deleteCategoria(id: number): void {
    this.categoriaService.deleteCategoria(id).subscribe(() => {
      this.loadCategorias();
    });
  }

  clearSelection(): void {
    this.selectedCategoria = null;
  }

  createCategoria(): void {
    this.selectedCategoria = { idCategoria: 0, descripcion: '' };
  }
}
