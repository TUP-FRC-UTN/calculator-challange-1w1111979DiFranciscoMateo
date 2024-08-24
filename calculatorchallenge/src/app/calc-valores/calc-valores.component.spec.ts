import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcValoresComponent } from './calc-valores.component';

describe('CalcValoresComponent', () => {
  let component: CalcValoresComponent;
  let fixture: ComponentFixture<CalcValoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcValoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcValoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
