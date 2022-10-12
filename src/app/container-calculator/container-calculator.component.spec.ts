import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCalculatorComponent } from './container-calculator.component';

describe('ContainerCalculatorComponent', () => {
  let component: ContainerCalculatorComponent;
  let fixture: ComponentFixture<ContainerCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
