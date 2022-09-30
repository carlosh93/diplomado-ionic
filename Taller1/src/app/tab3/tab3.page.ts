import { Component } from '@angular/core';
import { ShareDataService } from '../services/share-data.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

 
  constructor(private shareService: ShareDataService, private alertController: AlertController) {}

}
