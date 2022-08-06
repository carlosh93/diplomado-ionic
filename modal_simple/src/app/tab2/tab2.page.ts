import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  resultado = 0;
  constructor() {}

  addF(x){
    this.resultado = this.resultado + x
  }
}
