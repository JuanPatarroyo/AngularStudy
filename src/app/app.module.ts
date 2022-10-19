import { PeopleService } from './people.service';
import { LogginService } from './LogginService.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { PersonasComponent } from './personas/personas.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PeopleComponent } from './people/people.component';
import { FormComponent } from './form/form.component';
import { ContainerCalculatorComponent } from './container-calculator/container-calculator.component';
import { ContainerResultComponent } from './container-result/container-result.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    PersonasComponent,
    CalculadoraComponent,
    PeopleComponent,
    FormComponent,
    ContainerCalculatorComponent,
    ContainerResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LogginService, PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
