import { TestBed, inject } from '@angular/core/testing';

import { ApiSalonesService } from './api-salones.service';

describe('ApiSalonesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiSalonesService]
    });
  });

  it('should be created', inject([ApiSalonesService], (service: ApiSalonesService) => {
    expect(service).toBeTruthy();
  }));
});
