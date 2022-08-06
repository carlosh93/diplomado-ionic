import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild(IonModal) modal: IonModal;

  message = "";
  name = "";

  constructor() {
    this.message = 'Dar click en el boton para ingresar informacion'
  }

  addF(x, y){
    return x+y
  }

  cancel(){
    this.modal.dismiss(null, 'cancel')
    // console.log(this.addF(8,8))
  }

  confirm(){
    this.modal.dismiss(this.name, 'confirm')
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hola, ${ev.detail.data}!`;
    }
  }

}
