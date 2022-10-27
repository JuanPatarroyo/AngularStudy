import { ErrorComponent } from './error/error.component';
import { PersonasComponent } from './personas/personas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './personas/form/form.component';

const routes: Routes = [
  { path: '', component: PersonasComponent },
  {
    path: 'people', component: PersonasComponent, children: [
      { path: 'add', component: FormComponent },
      { path: ':id', component: FormComponent }
    ]
  },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
