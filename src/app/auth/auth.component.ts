import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode=false
  constructor() { }

  ngOnInit(): void {
  }
  toogleMode(){
    this.isLoginMode=!this.isLoginMode
  }
  handleAuth(form:NgForm){
    if(form.invalid){
      return
    }
  }
}
