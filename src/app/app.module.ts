import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilPaginaComponent } from './perfil-pagina/perfil-pagina.component';
import { NavegacionbarraComponent } from './navegacionbarra/navegacionbarra.component';
import { ComprarproductoproveedorComponent } from './comprarproductoproveedor/comprarproductoproveedor.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { CrearProveedorComponent } from './crear-proveedor/crear-proveedor.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { EditarProveedorComponent } from './editar-proveedor/editar-proveedor.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { OrdenTrabajoComponent } from './orden-trabajo/orden-trabajo.component';
import { ModificarOrdenComponent } from './modificar-orden/modificar-orden.component';
import { ProductosComponent } from './productos/productos.component';
import { ModificarProductosComponent } from './modificar-productos/modificar-productos.component';
import { VentasComponent } from './ventas/ventas.component';
import { VentasEscogerComponent } from './ventas-escoger/ventas-escoger.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ReportesVentasComponent } from './reportes-ventas/reportes-ventas.component';
import { ReportesComprasComponent } from './reportes-compras/reportes-compras.component';
import { ReportesInventarioComponent } from './reportes-inventario/reportes-inventario.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilPaginaComponent,
    NavegacionbarraComponent,
    ComprarproductoproveedorComponent,
    ClientesListaComponent,
    CrearClienteComponent,
    CrearProductoComponent,
    CrearProveedorComponent,
    ProveedorComponent,
    EditarClienteComponent,
    EditarProveedorComponent,
    IniciarSesionComponent,
    OrdenTrabajoComponent,
    ModificarOrdenComponent,
    ProductosComponent,
    ModificarProductosComponent,
    VentasComponent,
    VentasEscogerComponent,
    ReportesComponent,
    ReportesVentasComponent,
    ReportesComprasComponent,
    ReportesInventarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
