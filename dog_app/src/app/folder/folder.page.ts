import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpToolsService } from '../services/http-tools.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  photos = []
  constructor(private activatedRoute: ActivatedRoute, private httpService: HttpToolsService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadData();
  }

  async loadData(){
    this.photos = await this.httpService.loadList()
  }

  obtenerPerro(){
    let res = this.httpService.getDog()
    res.subscribe( (data) => {
      console.log(data)
      this.photos.push(data['message'])
      this.httpService.updateList(this.photos)
    })
  }

}
