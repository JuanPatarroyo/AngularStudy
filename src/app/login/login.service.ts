import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';

@Injectable()
export class LoginService {

  token: string;

  constructor(private auth: Auth, private router: Router) {
    this.token = "";
  }

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout(){
    return signOut(this.auth);
  }

  getIdToken() {
    return this.token;
  }
}
