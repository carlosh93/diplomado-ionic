import { Component } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { ShareDataService } from '../services/share-data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  data: any;
  search: string = "";
  filteredData: any;
  constructor(private shareService: ShareDataService) {}

  updateFilterData() {
    if (this.search.length > 0) {
      this.filteredData = this.data.filter((json) => json['apellido'].startsWith(this.search));
    }
  }
  
  updateData() {
    this.data = this.shareService.readData();
    if (!this.data){
      console.log("No existe ningun registro");
      this.data = []
    }
  }
}
