import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.loginService.login(email, password)
      .then(response => {
        console.log(response);
        this.router.navigate(['people']);
      })
      .catch(error => console.log(error));
  }

  loginWithGoogle() {
    this.loginService.loginWithGoogle()
      .then(response => {
        console.log(response);
        this.router.navigate(['people']);
      })
      .catch(error => console.log(error));
  }
}
