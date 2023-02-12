import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponse } from './../models/authResponse';
import { AuthService } from './../services/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loading:boolean=false
  error:string=""
  isLoginMode=false

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  toogleMode(){
    this.isLoginMode=!this.isLoginMode
  }
  handleAuth(form:NgForm){
    if(form.invalid){
      return
    }
    this.loading=true
    
    const email=form.value.email
    const password=form.value.password

    let authResponse:Observable<AuthResponse>

    if (this.isLoginMode) {
      authResponse = this.authService.login(email,password)
    }else{
      authResponse = this.authService.register(email,password)
    }

    authResponse.subscribe(
      {
        next: (response) => {
          this.loading=false
          this.error=""
          this.router.navigate(["/"])
        },
        error:(err)=>{
          this.loading=false
          this.error=err
        }
      })
  }
}
