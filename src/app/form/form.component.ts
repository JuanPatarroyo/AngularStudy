import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Peopl } from '../people/people.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() personCreated = new EventEmitter<Peopl>();
  name: string;
  surname: string;

  constructor() {
    this.name = "";
    this.surname = "";
   }

  ngOnInit(): void {
  }

  onAddPerson(){
    this.personCreated.emit(new Peopl(this.name, this.surname));
  }

}
