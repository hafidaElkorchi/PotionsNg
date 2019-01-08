import { TestBed } from '@angular/core/testing';

import { PotionsService } from './potions.service';

describe('PotionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PotionsService = TestBed.get(PotionsService);
    expect(service).toBeTruthy();
  });
});
