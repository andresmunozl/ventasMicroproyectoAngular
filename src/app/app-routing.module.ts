import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilPaginaComponent } from './perfil-pagina/perfil-pagina.component';
import { ComprarproductoproveedorComponent } from './comprarproductoproveedor/comprarproductoproveedor.component'
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component'
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { CrearProveedorComponent } from './crear-proveedor/crear-proveedor.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { EditarProveedorComponent } from './editar-proveedor/editar-proveedor.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { OrdenTrabajoComponent } from './orden-trabajo/orden-trabajo.component';
import { ModificarOrdenComponent } from './modificar-orden/modificar-orden.component';
import { ProductosComponent } from './productos/productos.component';
import { ModificarProductosComponent } from './modificar-productos/modificar-productos.component';
import { VentasComponent } from './ventas/ventas.component';
import { VentasEscogerComponent } from './ventas-escoger/ventas-escoger.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ReportesComprasComponent } from './reportes-compras/reportes-compras.component';
import { ReportesVentasComponent } from './reportes-ventas/reportes-ventas.component';
import { ReportesInventarioComponent } from './reportes-inventario/reportes-inventario.component';


const routes: Routes = [
  {path: 'perfil', component: PerfilPaginaComponent},
  {path: 'compraproductosproveedor', component: ComprarproductoproveedorComponent },
  {path: 'cliente', component: ClientesListaComponent},
  {path: 'create-cliente', component: CrearClienteComponent},
  {path: 'producto-crear', component: CrearProductoComponent},
  {path: 'creacion-prov', component: CrearProveedorComponent},
  {path: 'proveedor', component: ProveedorComponent},
  {path: 'edit-prov', component: EditarProveedorComponent},
  {path: 'edit-cliente', component: EditarClienteComponent},
  {path: 'iniciar-sesion', component: IniciarSesionComponent},
  {path: 'ordentrabajo', component: OrdenTrabajoComponent},
  {path: 'edit-orden', component: ModificarOrdenComponent},
  {path: 'product', component: ProductosComponent},
  {path: 'edit_product', component: ModificarProductosComponent},
  {path: 'ventas', component: VentasComponent},
  {path: 'escoger_ventas', component: VentasEscogerComponent},
  {path: 'reportes', component: ReportesComponent},
  {path: 'compras-report', component: ReportesComprasComponent},
  {path: 'ventas-report', component: ReportesVentasComponent},
  {path: 'inventario', component: ReportesInventarioComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
