import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaListComponent } from './components/categoria-list/categoria-list.component';
import { CategoriaFormComponent } from './components/categoria-form/categoria-form.component';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { FacturaListComponent } from './components/factura-list/factura-list.component';
import { FacturaFormComponent } from './components/factura-form/factura-form.component';
import { ProductoListComponent } from './components/producto-list/producto-list.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { ProveedoreListComponent } from './components/proveedore-list/proveedore-list.component';
import { ProveedoreFormComponent } from './components/proveedore-form/proveedore-form.component';
import { VentaListComponent } from './components/venta-list/venta-list.component';
import { VentaFormComponent } from './components/venta-form/venta-form.component';

import { CategoriaService } from './services/categoria.service';
import { ClienteService } from './services/cliente.service';
import { FacturaService } from './services/factura.service';
import { ProductoService } from './services/producto.service';
import { ProveedoreService } from './services/proveedore.service';
import { VentaService } from './services/venta.service';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaListComponent,
    CategoriaFormComponent,
    ClienteListComponent,
    ClienteFormComponent,
    FacturaListComponent,
    FacturaFormComponent,
    ProductoListComponent,
    ProductoFormComponent,
    ProveedoreListComponent,
    ProveedoreFormComponent,
    VentaListComponent,
    VentaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CategoriaService,
    ClienteService,
    FacturaService,
    ProductoService,
    ProveedoreService,
    VentaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
