import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotionResumeComponent } from './potion-resume.component';

describe('PotionResumeComponent', () => {
  let component: PotionResumeComponent;
  let fixture: ComponentFixture<PotionResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotionResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotionResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
