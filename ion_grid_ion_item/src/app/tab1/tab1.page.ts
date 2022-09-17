import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  nombre: string = "";
  
  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'El nombre debe tener menos de 10 caracteres',
      buttons: ['OK'],
    });

    await alert.present();
  }

  guardarLen() {
    if ((this.nombre.length) > 10) {
      this.presentAlert()
      this.nombre = "";
    }

  }

}
