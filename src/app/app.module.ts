import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './MENU/usuario/usuario.component';
import { ProductoComponent } from './MENU/producto/producto.component';
import { ReporteComponent } from './MENU/reporte/reporte.component';
import { PruebaComponent } from './MENU/prueba/prueba.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    ProductoComponent,
    ReporteComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
