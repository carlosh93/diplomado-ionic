import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  user: any;
  constructor(private auth: AuthService, private router: Router) {
    this.user = {name:'cargando'};
    const val = this.auth.getData();
    val.then((v)=>{
      v.subscribe((vl)=>{
        console.log(vl);
        this.user = vl; 
      });
    }

    );
  }

  logout(){
    this.auth.logout().then(
      ()=>{
        this.router.navigateByUrl('',{replaceUrl: true});
      }
    );
  }

}
