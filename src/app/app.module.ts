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

@NgModule({
  declarations: [
    AppComponent,
    PerfilPaginaComponent,
    NavegacionbarraComponent,
    ComprarproductoproveedorComponent,
    ClientesListaComponent,
    CrearClienteComponent,
    CrearProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
