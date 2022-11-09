import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";

@Injectable()
export class LoginService {

  token: string;

  constructor(private router: Router) {
    this.token = "";
  }

  login(email: string, password: string) {
    debugger;
    // this.afAuth
    //   .signInWithEmailAndPassword(email, password)
    //   .then((result) => {
    //     debugger;
    //     result.user?.getIdToken().then(
    //       token => {
    //         debugger;
    //         this.token = token;
    //         this.router.navigate(['/']);
    //       }
    //     );
    //   })
    //   .catch((error) => {
    //     window.alert(error.message);
    //   });
  }

  getIdToken(){
    return this.token;
  }
}
