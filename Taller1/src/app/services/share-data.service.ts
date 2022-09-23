import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  private data;
  constructor() { }

  saveData(jsonObj){
    this.data = jsonObj
  }

  readData(){
    return this.data
  }
}
