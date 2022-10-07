import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  intA: number = 0;
  intB: number = 0;
  result: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSum(): void {
    this.result = this.intA + this.intB;
  }

}
