import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  addPerson: boolean = false;
  addPersonStatus: string = "No se ha agregado ninguna persona";
  titlePerson: string = "";
  personCreated: boolean = false;

  constructor() {
    setTimeout(
      () => {
        this.addPerson = true;
      }, 3000)
  }

  ngOnInit(): void {
  }

  onCreatePerson() {
    this.personCreated = true;
    this.addPersonStatus = "Persona agregada";
  }

  onUpdatePerson(event: Event) {
    this.titlePerson = (<HTMLInputElement>event.target).value;
  }
}
