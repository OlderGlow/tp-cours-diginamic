import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  loginForm: any;

  constructor(
    private logsService: AuthService,
    private formBuilder: FormBuilder,
    private router : Router,
  ) {
    this.loginForm = this.formBuilder.group({
      identifier: ['', Validators.required],
        password: ['', Validators.required]
  })
  }

  login() {
    if (this.loginForm.dirty && this.loginForm.valid) {
      // @ts-ignore
      if(this.logsService.login(this.loginForm.value) == true){
        this.router.navigate(['/home'])
      }
      this.router.navigate(['/login'])
    }
  }

}
