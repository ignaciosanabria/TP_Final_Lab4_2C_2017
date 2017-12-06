import { TestBed, inject } from '@angular/core/testing';

import { ApiMesasService } from './api-mesas.service';

describe('ApiMesasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiMesasService]
    });
  });

  it('should be created', inject([ApiMesasService], (service: ApiMesasService) => {
    expect(service).toBeTruthy();
  }));
});
