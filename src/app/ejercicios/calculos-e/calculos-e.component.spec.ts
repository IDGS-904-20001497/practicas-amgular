import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculosEComponent } from './calculos-e.component';

describe('CalculosEComponent', () => {
  let component: CalculosEComponent;
  let fixture: ComponentFixture<CalculosEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculosEComponent]
    });
    fixture = TestBed.createComponent(CalculosEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
