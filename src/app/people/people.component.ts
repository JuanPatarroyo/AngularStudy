import { Peopl } from './people.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  tittle = "People list";
  people: Peopl[] = [new Peopl("Juanes","Patarroyo"), new Peopl("Tatiana","López")];
  name: string;
  surname: string;

  constructor() {
    this.name = "";
    this.surname = "";
  }

  ngOnInit(): void {
  }

  onReceivingPerson(person: Peopl){
    this.people.push(person);
  }
}
