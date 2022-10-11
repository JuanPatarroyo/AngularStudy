import { Peopl } from './../people/people.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input() person: Peopl;
  @Input() index: number;

  constructor() {
    this.person = new Peopl("","");
    this.index = 0;
  }

  ngOnInit(): void {
  }

}
