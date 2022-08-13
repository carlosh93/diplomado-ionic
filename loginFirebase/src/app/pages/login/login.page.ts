import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private auth: AuthService, private router:Router) { }

  ngOnInit() {
  }

  async logForm(form1){
    const correo = form1.email.value;
    const password = form1.pass.value;
    const user = await this.auth.login({email: correo, password: password});
    if(user){
      this.router.navigateByUrl('tabs/tab/1',{replaceUrl: true});
    }else{
      console.log("Error de autenticación");
    }
  }

}
