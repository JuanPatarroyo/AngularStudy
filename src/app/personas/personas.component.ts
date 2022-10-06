import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  addPerson: boolean = false;

  constructor() {
    setTimeout(
      () => {
        this.addPerson = true;
      },3000)
  }

  ngOnInit(): void {
  }
}
