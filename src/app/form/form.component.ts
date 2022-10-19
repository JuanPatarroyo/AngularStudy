import { PeopleService } from './../people.service';
import { LogginService } from './../LogginService.service';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Peopl } from '../people/people.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef | undefined;
  @ViewChild('surnameInput') surnameInput: ElementRef | undefined;
  // name: string;
  // surname: string;

  constructor(private logginService: LogginService, private peopleService: PeopleService) {
    // this.name = "";
    // this.surname = "";
   }

  ngOnInit(): void {
  }

  onAddPerson(){
    this.logginService.sendLog('Test ');
    // this.personCreated.emit(new Peopl(this.nameInput?.nativeElement.value, this.surnameInput?.nativeElement.value));
    this.peopleService.onReceivingPerson(new Peopl(this.nameInput?.nativeElement.value, this.surnameInput?.nativeElement.value))
  }

}
