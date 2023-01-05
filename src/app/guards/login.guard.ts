import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  isLogged : boolean = false

  constructor(
    private router : Router,
    private authService : AuthService
  ) {
    this.authService.isAuth$.subscribe(value => {
      this.isLogged = value;
      this.canActivate()
    })
  }
  canActivate() : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.isLogged){
      return true;
    }
    this.router.navigate(['/home']);
    return false
  }

  ngOnDestroy(){
    this.authService.isAuth$.unsubscribe();
  }

}
