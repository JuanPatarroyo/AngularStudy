import { PeopleService } from '../../people.service';
import { Peopl } from './people.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private peopleService: PeopleService, private router: Router) {
    this.name = "";
    this.surname = "";
  }

  ngOnInit(): void {
    this.people = this.peopleService.people;
  }

  onReceivingPerson(person: Peopl) {
    this.peopleService.onReceivingPerson(person);
  }

  add() {
    this.router.navigate(['people/add']);
  }
}
