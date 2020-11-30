import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilPaginaComponent } from './perfil-pagina/perfil-pagina.component';
import { ComprarproductoproveedorComponent } from './comprarproductoproveedor/comprarproductoproveedor.component'
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component'

const routes: Routes = [
  {path: 'perfil', component: PerfilPaginaComponent},
  {path: 'compraproductosproveedor', component: ComprarproductoproveedorComponent },
  {path: 'cliente-lista', component: ClientesListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
