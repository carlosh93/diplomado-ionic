import { Component } from '@angular/core';
import { Producto } from '../class/producto';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  productos: Array<Producto>;
  carrito: Array<Producto>;
  size=0;
  constructor(private storage: StorageService) {
    this.productos=[];
  }

  ionViewDidEnter(){
    this.productos=this.storage.productos;
    this.carrito=this.storage.carrito;
    this.size = this.carrito.length;
    console.log(this.carrito);
  }

  agregarCarrito(pos){
    let prod = this.productos[pos]; 
    prod.cantidad = 1;
    this.storage.setCarrito(prod);
    this.carrito = this.storage.carrito;
    this.size = this.carrito.length;
  }

  limpiarCarrito(){
    this.carrito = [];
    this.storage.clearCarrito();
    this.size = this.carrito.length;
  }
}
