import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-result',
  templateUrl: './container-result.component.html',
  styleUrls: ['./container-result.component.css']
})
export class ContainerResultComponent implements OnInit {

  @Input() result: number;
  constructor() {
    this.result = 0;
  }

  ngOnInit(): void {
  }

}
