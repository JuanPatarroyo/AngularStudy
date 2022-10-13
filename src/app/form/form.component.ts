import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Peopl } from '../people/people.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() personCreated = new EventEmitter<Peopl>();

  @ViewChild('nameInput') nameInput: ElementRef | undefined;
  @ViewChild('surnameInput') surnameInput: ElementRef | undefined;
  // name: string;
  // surname: string;

  constructor() {
    // this.name = "";
    // this.surname = "";
   }

  ngOnInit(): void {
  }

  onAddPerson(){
    this.personCreated.emit(new Peopl(this.nameInput?.nativeElement.value, this.surnameInput?.nativeElement.value));
  }

}
