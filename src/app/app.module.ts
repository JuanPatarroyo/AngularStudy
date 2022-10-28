import { PeopleService } from './people.service';
import { LogginService } from './LogginService.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { PersonasComponent } from './personas/personas.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PeopleComponent } from './personas/people/people.component';
import { FormComponent } from './personas/form/form.component';
import { ContainerCalculatorComponent } from './container-calculator/container-calculator.component';
import { ContainerResultComponent } from './container-result/container-result.component';
import { ErrorComponent } from './error/error.component';
import { DataServices } from './data.services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    PersonasComponent,
    CalculadoraComponent,
    PeopleComponent,
    FormComponent,
    ContainerCalculatorComponent,
    ContainerResultComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LogginService, PeopleService, DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
