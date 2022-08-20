import { Component } from '@angular/core';
import { Producto } from '../class/producto';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private storage: StorageService) {}

  guardar(form1){
    let producto = new Producto;
    producto.name = form1.name.value;
    producto.description = form1.description.value;
    producto.imagen = form1.image.value;
    form1.name.value= "";
    form1.description.value= "";
    form1.image.value= "";
    this.storage.setProductos('productos',producto);
  }

  

}
