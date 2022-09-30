import { Component } from '@angular/core';
import { ShareDataService } from '../services/share-data.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  data: any;
  num: number= 1;
  constructor(private shareService: ShareDataService, private alertController: AlertController) {}

  ionViewWillEnter(){
    this.updateData()
    console.log(JSON.stringify(this.data))
  }

  updateData() {
    this.data = this.shareService.readData();
    if (!this.data){
      console.log("No existe ningun registro");
      this.data = []
    }
  }

  async presentAlert(mensaje, titulo="Advertencia", botones=['OK'] ) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: botones,
    });
    
    await alert.present();
  }

}
