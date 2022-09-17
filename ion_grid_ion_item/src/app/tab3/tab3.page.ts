import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Ejemplo Alerta',
      message: "Esta es una alerta",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("se dio click en cancelar");
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log("se dio click en confirmar");
          },
        },
      ],
    });

    await alert.present();
  }
}
