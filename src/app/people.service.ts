import { DataServices } from './data.services';
import { Injectable, EventEmitter } from '@angular/core';
import { LogginService } from './LogginService.service';
import { Peopl } from "./personas/people/people.model";

@Injectable()
export class PeopleService {
  people: Peopl[] = [];
  greetings = new EventEmitter<number>();
  constructor(private logginService: LogginService, private dataService: DataServices) {

  }

  setPeople(people: Peopl[]) {
    this.people = people;
  }

  getPeople() {
    return this.dataService.getPeople();
  }

  onReceivingPerson(person: Peopl) {
    this.logginService.sendLog('Person to add is: ' + person);
    if (this.people == null) {
      this.people = [];
    }
    this.people.push(person);
    this.dataService.savePeople(this.people);
  }

  findPerson(index: number) {
    let person: Peopl = this.people[index];
    return person;
  }

  modifyPerson(index: number, person: Peopl) {
    let personToModify = this.people[index];
    personToModify.name = person.name;
    personToModify.surname = person.surname;
    this.dataService.updatePerson(index, person);
  }

  deletePerson(index: number) {
    this.people.splice(index, 1);
    this.dataService.deletePerson(index);
    // regenerate the people's list
    this.updatePeople();
  }

  updatePeople() {
    if (this.people != null) {
      this.dataService.savePeople(this.people);
    }
  }
}
