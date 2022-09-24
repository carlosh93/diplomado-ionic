import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ShareDataService } from '../services/share-data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  nombre: string = "";
  apellido: string ="";
  email: string ="";
  ciudad: string="";
  edad: number;
  telefono: number;
  equipo: string="";
  password: string="";

  registros=[];

  constructor(private alertController: AlertController, private shareDataService: ShareDataService) {}

  async presentAlert(mensaje, titulo="Advertencia", botones=['OK'] ) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: botones,
    });
    
    await alert.present();
  }

  checkLen(id, num=15){
    if (id==1 && this.nombre.length > num) {
      this.presentAlert('El nombre debe tener menos de ' + num +' caracteres')
      this.nombre = "";
    }

    if (id==2 && this.apellido.length > num) {
      this.presentAlert('El apellido debe tener menos de ' + num +' caracteres')
      this.apellido = "";
    }

    if (id==3 && this.ciudad.length > num) {
      this.presentAlert('La ciudad debe tener menos de ' + num +' caracteres')
      this.ciudad = "";
    }

    if (id==4 && this.password.length > num) {
      this.presentAlert('La contraseña debe tener menos de ' + num +' caracteres')
      this.password = "";
    }
  }

  checkEmail(){
    if (!this.email.includes("@")){
      this.presentAlert("El email debe contener el @");
      this.email = "";
    }
  }

  checkNumber(id){
    if (id==1 && isNaN(Number(this.edad))) {
      this.presentAlert("Debe ingresar un número de edad valido");
      this.edad = 0;
    }

    if (id==2 && isNaN(Number(this.telefono))) {
      this.presentAlert("Debe ingresar un número de telefono valido");
      this.telefono = 0;
    }
  }

  resetValues() {
    this.nombre= "";
    this.apellido="";
    this.email="";
    this.ciudad="";
    this.edad=undefined;
    this.telefono=undefined;
    this.equipo="";
    this.password="";
  }

  pushCancel() {
    this.presentAlert("Usted ha cancelado esta operación");
    this.resetValues();
  }

  registerform(form) {
    let jsonObj = {
      nombre: this.nombre,
      apellido: this.apellido,
      email: this.email,
      ciudad: this.ciudad,
      edad: this.edad,
      telefono: this.telefono,
      equipo: this.equipo,
      password: this.password
    }

    this.registros.push(jsonObj) // [obj1, obj2....]

    this.shareDataService.saveData(this.registros)

    this.resetValues()
  }

}
