import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";

@Injectable()
export class LoginService {

  token: string;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.token = "";
  }

  login(email: string, password: string) {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        result.user?.getIdToken().then(
          token => {
            this.token = token;
          }
        );
      })
      .catch((error) => {
        window.alert(error.message);
      });
    this.router.navigate(['/']);
  }

  getIdToken(){
    return this.token;
  }
}
