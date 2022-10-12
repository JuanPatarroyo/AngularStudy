import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  result: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  onReceivingResult(resultReceiving: number): void {
    this.result = resultReceiving;
  }

}
