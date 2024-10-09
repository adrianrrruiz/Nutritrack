import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeasActivasComponent } from './ideas-activas.component';

describe('IdeasActivasComponent', () => {
  let component: IdeasActivasComponent;
  let fixture: ComponentFixture<IdeasActivasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdeasActivasComponent]
    });
    fixture = TestBed.createComponent(IdeasActivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
