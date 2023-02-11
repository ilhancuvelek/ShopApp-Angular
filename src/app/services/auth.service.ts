import { AuthResponse } from './../models/authResponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiKey=""

  constructor(private http:HttpClient) { }

  register(email:string,password:string){
    return this.http.post<AuthResponse>(""+this.apiKey,{email:email,password:password,returnSecureToken:true})
  }
  login(email:string,password:string){
    return this.http.post<AuthResponse>(""+this.apiKey,{email:email,password:password,returnSecureToken:true})
  }
}
