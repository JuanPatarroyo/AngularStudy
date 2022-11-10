import { LoginService } from './../login/login.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  // Method to register, create a new component
  register(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.loginService.register(email, password)
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  }

}
