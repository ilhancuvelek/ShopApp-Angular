import { map, tap } from 'rxjs/operators';
import { AuthService } from './../services/auth.service';
import { ActivatedRouteSnapshot, CanActivate, Router,RouterStateSnapshot,  UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable({providedIn:"root"})
export class AuthGuard implements CanActivate{


    //Sadece giriş yapması yeterli

    constructor(private authService:AuthService,private router:Router){}

    canActivate(
        route: ActivatedRouteSnapshot,
         state: RouterStateSnapshot): boolean | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
            return this.authService.user.pipe(
                map(user=>{
                    return !!user
                 }),
                 tap(isAuth=>{
                     if (!isAuth) {
                         this.router.navigate(["/auth"])
                     }
                 })
            )
    }

}