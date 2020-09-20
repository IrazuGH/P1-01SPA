import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductosComponent } from './components/productos/productos.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { ProductoComponent } from './components/producto/producto.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const APP_ROUTES: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'productos', component: ProductosComponent },
{ path: 'buscador/:term', component: BuscadorComponent},
{ path: 'producto/:id', component: ProductoComponent },
{ path: '**', pathMatch: 'full', redirectTo: 'home' },
];
/*
//export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true});*/
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
