import { Injectable, EventEmitter } from '@angular/core';
import { LogginService } from './LogginService.service';
import { Peopl } from "./personas/people/people.model";

@Injectable()
export class PeopleService {
  people: Peopl[] = [new Peopl("Juan", "Patarroyo"), new Peopl("Tatiana", "López")];
  greetings = new EventEmitter<number>();
  constructor(private logginService: LogginService) {

  }

  onReceivingPerson(person: Peopl) {
    this.logginService.sendLog('Person to add is: ' + person);
    this.people.push(person);
  }

  findPerson(index: number) {
    let person: Peopl = this.people[index];
    return person;
  }

  modifyPerson(index: number, person: Peopl) {
    let personToModify = this.people[index];
    personToModify.name = person.name;
    personToModify.surname = person.surname;
  }

  deletePerson(index: number) {
    this.people.splice(index, 1);
  }
}
