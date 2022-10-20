import { PeopleService } from './../people.service';
import { LogginService } from './../LogginService.service';
import { Peopl } from './people.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  tittle = "People list";
  people: Peopl[] = [];
  name: string;
  surname: string;

  constructor(private logginService: LogginService, private peopleService: PeopleService) {
    this.name = "";
    this.surname = "";
  }

  ngOnInit(): void {
    this.people = this.peopleService.people;
  }

  onReceivingPerson(person: Peopl){
    //this.logginService.sendLog('person added is: '+person.name);
    // this.people.push(person);
    this.peopleService.onReceivingPerson(person);
  }
}
