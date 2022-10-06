import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  name: string = "Juan";
  apellido: string = "Patarroyo";
  edad: number = 24;

  constructor() { }

  ngOnInit(): void {
  }

}
