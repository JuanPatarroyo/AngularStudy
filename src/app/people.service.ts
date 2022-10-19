import { LogginService } from './LogginService.service';
import { Peopl } from "./people/people.model";

export class PeopleService {
  people: Peopl[] = [new Peopl("Juan", "Patarroyo"), new Peopl("Tatiana", "López")];

  onReceivingPerson(person: Peopl) {
    this.people.push(person);
  }
}
