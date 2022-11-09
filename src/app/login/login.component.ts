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

  constructor(private auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        debugger;
        result.user?.getIdToken().then(
          token => {
            debugger;
            // this.token = token;
            // this.router.navigate(['/']);
          }
        );
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

}
