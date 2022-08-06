import { Component, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IonModal } from '@ionic/angular';
import { ShareDataService } from '../services/share-data.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild(IonModal) modal: IonModal;
  lista = [];
  listafiltro = [];
  constructor(private alertCtrl: AlertController, private shareData: ShareDataService) {
    console.log("Se creó el Tab 1")
  }

  async agregar(nom, n_jug, dec){
    const alert = await this.alertCtrl.create({
      header: 'Desea guardar el equipo?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => { nom.value=""; }
        },
        {
          text: 'OK',
          handler: () => { 
            let mi_dic = {
              "nombre": nom.value,
              "n_jug": n_jug.value,
              "dec": dec.value
            }
            this.lista.push(mi_dic);
            this.listafiltro = this.lista;
            this.shareData.insertarDato(nom.value)
            nom.value = "";
            n_jug.value = "";
            dec.value = "";
            
            this.modal.dismiss(null, 'confirm')
           }
        }
      ]
    });
    await alert.present();
  }

  onSearchChange(val){
    this.listafiltro = this.lista.filter(
      item => {return item["nombre"].indexOf(val)>-1;}
    );
  }

  cancel(){
    this.modal.dismiss(null, 'cancel');
  }

}
