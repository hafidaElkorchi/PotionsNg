import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotionNewComponent } from './potion-new.component';

describe('PotionNewComponent', () => {
  let component: PotionNewComponent;
  let fixture: ComponentFixture<PotionNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotionNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
