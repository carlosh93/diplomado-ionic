import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpToolsService {

  result_obs: Observable<any>;

  constructor(public httpClient:HttpClient) {

   }

  getPrediction(nombre){
    this.result_obs = this.httpClient.get("https://api.agify.io/?name="+nombre)
    return this.result_obs
  }
}
