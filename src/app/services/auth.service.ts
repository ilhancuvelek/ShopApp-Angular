import { catchError, tap } from 'rxjs/operators';
import { User } from './../models/user';
import { AuthResponse } from './../models/authResponse';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user=new Subject<User>()

  apiKey=""

  constructor(private http:HttpClient) { }

  register(email:string,password:string){
    return this.http.post<AuthResponse>(""+this.apiKey,
    {
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(
      tap(response=>{
        const expirationDate=new Date(new Date().getTime()+(+response.expiresIn*1000))
        const user=new  User(
          response.email,
          response.localId,
          response.idToken,
          expirationDate
        )
        this.user.next(user)
      }),
      catchError(this.handleError)
    )
  }
  login(email:string,password:string){
    return this.http.post<AuthResponse>(""+this.apiKey,
    {
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(
      tap(response=>{
        const expirationDate=new Date(new Date().getTime()+(+response.expiresIn*1000))
        const user=new  User(
          response.email,
          response.localId,
          response.idToken,
          expirationDate
        )

        this.user.next(user)
      }),
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
