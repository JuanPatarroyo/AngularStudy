import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-container-calculator',
  templateUrl: './container-calculator.component.html',
  styleUrls: ['./container-calculator.component.css']
})
export class ContainerCalculatorComponent implements OnInit {

  @Output() resultEmited = new EventEmitter<number>();
  intA: number = 0;
  intB: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onSum(): void {
    let result = this.intA + this.intB
    this.resultEmited.emit(result);
  }
}
