import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../models/user";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  isAuth$ = new BehaviorSubject<boolean>(false)
  userList : User[] = [];
  constructor(
    private cookieService : CookieService
  ){
    if(this.cookieService.get("SESSION")){
      this.isAuth$.next(true)
    } else {
      this.isAuth$.next(false)
    }
  }

  login(user : User){
    fetch("http://localhost:3000/user", {
      method:'GET'
    }).then(response => response.json())
      .then(result => {
        this.userList = [];
        for(let userDb of result){
          this.userList.push(userDb)
        }
        for(let account of this.userList){
          if(account.identifier == user.identifier && account.password == user.password){
            this.isAuth$.next(true);
            this.cookieService.set("SESSION", "connected")
            return true;
          }
        }
        return false;
      })
  }

  logout(){
    this.cookieService.delete("SESSION")
  }
}
