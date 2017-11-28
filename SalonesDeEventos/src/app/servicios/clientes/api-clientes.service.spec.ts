import { TestBed, inject } from '@angular/core/testing';

import { ApiClientesService } from './api-clientes.service';

describe('ApiClientesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiClientesService]
    });
  });

  it('should be created', inject([ApiClientesService], (service: ApiClientesService) => {
    expect(service).toBeTruthy();
  }));
});
