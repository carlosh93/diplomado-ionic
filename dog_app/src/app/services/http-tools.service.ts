import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class HttpToolsService {

  private PHOTO_STORAGE: string = 'photos';
  photos = []
  constructor(private httpClient: HttpClient) { }

  getDog() {
    return this.httpClient.get("https://dog.ceo/api/breeds/image/random")
  }

  public async saveList(){
    Storage.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos),
    });
  }

  public async updateList(dogs_list){
    this.photos = dogs_list
    this.saveList()
  }

  public async loadList(){
    const photoList = await Storage.get({ key: this.PHOTO_STORAGE });
    this.photos = JSON.parse(photoList.value) || [];
    return this.photos
  }
}
