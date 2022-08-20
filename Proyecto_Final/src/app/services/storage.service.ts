import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { Producto } from '../class/producto';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;
  productos: Array<Producto> =[];
  carrito: Array<Producto>;
  constructor(private storage: Storage) {
    this.init();
  }

  async init(){
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
    this._storage?.get('productos').then((val)=>{
      this.productos = val;
    });
    this._storage.get('carrito').then((val)=>{
      this.carrito = val;
    })
  }

  public setProductos(key: string, value: Producto) {
    if(!this.productos){
      this.productos=[];
    }
    this.productos.push(value);
    this._storage?.set(key, this.productos);
  }

  public setCarrito(value: Producto){
    if(!this.carrito){
      this.carrito=[];
    }
    this.carrito.push(value);
    this._storage.set('carrito',this.carrito);
  }

  public get(key: string){
    return this._storage.get(key);
  }

  public clearCarrito(){
    this.carrito=[];
    this._storage.remove('carrito');
  }
}
