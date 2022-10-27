import { PeopleService } from '../../people.service';
import { LogginService } from '../../LogginService.service';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Peopl } from '../people/people.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  nameInput: string = "";
  surnameInput: string = "";
  index: number = 0;
  editMode: number = 0;

  constructor(private router: Router, private peopleService: PeopleService, private route: ActivatedRoute) {
    this.peopleService.greetings.subscribe((index: number) => alert("The index is: " + index));
  }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.editMode = +this.route.snapshot.queryParams['editMode'];
    if (this.editMode != null && this.editMode === 1) {
      let person: Peopl = this.peopleService.findPerson(this.index);
      this.nameInput = person.name;
      this.surnameInput = person.surname;
    }
  }

  onSubmit() {
    let person = new Peopl(this.nameInput, this.surnameInput);
    if (this.editMode != null && this.editMode === 1) {
      this.peopleService.modifyPerson(this.index, person)
    } else {
      this.peopleService.onReceivingPerson(new Peopl(this.nameInput, this.surnameInput));
    }

    this.router.navigate(['people']);
  }

  deletePerson() {
    if (this.editMode != null && this.editMode === 1) {
      this.peopleService.deletePerson(this.index);
    }
    this.router.navigate(['people']);
  }

}
