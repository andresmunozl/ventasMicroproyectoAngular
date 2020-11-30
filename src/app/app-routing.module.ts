import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilPaginaComponent } from './perfil-pagina/perfil-pagina.component';
import { ComprarproductoproveedorComponent } from './comprarproductoproveedor/comprarproductoproveedor.component'
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component'
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';


const routes: Routes = [
  {path: 'perfil', component: PerfilPaginaComponent},
  {path: 'compraproductosproveedor', component: ComprarproductoproveedorComponent },
  {path: 'cliente-lista', component: ClientesListaComponent},
  {path: 'cliente-crear', component: CrearClienteComponent},
  {path: 'producto-crear', component: CrearProductoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
