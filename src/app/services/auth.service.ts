import { AuthResponse } from './../models/authResponse';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiKey=""

  constructor(private http:HttpClient) { }

  register(email:string,password:string){
    return this.http.post<AuthResponse>(""+this.apiKey
    ,{
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(
      catchError(this.handleError)
    )
  }
  login(email:string,password:string){
    return this.http.post<AuthResponse>(""+this.apiKey
    ,
    {email:email,
      password:password,
      returnSecureToken:true
    }).pipe(
      catchError(this.handleError)
    )
  }
  private handleError(err:HttpErrorResponse){
    let message="hata oluştu"

    if (err.error.error) {
      switch (err.error.error.message) {
        case "EMAIL_EXISTS":
          message="bu email adresi zaten kullanılıyor."
          break;
        case "TOO_MANY_ATTEMPTS_TRY_LATER":
          message="bir süre bekleyip tekrar deneyiniz."
          break;
        case "EMAIL_NOT_FOUND":
          message="email adresi bulunamadı."
          break;
        case "INVALID_PASSWORD":
          message="geçersiz parola."
          break;
      }
    }

    return throwError(message)
  }
}
