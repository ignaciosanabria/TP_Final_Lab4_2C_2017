import { TestBed, inject } from '@angular/core/testing';

import { ApiEmpleadosService } from './api-empleados.service';

describe('ApiEmpleadosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiEmpleadosService]
    });
  });

  it('should be created', inject([ApiEmpleadosService], (service: ApiEmpleadosService) => {
    expect(service).toBeTruthy();
  }));
});
