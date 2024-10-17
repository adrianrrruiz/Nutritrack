import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaRevisionComponent } from './idea-revision.component';

describe('IdeaRevisionComponent', () => {
  let component: IdeaRevisionComponent;
  let fixture: ComponentFixture<IdeaRevisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdeaRevisionComponent]
    });
    fixture = TestBed.createComponent(IdeaRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
