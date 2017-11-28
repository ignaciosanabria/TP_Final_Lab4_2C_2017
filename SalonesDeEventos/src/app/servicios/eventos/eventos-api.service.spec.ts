import { TestBed, inject } from '@angular/core/testing';

import { EventosApiService } from './eventos-api.service';

describe('EventosApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventosApiService]
    });
  });

  it('should be created', inject([EventosApiService], (service: EventosApiService) => {
    expect(service).toBeTruthy();
  }));
});
