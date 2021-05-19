import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user:string="";
  password:string="";
  constructor(public loginService:LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.loginService.createUser({user:this.user,password:this.password})
    console.log(this.user,this.password);
    this.user = "";
    this.password = "";
  }
}
