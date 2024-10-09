import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetoNuevoComponent } from './reto-nuevo.component';

describe('RetoNuevoComponent', () => {
  let component: RetoNuevoComponent;
  let fixture: ComponentFixture<RetoNuevoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetoNuevoComponent]
    });
    fixture = TestBed.createComponent(RetoNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
