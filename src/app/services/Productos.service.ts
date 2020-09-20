import { Injectable } from '@angular/core';

@Injectable()
export class ProductosService {
    private productos: Producto[] = [
        {
            nombre: "Pistolas Contex",
            bio: "Pistola marca AMRAM para plastiflecha",
            img: "assets/img/PistolaContex.jpg",
            aparicion: "$220.00 + IVA",
            casa: "Plasticos"
        },
        {
            nombre: "Candado Amram",
            bio: "Candado de marca AMRAM xd",
            img: "assets/img/CandadoAmram.jpg",
            aparicion: "$18.00 + IVA x Millar",
            casa: "Plasticos"
        },
        {
            nombre: "Agujas Contex",
            bio: "Agujas para pistola Contex; Marca AMRAM",
            img: "assets/img/AgujasAmram.jpg",
            aparicion: "$20.00 + IVA c/u",
            casa: "Plasticos"
        },
        {
            nombre: "Pegamento Kolibri",
            bio: "Pegamento industrial",
            img: "assets/img/Kolibri.png",
            aparicion: "$18.00 + IVA",
            casa: 'Pegamentos'
        },
    ];

    constructor() {
        console.log('servicio listo xd');
    }
    getProductos(): Producto[] {
        return this.productos;
    }
    getProducto (index: string){
        return this.productos[index];
      }
      buscarProducto(termino: string): Producto[]{
        let productosArr: Producto[] = [];
        termino = termino.toLowerCase();
        for (let i = 0; i < this.productos.length; i++){
          let producto = this.productos[i];
          let nombre = producto.nombre.toLowerCase();
          if (nombre.indexOf(termino) >= 0 ){
            producto.idx = i;
            productosArr.push(producto);
          }
        }
        return productosArr;
      }
}

interface Producto{
    nombre: string;
    bio: string;
    img: string;
    aparicion: string;
    casa: string;
    idx?: number;
  }
