import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async logForm(form1){
    const correo = form1.email.value;
    const password = form1.pass.value;
    const user = await this.auth.register({email: correo, password: password});
    if(user){
      const res = this.auth.registerData({name: form1.name.value, lastname: form1.lastname.value, info: form1.info.value});
      console.log(res);
      if(res){
        this.router.navigateByUrl('',{replaceUrl: true});
      }else{
        console.log("guarde el usuario pero la info no");
      }
      
    }else{
      console.log("Error de autenticación");
    }
  }

}
