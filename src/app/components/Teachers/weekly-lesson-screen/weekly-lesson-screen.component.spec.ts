import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyLessonScreenComponent } from './weekly-lesson-screen.component';

describe('WeeklyLessonScreenComponent', () => {
  let component: WeeklyLessonScreenComponent;
  let fixture: ComponentFixture<WeeklyLessonScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyLessonScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyLessonScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
