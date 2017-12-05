import { TestBed, inject } from '@angular/core/testing';

import { SalonesService } from './salones.service';

describe('SalonesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalonesService]
    });
  });

  it('should be created', inject([SalonesService], (service: SalonesService) => {
    expect(service).toBeTruthy();
  }));
});
