import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoComponent} from './MENU/producto/producto.component';
import { PruebaComponent} from './MENU/prueba/prueba.component';
import { ReporteComponent} from './MENU/reporte/reporte.component';
import {UsuarioComponent} from './MENU/Usuario/usuario.component';
const routes: Routes = [
  { path:'produc', component:ProductoComponent},
  { path:'prueba', component:PruebaComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
