import { AuthResponse } from './../models/authResponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiKey="AIzaSyCMjiiz6ZshGFvKJJ8M-0oeoAnFhm7UARk"

  constructor(private http:HttpClient) { }

  register(email:string,password:string){
    return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="+this.apiKey,{email:email,password:password,returnSecureToken:true})
  }
  login(email:string,password:string){
    return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+this.apiKey,{email:email,password:password,returnSecureToken:true})
  }
}
