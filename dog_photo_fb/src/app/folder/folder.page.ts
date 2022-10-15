import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpToolsService } from '../services/http-tools.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  public photos = [];
  constructor(private activatedRoute: ActivatedRoute, 
              public httpTS: HttpToolsService,
              public AFS: AngularFireStorage) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    
  }

  getNewPhoto(){

    const storage = getStorage();
    const storageRef = ref(storage, 'photo22.png');

    // 'file' comes from the Blob or File API
    
    this.httpTS.getDogFromApi().subscribe((data: any) => {
      this.photos.push(data.message)
      fetch(data.message).then( res=> res.blob()).then(blob => {
        uploadBytes(storageRef, blob).then((snapshot) => {
          console.log('Uploaded a blob or file!');
        })
       })});
    /*
    this.httpTS.getDogFromApi().subscribe((data: any) => {
      this.photos.push(data.message)
      fetch(data.message).then( res=> res.blob()).then(blob => {
        // console.log(blob)
        this.AFS.upload("ejm"+(this.photos.length + 1)+".png", blob)
       })
    })*/
  }

  downloadPhoto(){

    // Create a reference with an initial file path and name
    const storage = getStorage();
    const pathReference = ref(storage, 'ejm1.png');

    // Create a reference from a Google Cloud Storage URI
    // const gsReference = ref(storage, 'gs://ionic-class2.appspot.com/ejm1.png');

    const listRef = ref(storage, '');

    listAll(listRef)
    .then((res) => {
      res.prefixes.forEach((folderRef) => {
        // All the prefixes under listRef.
        // You may call listAll() recursively on them.
      });
      res.items.forEach((itemRef) => {
        // All the items under listRef.
        console.log(itemRef)
      });
    }).catch((error) => {
      // Uh-oh, an error occurred!
    });
    
    getDownloadURL(pathReference)
    .then((url) => {
      console.log(url)
    // `url` is the download URL for 'images/ejm1.png'

    // This can be downloaded directly:
    /*
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();
    */
    // Or inserted into an <img> element
    const img = document.getElementById('myimg');
    img.setAttribute('src', url);
  })
  .catch((error) => {
    // Handle any errors
  });
  }

}


// 