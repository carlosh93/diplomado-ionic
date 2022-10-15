import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})


export class HttpToolsService {

  constructor(public httpClient: HttpClient) { }

  getDogFromApi(){
    return this.httpClient.get("https://dog.ceo/api/breeds/image/random")
  }
}
