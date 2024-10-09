import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaNuevaComponent } from './idea-nueva.component';

describe('IdeaNuevaComponent', () => {
  let component: IdeaNuevaComponent;
  let fixture: ComponentFixture<IdeaNuevaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdeaNuevaComponent]
    });
    fixture = TestBed.createComponent(IdeaNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
