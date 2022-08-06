import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() url1;
  constructor(private router: Router) { }

  ngOnInit() {}

  logForm(form1){
    this.router.navigate([this.url1]);
  }

}
