import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public photos = [];
  constructor(private fbStorage: AngularFireStorage) {}

  downloadPhoto(){

    // Create a reference with an initial file path and name
    const storage = getStorage();

    const listRef = ref(storage, '');

    listAll(listRef)
    .then((res) => {
      res.prefixes.forEach((folderRef) => {
        // All the prefixes under listRef.
        // You may call listAll() recursively on them.
      });
      res.items.forEach((itemRef) => {
        // All the items under listRef.
        const pathReference = ref(storage, itemRef.fullPath);
        getDownloadURL(pathReference)
        .then((url) => {
          console.log(url)
          // Or inserted into an <img> element
          this.photos.push(url);
        }).catch((error) => { // Handle any errors
        });
      });
    }).catch((error) => {
      // an error occurred
    });
  }
}
