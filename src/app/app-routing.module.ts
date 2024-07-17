import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaListComponent } from './components/categoria-list/categoria-list.component';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { FacturaListComponent } from './components/factura-list/factura-list.component';
import { ProductoListComponent } from './components/producto-list/producto-list.component';
import { ProveedoreListComponent } from './components/proveedore-list/proveedore-list.component';
import { VentaListComponent } from './components/venta-list/venta-list.component';

const routes: Routes = [
  { path: 'categorias', component: CategoriaListComponent },
  { path: 'clientes', component: ClienteListComponent },
  { path: 'facturas', component: FacturaListComponent },
  { path: 'productos', component: ProductoListComponent },
  { path: 'proveedores', component: ProveedoreListComponent },
  { path: 'ventas', component: VentaListComponent },
  { path: '', redirectTo: '/categorias', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
