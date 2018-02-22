import { TestBed, inject } from '@angular/core/testing';

import { ApiEncuestasService } from './api-encuestas.service';

describe('ApiEncuestasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiEncuestasService]
    });
  });

  it('should be created', inject([ApiEncuestasService], (service: ApiEncuestasService) => {
    expect(service).toBeTruthy();
  }));
});
