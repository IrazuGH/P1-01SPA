import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductosService } from './services/Productos.service';
import { ProductosComponent } from './components/productos/productos.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    PresentacionComponent,
    ProductoComponent,
    ProductosComponent,
    BuscadorComponent,
  ],
  imports: [
    BrowserModule, APP_ROUTING, FormsModule],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
