import { Component } from '@angular/core';
import { HttpToolsService } from '../services/http-tools.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  result = ""
  constructor(private httpService: HttpToolsService) {
  }

  getResult(nombre){
    let res = this.httpService.getPrediction(nombre.value)
    res.subscribe( data => {
      console.log('resultado: ', data)
      this.result = data.age.toString()
    })
  }

}
