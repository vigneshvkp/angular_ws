import { TestBed, inject } from '@angular/core/testing';

import { PjtService } from './pjt.service';

describe('PjtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PjtService]
    });
  });

  it('should be created', inject([PjtService], (service: PjtService) => {
    expect(service).toBeTruthy();
  }));
});
