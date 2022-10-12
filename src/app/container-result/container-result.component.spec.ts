import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerResultComponent } from './container-result.component';

describe('ContainerResultComponent', () => {
  let component: ContainerResultComponent;
  let fixture: ComponentFixture<ContainerResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
