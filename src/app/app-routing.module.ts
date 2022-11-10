import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { PersonasComponent } from './personas/personas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './personas/form/form.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login'},
  { path: 'login', component: LoginComponent},
  {
    path: 'people', component: PersonasComponent, children: [
      { path: 'add', component: FormComponent },
      { path: ':id', component: FormComponent }
    ], ...canActivate(()=> redirectUnauthorizedTo(['register']))
  },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
