import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotionDetailsComponent } from './potion-details.component';

describe('PotionDetailsComponent', () => {
  let component: PotionDetailsComponent;
  let fixture: ComponentFixture<PotionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
