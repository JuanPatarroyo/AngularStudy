import { Injectable, EventEmitter } from '@angular/core';
import { LogginService } from './LogginService.service';
import { Peopl } from "./people/people.model";

@Injectable()
export class PeopleService {
  people: Peopl[] = [new Peopl("Juan", "Patarroyo"), new Peopl("Tatiana", "López")];
  greetings = new EventEmitter<number>();
  constructor(private logginService: LogginService){

  }

  onReceivingPerson(person: Peopl) {
    this.logginService.sendLog('Person to add is: '+person);
    this.people.push(person);
  }
}
