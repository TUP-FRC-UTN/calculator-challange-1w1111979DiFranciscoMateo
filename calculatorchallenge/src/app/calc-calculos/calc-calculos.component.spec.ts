import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcCalculosComponent } from './calc-calculos.component';

describe('CalcCalculosComponent', () => {
  let component: CalcCalculosComponent;
  let fixture: ComponentFixture<CalcCalculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcCalculosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcCalculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
