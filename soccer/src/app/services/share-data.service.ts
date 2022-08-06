import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  dato: string = ""
  constructor() {
    console.log("Se creó el servicio")
  }

  insertarDato(x){
    this.dato = x
  }

  obtenerDato(){
    return this.dato
  }
}
