import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilPaginaComponent } from './perfil-pagina/perfil-pagina.component';
import { NavegacionbarraComponent } from './navegacionbarra/navegacionbarra.component';
import { ComprarproductoproveedorComponent } from './comprarproductoproveedor/comprarproductoproveedor.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilPaginaComponent,
    NavegacionbarraComponent,
    ComprarproductoproveedorComponent,
    ClientesListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
