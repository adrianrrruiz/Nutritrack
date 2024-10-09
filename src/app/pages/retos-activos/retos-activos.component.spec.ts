import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetosActivosComponent } from './retos-activos.component';

describe('RetosActivosComponent', () => {
  let component: RetosActivosComponent;
  let fixture: ComponentFixture<RetosActivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetosActivosComponent]
    });
    fixture = TestBed.createComponent(RetosActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
