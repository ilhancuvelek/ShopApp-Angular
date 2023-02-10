import { AuthService } from './../services/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode=false
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  toogleMode(){
    this.isLoginMode=!this.isLoginMode
  }
  handleAuth(form:NgForm){
    if(form.invalid){
      return
    }

    const email=form.value.email
    const password=form.value.password

    if (this.isLoginMode) {
      console.log("login mode...")
    }else{
      this.authService.register(email,password).subscribe(result=>{console.log(result)})
    }
  }
}
