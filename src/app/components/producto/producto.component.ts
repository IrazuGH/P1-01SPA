import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/Productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html'
})
export class ProductoComponent {
  producto: Producto;

  constructor(private activateRoute: ActivatedRoute, private productosService: ProductosService) {
    this.activateRoute.params.subscribe(params=>{
     this.producto = this.productosService.getProducto(params['id']);
     console.log(this.producto);
    });
}
}
interface Producto{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
}
