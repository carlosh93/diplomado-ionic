import { Component } from '@angular/core';
import { ShareDataService } from '../services/share-data.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private shareData: ShareDataService) {
    console.log(this.shareData.dato)
  }

}
